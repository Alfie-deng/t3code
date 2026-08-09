import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/react";
import { passkeys } from "@clerk/electron/passkeys";
import { ClerkProvider as ElectronClerkProvider } from "@clerk/electron/react";
import { zhCN } from "@clerk/localizations";
import { createHashHistory, createBrowserHistory } from "@tanstack/react-router";

import "./index.css";

import { isElectron } from "./env";
import { ManagedRelayAuthProvider } from "./cloud/managedAuth";
import { hasCloudPublicConfig } from "./cloud/publicConfig";
import { getRouter } from "./router";
import { installZhCnUiLocalization } from "./localization/zhCN";
import {
  syncDocumentElectronPlatformClasses,
  syncDocumentWindowControlsOverlayClass,
} from "./lib/windowControlsOverlay";
import { AppRoot } from "./AppRoot";

// Electron loads the app from a file-backed shell, so hash history avoids path resolution issues.
const history = isElectron ? createHashHistory() : createBrowserHistory();

const router = getRouter(history);

if (isElectron) {
  syncDocumentElectronPlatformClasses(navigator.platform);
  syncDocumentWindowControlsOverlayClass();
}

// The personal fork keeps presentation text in one update-safe layer. It
// observes portals, menus, toasts, and streaming workflow rows so a newly
// mounted state does not leak back into English after the initial render.
installZhCnUiLocalization();

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

// Clerk's zhCN resource intentionally leaves a few security-page labels
// undefined. Keep those account-center labels Chinese in the private build.
const t3ClerkZhCN = {
  ...zhCN,
  userProfile: {
    ...(zhCN.userProfile ?? {}),
    start: {
      ...(zhCN.userProfile?.start ?? {}),
      passkeysSection: {
        ...(zhCN.userProfile?.start?.passkeysSection ?? {}),
        primaryButton: "添加通行密钥",
        title: "通行密钥",
      },
    },
  },
};

const app = <AppRoot router={router} />;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {clerkPublishableKey && hasCloudPublicConfig() ? (
      isElectron ? (
        <ElectronClerkProvider
          publishableKey={clerkPublishableKey}
          passkeys={passkeys}
          localization={t3ClerkZhCN}
        >
          <ManagedRelayAuthProvider>{app}</ManagedRelayAuthProvider>
        </ElectronClerkProvider>
      ) : (
        <ClerkProvider publishableKey={clerkPublishableKey} localization={t3ClerkZhCN}>
          <ManagedRelayAuthProvider>{app}</ManagedRelayAuthProvider>
        </ClerkProvider>
      )
    ) : (
      app
    )}
  </React.StrictMode>,
);
