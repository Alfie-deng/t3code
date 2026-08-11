import { ProviderDriverKind, ProviderInstanceId, type ServerProvider } from "@t3tools/contracts";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import {
  getProviderStatusBannerKey,
  ProviderStatusBanner,
  shouldShowProviderStatusBanner,
} from "./ProviderStatusBanner";

function warningProvider(): ServerProvider {
  return {
    instanceId: ProviderInstanceId.make("codex"),
    driver: ProviderDriverKind.make("codex"),
    displayName: "Codex",
    enabled: true,
    installed: true,
    version: "1.0.0",
    status: "warning",
    auth: { status: "authenticated" },
    checkedAt: "2026-07-23T12:00:00.000Z",
    message: "Provider is temporarily degraded.",
    models: [],
    slashCommands: [],
    skills: [],
  };
}

describe("ProviderStatusBanner", () => {
  it("stays hidden after its current warning is dismissed", () => {
    const status = warningProvider();

    expect(shouldShowProviderStatusBanner(status, null)).toBe(true);
    expect(shouldShowProviderStatusBanner(status, getProviderStatusBannerKey(status))).toBe(false);
  });

  it("renders an accessible dismiss control for provider warnings", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner status={warningProvider()} onDismiss={() => {}} />,
    );

    expect(markup).toContain('role="alert"');
    expect(markup).toContain('aria-label="关闭 Codex 提供商警告"');
    expect(markup).toContain("提供商暂时降级。");
    expect(markup).toContain("absolute top-2 right-2");
  });

  it("renders on a glass surface so the timeline never reads through the banner", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner status={warningProvider()} onDismiss={() => {}} />,
    );

    expect(markup).toContain("alert-glass");
    expect(markup).toContain('data-variant="warning"');
  });

  it("labels error dismiss controls with the correct severity", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner
        status={{ ...warningProvider(), status: "error" }}
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain('aria-label="关闭 Codex 提供商错误"');
  });

  it("translates dynamic ACP discovery timeout details and dismiss labels", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner
        status={{
          ...warningProvider(),
          displayName: "Cursor",
          message: "Cursor ACP model discovery timed out after 15000ms.",
        }}
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain("Cursor ACP 模型发现在 15000 毫秒后超时。");
    expect(markup).toContain('aria-label="关闭 Cursor 提供商警告"');
  });

  it("translates dynamic provider availability checks completely", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner
        status={{
          ...warningProvider(),
          displayName: "Cursor",
          message: "Checking Cursor Agent availability...",
        }}
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain("正在检查 Cursor Agent 可用性…");
    expect(markup).not.toContain("availability");
  });
});
