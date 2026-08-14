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

  it("stores the resolved anchor so a new send can replace the previous turn", () => {
    writeStickyWorkingTimerForThread("env:thread-a", "2026-02-27T21:10:00.000Z");
    writeStickyWorkingTimerForThread("env:thread-a", "2026-02-27T21:12:00.000Z");
    expect(readStickyWorkingTimerForThread("env:thread-a")).toBe("2026-02-27T21:12:00.000Z");
  });

  it("isolates anchors by thread key and clears only the target", () => {
    writeStickyWorkingTimerForThread("env:thread-left", "2026-02-27T21:10:00.000Z");
    writeStickyWorkingTimerForThread("env:thread-right", "2026-02-27T21:11:00.000Z");
    clearStickyWorkingTimerForThread("env:thread-right");
    expect(readStickyWorkingTimerForThread("env:thread-left")).toBe("2026-02-27T21:10:00.000Z");
    expect(readStickyWorkingTimerForThread("env:thread-right")).toBeNull();
  });
});
