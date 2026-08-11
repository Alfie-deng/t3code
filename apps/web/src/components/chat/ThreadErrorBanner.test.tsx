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
    expect(markup).toContain('aria-label="关闭错误"');
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

  it("translates structured context-window errors while keeping diagnostic codes", () => {
    const markup = renderToStaticMarkup(
      <ThreadErrorBanner
        error={
          '{"message":"Your input exceeds the context window of this model. Please adjust your input and try again.","type":"invalid_request_error","param":null,"code":"context_length_exceeded"}'
        }
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain(
      "你的输入超出了该模型的上下文窗口。请调整输入后重试。（类型：invalid_request_error，代码：context_length_exceeded）",
    );
    expect(markup).toContain('aria-label="关闭错误"');
    expect(markup).not.toContain("Your input exceeds the context window");
    expect(markup).not.toContain('"message"');
  });
});
