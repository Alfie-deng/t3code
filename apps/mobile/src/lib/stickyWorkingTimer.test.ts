import { afterEach, describe, expect, it } from "vitest";

import {
  clearStickyWorkingTimerForThread,
  readStickyWorkingTimerForThread,
  resetStickyWorkingTimersForTests,
  writeStickyWorkingTimerForThread,
} from "./stickyWorkingTimer";

describe("stickyWorkingTimer", () => {
  afterEach(() => {
    resetStickyWorkingTimersForTests();
  });

  it("keeps the earliest anchor across remount-style writes", () => {
    writeStickyWorkingTimerForThread("env:thread-a", "2026-02-27T21:10:00.000Z");
    writeStickyWorkingTimerForThread("env:thread-a", "2026-02-27T21:10:40.000Z");
    expect(readStickyWorkingTimerForThread("env:thread-a")).toBe("2026-02-27T21:10:00.000Z");
  });

  it("isolates anchors by thread key and clears only the target", () => {
    writeStickyWorkingTimerForThread("env:thread-left", "2026-02-27T21:10:00.000Z");
    writeStickyWorkingTimerForThread("env:thread-right", "2026-02-27T21:11:00.000Z");
    clearStickyWorkingTimerForThread("env:thread-right");
    expect(readStickyWorkingTimerForThread("env:thread-left")).toBe("2026-02-27T21:10:00.000Z");
    expect(readStickyWorkingTimerForThread("env:thread-right")).toBeNull();
  });
});
