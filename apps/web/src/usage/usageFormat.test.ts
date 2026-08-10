import { describe, expect, it } from "vite-plus/test";

import { formatTokens } from "./usageFormat";

describe("formatTokens", () => {
  it("uses 亿 for counts at or above one hundred million", () => {
    expect(formatTokens(878_000_000)).toBe("8.78亿");
    expect(formatTokens(100_000_000)).toBe("1亿");
    expect(formatTokens(150_000_000)).toBe("1.5亿");
  });

  it("uses 万 below 亿", () => {
    expect(formatTokens(27_000_000)).toBe("2700万");
    expect(formatTokens(2_730_000)).toBe("273万");
    expect(formatTokens(108_000)).toBe("10.8万");
    expect(formatTokens(10_000)).toBe("1万");
  });

  it("uses comma-separated integers below 万", () => {
    expect(formatTokens(8_765)).toBe("8,765");
    expect(formatTokens(999)).toBe("999");
  });
});
