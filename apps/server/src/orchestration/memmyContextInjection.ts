// FILE: memmyContextInjection.ts
// Purpose: Bridges t3 provider turns to the local Memmy memory service so ACP /
//          app-server sessions get the same recall+capture that IDE/TUI hooks provide.
// Layer: Server orchestration helper
// Exports: memmy config readers, turn-start context builder, turn-complete capture

import { createHash } from "node:crypto";

const MEMMY_CONTEXT_OPEN = '<memmy_memory_context source="turn_start">';
const MEMMY_CONTEXT_CLOSE = "</memmy_memory_context>";
const MEMMY_CONTEXT_HEADER =
  "The following is historical memory context. Use it as supporting context, not as a new user request.";

const DEFAULT_BASE_URL = "http://127.0.0.1:18960";
// Memmy turn.start/search routinely needs 5–8s for embedding recall on this machine.
const DEFAULT_TIMEOUT_MS = 20_000;
const DEFAULT_MAX_CHARS = 12_000;
const FAILURE_COOLDOWN_MS = 15_000;
// How long the turn-start path will wait for recall before sending the user's
// message to the provider unprompted. 0 = never wait: the message goes out
// immediately and recall runs purely in the background (the turn still
// registers so turn.complete can capture it).
const DEFAULT_INJECT_TIMEOUT_MS = 300;

export type MemmyTurnPending = {
  readonly threadId: string;
  readonly sessionId: string;
  readonly turnId: string;
  readonly episodeId?: string;
  readonly query: string;
  readonly source: string;
  readonly sourceMemoryIds?: ReadonlyArray<string>;
  readonly createdAt: string;
};

export type MemmyTurnStartResult = {
  readonly contextBlock: string;
  readonly pending: MemmyTurnPending;
};

type MemmyFetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

type MemmyInjectionDeps = {
  readonly fetchImpl?: MemmyFetch;
  readonly nowMs?: () => number;
};

let failureCoolUntilMs = 0;
const pendingByThreadId = new Map<string, MemmyTurnPending>();

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value === undefined ? undefined : value.trim();
}

function parseBooleanEnv(value: string | undefined, defaultValue: boolean): boolean {
  if (value === undefined || value.length === 0) return defaultValue;
  const normalized = value.toLowerCase();
  if (["1", "true", "yes", "y", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "n", "off"].includes(normalized)) return false;
  return defaultValue;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (value === undefined || value.length === 0) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

/** Alfie fork default: on. Set T3_MEMMY_MEMORY_ENABLED=0 to disable. */
export function isMemmyMemoryEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return parseBooleanEnv(env.T3_MEMMY_MEMORY_ENABLED, true);
}

export function resolveMemmyBaseUrl(env: NodeJS.ProcessEnv = process.env): string {
  const configured = env.T3_MEMMY_BASE_URL?.trim();
  return configured && configured.length > 0 ? configured.replace(/\/$/, "") : DEFAULT_BASE_URL;
}

export function resolveMemmyTimeoutMs(env: NodeJS.ProcessEnv = process.env): number {
  return parsePositiveInt(env.T3_MEMMY_TIMEOUT_MS, DEFAULT_TIMEOUT_MS);
}

export function resolveMemmyMaxChars(env: NodeJS.ProcessEnv = process.env): number {
  return parsePositiveInt(env.T3_MEMMY_MAX_CHARS, DEFAULT_MAX_CHARS);
}

export function resolveMemmyInjectTimeoutMs(env: NodeJS.ProcessEnv = process.env): number {
  return parsePositiveInt(env.T3_MEMMY_INJECT_TIMEOUT_MS, DEFAULT_INJECT_TIMEOUT_MS);
}

export function clearMemmyInjectionStateForTests(): void {
  failureCoolUntilMs = 0;
  pendingByThreadId.clear();
}

export function getMemmyPendingForThread(threadId: string): MemmyTurnPending | undefined {
  return pendingByThreadId.get(threadId);
}

export function clearMemmyPendingForThread(threadId: string): void {
  pendingByThreadId.delete(threadId);
}

function hashText(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 24);
}

function sanitizeCaptureText(value: string): string {
  return value.replace(/\u0000/g, "").trim();
}

