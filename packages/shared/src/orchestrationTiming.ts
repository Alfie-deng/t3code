type LatestTurnTiming = {
  readonly turnId: string | null;
  readonly startedAt: string | null;
  readonly completedAt: string | null;
  readonly requestedAt?: string | null;
};

type SessionActivityState = {
  readonly orchestrationStatus: string;
  readonly activeTurnId?: string | null;
};

export function formatDuration(durationMs: number): string {
  if (!Number.isFinite(durationMs) || durationMs < 0) return "0ms";
  if (durationMs < 1_000) return `${Math.max(1, Math.round(durationMs))}ms`;
  if (durationMs < 10_000) return `${(durationMs / 1_000).toFixed(1)}s`;
  if (durationMs < 60_000) return `${Math.round(durationMs / 1_000)}s`;
  const minutes = Math.floor(durationMs / 60_000);
  const seconds = Math.round((durationMs % 60_000) / 1_000);
  if (seconds === 0) return `${minutes}m`;
  if (seconds === 60) return `${minutes + 1}m`;
  return `${minutes}m ${seconds}s`;
}

export function formatElapsed(startIso: string, endIso: string | undefined): string | null {
  if (!endIso) return null;
  const startedAt = Date.parse(startIso);
  const endedAt = Date.parse(endIso);
  if (Number.isNaN(startedAt) || Number.isNaN(endedAt) || endedAt < startedAt) {
    return null;
  }
  return formatDuration(endedAt - startedAt);
}

export function isLatestTurnSettled(
  latestTurn: LatestTurnTiming | null,
  session: SessionActivityState | null,
): boolean {
  if (!latestTurn?.startedAt) return false;
  if (!latestTurn.completedAt) return false;
  if (!session) return true;
  if (session.orchestrationStatus === "running") return false;
  return true;
}

export function deriveActiveWorkStartedAt(
  latestTurn: LatestTurnTiming | null,
  session: SessionActivityState | null,
  sendStartedAt: string | null,
): string | null {
  if (!isLatestTurnSettled(latestTurn, session)) {
    return latestTurn?.startedAt ?? sendStartedAt;
  }
  return sendStartedAt;
}

/**
 * Durable turn timestamps for the live "Working for Xs" clock after a view
 * remounts (route changes wipe component state). Prefer `requestedAt`
 * (send / pending) so cold-start wait stays counted; then `startedAt`.
 *
 * Settled turns (`completedAt` set) must not feed the live clock — otherwise
 * the next send can fall back to the previous turn's start and count the idle
 * gap between turns.
 */
export function resolveWorkingTimerDurableStartedAt(
  latestTurn: LatestTurnTiming | null,
): string | null {
  if (latestTurn?.completedAt) {
    return null;
  }
  const requestedAt = latestTurn?.requestedAt ?? null;
  const startedAt = latestTurn?.startedAt ?? null;
  if (requestedAt && startedAt) {
    return requestedAt <= startedAt ? requestedAt : startedAt;
  }
  return requestedAt ?? startedAt;
}

/**
 * Sticky live "Working for Xs" clock.
 *
 * The busy row lights as soon as the user sends (local dispatch / connecting
 * filler). That wait is intentional UI — and the second count must run through
 * it so a 7s cold start shows "Working for 7s", then continues at 8s when the
 * provider is truly running. Never reset the anchor when phase flips to running.
 *
 * `previousAnchor` must survive remounts (module-level per-thread store).
 * `durableStartedAt` covers the case where sticky was never written
 * (e.g. cold reload mid-run) — never fall straight through to `nowIso` or the
 * counter restarts at 1s after switching threads.
 *
 * A newer `localDispatchStartedAt` always wins over a stale sticky from the
 * previous turn — otherwise the next send stacks the prior turn plus idle time.
 */
export function resolveStickyWorkingTimerStartedAt(input: {
  isWorking: boolean;
  previousAnchor: string | null;
  localDispatchStartedAt: string | null;
  durableStartedAt: string | null;
  nowIso: string;
}): string | null {
  if (!input.isWorking) {
    return null;
  }
  if (
    input.localDispatchStartedAt &&
    (!input.previousAnchor || input.previousAnchor < input.localDispatchStartedAt)
  ) {
    return input.localDispatchStartedAt;
  }
  return (
    input.previousAnchor ?? input.localDispatchStartedAt ?? input.durableStartedAt ?? input.nowIso
  );
}

/** True while a thread should show the live Working row (including cold start). */
export function isThreadActivelyWorking(input: {
  readonly orchestrationStatus: string | null | undefined;
  readonly hasQueuedOutbound: boolean;
}): boolean {
  const status = input.orchestrationStatus ?? null;
  return status === "running" || status === "starting" || input.hasQueuedOutbound;
}
