import { translateZhCnUiText } from "../../localization/zhCN";
import { PERSONAL_UI } from "../../personalUi";

/** Resolves the ordinary composer guide without coupling it to connection state. */
export function resolveComposerGuidePlaceholder(
  isDraftHeroState: boolean,
  fallbackPlaceholder = "Ask anything...",
): string {
  if (isDraftHeroState) {
    return PERSONAL_UI.newThreadComposerPlaceholder;
  }
  if (PERSONAL_UI.hideComposerGuide) {
    return translateZhCnUiText("Ask for follow-up changes");
  }
  return translateZhCnUiText(fallbackPlaceholder);
}
