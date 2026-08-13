#!/bin/zsh
set -euo pipefail

# 覆盖 /Applications/T3 Code.app。必须先完全退出 T3 Code，再跑。
# 前置：本机已打好并签名 staging，路径写在仓库 .desktop-stage-app-path。

ROOT="${T3CODE_ROOT:-$HOME/developer/t3code}"
cd "$ROOT"

STAGE_FILE="$ROOT/.desktop-stage-app-path"
if [[ ! -f "$STAGE_FILE" ]]; then
  echo "找不到 $STAGE_FILE。先把桌面包打到 staging 并签名。" >&2
  exit 1
fi

APP="$(cat "$STAGE_FILE")"
if [[ ! -d "$APP" ]]; then
  echo "staging App 不在了：$APP" >&2
  exit 1
fi

if pgrep -x "T3 Code" >/dev/null 2>&1 || pgrep -f "/Applications/T3 Code.app/Contents/MacOS" >/dev/null 2>&1; then
  echo "T3 Code 还在跑。先退出应用（Command+Q），再跑这条命令。" >&2
  exit 2
fi

echo "staging: $APP"
codesign --verify --deep --strict "$APP"

BAK_DIR="$ROOT/.desktop-install-bak"
rm -rf "$BAK_DIR"
mkdir -p "$BAK_DIR"

if [[ -d "/Applications/T3 Code.app" ]]; then
  mv "/Applications/T3 Code.app" "$BAK_DIR/T3 Code.app"
fi

cp -R "$APP" "/Applications/T3 Code.app"
codesign --verify --deep --strict "/Applications/T3 Code.app"

echo "已覆盖 /Applications/T3 Code.app"
open "/Applications/T3 Code.app"
rm -rf "$BAK_DIR"
echo "备份已清。打开新窗口验收即可。"
