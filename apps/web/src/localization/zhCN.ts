// FILE: zhCN.ts
// Purpose: Web entrypoint for the Chinese localization layer.
// The translation dictionary and tool-flow chrome logic live in the shared
// @t3tools/zh-locale package (single source of truth). This file only keeps the
// web-specific MutationObserver installer and re-exports the pure translators.

import {
  translateExact,
  translateZhCnUiText,
  translateZhCnWhenExpression,
} from "@t3tools/zh-locale";

export { translateExact, translateZhCnUiText, translateZhCnWhenExpression };

const LOCALIZABLE_ATTRIBUTES = [
  "aria-label",
  "aria-valuetext",
  "title",
  "placeholder",
  "data-tooltip-content",
] as const;
const SKIPPED_TAGS = new Set(["CODE", "KBD", "PRE", "SAMP", "SCRIPT", "STYLE", "TEXTAREA"]);

function isUiNode(node: Node): boolean {
  const parent = node.parentElement;
  return Boolean(
    parent &&
    !SKIPPED_TAGS.has(parent.tagName) &&
    !parent.closest(
      "[contenteditable='true'], [data-translation-skip='true'], .chat-markdown, [data-user-message-body='true']",
    ),
  );
}

function replaceTextNode(node: Text): void {
  if (!node.nodeValue) return;
  const original = node.nodeValue;
  const allowDiffSeparator = /^\s*\d+\s+unmodified lines?\s*$/.test(original);
  if (!isUiNode(node) && !allowDiffSeparator) return;
  const leading = original.trim() === "(default)" ? "" : (original.match(/^\s*/)?.[0] ?? "");
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  const translated = translateExact(original.trim());
  if (translated !== original.trim()) node.nodeValue = `${leading}${translated}${trailing}`;
}

function replaceElementAttributes(element: Element): void {
  if (element.closest("[data-translation-skip='true']")) return;
  for (const attribute of LOCALIZABLE_ATTRIBUTES) {
    const value = element.getAttribute(attribute);
    if (!value) continue;
    const translated = translateExact(value);
    if (translated !== value) element.setAttribute(attribute, translated);
  }
}

function localizeSubtree(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) return replaceTextNode(node as Text);
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const element = node as Element;
  replaceElementAttributes(element);
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  for (let textNode = walker.nextNode(); textNode; textNode = walker.nextNode())
    replaceTextNode(textNode as Text);
  for (const descendant of element.querySelectorAll(
    "[aria-label], [title], [placeholder], [data-tooltip-content]",
  ))
    replaceElementAttributes(descendant);
}

/** Covers normal DOM plus portalled menus, dialogs, and toasts without touching runtime content. */
export function installZhCnUiLocalization(): void {
  document.documentElement.lang = "zh-CN";
  document.documentElement.dataset.locale = "zh-CN";
  localizeSubtree(document.documentElement);
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "characterData") replaceTextNode(record.target as Text);
      else if (record.type === "attributes" && record.target instanceof Element)
        replaceElementAttributes(record.target);
      else for (const node of record.addedNodes) localizeSubtree(node);
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: [...LOCALIZABLE_ATTRIBUTES],
  });
}
