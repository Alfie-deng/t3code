import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import { ThreadErrorBanner } from "./ThreadErrorBanner";

describe("ThreadErrorBanner", () => {
  it("aligns the warning and dismiss icons with the first line of a multi-line error", () => {
    const markup = renderToStaticMarkup(
      <ThreadErrorBanner
        error={"The first error line\ncontinues on a second line"}
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain('role="alert"');
    expect(markup).toContain('aria-label="Dismiss error"');
    expect(markup).not.toContain("controlAlignment");
    expect(markup).toContain("flex gap-2 items-start");
    expect(markup).toContain("min-h-7 pt-1 sm:min-h-6 sm:pt-0.5");
    expect(markup).toContain("h-lh w-4");
    expect(markup).toContain("h-lh self-start");
  });

  it("translates the complete provider error in both the banner and tooltip", () => {
    const markup = renderToStaticMarkup(
      <ThreadErrorBanner error="Provider unreachable: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()" />,
    );

    expect(markup).toContain("提供商无法连接：模型服务连接意外中断");
    expect(markup).not.toContain("Provider unreachable");
    expect(markup).not.toContain("The socket connection was closed unexpectedly");
  });
});
