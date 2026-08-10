/**
 * Alfie's personal desktop chrome and thread presentation preferences.
 *
 * These flags only remove optional top-bar affordances; their commands and
 * underlying capabilities remain available through keybindings and panels.
 */
export const PERSONAL_UI = {
  hideTopBarBrand: true,
  hideTopBarProjectActions: true,
  hideTopBarOpenInEditor: true,
  hideTopBarGitActions: true,
  hideTopBarTerminalToggle: true,
  hideRuntimeModeControl: true,
  hideComposerContextStrip: true,
  compactComposer: true,
  hideComposerGuide: true,
  newThreadComposerPlaceholder: "随心构建你的想法",
  threadContentFontSizeStepPx: 1,
} as const;
