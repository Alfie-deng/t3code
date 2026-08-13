import { describe, expect, it } from "vite-plus/test";

import { isProviderModelHidden } from "./modelOrdering.ts";

describe("isProviderModelHidden", () => {
  it("matches exact hidden slugs", () => {
    expect(isProviderModelHidden("claude-opus-5", ["claude-opus-5"])).toBe(true);
    expect(isProviderModelHidden("composer-2", ["claude-opus-5"])).toBe(false);
  });

  it("hides hyphen and bracket variants of a short hidden id", () => {
    const hidden = ["claude-opus-5", "gpt-5.5", "composer-2.5"];
    expect(isProviderModelHidden("claude-opus-5-thinking-high", hidden)).toBe(true);
    expect(isProviderModelHidden("gpt-5.5-high", hidden)).toBe(true);
    expect(isProviderModelHidden("composer-2.5[fast=true]", hidden)).toBe(true);
  });

  it("does not treat a longer sibling id as a prefix match", () => {
    expect(isProviderModelHidden("claude-opus-50", ["claude-opus-5"])).toBe(false);
    expect(isProviderModelHidden("gpt-5.50", ["gpt-5.5"])).toBe(false);
  });

  it("accepts Set inputs and empty prefs", () => {
    expect(isProviderModelHidden("a", new Set(["a"]))).toBe(true);
    expect(isProviderModelHidden("a", undefined)).toBe(false);
    expect(isProviderModelHidden("a", [])).toBe(false);
  });
});
