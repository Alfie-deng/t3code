// FILE: memmyContextInjection.test.ts
// Purpose: Verifies Memmy bridge helpers fail closed, inject once, and complete turns.
// Layer: Server orchestration tests

import { afterEach, describe, expect, it, vi } from "vite-plus/test";

import {
  clearMemmyInjectionStateForTests,
  completeMemmyTurn,
  getMemmyPendingForThread,
  isMemmyMemoryEnabled,
  prependMemmyContextToInput,
  resolveMemmyCaptureAnswer,
  startMemmyTurn,
} from "./memmyContextInjection.ts";

afterEach(() => {
  clearMemmyInjectionStateForTests();
  vi.unstubAllEnvs();
});

describe("isMemmyMemoryEnabled", () => {
  it("defaults to enabled for the t3 fork", () => {
    expect(isMemmyMemoryEnabled({})).toBe(true);
  });

  it("honors explicit disable", () => {
    expect(isMemmyMemoryEnabled({ T3_MEMMY_MEMORY_ENABLED: "0" })).toBe(false);
  });
});

describe("prependMemmyContextToInput", () => {
  it("prepends context and skips when already present or over budget", () => {
    const block = `<memmy_memory_context source="turn_start">\nhi\n</memmy_memory_context>`;
    expect(
      prependMemmyContextToInput({
        messageText: "user asks",
        contextBlock: block,
        maxInputChars: 10_000,
      }),
    ).toContain("user asks");
    expect(
      prependMemmyContextToInput({
        messageText: `${block}\n\nuser asks`,
        contextBlock: block,
        maxInputChars: 10_000,
      }),
    ).toBe(`${block}\n\nuser asks`);
    expect(
      prependMemmyContextToInput({
        messageText: "user asks",
        contextBlock: block,
        maxInputChars: 20,
      }),
    ).toBe("user asks");
  });

  it("still injects when the user merely mentions the tag name", () => {
    const block = `<memmy_memory_context source="turn_start">\nhi\n</memmy_memory_context>`;
    const messageText = "本轮有没有 `<memmy_memory_context`？有/无";
    const out = prependMemmyContextToInput({
      messageText,
      contextBlock: block,
      maxInputChars: 10_000,
    });
    expect(out.startsWith("<memmy_memory_context")).toBe(true);
    expect(out).toContain(messageText);
  });
});

describe("resolveMemmyCaptureAnswer", () => {
  it("prefers buffered text when present", () => {
    expect(
      resolveMemmyCaptureAnswer({
        bufferedTexts: ["  from buffer  ", ""],
        threadAssistantTexts: ["from thread"],
      }),
    ).toBe("from buffer");
  });

  it("falls back to settled thread assistant messages for live delivery", () => {
    expect(
      resolveMemmyCaptureAnswer({
        bufferedTexts: ["", "   "],
        threadAssistantTexts: [" part a ", "part b"],
      }),
    ).toBe("part a\n\npart b");
  });

  it("returns empty when neither source has text", () => {
    expect(
      resolveMemmyCaptureAnswer({
        bufferedTexts: [],
        threadAssistantTexts: ["  ", ""],
      }),
    ).toBe("");
  });
});

describe("startMemmyTurn / completeMemmyTurn", () => {
  it("returns null when disabled", async () => {
    vi.stubEnv("T3_MEMMY_MEMORY_ENABLED", "0");
    const result = await startMemmyTurn({
      threadId: "t1",
      messageId: "m1",
      query: "hello",
      maxContextChars: 4_000,
    });
    expect(result).toBeNull();
  });

  it("opens a session, injects markdown, and completes the turn", async () => {
    const calls: Array<{ url: string; body: unknown }> = [];
    const fetchImpl = async (input: string | URL | Request, init?: RequestInit) => {
      const url = String(input);
      const body = init?.body ? JSON.parse(String(init.body)) : null;
      calls.push({ url, body });
      if (url.endsWith("/api/v1/sessions/open")) {
        return new Response(JSON.stringify({ sessionId: "sess-1", status: "open" }), {
          status: 200,
        });
      }
      if (url.endsWith("/api/v1/turns/start")) {
        return new Response(
          JSON.stringify({
            turnId: "turn-1",
            episodeId: "ep-1",
            sourceMemoryIds: ["mem_a"],
            injectedContext: { markdown: "## L1\nremember softlinks" },
          }),
          { status: 200 },
        );
      }
      if (url.includes("/complete")) {
        return new Response(JSON.stringify({ turnId: "turn-1" }), { status: 200 });
      }
      return new Response("missing", { status: 404 });
    };

    const started = await startMemmyTurn(
      {
        threadId: "thread-1",
        messageId: "msg-1",
        query: "check memmy bridge",
        workspacePath: "/Users/alfie/developer/t3code",
        provider: "claudeAgent",
        maxContextChars: 8_000,
      },
      { fetchImpl },
    );

    expect(started).not.toBeNull();
    expect(started?.contextBlock).toContain("<memmy_memory_context");
    expect(started?.contextBlock).toContain("remember softlinks");
    expect(getMemmyPendingForThread("thread-1")?.turnId).toBe("turn-1");

    const ok = await completeMemmyTurn(
      {
        threadId: "thread-1",
        answer: "bridge works",
        status: "completed",
      },
      { fetchImpl },
    );
    expect(ok).toBe(true);
    expect(getMemmyPendingForThread("thread-1")).toBeUndefined();
    expect(calls.some((call) => String(call.url).includes("/complete"))).toBe(true);
    const openBody = calls.find((call) => String(call.url).endsWith("/sessions/open"))?.body as {
      workspacePath?: string;
    };
    expect(openBody.workspacePath).toBe("/Users/alfie/developer/t3code");
  });

  it("fails closed on HTTP errors and enters cooldown", async () => {
    let now = 1_000;
    const fetchImpl = async () => new Response("nope", { status: 503 });

    const first = await startMemmyTurn(
      {
        threadId: "thread-2",
        messageId: "msg-2",
        query: "will fail",
        maxContextChars: 4_000,
      },
      { fetchImpl, nowMs: () => now },
    );
    expect(first).toBeNull();

    // Still in cooldown: fetch should not be called again.
    let called = false;
    const guardedFetch = async () => {
      called = true;
      return new Response("{}", { status: 200 });
    };
    now = 2_000;
    const second = await startMemmyTurn(
      {
        threadId: "thread-2",
        messageId: "msg-3",
        query: "still cool",
        maxContextChars: 4_000,
      },
      { fetchImpl: guardedFetch, nowMs: () => now },
    );
    expect(second).toBeNull();
    expect(called).toBe(false);
  });
});
