/**
 * Survives ThreadRoute remounts when switching threads. Without this, the live
 * "Working for Xs" clock restarts at 1s every time you leave and come back.
 */
const stickyWorkingTimerByThreadKey = new Map<string, string>();

export function readStickyWorkingTimerForThread(threadKey: string): string | null {
  return stickyWorkingTimerByThreadKey.get(threadKey) ?? null;
}

export function writeStickyWorkingTimerForThread(
  threadKey: string,
  startedAt: string | null,
): void {
  if (startedAt === null) {
    stickyWorkingTimerByThreadKey.delete(threadKey);
    return;
  }
  const existing = stickyWorkingTimerByThreadKey.get(threadKey);
  if (existing && existing <= startedAt) {
    return;
  }
  stickyWorkingTimerByThreadKey.set(threadKey, startedAt);
}

export function clearStickyWorkingTimerForThread(threadKey: string): void {
  stickyWorkingTimerByThreadKey.delete(threadKey);
}

/** Test helper — do not call from product UI. */
export function resetStickyWorkingTimersForTests(): void {
  stickyWorkingTimerByThreadKey.clear();
}
