// Simplified Chinese copy for native Electron dialogs in the personal fork.

const DIALOG_TEXT: Readonly<Record<string, string>> = {
  OK: "确定",
  Yes: "是",
  No: "否",
  Cancel: "取消",
  Discard: "放弃",
  Save: "保存",
  "Don't Save": "不保存",
  Close: "关闭",
  Open: "打开",
  Install: "安装",
  Download: "下载",
  Retry: "重试",
  "You're up to date!": "已是最新版本！",
  "Update check failed": "检查更新失败",
  "Updates unavailable": "更新不可用",
  "Automatic updates are not available right now.": "当前无法使用自动更新。",
  "Could not check for updates.": "无法检查更新。",
  "An unknown error occurred. Please try again later.": "发生未知错误，请稍后重试。",
  "T3 Code failed to start": "T3 Code 启动失败",
  "WSL backend is still unavailable": "WSL 后端仍不可用",
  "WSL backend couldn't start": "WSL 后端无法启动",
  "This action cannot be undone.": "此操作无法撤销。",
  "This permanently clears conversation history for this thread.": "将永久清除此对话的历史记录。",
  "This permanently clears conversation history for these threads.":
    "将永久清除这些对话的历史记录。",
  "Delete worktree?": "删除工作树？",
  "This removes only this project entry.": "这只会移除项目记录。",
  "Delete the worktree too?": "同时删除工作树吗？",
  "Restore default settings?": "恢复默认设置吗？",
  "Turn on token-by-token output?": "要开启逐令牌输出吗？",
  "Could not start.": "无法启动。",
  Copy: "复制",
  "Copy Path": "复制路径",
  "Copy path": "复制路径",
  "Copy Thread ID": "复制对话 ID",
  "Copy branch": "复制分支",
  Delete: "删除",
  Rename: "重命名",
  "Rename thread": "重命名对话",
  "Pin thread": "固定对话",
  "Unpin thread": "取消固定对话",
  "Settle thread": "收起对话",
  "Un-settle thread": "取消收起对话",
  Snooze: "暂缓",
  "Wake thread": "唤醒对话",
  "Regenerate title": "重新生成标题",
  "Regenerating…": "正在重新生成标题…",
  "Mark unread": "标记为未读",
  "This evening": "今天傍晚",
  Tomorrow: "明天",
  "Next week": "下周",
};

function translateLine(value: string): string {
  const exact = DIALOG_TEXT[value];
  if (exact) return exact;

  let match = /^T3 Code (.+) is currently the newest version available\.$/.exec(value);
  if (match) return `T3 Code ${match[1]} 当前已是最新版本。`;
  match = /^Delete thread "(.+)"\?$/.exec(value);
  if (match) return `删除对话「${match[1]}」？`;
  match = /^Delete (\d+) threads?\?$/.exec(value);
  if (match) return `删除 ${match[1]} 个对话？`;
  match = /^Archive (\d+) threads?\?$/.exec(value);
  if (match) return `归档 ${match[1]} 个对话？`;
  match = /^Remove project "(.+)" and delete its (\d+) threads?\?$/.exec(value);
  if (match) return `移除项目「${match[1]}」并删除其中 ${match[2]} 个对话？`;
  match = /^Remove project "(.+)"\?$/.exec(value);
  if (match) return `移除项目「${match[1]}」？`;
  match = /^Archive thread "(.+)"\?$/.exec(value);
  if (match) return `归档对话「${match[1]}」？`;
  match = /^Path: (.+)$/.exec(value);
  if (match) return `路径：${match[1]}`;
  match = /^Environment: (.+)$/.exec(value);
  if (match) return `环境：${match[1]}`;
  match = /^Send SIGKILL to process (\d+)\? This cannot be handled by the process\.$/.exec(value);
  if (match) return `向进程 ${match[1]} 发送 SIGKILL？该进程无法处理此信号。`;
  match = /^Revert this thread to checkpoint (\d+)\?$/.exec(value);
  if (match) return `将此对话恢复到检查点 ${match[1]}？`;
  match = /^New thread on (.+)$/.exec(value);
  if (match) return `在 ${match[1]} 上新建对话`;
  match =
    /^(In \d+ (?:minute|minutes|hour|hours|day|days|week|weeks)|This evening|Tomorrow|Next week) \((.+)\)$/.exec(
      value,
    );
  if (match) return `${translateLine(match[1]!)}（${match[2]}）`;
  match = /^In (\d+) (minute|minutes|hour|hours|day|days|week|weeks)$/.exec(value);
  if (match) {
    const unit =
      {
        minute: "分钟",
        minutes: "分钟",
        hour: "小时",
        hours: "小时",
        day: "天",
        days: "天",
        week: "周",
        weeks: "周",
      }[match[2]!] ?? match[2];
    return `${match[1]} ${unit}后`;
  }
  match = /^(Mark unread|Delete|Archive|Settle|Regenerate titles|Regenerating…) \((\d+)\)$/.exec(
    value,
  );
  if (match) {
    const labels: Record<string, string> = {
      "Mark unread": "标记为未读",
      Delete: "删除",
      Archive: "归档",
      Settle: "收起对话",
      "Regenerate titles": "重新生成标题",
      "Regenerating…": "正在重新生成标题",
    };
    return `${labels[match[1]!] ?? match[1]}（${match[2]}）`;
  }
  match = /^Snooze \((\d+)\)$/.exec(value);
  if (match) return `暂缓（${match[1]}）`;
  if (value === "This will discard newer messages and turn diffs in this thread.") {
    return "这会丢弃此对话中较新的消息和回合差异。";
  }
  if (value === "Falling back to the Windows backend so T3 Code can open.") {
    return "将回退到 Windows 后端，以便 T3 Code 能够打开。";
  }
  return value;
}

export function translateDesktopUiText(value: string): string {
  return value
    .split("\n")
    .map((line) => translateLine(line))
    .join("\n");
}

export function translateMessageBoxOptions<
  Options extends {
    readonly title?: string;
    readonly message: string;
    readonly detail?: string;
    readonly buttons?: readonly string[];
  },
>(options: Options): Options {
  return {
    ...options,
    ...(options.title === undefined ? {} : { title: translateDesktopUiText(options.title) }),
    message: translateDesktopUiText(options.message),
    ...(options.detail === undefined ? {} : { detail: translateDesktopUiText(options.detail) }),
    ...(options.buttons === undefined
      ? {}
      : { buttons: options.buttons.map((button) => translateDesktopUiText(button)) }),
  } as Options;
}
