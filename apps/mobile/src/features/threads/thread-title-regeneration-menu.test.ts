import { describe, expect, it } from "vite-plus/test";

import { buildThreadTitleRegenerationMenuItems } from "./thread-title-regeneration-menu";

describe("buildThreadTitleRegenerationMenuItems", () => {
  it("hides regeneration when the environment does not advertise support", () => {
    expect(
      buildThreadTitleRegenerationMenuItems({ supported: false, isRegenerating: false }),
    ).toEqual([]);
  });

  it("offers regeneration for a supported environment", () => {
    expect(
      buildThreadTitleRegenerationMenuItems({ supported: true, isRegenerating: false }),
    ).toEqual([
      {
        id: "regenerate-title",
        title: "重新生成标题",
        image: "arrow.clockwise",
      },
    ]);
  });

  it("shows and disables the pending state", () => {
    expect(
      buildThreadTitleRegenerationMenuItems({ supported: true, isRegenerating: true }),
    ).toEqual([
      {
        id: "regenerate-title",
        title: "正在重新生成标题…",
        image: "arrow.clockwise",
        attributes: { disabled: true },
      },
    ]);
  });
});
