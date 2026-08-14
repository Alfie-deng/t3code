import { describe, expect, it } from "vitest";

import {
  isThreadActivelyWorking,
  resolveStickyWorkingTimerStartedAt,
  resolveWorkingTimerDurableStartedAt,
} from "./orchestrationTiming.ts";

describe("resolveWorkingTimerDurableStartedAt", () => {
  it("prefers the earlier of requestedAt and startedAt", () => {
    expect(
      resolveWorkingTimerDurableStartedAt({
        turnId: "t1",
        requestedAt: "2026-02-27T21:10:00.000Z",
        startedAt: "2026-02-27T21:10:07.000Z",
        completedAt: null,
      }),
    ).toBe("2026-02-27T21:10:00.000Z");
  });

  it("falls back to whichever timestamp exists", () => {
    expect(
      resolveWorkingTimerDurableStartedAt({
        turnId: "t1",
        requestedAt: "2026-02-27T21:10:00.000Z",
        startedAt: null,
        completedAt: null,
      }),
    ).toBe("2026-02-27T21:10:00.000Z");
  });

  it("ignores settled turns so the next send does not inherit the previous clock", () => {
    expect(
      resolveWorkingTimerDurableStartedAt({
        turnId: "t1",
        requestedAt: "2026-02-27T21:10:00.000Z",
        startedAt: "2026-02-27T21:10:01.000Z",
        completedAt: "2026-02-27T21:10:40.000Z",
      }),
    ).toBeNull();
  });
});

describe("resolveStickyWorkingTimerStartedAt", () => {
  it("keeps the previous anchor across cold-start → running", () => {
    expect(
      resolveStickyWorkingTimerStartedAt({
        isWorking: true,
        previousAnchor: "2026-02-27T21:10:00.000Z",
        localDispatchStartedAt: "2026-02-27T21:10:00.000Z",
        durableStartedAt: "2026-02-27T21:10:07.000Z",
        nowIso: "2026-02-27T21:10:08.000Z",
      }),
    ).toBe("2026-02-27T21:10:00.000Z");
  });

  it("uses local dispatch before durable turn times exist", () => {
    expect(
      resolveStickyWorkingTimerStartedAt({
        isWorking: true,
        previousAnchor: null,
        localDispatchStartedAt: "2026-02-27T21:10:00.000Z",
        durableStartedAt: null,
        nowIso: "2026-02-27T21:10:01.000Z",
      }),
    ).toBe("2026-02-27T21:10:00.000Z");
  });

  it("uses durable turn time when remounting mid-run without sticky", () => {
    expect(
      resolveStickyWorkingTimerStartedAt({
        isWorking: true,
        previousAnchor: null,
        localDispatchStartedAt: null,
        durableStartedAt: "2026-02-27T21:10:00.000Z",
        nowIso: "2026-02-27T21:10:40.000Z",
      }),
    ).toBe("2026-02-27T21:10:00.000Z");
  });

  it("lets a newer local send replace a stale previous-turn sticky", () => {
    expect(
      resolveStickyWorkingTimerStartedAt({
        isWorking: true,
        previousAnchor: "2026-02-27T21:10:00.000Z",
        localDispatchStartedAt: "2026-02-27T21:12:00.000Z",
        durableStartedAt: null,
        nowIso: "2026-02-27T21:12:00.050Z",
      }),
    ).toBe("2026-02-27T21:12:00.000Z");
  });

  it("clears when not working", () => {
    expect(
      resolveStickyWorkingTimerStartedAt({
        isWorking: false,
        previousAnchor: "2026-02-27T21:10:00.000Z",
        localDispatchStartedAt: null,
        durableStartedAt: null,
        nowIso: "2026-02-27T21:10:40.000Z",
      }),
    ).toBeNull();
  });
});

describe("isThreadActivelyWorking", () => {
  it("treats starting and queued outbound as working", () => {
    expect(
      isThreadActivelyWorking({ orchestrationStatus: "starting", hasQueuedOutbound: false }),
    ).toBe(true);
    expect(isThreadActivelyWorking({ orchestrationStatus: "idle", hasQueuedOutbound: true })).toBe(
      true,
    );
    expect(isThreadActivelyWorking({ orchestrationStatus: "idle", hasQueuedOutbound: false })).toBe(
      false,
    );
  });
});
