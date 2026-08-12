import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import {
  dismissThreadErrorBannerForSession,
  getThreadErrorBannerKey,
  isThreadErrorBannerDismissedForSession,
  shouldShowThreadErrorBanner,
  ThreadErrorBanner,
} from "./ThreadErrorBanner";

describe("ThreadErrorBanner", () => {
  it("stays hidden after its current error is dismissed", () => {
    const bannerKey = getThreadErrorBannerKey("env:thread-a", "Aborted");
    dismissThreadErrorBannerForSession(bannerKey);

    expect(
      shouldShowThreadErrorBanner(
        "env:thread-a",
        "Aborted",
        isThreadErrorBannerDismissedForSession(bannerKey),
      ),
    ).toBe(false);
  });

  it("reappears when a new error arrives on the same thread", () => {
    dismissThreadErrorBannerForSession(getThreadErrorBannerKey("env:thread-b", "Turn failed"));
    const newErrorKey = getThreadErrorBannerKey("env:thread-b", "Provider crashed");

    expect(isThreadErrorBannerDismissedForSession(newErrorKey)).toBe(false);
    expect(
      shouldShowThreadErrorBanner(
        "env:thread-b",
        "Provider crashed",
        isThreadErrorBannerDismissedForSession(newErrorKey),
      ),
    ).toBe(true);
  });

  it("scopes dismissals to the thread that dismissed them", () => {
    dismissThreadErrorBannerForSession(getThreadErrorBannerKey("env:thread-c", "Aborted"));
    const otherThreadKey = getThreadErrorBannerKey("env:other-thread", "Aborted");

    expect(isThreadErrorBannerDismissedForSession(otherThreadKey)).toBe(false);
    expect(
      shouldShowThreadErrorBanner(
        "env:other-thread",
        "Aborted",
        isThreadErrorBannerDismissedForSession(otherThreadKey),
      ),
    ).toBe(true);
  });

  it("keeps a dismissal across visiting threads with no error", () => {
    const bannerKey = getThreadErrorBannerKey("env:thread-d", "Aborted");
    dismissThreadErrorBannerForSession(bannerKey);

    expect(shouldShowThreadErrorBanner("env:thread-d", null, false)).toBe(false);
    expect(isThreadErrorBannerDismissedForSession(bannerKey)).toBe(true);
    expect(
      shouldShowThreadErrorBanner(
        "env:thread-d",
        "Aborted",
        isThreadErrorBannerDismissedForSession(bannerKey),
      ),
    ).toBe(false);
  });

  it("never shows a null error", () => {
    expect(shouldShowThreadErrorBanner("env:thread-e", null, false)).toBe(false);
  });
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

  it("translates model capacity errors", () => {
    const markup = renderToStaticMarkup(
      <ThreadErrorBanner
        error="Selected model is at capacity. Please try a different model."
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain("所选模型当前容量已满，请尝试其他模型。");
    expect(markup).not.toContain("Selected model is at capacity");
  });

  it("translates retriable transport cancels in the banner", () => {
    const markup = renderToStaticMarkup(
      <ThreadErrorBanner
        error="Error: RetriableError: [canceled] http/2 stream closed with error code CANCEL (0x8)"
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain("错误：网络请求连接中断。");
    expect(markup).not.toContain("RetriableError");
    expect(markup).not.toContain("http/2 stream closed");
  });

  it("translates unsupported attachment type errors", () => {
    const markup = renderToStaticMarkup(
      <ThreadErrorBanner
        error="Unsupported file type for '一、项目背景.md'. Please attach image files only."
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain("不支持的文件类型「一、项目背景.md」。请只附加图片文件。");
    expect(markup).not.toContain("Unsupported file type");
    expect(markup).not.toContain("Please attach image files only");
  });
});
