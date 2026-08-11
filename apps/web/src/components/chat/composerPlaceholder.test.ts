import { describe, expect, it } from "vite-plus/test";

import { resolveComposerGuidePlaceholder } from "./composerPlaceholder";

describe("resolveComposerGuidePlaceholder", () => {
  it("uses the personal new-thread copy only in the draft hero", () => {
    expect(resolveComposerGuidePlaceholder(true)).toBe("随心构建你的想法");
  });

  it("keeps existing conversations on the follow-up copy when disconnected", () => {
    expect(resolveComposerGuidePlaceholder(false)).toBe("提出后续修改");
  });
});
