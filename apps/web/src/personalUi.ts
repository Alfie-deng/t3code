/**
 * Alfie's personal desktop chrome and thread presentation preferences.
 *
 * These flags only remove optional top-bar affordances; their commands and
 * underlying capabilities remain available through keybindings and panels.
 */
export const PERSONAL_UI = {
  hideTopBarBrand: false,
  hideTopBarProjectActions: true,
  hideTopBarOpenInEditor: true,
  hideTopBarGitActions: true,
  hideTopBarTerminalToggle: true,
  hideSidebarPullRequests: true, // 藏侧栏左下「Pull Requests」；/pull-requests 与线程内 PR 仍可用
  /** 本地覆盖安装不走官方自动更新，侧栏「检查更新」灰钮无意义 */
  hideSidebarUpdateCheck: true,
  /** 提供商状态卡片：只弹 error，不弹「正在检查可用性」这类 warning */
  providerStatusBannerErrorsOnly: true,
  hideRuntimeModeControl: true,
  hideComposerContextStrip: true,
  compactComposer: true,
  hideComposerGuide: true,
  newThreadComposerPlaceholder: "随心构建你的想法",
  threadContentFontSizeStepPx: 1,
} as const;
