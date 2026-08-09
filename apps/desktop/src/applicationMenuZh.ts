// Simplified Chinese labels for the Electron application menu.
// Keep native roles for behavior, but provide explicit labels so the menu does
// not fall back to the macOS system language.

import type { MenuItemConstructorOptions } from "electron";

export function buildZhEditMenu(): MenuItemConstructorOptions {
  const submenu: MenuItemConstructorOptions[] = [
    { label: "撤销", role: "undo" },
    { label: "重做", role: "redo" },
    { type: "separator" },
    { label: "剪切", role: "cut" },
    { label: "拷贝", role: "copy" },
    { label: "粘贴", role: "paste" },
    { label: "粘贴并匹配样式", role: "pasteAndMatchStyle" },
    { label: "删除", role: "delete" },
    { label: "全选", role: "selectAll" },
  ];
  if (process.platform === "darwin") {
    submenu.push(
      { type: "separator" },
      { label: "开始朗读", role: "startSpeaking" },
      { label: "停止朗读", role: "stopSpeaking" },
    );
  }
  return { label: "编辑", submenu };
}
export function buildZhWindowMenu(): MenuItemConstructorOptions {
  return {
    label: "窗口",
    submenu: [
      { label: "最小化", role: "minimize" },
      { label: "缩放", role: "zoom" },
      { type: "separator" },
      { label: "前置全部窗口", role: "front" },
    ],
  };
}

export function buildZhViewMenu(input: {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}): MenuItemConstructorOptions {
  return {
    label: "视图",
    submenu: [
      { label: "重新加载", role: "reload" },
      { label: "强制重新加载", role: "forceReload" },
      { label: "开发者工具", role: "toggleDevTools" },
      { type: "separator" },
      { label: "实际大小", accelerator: "CmdOrCtrl+0", click: input.resetZoom },
      { label: "放大", accelerator: "CmdOrCtrl+=", click: input.zoomIn },
      {
        label: "放大",
        accelerator: "CmdOrCtrl+Plus",
        visible: false,
        click: input.zoomIn,
      },
      { label: "缩小", accelerator: "CmdOrCtrl+-", click: input.zoomOut },
      { type: "separator" },
      { label: "切换全屏", role: "togglefullscreen" },
    ],
  };
}