function alreadyHasMemmyContext(text: string): boolean {
  // Require a real closed block. Probe prompts that merely mention the tag name
  // must not disable injection.
  return /<memmy_memory_context\b[^>]*>[\s\S]*?<\/memmy_memory_context>/i.test(text);
}

function buildContextBlock(markdown: string, maxChars: number): string {
  const trimmed = markdown.trim();
  if (!trimmed) return "";
  const body = [MEMMY_CONTEXT_OPEN, MEMMY_CONTEXT_HEADER, "", trimmed, MEMMY_CONTEXT_CLOSE].join(
    "\n",
  );
  if (body.length <= maxChars) return body;
  const overhead = body.length - trimmed.length;
  const keep = Math.max(0, maxChars - overhead - 32);
  if (keep < 200) return "";
  const truncated = `${trimmed.slice(0, keep)}\n[memmy context truncated]`;
  return [MEMMY_CONTEXT_OPEN, MEMMY_CONTEXT_HEADER, "", truncated, MEMMY_CONTEXT_CLOSE].join("\n");
}

async function postJson<T>(
  input: {
    readonly baseUrl: string;
    readonly path: string;
    readonly body: unknown;
    readonly timeoutMs: number;
  },
  deps: MemmyInjectionDeps,
): Promise<T> {
  const fetchImpl = deps.fetchImpl ?? fetch;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), input.timeoutMs);
  try {
    const response = await fetchImpl(`${input.baseUrl}${input.path}`, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(input.body),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Memmy HTTP ${response.status}`);
    }
    return (await response.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

function markFailure(nowMs: number): void {
  failureCoolUntilMs = nowMs + FAILURE_COOLDOWN_MS;
}

function inFailureCooldown(nowMs: number): boolean {
  return nowMs < failureCoolUntilMs;
}

export function prependMemmyContextToInput(input: {
  readonly messageText: string;
  readonly contextBlock: string;
  readonly maxInputChars: number;
}): string {
  const messageText = input.messageText;
  const contextBlock = input.contextBlock.trim();
  if (!contextBlock || !messageText) return messageText;
  if (alreadyHasMemmyContext(messageText)) return messageText;
  const combined = `${contextBlock}\n\n${messageText}`;
  if (combined.length <= input.maxInputChars) return combined;
  // Prefer keeping the user message intact over forcing memory in.
  return messageText;
}

/**
 * Resolve assistant text for Memmy turn.complete.
 * Live-delivery providers never fill the delta buffer; item.completed also drains
 * it and forgets message ids before turn.completed. Prefer any peeked buffer,
 * otherwise use finalized assistant messages on the thread.
 */
export function resolveMemmyCaptureAnswer(input: {
  readonly bufferedTexts: ReadonlyArray<string>;
  readonly threadAssistantTexts: ReadonlyArray<string>;
}): string {
  const fromBuffer = input.bufferedTexts
    .map((text) => text.trim())
    .filter((text) => text.length > 0)
    .join("\n\n");
  if (fromBuffer.length > 0) return fromBuffer;
  return input.threadAssistantTexts
    .map((text) => text.trim())
    .filter((text) => text.length > 0)
    .join("\n\n");
}

/**
 * Opens/resumes a Memmy session and starts a turn. Returns an injectable context
 * block plus pending state for later complete. Failures return null (never throw).
 */
export async function startMemmyTurn(
  input: {
    readonly threadId: string;
    readonly messageId: string;
    readonly query: string;
    readonly workspacePath?: string;
    readonly provider?: string;
    readonly maxContextChars: number;
  },
  deps: MemmyInjectionDeps = {},
): Promise<MemmyTurnStartResult | null> {
  if (!isMemmyMemoryEnabled()) return null;
  const nowMs = (deps.nowMs ?? Date.now)();
  if (inFailureCooldown(nowMs)) return null;

  const query = sanitizeCaptureText(input.query);
  if (!query || alreadyHasMemmyContext(query)) return null;

  const baseUrl = resolveMemmyBaseUrl();
  const timeoutMs = resolveMemmyTimeoutMs();
  const source = "t3";
  const sessionId = `t3-memory-${input.threadId}`;
  const turnId = `t3-turn-${hashText([input.threadId, input.messageId, query].join("\0"))}`;

  try {
    const opened = await postJson<{ sessionId?: string }>(
      {
        baseUrl,
        path: "/api/v1/sessions/open",
        timeoutMs,
        body: {
          sessionId,
          source,
          workspacePath: input.workspacePath || undefined,
          meta: {
            t3ThreadId: input.threadId,
            provider: input.provider,
          },
        },
      },
      deps,
    );

    const resolvedSessionId =
      typeof opened.sessionId === "string" && opened.sessionId.length > 0
        ? opened.sessionId
        : sessionId;

    const started = await postJson<{
      turnId?: string;
      episodeId?: string;
      sourceMemoryIds?: unknown;
      injectedContext?: unknown;
    }>(
      {
        baseUrl,
        path: "/api/v1/turns/start",
        timeoutMs,
        body: {
          adapterId: "memmy-t3-bridge",
          requestId: `t3-start:${turnId}`,
          sessionId: resolvedSessionId,
          turnId,
          query,
        },
      },
      deps,
    );

    const injected = started.injectedContext;
    const markdown =
      typeof injected === "string"
        ? injected
        : injected &&
            typeof injected === "object" &&
            typeof (injected as { markdown?: unknown }).markdown === "string"
          ? (injected as { markdown: string }).markdown
          : "";

    const contextBlock = buildContextBlock(markdown, input.maxContextChars);
    const pending: MemmyTurnPending = {
      threadId: input.threadId,
      sessionId: resolvedSessionId,
      turnId:
        typeof started.turnId === "string" && started.turnId.length > 0 ? started.turnId : turnId,
      ...(typeof started.episodeId === "string" && started.episodeId.length > 0
        ? { episodeId: started.episodeId }
        : {}),
      query,
      source,
      ...(Array.isArray(started.sourceMemoryIds)
        ? { sourceMemoryIds: started.sourceMemoryIds.map(String) }
        : {}),
      createdAt: new Date(nowMs).toISOString(),
    };
    pendingByThreadId.set(input.threadId, pending);
    if (!contextBlock) {
      // Still keep pending so complete can capture the turn.
      return { contextBlock: "", pending };
    }
    return { contextBlock, pending };
  } catch (error) {
    // Timeouts are capacity issues, not outages — don't enter the 15s cooldown
    // or the next t3 turns will skip Memmy entirely after one slow recall.
    const message = error instanceof Error ? error.message : String(error);
    const name = error instanceof Error ? error.name : "";
    const isTimeout =
      name === "AbortError" ||
      /aborted|timeout|TimeoutError/i.test(message) ||
      /aborted|timeout|TimeoutError/i.test(name);
    if (!isTimeout) {
      markFailure(nowMs);
    }
    return null;
  }
}

/**
 * Completes a previously started Memmy turn. Fire-and-forget safe: never throws.
 */
export async function completeMemmyTurn(
  input: {
    readonly threadId: string;
    readonly answer: string;
    readonly status?: "completed" | "failed" | "cancelled";
  },
  deps: MemmyInjectionDeps = {},
): Promise<boolean> {
  if (!isMemmyMemoryEnabled()) {
    clearMemmyPendingForThread(input.threadId);
    return false;
  }

  const pending = pendingByThreadId.get(input.threadId);
  clearMemmyPendingForThread(input.threadId);
  if (!pending) return false;

  const status = input.status ?? "completed";
  if (status === "cancelled") return false;

  const answer = sanitizeCaptureText(input.answer);
  if (!pending.query || !answer) return false;

  const baseUrl = resolveMemmyBaseUrl();
  const timeoutMs = resolveMemmyTimeoutMs();
  const nowMs = (deps.nowMs ?? Date.now)();

  try {
    await postJson(
      {
        baseUrl,
        path: `/api/v1/turns/${encodeURIComponent(pending.turnId)}/complete`,
        timeoutMs,
        body: {
          adapterId: "memmy-t3-bridge",
          requestId: `t3-complete:${pending.turnId}:${hashText([status, pending.query, answer].join("\0"))}`,
          sessionId: pending.sessionId,
          ...(pending.episodeId ? { episodeId: pending.episodeId } : {}),
          query: pending.query,
          answer,
          status,
          source: pending.source,
          ...(pending.sourceMemoryIds ? { sourceMemoryIds: pending.sourceMemoryIds } : {}),
        },
      },
      deps,
    );
    return true;
  } catch {
    markFailure(nowMs);
    return false;
  }
}
