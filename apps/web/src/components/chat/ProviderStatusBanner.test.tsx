import { ProviderDriverKind, ProviderInstanceId, type ServerProvider } from "@t3tools/contracts";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import { PERSONAL_UI } from "../../personalUi";
import {
  getProviderStatusBannerKey,
  isProvisionalProviderAvailabilityMessage,
  ProviderStatusBanner,
  shouldShowProviderStatusBanner,
} from "./ProviderStatusBanner";

function warningProvider(overrides?: Partial<ServerProvider>): ServerProvider {
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
    ...overrides,
  };
}

describe("ProviderStatusBanner", () => {
  it("recognizes provisional availability-check messages", () => {
    expect(isProvisionalProviderAvailabilityMessage("Checking Cursor Agent availability...")).toBe(
      true,
    );
    expect(isProvisionalProviderAvailabilityMessage("Provider is temporarily degraded.")).toBe(
      false,
    );
  });

  it("hides warning banners when PERSONAL_UI asks for errors only", () => {
    expect(PERSONAL_UI.providerStatusBannerErrorsOnly).toBe(true);
    const status = warningProvider();
    expect(getProviderStatusBannerKey(status)).toBeNull();
    expect(shouldShowProviderStatusBanner(status, null)).toBe(false);
  });

  it("still shows real provider errors", () => {
    const status = warningProvider({
      status: "error",
      message: "Cursor Agent is not installed.",
    });
    expect(shouldShowProviderStatusBanner(status, null)).toBe(true);
    expect(shouldShowProviderStatusBanner(status, getProviderStatusBannerKey(status))).toBe(false);
  });

  it("hides provisional checking messages even if status were error-shaped", () => {
    const status = warningProvider({
      status: "error",
      displayName: "Cursor",
      message: "Checking Cursor Agent availability...",
    });
    expect(shouldShowProviderStatusBanner(status, null)).toBe(false);
  });

  it("renders an accessible dismiss control for provider errors", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner
        status={warningProvider({ status: "error", message: "Cursor Agent is not installed." })}
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain('role="alert"');
    expect(markup).toContain('aria-label="关闭 Codex 提供商错误"');
    expect(markup).toContain("absolute top-2 right-2");
  });

  it("renders on a glass surface so the timeline never reads through the banner", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner status={warningProvider({ status: "error" })} onDismiss={() => {}} />,
    );

    expect(markup).toContain("alert-glass");
    expect(markup).toContain('data-variant="error"');
  });

  it("translates dynamic ACP discovery timeout details and dismiss labels", () => {
    const markup = renderToStaticMarkup(
      <ProviderStatusBanner
        status={{
          ...warningProvider({ status: "error" }),
          displayName: "Cursor",
          message: "Cursor ACP model discovery timed out after 15000ms.",
        }}
        onDismiss={() => {}}
      />,
    );

    expect(markup).toContain("Cursor ACP 模型发现在 15000 毫秒后超时。");
    expect(markup).toContain('aria-label="关闭 Cursor 提供商错误"');
  });

  it("does not render provisional availability checks", () => {
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

    expect(markup).toBe("");
  });
});
