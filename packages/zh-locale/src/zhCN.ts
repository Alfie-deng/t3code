// FILE: zhCN.ts
// Purpose: Single source of truth for the T3 Code Chinese localization layer.
// Boundary: UI chrome, workflow/tool-call titles, and runtime chrome are translated;
// user content, code, terminal output, paths, URLs, model names, and server diagnostics
// remain untouched. This module is DOM-free and shared by web (MutationObserver install)
// and mobile (render-time t()). All localization edits belong here, not in per-app copies.

const UI_TEXT: Readonly<Record<string, string>> = {
  "Add action": "添加操作",
  "Add Action": "添加操作",
  Actions: "操作",
  "Recent Threads": "最近对话",
  Directories: "文件夹",
  Select: "选择",
  "No matching actions.": "没有匹配的操作。",
  "No matching commands, projects, or threads.": "没有匹配的命令、项目或对话。",
  "Search commands, projects, and threads...": "搜索命令、项目和对话…",
  "Enter project path (e.g. ~/projects/my-app)": "输入项目路径（例如 ~/projects/my-app）",
  "Search...": "搜索…",
  "Enter path (e.g. ~/projects/my-app)": "输入路径（例如 ~/projects/my-app）",
  "Add panel": "添加面板",
  "Add project": "添加项目",
  All: "全部",
  Retry: "重试",
  "Retry cancel": "重试取消",
  "Loading branches…": "正在加载分支…",
  "No branches available": "没有可用的分支",
  Read: "已读",
  File: "文件",
  Panel: "面板",
  Source: "源码",
  Custom: "自定义",
  "Built-in": "内置",
  Plugins: "插件",
  Subagents: "子智能体",
  "Check updates": "检查更新",
  "Checking...": "正在检查…",
  Preparing: "正在准备",
  "Updating...": "正在更新…",
  "Saving...": "正在保存…",
  "Save changes": "保存更改",
  "Delete action": "删除操作",
  "Delete threads": "删除对话",
  "Delete draft": "删除草稿",
  "Thread deleted": "对话已删除",
  "Thread created": "已创建对话",
  "Open thread": "打开对话",
  "Open source thread": "打开来源对话",
  "Sent by T3 Code from another thread": "由 T3 Code 从其他对话自动发送",
  "Create project": "创建项目",
  "Thread restored": "对话已恢复",
  "Archived now": "刚刚归档",
  "or view archived chats in": "，或前往",
  "Cursor update finished": "Cursor 更新完成",
  "Finished working.": "已完成工作。",
  "Cursor provider status": "Cursor 提供商状态",
  "Cursor Agent is authenticated, but model discovery timed out before T3 Code could verify available models.":
    "Cursor Agent 已通过认证，但模型发现超时，T3 Code 无法确认可用模型。",
  "Dismiss provider status": "关闭提供商状态提示",
  "Checking Grok CLI availability...": "正在检查 Grok CLI 可用性…",
  "Provider is temporarily degraded.": "提供商暂时降级。",
  "Change model": "更改模型",
  "Add new project": "添加新项目",
  "New project": "新建项目",
  "Don't work in a project": "不在项目中工作",
  "Adding project...": "正在添加项目…",
  "Opening folder picker...": "正在打开文件夹选择器…",
  "Loading folders…": "正在加载文件夹…",
  "No folders found": "未找到文件夹",
  "No matches": "没有匹配项",
  "Folders on this PC": "此电脑上的文件夹",
  "Folders on this Mac": "此 Mac 上的文件夹",
  "Folders on this System": "此系统上的文件夹",
  "Updating providers...": "正在更新提供商…",
  "Provider updates failed": "提供商更新失败",
  "Some provider updates failed": "部分提供商更新失败",
  "New sessions will use the refreshed provider tools.": "新对话将使用更新后的提供商工具。",
  "New sessions will use the refreshed provider.": "新对话将使用更新后的提供商。",
  "The provider update did not complete.": "提供商更新未完成。",
  "Review updates": "查看更新",
  "Update all": "全部更新",
  "Copy the command below to update manually in a terminal.": "请复制下方命令，在终端中手动更新。",
  "Copy the commands below to update manually in a terminal.": "请复制下方命令，在终端中手动更新。",
  "The update command did not complete successfully.": "更新命令未成功完成。",
  "The provider still appears outdated after updating.": "更新后提供商仍显示为过时版本。",
  "The update request failed.": "更新请求失败。",
  "The provider update request could not start.": "无法启动提供商更新请求。",
  "The provider update failed.": "提供商更新失败。",
  "A newer version is available, but T3 Code could not identify a safe one-click update command for this installation.":
    "有新版本可用，但 T3 Code 无法为此安装识别安全的一键更新命令。",
  "Provider update checks": "提供商更新检查",
  "CLI update checks": "CLI 更新检查",
  "Command:": "命令：",
  "Source folder": "源文件夹",
  "Drop a folder here, or browse": "将文件夹拖到这里，或点击浏览",
  "Opening the folder picker…": "正在打开文件夹选择器…",
  "Project folder path": "项目文件夹路径",
  "/path/to/project": "输入项目路径",
  Space: "空间",
  "Drop a folder, not a file.": "请拖入文件夹，而不是文件。",
  "Could not read the folder's path. Use browse or type it instead.":
    "无法读取文件夹路径。请点击浏览或手动输入。",
  "Unable to open the folder picker.": "无法打开文件夹选择器。",
  "Type a folder path, or drop a folder above.": "请输入文件夹路径，或将文件夹拖到上方。",
  "An error occurred while adding the project.": "添加项目时发生错误。",
  Restore: "恢复",
  Maximize: "最大化",
  "Close panel": "关闭面板",
  "Close plan sidebar": "关闭计划侧边栏",
  "Close image preview": "关闭图片预览",
  "Close search (Esc)": "关闭搜索（Esc）",
  "Add to chat": "添加到对话",
  "Remove attachment": "移除附件",
  "Remove comments": "移除评论",
  "Remove selections": "移除所选内容",
  "1 referenced selection": "1 条引用",
  "Referenced selections": "引用",
  "Referenced assistant selection": "引用的助手回复",
  "Referenced assistant selections": "引用的助手回复",
  "assistant selection": "助手引用",

  // Thread / toast / action errors — keep these exact; banners and toasts match full strings.
  "Action failed": "操作失败",
  "Copy failed": "复制失败",
  "Sync failed": "同步失败",
  "Sign out failed": "退出登录失败",
  "Open user menu": "打开用户菜单",
  "Manage account": "管理账户",
  "Sign out": "退出登录",
  "Signed in": "已登录",
  "T3 Code works locally without signing in. Cloud features are optional.":
    "T3 Code 无需登录即可在本地工作，云端功能为可选。",
  "Brings back the original grouped thread list. The default list is flat, in creation order: active work renders as cards; settled threads collapse to compact rows.":
    "恢复原始的分组对话列表。默认列表为平铺按创建时间排序：活跃工作以卡片显示，已完结的对话折叠为紧凑行。",
  Configuration: "配置",
  Legacy: "旧版",
  "Account panel": "账户面板",
  "Secured by": "安全服务由",
  Passkeys: "通行密钥",
  "Add a passkey": "添加通行密钥",
  "Repair failed": "修复失败",
  Interrupted: "已中断",
  "Last run failed": "上次运行失败",
  "Pull request action failed": "拉取请求操作失败",
  "Blocker already cleared": "阻塞已清除",
  "Base branch unavailable": "基准分支不可用",
  "Tracked, staged, and untracked worktree changes": "已跟踪、已暂存和未跟踪的工作树更改",
  "Branch is behind upstream": "分支落后于上游",
  "Branch created and checked out.": "已创建并切换到该分支。",
  "Branch name confirmed.": "分支名称已确认。",
  ahead: "领先",
  behind: "落后",
  "behind upstream": "落后上游",
  "Branches & worktrees": "分支和工作树",
  "Checking status": "正在检查状态",
  "Choose how to continue.": "选择如何继续。",
  Clean: "无更改",
  "Commit message": "提交消息",
  "Commit, files, branches": "提交、文件、分支",
  "Confirm action": "确认操作",
  "Default branch": "默认分支",
  "Excluded from this commit": "已从本次提交中排除",
  "Existing branches": "现有分支",
  Exited: "已退出",
  "Git unavailable": "Git 不可用",
  "Inspect turn diffs, worktree changes, and base branch diff":
    "查看回合差异、工作树更改和基础分支差异",
  "Loading branch status…": "正在加载分支状态…",
  "Loading branches...": "正在加载分支...",
  "Local branch": "本地分支",
  "more files": "更多文件",
  "New branch": "新分支",
  "No changed files are available to commit.": "没有可提交的已更改文件。",
  "No local branches found.": "未找到本地分支。",
  "No open PR": "没有打开的 PR",
  "No project scripts": "没有项目脚本",
  "Not a git repository": "不是 Git 仓库",
  "Not a repo": "不是仓库",
  "Not started": "未启动",
  open: "已打开",
  "Pull latest": "拉取最新",
  Ready: "就绪",
  "Run action on default branch?": "在默认分支上运行操作？",
  selected: "已选择",
  "Start another shell for this thread": "为此对话启动另一个 shell",
  "Switch branch, create branch, or move to a worktree": "切换分支、创建分支或移动到工作树",
  "Task running": "任务运行中",
  "The pull request could not be opened.": "无法打开拉取请求。",
  "This action is unavailable.": "此操作不可用。",
  "This branch does not have an open pull request.": "此分支没有打开的拉取请求。",
  "This project has no saved scripts yet": "该项目还没有已保存的脚本",
  "This workspace is not a git repository.": "此工作区不是 Git 仓库。",
  "Turn diffs and worktree changes": "查看差异和工作树更改",
  "Unable to open PR": "无法打开 PR",
  "Warning: this is the default branch.": "警告：这是默认分支。",
  "Changes saved, but not reapplied.": "更改已保存，但未能重新应用。",
  "Cannot switch branches.": "无法切换分支。",
  "AppSnap failed": "AppSnap 失败",
  "AppSnap setup failed": "AppSnap 设置失败",
  "AppSnap could not be added": "无法添加 AppSnap",
  "AppSnap requires the T3 Code desktop app on macOS.":
    "AppSnap 需要在 macOS 上使用 T3 Code 桌面版。",
  "Finish AppSnap setup": "完成 AppSnap 设置",
  "Could not configure AppSnap.": "无法配置 AppSnap。",
  "Permission check failed.": "权限检查失败。",
  "Could not check AppSnap permissions": "无法检查 AppSnap 权限",
  "Claude command discovery failed. Please try again.": "Claude 命令发现失败，请重试。",
  "Could not archive thread": "无法归档对话",
  "Could not compact thread": "无法压缩对话",
  "Could not copy command": "无法复制命令",
  "Could not copy plan": "无法复制计划",
  "Could not copy pull request link": "无法复制拉取请求链接",
  "Could not create automation": "无法创建自动化工作流",
  "Could not create chat": "无法创建对话",
  "Could not create handoff thread": "无法创建交接对话",
  "Could not create marker.": "无法创建标记。",
  "Could not delete action": "无法删除操作",
  "Could not delete thread": "无法删除对话",
  "Could not delete worktree": "无法删除工作树",
  "Dirty worktree": "工作树有未提交更改",
  "Could not download plan": "无法下载计划",
  "Could not export plan": "无法导出计划",
  "Could not export thread": "无法导出对话",
  "Could not find the selected message.": "找不到所选消息。",
  "Could not fork thread": "无法派生对话",
  "Could not open repository": "无法打开仓库",
  "Could not post comment": "无法发表评论",
  "Could not process that image.": "无法处理该图片。",
  "Could not refresh pull requests": "无法刷新拉取请求",
  "Could not remove marker.": "无法移除标记。",
  "Could not rename marker.": "无法重命名标记。",
  "Could not render the image.": "无法渲染该图片。",
  "Could not restore thread": "无法恢复对话",
  "Could not send draft": "无法发送草稿",
  "Could not send feedback": "无法发送反馈",
  "Could not start Side": "无法启动侧边对话",
  "Could not start implementation thread": "无法启动实施对话",
  "Could not start recording": "无法开始录音",
  "Could not start review": "无法开始审查",
  "Could not stop the current response": "无法停止当前回复",
  "Could not unblock thread": "无法解除对话阻塞",
  "Could not update access mode": "无法更新访问模式",
  "Could not update automation proposal": "无法更新自动化工作流提案",
  "Could not update marker.": "无法更新标记。",
  "Could not update plan mode": "无法更新计划模式",
  "Could not update pull request pin": "无法更新拉取请求置顶",
  "Could not verify linked conversations": "无法验证关联对话",
  "Copy error message": "复制错误信息",
  "Copied error message": "已复制错误信息",
  "Dismiss error": "关闭错误",
  "Unblock thread": "解除对话阻塞",
  "Unblocking…": "正在解除阻塞…",
  "Failed to archive threads": "归档对话失败",
  "Failed to copy path": "复制路径失败",
  "Failed to copy thread ID": "复制对话 ID 失败",
  "Failed to create branch": "创建分支失败",
  "Failed to create branch.": "创建分支失败。",
  "Failed to delete threads": "删除对话失败",
  "Failed to edit message.": "编辑消息失败。",
  "Failed to load checkpoint diff.": "加载检查点差异失败。",
  "Failed to rename project": "重命名项目失败",
  "Failed to rename thread": "重命名对话失败",
  "Failed to revert thread state.": "恢复对话状态失败。",
  "Failed to save notes": "保存备注失败",
  "Failed to send message.": "发送消息失败。",
  "Failed to send plan follow-up.": "发送计划跟进失败。",
  "Failed to stash and switch.": "暂存并切换分支失败。",
  "Failed to stop run": "停止运行失败",
  "Failed to submit approval decision.": "提交审批决定失败。",
  "Failed to submit user input.": "提交用户输入失败。",
  "Failed to undo file changes.": "撤销文件更改失败。",
  "Failed to update pinned message": "更新置顶消息失败",
  "Git could not update the repository index. Retry after any current Git operation finishes.":
    "Git 无法更新仓库索引。请等当前 Git 操作结束后再试。",
  "Git index could not be written.": "无法写入 Git 索引。",
  "Interrupt the current turn before reverting checkpoints.": "请先中断当前回合，再恢复检查点。",
  "Interrupt the current turn before undoing file changes.": "请先中断当前回合，再撤销文件更改。",
  "Only the latest rollbackable user message can be edited.": "只能编辑最新一条可回滚的用户消息。",
  "Wait for the current send to start before editing.": "请等当前发送开始后再编辑。",
  "Select a base branch before sending in New worktree mode.":
    "在「新建工作树」模式下发送前，请先选择基准分支。",
  "T3 Code could not promote this draft before saving the automation.":
    "保存自动化工作流前，T3 Code 无法提升此草稿。",
  "T3 Code switched branches and kept your changes in a stash because they could not be restored onto this branch cleanly.":
    "T3 Code 已切换分支，并将你的更改保存在暂存区，因为它们无法干净地恢复到当前分支。",
  "The automation was created, but T3 Code could not add the activity note.":
    "自动化工作流已创建，但 T3 Code 无法添加活动备注。",
  "Thread deleted, but worktree removal failed": "对话已删除，但工作树移除失败",
  "Thread has a streaming message. Wait for the current response to finish before exporting.":
    "对话仍有流式消息。请等当前回复结束后再导出。",
  "Thread is still running. Wait for the current turn to finish before exporting.":
    "对话仍在运行。请等当前回合结束后再导出。",
  "Thread title cannot be empty": "对话标题不能为空",
  "Thread is blocked by an earlier provider failure": "对话因先前的提供商失败而被阻塞",
  "Unable to copy the theme share string.": "无法复制主题分享字符串。",
  "Unable to import that theme string.": "无法导入该主题字符串。",
  "Unable to load folders.": "无法加载文件夹。",
  "Unable to move project": "无法移动项目",
  "Unable to open PR link": "无法打开拉取请求链接",
  "Unable to open file": "无法打开文件",
  "Unable to open folder": "无法打开文件夹",
  "Unable to open in Finder": "无法在 Finder 中打开",
  "Unable to open keybindings file": "无法打开快捷键文件",
  "Unable to open project": "无法打开项目",
  "Unable to open terminal": "无法打开终端",
  "Unable to refresh provider status": "无法刷新提供商状态",
  "Exporting plans requires the desktop app.": "导出计划需要使用桌面版应用。",
  "Another session settled the failure. Resend your last message to continue.":
    "另一会话已处理该失败。请重新发送上一条消息以继续。",
  "Answer plan questions before recording a voice note.": "请先回答计划问题，再录制语音备注。",
  "Attach files after answering plan questions.": "请先回答计划问题，再附加文件。",
  "Attach images after answering plan questions.": "请先回答计划问题，再附加图片。",
  "The provider rejected the prompt.": "提供商拒绝了该提示。",

  "Remove marker": "移除标记",
  "Cancel turn": "取消本轮",
  "Cancel voice note": "取消语音备注",
  "Transcribing voice note": "正在转写语音备注",
  "Couldn't transcribe voice note": "无法转写语音备注",
  "Voice transcription failed": "语音转写失败",
  "The voice note could not be transcribed.": "无法转写该语音备注。",
  "Sign in to ChatGPT again": "请重新登录 ChatGPT",
  "Voice transcription uses your ChatGPT session in Codex. That session was rejected, so sign in again there and retry.":
    "语音转写使用 Codex 中的 ChatGPT 会话。该会话已被拒绝，请在 Codex 重新登录后再试。",
  "Refresh status": "刷新状态",
  "Full Plan": "完整计划",
  "Hide files sidebar": "隐藏文件侧边栏",
  "Hide search sidebar": "隐藏搜索侧边栏",
  "Review files": "审阅文件",
  "Filter files": "筛选文件",
  "Hide file tree": "隐藏文件树",
  "Show file tree": "显示文件树",
  "No matching files.": "没有匹配的文件。",
  "Could not load directory.": "无法加载目录。",
  "Previous page": "上一页",
  "Next page": "下一页",
  "Fit width": "适合宽度",
  "Fit page": "适合页面",
  "Current page": "当前页",
  "All turns": "所有轮次",
  Turns: "轮次",
  "Choose diff source": "选择差异来源",
  "Diff source": "差异来源",
  "Diff not ready": "差异未就绪",
  "Diff view options": "差异视图选项",
  "Copy diff": "复制差异",
  "Copied diff": "已复制差异",
  "Jump to file": "跳转到文件",
  "Git actions": "Git 操作",
  Commit: "提交",
  "Git action options": "Git 操作选项",
  "Choose turn diff": "选择轮次差异",
  "Move to its own terminal tab": "移到独立终端标签页",
  "Collapse terminal into chat drawer": "将终端收回对话抽屉",
  "Collapse side panel": "收起侧边面板",
  "Open side panel": "打开侧边面板",
  "Actions are project-scoped commands you can run from the top bar or keybindings.":
    "操作是项目级命令，可从顶部工具栏或快捷键运行。",
  Name: "名称",
  "Choose icon": "选择图标",
  "Press shortcut": "按下快捷键",
  "Press a shortcut. Use": "按下快捷键。使用",
  Backspace: "退格键",
  "to clear.": "以清除。",
  "Save action": "保存操作",
  "Run automatically on worktree creation": "创建工作树时自动运行",
  "Resize Sidebar": "调整侧边栏宽度",
  "Drag to resize sidebar": "拖动以调整侧边栏宽度",
  "Copy message": "复制消息",
  "Edit message": "编辑消息",
  "Pin message": "固定消息",
  "Change model and reasoning": "更改模型和思考强度",
  "Record voice note": "录制语音备注",
  "Toggle environment panel": "切换环境面板",
  "Toggle diff panel": "切换差异面板",
  "Toggle browser panel": "切换侧边浏览器",
  "Collapse panel": "收起面板",
  "Toggle Sidebar": "切换侧边栏",
  Apply: "应用",
  Archive: "归档",
  Archived: "已归档",
  Automations: "自动化工作流",
  Back: "后退",
  Browse: "浏览",
  "Type path": "输入路径",
  "Cancel add project": "取消添加项目",
  "Edit project": "编辑项目",
  "Open in Finder": "在 Finder 中打开",
  "Open in Kanban": "在看板中打开",
  "Start dev": "启动开发",
  "Edit name": "编辑名称",
  "Pin project": "固定项目",
  Browser: "浏览器",
  Cancel: "取消",
  Chat: "对话",
  Chats: "对话",
  "Choose Chat": "选择对话",
  Clear: "清除",
  Close: "关闭",
  Code: "代码",
  Collapse: "收起",
  "Command palette": "命令面板",
  "Composer extras": "输入框扩展功能",
  Confirm: "确认",
  Continue: "继续",
  Copy: "复制",
  "Copy Path": "复制路径",
  "Copy Thread ID": "复制对话 ID",
  Create: "创建",
  "Create handoff thread": "创建交接对话",
  Current: "当前",
  Dark: "深色",
  Day: "日期",
  "Default permissions": "默认权限",
  Delete: "删除",
  Details: "详情",
  Diff: "差异",
  Done: "已完成",
  "Download manually": "手动下载",
  Edit: "编辑",
  Editor: "编辑器",
  "Editor view": "编辑器视图",
  Effort: "思考强度",
  Every: "每隔",
  Expand: "展开",
  Explorer: "文件浏览",
  Export: "导出",
  Files: "文件",
  "Cloning…": "正在克隆…",
  "Creating…": "正在创建…",
  "Clone and add": "克隆并添加",
  "Fork Into Local": "派生到本地",
  "Fork Into New Worktree": "派生到新工作树",
  Git: "Git",
  "Hand off thread": "交接对话",
  Hide: "隐藏",
  Home: "主页",
  Implement: "实施",
  Import: "导入",
  "Import thread from...": "导入对话自…",
  Kanban: "看板",
  Light: "浅色",
  "Loading...": "加载中…",
  Local: "本地",
  Low: "低",
  Medium: "中",
  High: "高",
  "Extra High": "极高",
  // Max / Ultra family stay English — AI effort jargon, not UI chrome.
  Max: "Max",
  Maximum: "Maximum",
  Ultra: "Ultra",
  Ultrathink: "Ultrathink",
  Ultracode: "Ultracode",
  None: "无",
  Minimal: "最低",
  "(default)": "（默认）",
  Default: "默认",
  Fast: "快速",
  "Fast mode": "快速模式",
  "Fast Mode": "快速模式",
  "Plan Mode": "计划模式",
  "Default Mode": "默认模式",
  "Compact Context": "压缩上下文",
  "Code Review": "代码审查",
  Sidechat: "侧边对话",
  Fork: "派生",
  "Feedback T3 Code": "反馈 T3 Code",
  Automation: "自动化",
  Plugin: "插件",
  "delegate task to subagent": "委派任务给子智能体",
  "Start a fresh thread and clear the current conversation context": "新建对话并清除当前上下文",
  "Compact the current thread context to free space": "压缩当前对话上下文以腾出空间",
  "Switch response model for this thread": "切换此对话的回复模型",
  "Switch this thread into plan mode": "将此对话切换到计划模式",
  "Switch this thread back to normal chat mode": "将此对话切回普通对话模式",
  "Start a code review for current changes": "对当前更改启动代码审查",
  "Fork this thread into local or a new worktree": "将此对话派生到本地或新工作树",
  "Open a guarded Side from this thread": "从此对话打开受保护的侧边对话",
  "Show context usage and rate-limit status": "显示上下文用量与速率限制状态",
  "Insert a prompt that asks the assistant to delegate work": "插入一段提示词，让助手委派工作",
  "Turn fast mode on or off for this thread": "开启或关闭此对话的快速模式",
  "Download this thread as a ZIP archive (thread.json + transcript.md)":
    "将此对话下载为 ZIP 归档（thread.json + transcript.md）",
  "Send feedback to the T3 Code team": "向 T3 Code 团队发送反馈",
  "Create a scheduled automation from this prompt": "根据此提示词创建定时自动化工作流",
  "Browse folders on this computer": "浏览本机文件夹",
  "Type to search for files": "输入以搜索文件",
  "Searching mentions...": "正在搜索提及…",
  "Loading skills...": "正在加载技能…",
  "Loading commands...": "正在加载命令…",
  "No matching plugin, chat, or file.": "没有匹配的插件、对话或文件。",
  "No matching skill.": "没有匹配的技能。",
  "No matching command.": "没有匹配的命令。",
  "Fast mode on": "快速模式已开启",
  "Fast mode off": "快速模式已关闭",
  "Fast mode is unavailable": "快速模式不可用",
  "The selected model does not support Fast mode.": "当前模型不支持快速模式。",
  "Fast mode could not be checked": "无法检查快速模式状态",
  Options: "选项",
  Speed: "速度",
  "Change effort, context, and speed": "修改思考强度、上下文和速度",
  "Fast responses with lighter reasoning": "响应更快，使用较轻量的推理",
  "Balances speed and reasoning depth for everyday tasks": "兼顾速度与推理深度，适合日常任务",
  "Greater reasoning depth for complex problems": "提高推理深度，适合复杂问题",
  "Extra high reasoning depth for complex problems": "极高推理深度，适合复杂问题",
  "Maximum reasoning": "Max 思考强度",
  "Maximum reasoning depth for the hardest problems": "Max 思考深度，适合最难问题",
  "Maximum reasoning with automatic task delegation": "Max 思考强度，并自动委派任务",
  "Extra high reasoning": "极高思考强度",
  "xhigh + workflows": "极高 + 工作流",
  "Max iterations": "最大迭代次数",
  Model: "模型",
  More: "更多",
  "New chat": "新建对话",
  "All activity": "全部活动",
  "Activity view": "活动视图",
  "Activity options": "活动选项",
  "Activity scope": "活动范围",
  "Filter activity by project": "按项目筛选活动",
  "See running tasks, completed work, and anything that needs your attention.":
    "查看运行中的任务、已完成的工作和需要你关注的事项。",
  "Build, debug, and ship": "构建、调试并交付",
  Yesterday: "昨天",
  Earlier: "更早",
  "Group by": "分组方式",
  "Mark all as read": "全部标为已读",
  "No activity yet": "还没有活动",
  "No activity in T3 Code chats": "T3 Code 对话中还没有活动",
  "No activity for this project": "此项目还没有活动",
  "Start new chat in last used project": "在最近使用的项目中新建对话",
  "Open-ended agent work": "开放式智能体工作",
  Folder: "文件夹",
  GitHub: "GitHub",
  "Update the T3 Code server to add GitHub projects.": "更新 T3 Code 服务端以支持 GitHub 项目。",
  "Project added": "项目已添加",
  "Enter a GitHub repository as owner/repository or a GitHub.com repository URL.":
    "请输入 GitHub 仓库，格式为 owner/repository 或 GitHub.com 仓库 URL。",
  "Validating repository": "正在校验仓库",
  "GitHub clone cancelled. You can retry safely.": "GitHub 克隆已取消，可安全重试。",
  "Cancel clone": "取消克隆",
  "What you need": "你需要准备",
  "Paste an": "粘贴一个",
  "name or its GitHub URL.": "名称或其 GitHub URL。",
  "Choose the parent folder where T3 Code should create the checkout.":
    "选择 T3 Code 创建检出的父文件夹。",
  "Private access": "私有仓库访问",
  "Public repositories work immediately. For private repositories, run":
    "公开仓库可直接使用；私有仓库请运行",
  "or configure Git credentials.": "或配置 Git 凭据。",
  "owner/repository or GitHub URL": "owner/repository 或 GitHub 链接",
  "Clone into": "克隆到",
  "/parent/folder": "/父/文件夹",
  "Folder name": "文件夹名称",
  repository: "仓库名",
  "Final location:": "最终位置：",
  "Toggle Activity": "切换活动视图",
  "Reflects the bindings active in your current context.": "反映你当前上下文中的按键绑定。",
  "Show or hide running tasks, completed work, and items that need attention.":
    "显示或隐藏运行中的任务、已完成的工作和需要关注的事项。",
  "Side chats": "侧边对话",
  "New Chat": "新建对话",
  "New terminal": "新建终端",
  New: "新建",
  "New thread": "新建对话",
  Next: "下一步",
  "Next question": "下一题",
  "Next run": "下次运行",
  No: "否",
  "No automations yet": "还没有自动化工作流",
  "No runs yet.": "还没有运行记录。",
  "No unread runs.": "没有未读运行结果。",
  Notifications: "通知",
  "Notifications enabled": "通知已开启",
  "Notifications disabled": "通知已关闭",
  "Disable notifications": "关闭通知",
  "Live Activities enabled": "实时活动已开启",
  "Live Activities unavailable": "实时活动不可用",
  "Environment caches": "环境缓存",
  "Default grouping": "默认分组",
  Off: "关",
  On: "开",
  Open: "打开",
  "Open Path in Terminal": "在终端中打开路径",
  Pause: "暂停",
  Paused: "已暂停",
  Pinned: "已固定",
  Plan: "计划",
  "Plan mode": "计划模式",
  "Add image": "添加图片",
  "Plan details": "计划详情",
  Previous: "上一步",
  "Previous runs": "历史运行",
  Project: "项目",
  Projects: "项目",
  "Pull requests": "拉取请求",
  Refresh: "刷新",
  Remove: "移除",
  Rename: "重命名",
  "Rename project": "重命名项目",
  "Rename thread": "重命名对话",
  "Rename chat": "重命名对话",
  "Keep it short and recognizable.": "名称尽量简短、易于识别。",
  Resume: "继续运行",
  Review: "审阅",
  "Review Against Base Branch": "与基准分支比较审阅",
  "Review Uncommitted Changes": "审阅未提交的修改",
  Run: "运行",
  "Run at": "运行时间",
  "Runs in": "运行位置",
  Save: "保存",
  Scheduled: "已计划",
  Search: "搜索",
  "Search projects, threads, and actions": "搜索项目、对话和操作",
  Suggested: "推荐",
  Recent: "最近使用",
  "Usage settings": "用量设置",
  "Import chat from…": "从…导入对话",
  "Jump to threads, projects, actions, or appearance.": "跳转到对话、项目、操作或外观设置。",
  "Enter to open": "按 Enter 打开",
  "Select a chat": "选择一个对话",
  "Select a thread or create a new one to get started.": "请选择一个对话，或新建对话后开始。",
  Send: "发送",
  "No chats in this project yet": "此项目还没有对话",
  Settings: "设置",
  Show: "显示",
  "Show less": "收起",
  "Show more": "显示更多",
  Loading: "加载中…",
  "Opening terminal…": "正在打开终端…",
  "Opening thread…": "正在打开对话…",
  "Opening files...": "正在打开文件…",
  "Opening file...": "正在打开文件…",
  "Loading archive...": "正在加载归档…",
  Thinking: "正在思考",
  "Starting session": "正在启动会话",
  "Working for": "正在运行",
  "Files changed": "文件已更改",
  "Ask for follow-up changes": "提出后续修改",
  Side: "侧边对话",
  "Sort chats": "排序对话",
  "Sort threads": "排序对话",
  "Sort projects": "排序项目",
  "Last user message": "最后一条用户消息",
  Standalone: "独立运行",
  Status: "状态",
  Started: "开始时间",
  "Last activity": "最后活动",
  Elapsed: "用时",
  Progress: "进度",
  Detail: "详情",
  Activity: "活动",
  Stop: "停止",
  Studio: "工作室",
  Submit: "提交",
  "Submit answers": "提交答案",
  "User input needed": "需要用户输入",
  "Or type a custom answer": "或输入自定义答案",
  System: "跟随系统",
  Tasks: "任务",
  Temporary: "临时",
  Terminal: "终端",
  Thread: "对话",
  Threads: "对话",
  Time: "时间",
  Timezone: "时区",
  Today: "今天",
  Undo: "撤销",
  Unarchive: "取消归档",
  Unknown: "未知",
  "Unknown project": "未知项目",
  Unread: "未读",
  Update: "更新",
  "Update available": "有可用更新",
  Usage: "用量",
  View: "查看",
  Workspace: "工作区",
  Worktree: "工作树",
  Yes: "是",

  "What should we do in Grok?": "想在 Grok 构建什么？",
  "What should we do in Grok ?": "想在 Grok 构建什么？",
  "What should we work on?": "想在当前文件夹构建什么？",
  "Work in a project": "在项目中工作",
  "Ask for follow-up changes or attach images": "提出后续修改，或附加图片",
  "Ask anything, @tag files/folders, or use / to show available commands":
    "使用 @ 引用文件/文件夹，或输入 / 查看可用命令",
  "Open a panel": "打开面板",
  "Side chat": "侧边对话",
  "Open Terminal": "打开终端",
  "Open Browser": "打开浏览器",
  "Open Files": "打开文件",
  "Open Side chat": "打开侧边对话",
  "Open Review": "打开审阅",
  "Open Diff": "打开差异",
  "Open Explorer": "打开文件浏览",
  "Open Source control": "打开源代码管理",
  "Open Git": "打开 Git",
  "Close Terminal": "关闭终端",
  "Close Browser": "关闭浏览器",
  "Close Files": "关闭文件",
  "Close Side chat": "关闭侧边对话",
  "Close Review": "关闭审阅",
  "Close Diff": "关闭差异",
  "Close Explorer": "关闭文件浏览",
  "Close Source control": "关闭源代码管理",
  "Close Git": "关闭 Git",
  "Close Side": "关闭侧边",
  "Find out what's new": "查看更新内容",
  "Find out what’s new": "查看更新内容",
  "Dismiss What's new": "关闭更新说明",
  "Back to What's new": "返回更新说明",
  "Agents can use the visible browser": "智能体可使用可见浏览器",
  "Collapse all projects except the active project": "折叠除当前项目外的全部项目",
  "Ask for approval": "请求批准",
  "Always ask to edit external files and use the internet": "编辑外部文件和使用网络前始终询问",
  "Approve for me": "代我批准",
  "Only ask for actions detected as potentially unsafe": "仅在检测到潜在不安全操作时询问",
  "Unrestricted access to the internet and any file on your computer":
    "可无限制访问网络和本机任意文件",
  "Default permissions — click to change permissions": "默认权限 — 点此修改权限",
  "usage section": "用量分区",
  "repository section": "仓库分区",
  "pull request section": "拉取请求分区",
  "editor section": "编辑器分区",
  "recap section": "摘要分区",
  "pinned messages section": "已固定消息分区",
  "text markers section": "文本标记分区",
  "project instructions section": "项目说明分区",
  "notepad section": "记事本分区",
  "chats section": "对话分区",
  "studio section": "工作室分区",
  "Coming soon": "即将推出",
  "No Pi models found": "未找到 Pi 模型",
  "Search models or providers": "搜索模型或提供商",
  "Loading models": "正在加载模型",
  Unavailable: "不可用",
  "Sign in": "登录",
  "from your PATH. Cursor editor CLI paths are accepted too.":
    "（来自 PATH）。也支持 Cursor 编辑器 CLI 路径。",
  "Provider is disabled in T3 Code settings.": "此提供商已在 T3 Code 设置中禁用。",
  "Provider is disabled": "提供商已禁用",
  Provider: "提供商",
  Providers: "提供商",
  "Provider visibility": "提供商显示",
  "Provider installs": "提供商安装",
  "Provider tools": "提供商工具",
  "Custom models": "自定义模型",
  "CLI docs": "CLI 文档",
  "from your PATH.": "（来自 PATH）。",
  Install: "安装",
  Config: "配置",
  Headless: "无界面模式",
  Quickstart: "快速开始",
  "Leave blank to use": "留空即可使用",
  "Cursor editor CLI paths are accepted too.": "也支持 Cursor 编辑器 CLI 路径。",
  "Cursor Agent or Cursor CLI path": "Cursor Agent 或 Cursor CLI 路径",
  "Cursor API endpoint": "Cursor API 端点",
  "Optional Cursor API endpoint override passed to `cursor-agent -e`.":
    "可选的 Cursor API 端点覆盖值，将传给 `cursor-agent -e`。",
  "Kilo server URL": "Kilo 服务器 URL",
  "Optional existing Kilo server URL. Leave blank to spawn a local server.":
    "可填写现有 Kilo 服务器 URL；留空则启动本地服务器。",
  "Kilo server password": "Kilo 服务器密码",
  "Optional password for an externally managed Kilo server.": "外部管理的 Kilo 服务器可选密码。",
  "OpenAI response WebSockets": "OpenAI 响应 WebSocket",
  "Use Opencode's experimental OpenAI response WebSocket transport for managed local servers.":
    "为托管的本地服务器使用 OpenCode 实验性的 OpenAI 响应 WebSocket 传输。",
  "Pi agent directory": "Pi 智能体目录",
  "Optional custom Pi agent directory for auth, models, skills, and commands.":
    "可选的自定义 Pi 智能体目录，用于认证、模型、技能和命令。",

  "Needs review": "需要审阅",
  "New result": "有新结果",
  Active: "运行中",
  Auto: "自动",
  Mode: "模式",
  "Created from": "创建来源",
  "Created at": "创建时间",
  "Last ran": "上次运行",
  Repeats: "重复方式",
  Cron: "Cron 表达式",
  Never: "从不",
  Heartbeat: "心跳",
  "Approve the automation first": "请先批准此自动化工作流",
  "Cancel run": "取消运行",
  "Delete automation": "删除自动化工作流",
  "Automation run": "自动化运行",
  "Automation created": "已创建自动化工作流",
  "Automation updated": "已更新自动化工作流",
  "Automation needs a bit more detail": "自动化工作流还需要补充一些细节",
  "Chat required": "需要先选择对话",

  Compact: "紧凑",
  Comfortable: "舒适",
  Spacious: "宽松",
  Theme: "主题",
  "UI density": "界面密度",
  "Time format": "时间格式",
  "System default": "跟随系统",
  "Recently active": "最近活跃",
  "Recently added": "最近添加",
  "Newest first": "最新优先",
  "Manual order": "手动排序",
  "Base font size": "基础字号",
  "Terminal font size": "终端字号",
  "Terminal font": "终端字体",
  "Font smoothing": "字体平滑",
  "Activity toasts": "活动通知条",
  "Desktop notifications": "桌面通知",
  "Assistant output": "助手输出",
  "Delete confirmation": "删除确认",
  "Archive confirmation": "归档确认",
  "Terminal close confirmation": "关闭终端确认",
  "Restore default settings?": "恢复默认设置？",
  "Restore defaults": "恢复默认设置",

  "Loading browser...": "正在加载浏览器…",
  "Loading diff viewer...": "正在加载差异查看器…",
  "Loading explorer...": "正在加载文件浏览…",
  "Loading file...": "正在加载文件…",
  "Loading Git...": "正在加载 Git…",
  "Loading terminal...": "正在加载终端…",
  "Connecting to T3 Code server...": "正在连接 T3 Code 服务…",
  Connecting: "连接中",
  "Sending...": "发送中…",
  "Submitting...": "提交中…",
  "Preparing update": "正在准备更新",
  "Update ready": "更新已就绪",
  Updating: "更新中",
  Updated: "已更新",
  "Update failed": "更新失败",
  "Update queued": "更新已排队",
  "You're up to date": "已是最新版本",
  "You're up to date!": "已是最新版本",
  "Already up to date": "已是最新版本",
  "T3 Code is downloading the update in the background.": "T3 Code 正在后台下载更新。",
  "Click Update when you're ready to restart and install it.":
    "准备好后，点击「更新」即可重启并安装。",
  "Could not check for updates": "无法检查更新",
  "Could not download update": "无法下载更新",
  "Could not start update download": "无法开始下载更新",
  "Could not install update": "无法安装更新",
  "An unexpected error occurred.": "发生意外错误。",
  "Check for updates": "检查更新",
  "Checking for updates...": "正在检查更新…",
  "Applying update...": "正在应用更新…",
  "Update check failed. Click to try again.": "检查更新失败，点击重试。",
  Highlight: "高亮",
  Underline: "下划线",
  "Tasks updated": "任务已更新",
  "Still outdated": "仍不是最新版本",
  "Couldn’t finish updating": "无法完成更新",
  "Couldn’t download the update": "无法下载更新",

  "Archive thread": "归档对话",
  "Archive threads": "归档对话",
  "Move to space": "移到空间",
  "New space": "新建空间",
  "New space…": "新建空间…",
  "Edit space": "编辑空间",
  "Edit space…": "编辑空间…",
  "Delete space": "删除空间",
  "Create space": "创建空间",
  "Saving…": "正在保存…",
  "Moving…": "正在移动…",
  Icon: "图标",
  Work: "工作",
  "Group projects into a focused work context.": "将项目分组到专注的工作上下文中。",
  "Group projects into a focused work context. Projects you add while a space is open land in it.":
    "将项目分组到专注的工作上下文中。空间打开期间添加的项目会归入此空间。",
  "Rename this space or give it a different icon. Its projects stay where they are.":
    "重命名此空间或更换图标，其中的项目位置不变。",
  "Enter a space name.": "请输入空间名称。",
  "Void is reserved for unassigned projects.": "「Void」保留给未分配的项目。",
  "A space with this name already exists.": "已存在同名空间。",
  "Unable to save the space.": "无法保存空间。",
  "Unable to delete space": "无法删除空间",
  "Unable to rename space": "无法重命名空间",
  "Unable to confirm space order": "无法确认空间顺序",
  "Unable to move the selected projects.": "无法移动所选项目。",
  "Choose existing projects. Their chats and pinned state move with them.":
    "选择已有项目，其对话和固定状态会一并移动。",
  "Search projects": "搜索项目",
  "No projects yet": "还没有项目",
  "No projects yet.": "还没有项目。",
  "No matching projects": "没有匹配的项目",
  "No matching projects.": "没有匹配的项目。",
  "No chats yet": "还没有对话",
  "Open new chat home": "打开新建对话主页",
  Help: "帮助",
  "Move projects": "移动项目",
  "Jump to this space and restore its last context.": "跳到此空间并恢复上次上下文。",
  "Jump to this space.": "跳到此空间。",
  "Double-click to rename": "双击重命名",
  "Space name": "空间名称",
  Spaces: "空间",
  "Unassigned projects": "未分配的项目",
  "Needs attention": "需要关注",
  Working: "运行中",
  Bag: "公文包",
  Rocket: "火箭",
  Idea: "灵感",
  Palette: "调色板",
  Book: "书籍",
  Lab: "实验室",
  Heart: "心形",
  Star: "星星",
  Globe: "地球",
  Cloud: "云",
  Hammer: "锤子",
  Chart: "图表",
  Games: "游戏",
  Camera: "相机",
  Target: "靶心",
  Tree: "树",
  School: "学校",
  Backpack: "背包",
  "Clear notification": "清除通知",
  "Mark unread": "标记为未读",
  "Temporary chat": "临时对话",
  "Pending approval": "等待批准",
  Pending: "等待中",
  "Approve this command?": "批准执行此命令？",
  "Approve reading this file?": "批准读取此文件？",
  "Approve this file change?": "批准此文件修改？",
  "Grant these permissions?": "授予这些权限？",
  "Approve once": "仅批准这一次",
  "Allow just this request": "仅允许本次请求",
  "Always allow this session": "本次会话始终允许",
  "Don't ask again this session": "本次会话不再询问",
  Decline: "拒绝",
  "Approval needed": "需要批准",
  "Allow once": "允许一次",
  "Allow session": "本次会话允许",
  "Reject and let the agent continue": "拒绝并让智能体继续",
  "Stop the current turn": "停止当前轮次",
  "Terminal input needed": "终端需要输入",
  "Terminal process running": "终端进程运行中",
  "Terminal task completed": "终端任务已完成",
  "Terminal is sleeping. Restoring shortly.": "终端正在休眠，即将恢复。",
  "No active thread": "没有活跃对话",
  "Project instructions added to notepad.": "项目说明已添加到记事本。",
  "Temporary chat — deleted when you leave. Click to keep it.":
    "临时对话 — 离开后将删除。点击可保留。",
  "Make this a temporary chat (deleted when you leave)": "设为临时对话（离开后删除）",
  "Plan mode — click to return to normal build mode": "计划模式 — 点击返回常规执行模式",
  "Stop generation": "停止生成",
  "Stop the current response. On Mac, press Ctrl+C to interrupt.":
    "停止当前回复。在 Mac 上按 Ctrl+C 中断。",
  "Implementation actions": "实施操作",
  AppSnap: "应用截图",
  "Not now": "暂不设置",
  "Set up AppSnap": "设置应用截图",
  "T3 Code AppSnaps are live!": "应用截图已启用！",
  "Press both Option keys (⌥ ⌥) to snap any app’s window into the task you’re working in.":
    "同时按下两个 Option 键（⌥ ⌥），即可把任意应用窗口捕捉到当前任务中。",
  "Toggle thread sidebar": "切换对话侧边栏",
  Forward: "前进",
  "World Cup 2026": "2026 世界杯",
  "Loading projects": "正在加载项目",
  "Loading projects...": "正在加载项目…",
  "Loading projects and threads from the saved environment.": "正在从已保存的环境加载项目和对话。",
  "Loading conversation": "正在加载对话",
  "This conversation didn't load.": "对话未能加载。",
  "Expand all projects": "展开所有项目",
  "Pin Grok": "固定 Grok",
  "Create new terminal thread in Grok": "在 Grok 中新建终端对话",
  "Create new thread in Grok": "在 Grok 中新建对话",
  "Pin thread": "固定对话",
  "Worked for 7.8s": "已运行 7.8 秒",
  "Full access": "完全访问",
  "Full access — click to change permissions": "完全访问 — 点击修改权限",
  Supervised: "监督模式",
  "Ask before commands and file changes.": "执行命令和修改文件前先询问。",
  "Allow commands and edits without prompts.": "允许在无提示的情况下执行命令和编辑。",
  "An AI reviewer handles routine approvals; higher-risk actions may be blocked or ask you.":
    "由 AI 审核常规操作；高风险操作可能被拦截或向你确认。",
  "Click to change permissions.": "点击修改权限。",
  "Context window": "上下文窗口",
  "context used": "已用上下文",
  "Automatically compacts its context when needed.": "需要时会自动压缩上下文。",
  "Context window 4.7% used": "上下文窗口已用 4.7%",
  "Send message": "发送消息",
  "Back to app": "返回应用",
  "Search settings": "搜索设置",
  "Search settings...": "搜索设置…",
  App: "应用",
  General: "通用",
  Profile: "个人资料",
  Appearance: "外观",
  Behavior: "行为",
  "Keyboard Shortcuts": "键盘快捷键",
  Worktrees: "工作树",
  Models: "模型",
  Skills: "技能",
  Advanced: "高级",
  "Default provider, thread mode, and sidebar organization.":
    "默认提供商、对话模式和侧边栏组织方式。",
  "Core defaults": "核心默认设置",
  "Default provider": "默认提供商",
  "default provider": "默认提供商",
  "environment panel default open": "环境面板默认打开状态",
  "Reset default provider to default": "将默认提供商重置为默认值",
  "Choose the provider used for new chats.": "选择新建对话使用的提供商。",
  "New threads": "新建对话",
  "Pick the default workspace mode for newly created draft threads.":
    "选择新建草稿对话的默认工作区模式。",
  "Sidebar organization": "侧边栏组织",
  "Project order": "项目排序",
  "Controls how projects are arranged in the main sidebar.": "控制项目在主侧边栏中的排列方式。",
  "Thread order": "对话排序",
  "Controls how threads are arranged inside each project in the main sidebar.":
    "控制每个项目内对话的排列方式。",
  "Sidebar sections": "侧边栏分区",
  "Reset chats section to default": "将对话分区重置为默认值",
  "Show the standalone Chats list in the sidebar footer (chats not tied to a project).":
    "在侧边栏底部显示独立对话列表（未绑定项目的对话）。",
  "Reset studio section to default": "将工作室分区重置为默认值",
  "Show the Studio tab in the sidebar switcher.": "在侧边栏切换器中显示工作室标签。",
  "Show the Workspace tab in the sidebar switcher. The Threads tab always stays visible.":
    "在侧边栏切换器中显示工作区标签。对话标签始终可见。",
  "Environment panel": "环境面板",
  "Open by default": "默认打开",
  "Open the chat Environment panel automatically on normal threads. When off, the panel stays closed until you open it. Your last open/close also updates this preference.":
    "在普通对话中自动打开环境面板。关闭时，面板会保持收起，直到你手动打开；上次开关状态也会更新此偏好。",
  Repository: "仓库",
  "Pull request": "拉取请求",
  Recap: "摘要",
  "Pinned messages": "已固定消息",
  "Text markers": "文本标记",
  "Project instructions": "项目说明",
  Notepad: "记事本",
  "Default thread mode": "默认对话模式",
  "Project sort order": "项目排序",
  "Thread sort order": "对话排序",
  "Show the Chats section in the sidebar": "在侧边栏显示对话分区",
  "Show the Studio section in the sidebar": "在侧边栏显示工作室分区",
  "Show the Workspace section in the sidebar": "在侧边栏显示工作区分区",
  "Open the Environment panel by default on normal threads": "在普通对话中默认打开环境面板",
  "Show the Usage section in the Environment panel": "在环境面板中显示用量分区",
  "Show the Repository section in the Environment panel": "在环境面板中显示仓库分区",
  "Show the Pull request section in the Environment panel": "在环境面板中显示拉取请求分区",
  "Show the Editor section in the Environment panel": "在环境面板中显示编辑器分区",
  "Show the Recap section in the Environment panel": "在环境面板中显示摘要分区",
  "Show the Pinned messages section in the Environment panel": "在环境面板中显示已固定消息分区",
  "Show the Text markers section in the Environment panel": "在环境面板中显示文本标记分区",
  "Show the Project instructions section in the Environment panel": "在环境面板中显示项目说明分区",
  "Show the Notepad section in the Environment panel": "在环境面板中显示记事本分区",
  "Show the provider usage row in the chat Environment panel.":
    "在对话环境面板中显示提供商用量行。",
  "Show the GitHub repository link in the chat Environment panel. The git block (Changes, Worktree, branch, Commit and Push) always stays visible.":
    "在对话环境面板中显示 GitHub 仓库链接。Git 区块（更改、工作树、分支、Commit 和 Push）始终可见。",
  "Show the open pull request (CI checks and review comments) for the current branch in the chat Environment panel.":
    "在对话环境面板中显示当前分支的拉取请求（CI 检查和审阅评论）。",
  "Show the Editor section (in-app editor view and Open in editor picker) in the chat Environment panel.":
    "在对话环境面板中显示编辑器分区（应用内编辑器视图及“在编辑器中打开”选择器）。",
  "Show the auto-generated chat recap in the Environment panel.":
    "在环境面板中显示自动生成的对话摘要。",
  "Show the pinned-messages checklist in the Environment panel.":
    "在环境面板中显示已固定消息清单。",
  "Show highlighted and underlined transcript text in the Environment panel.":
    "在环境面板中显示高亮和下划线的对话文本。",
  "Show project-level instructions in the Environment panel.": "在环境面板中显示项目级说明。",
  "Show the per-thread notepad in the Environment panel.": "在环境面板中显示每个对话的记事本。",
  Share: "分享",
  "Activity insights": "使用记录",
  "Most used provider": "最常用提供商",
  "Most used reasoning": "最常用思考强度",
  "Most active hour": "最活跃时段",
  "Most worked project": "最常处理项目",
  "Skills explored": "已探索技能",
  "Total skills used": "已使用技能总数",
  "Total threads": "对话总数",
  "Most used plugins": "最常用插件",
  "No skills or agents used yet.": "尚未使用技能或智能体。",
  "No model activity yet.": "尚无模型使用记录。",
  "Couldn't load your local stats.": "无法加载本地统计数据。",
  "Try again": "重试",
  "Model usage": "模型用量",
  "Lifetime tokens": "累计用量",
  "Peak day": "单日峰值",
  "Total prompts": "提示词总数",
  "Current streak": "当前连续",
  "Longest streak": "最长连续",
  Favourites: "收藏",
  "New Terminal Tab": "新建终端标签",
  "Toggle Browser": "切换浏览器",
  "Check for Updates...": "检查更新…",
  "Settings...": "设置…",
  "Copy Image": "拷贝图像",
  "No suggestions": "无建议",
  Jan: "1月",
  Feb: "2月",
  Mar: "3月",
  Apr: "4月",
  May: "5月",
  Jun: "6月",
  Jul: "7月",
  Aug: "8月",
  Sep: "9月",
  Oct: "10月",
  Nov: "11月",
  Dec: "12月",
  "Share your activity": "分享你的活动",
  "Copy stat card": "复制统计卡片",
  "Share to X": "分享到 X",
  "Share to LinkedIn": "分享到 LinkedIn",
  "Share to Reddit": "分享到 Reddit",
  "Save stat card": "保存统计卡片",
  "Edit profile": "编辑个人资料",
  "Edit avatar": "编辑头像",
  "Upload photo": "上传照片",
  "Display name": "显示名称",
  "Your name": "你的名字",
  Username: "用户名",
  username: "用户名",
  "Theme, typography, and timestamp formatting.": "主题、排版与时间戳格式。",
  "Theme and typography": "主题与排版",
  "Reset theme to default": "将主题重置为默认值",
  "Choose how T3 Code looks across the app.": "选择 T3 Code 在整个应用中的外观。",
  "Theme preference": "主题偏好",
  "Use system UI font": "使用系统界面字体",
  "Ignore the theme's custom UI font and render the interface with the native system font (SF Pro on macOS).":
    "忽略主题自定义的界面字体，使用系统原生字体渲染界面（macOS 上为 SF Pro）。",
  "system UI font": "系统界面字体",
  "terminal font size": "终端字号",
  "terminal font": "终端字体",
  theme: "主题",
  "base font size": "基础字号",
  "time format": "时间格式",
  "Dark theme": "深色主题",
  "Light theme": "浅色主题",
  Reset: "重置",
  Accent: "强调色",
  Background: "背景",
  Foreground: "前景",
  "UI font": "界面字体",
  "Code font": "代码字体",
  "Translucent sidebar": "半透明侧边栏",
  Contrast: "对比度",
  "This is the active theme right now.": "这是当前启用的主题。",
  "Inactive while the app is locked to dark.": "应用锁定为深色时不可用。",
  "Inactive while the app is locked to light.": "应用锁定为浅色时不可用。",
  "Dark theme code theme": "深色主题代码配色",
  "Light theme code theme": "浅色主题代码配色",
  "Dark theme accent color": "深色主题强调色",
  "Dark theme background color": "深色主题背景色",
  "Dark theme foreground color": "深色主题前景色",
  "Light theme accent color": "浅色主题强调色",
  "Light theme background color": "浅色主题背景色",
  "Light theme foreground color": "浅色主题前景色",
  "Dark theme UI font": "深色主题界面字体",
  "Light theme UI font": "浅色主题界面字体",
  "Dark theme code font": "深色主题代码字体",
  "Light theme code font": "浅色主题代码字体",
  "Dark theme translucent sidebar": "深色主题半透明侧边栏",
  "Light theme translucent sidebar": "浅色主题半透明侧边栏",
  "Dark theme contrast": "深色主题对比度",
  "Light theme contrast": "浅色主题对比度",
  "深色主题 code theme": "深色主题代码配色",
  "浅色主题 code theme": "浅色主题代码配色",
  "深色主题 accent color": "深色主题强调色",
  "浅色主题 accent color": "浅色主题强调色",
  "深色主题 background color": "深色主题背景色",
  "浅色主题 background color": "浅色主题背景色",
  "深色主题 foreground color": "深色主题前景色",
  "浅色主题 foreground color": "浅色主题前景色",
  "深色主题 UI font": "深色主题界面字体",
  "浅色主题 UI font": "浅色主题界面字体",
  "深色主题 code font": "深色主题代码字体",
  "浅色主题 code font": "浅色主题代码字体",
  "深色主题 translucent sidebar": "深色主题半透明侧边栏",
  "浅色主题 translucent sidebar": "浅色主题半透明侧边栏",
  "深色主题 contrast": "深色主题对比度",
  "浅色主题 contrast": "浅色主题对比度",
  Color: "颜色",
  Hue: "色相",
  Saturation: "饱和度",
  Brightness: "亮度",
  "Reset to default": "恢复默认值",
  "Default (JetBrains Mono)": "默认（JetBrains Mono）",
  "Control spacing in the sidebar, composer, chat gutters, and settings rows without changing font size.":
    "在不改变字号的前提下，调整侧边栏、输入框、对话边距和设置行的间距。",
  "Reset base font size to default": "将基础字号恢复为默认值",
  "Adjust the app text base in pixels. Chat and UI typography scale proportionally from this value.":
    "以像素设置应用文字基础字号；对话和界面排版会按此值等比缩放。",
  "Base font size in pixels": "基础字号（像素）",
  "Adjust terminal text independently from the app and chat font size.":
    "独立调整终端文字，不影响应用和对话字号。",
  "Terminal font size in pixels": "终端字号（像素）",
  "Type any monospace font installed on this device (e.g. Fira Code). Leave empty for the default. Fonts that aren't installed fall back to the system monospace.":
    "输入本机已安装的任意等宽字体（如 Fira Code）。留空则使用默认字体；未安装的字体会回退到系统等宽字体。",
  "Terminal font family": "终端字体系列",
  "Enable font smoothing": "启用字体平滑",
  "Use macOS-style antialiasing for lighter, crisper text rendering.":
    "使用 macOS 风格抗锯齿，使文字更轻盈清晰。",
  "Time and reading": "时间与阅读",
  "Reset time format to default": "将时间格式恢复为默认值",
  "System default follows your browser or OS clock preference.": "跟随浏览器或操作系统的时钟偏好。",
  "Timestamp format": "时间戳格式",
  "12-hour": "12 小时制",
  "24-hour": "24 小时制",
  "In-app toasts and desktop alerts.": "应用内提示条与桌面提醒。",
  "Activity alerts": "活动提醒",
  "Show an in-app toast when a chat or managed terminal agent finishes or needs input.":
    "当对话或受管理终端智能体完成或需要输入时，显示应用内提示条。",
  "Activity toast notifications": "活动提示条通知",
  "Show an OS notification when a chat or managed terminal agent finishes or needs input while the app is in the background. Desktop app notifications use your operating system notification center.":
    "当应用处于后台且对话或受管理终端智能体完成或需要输入时，显示系统通知。桌面应用通知使用操作系统通知中心。",
  Test: "测试",
  "Desktop activity notifications": "桌面活动通知",
  "Snap another app's window straight into a task with one key chord.":
    "用一个组合键直接把其他应用的窗口捕捉到任务中。",
  "Take an AppSnap to show your agent another app's window": "使用应用截图向智能体展示其他应用窗口",
  "Press both  ⌥ Option  keys at once while any app is frontmost. T3 Code captures that window as an image, brings itself forward, and attaches the snap to a task composer — the capture stays on this device until you send the message.":
    "任意应用位于前台时，同时按下两个 ⌥ Option 键。T3 Code 会将该窗口捕获为图片、切换到前台并附加到任务输入框；在你发送消息前，捕获内容始终保留在此设备上。",
  "Press your two-key shortcut while any app is frontmost. T3 Code captures that window as an image, brings itself forward, and attaches the snap to a task composer — the capture stays on this device until you send the message.":
    "任意应用位于前台时按下双键快捷键。T3 Code 会将该窗口捕获为图片、切换到前台并附加到任务输入框；在你发送消息前，捕获内容始终保留在此设备上。",
  Capture: "捕捉",
  "Enable AppSnap": "启用应用截图",
  "Reset AppSnap to default": "将应用截图重置为默认值",
  "Run the capture listener in the background while T3 Code is open.":
    "T3 Code 打开时在后台运行截图监听器。",
  "Allow Input Monitoring and Screen Recording in macOS System Settings, then try again.":
    "请在 macOS 系统设置中允许输入监控和屏幕录制，然后重试。",
  "Allow the required macOS permissions, then try again.": "请允许所需的 macOS 权限，然后重试。",
  "Available in the T3 Code desktop app": "可在 T3 Code 桌面应用中使用",
  "Available on macOS only": "仅适用于 macOS",
  "AppSnap is available only in the macOS desktop app.": "应用截图仅在 macOS 桌面应用中可用。",
  "Starting the capture listener…": "正在启动截图监听器…",
  "Permission setup required": "需要完成权限设置",
  "Listening — press the shortcut to snap": "监听中 — 按快捷键截取",
  Shortcut: "快捷键",
  "Current shortcut": "当前快捷键",
  "Choose exactly two keys: one modifier and one other key. T3 Code checks its own bindings and asks macOS whether another app already owns the shortcut before saving it.":
    "请恰好选择两个键：一个修饰键加一个普通键。保存前 T3 Code 会检查自身绑定，并询问 macOS 是否已被其他应用占用。",
  "Press the left and right Option keys at the same time. The chord works while any app is focused, and can't be remapped yet.":
    "同时按下左、右 Option 键。任何应用获得焦点时都可触发，当前尚不能重新映射。",
  Destination: "目标位置",
  "Snaps join the task you interacted with in the last minute, and consecutive snaps stay together. Otherwise T3 Code opens a fresh task with the capture attached.":
    "截图会附加到你最近一分钟操作过的任务，连续截图会保持在同一任务；否则 T3 Code 会新建任务并附上截图。",
  Automatic: "自动",
  "Capture sound": "截图提示音",
  "Play a short shutter cue when a window is captured.": "捕捉窗口时播放短促快门提示音。",
  Preview: "预览",
  "Play a sound when an AppSnap is captured": "捕捉应用截图时播放提示音",
  "macOS permissions": "macOS 权限",
  "Input Monitoring": "输入监控",
  "Lets T3 Code notice the double-Option chord while another app owns the keyboard. Nothing you type is recorded.":
    "允许 T3 Code 在其他应用占用键盘时识别双 Option 组合键；不会记录你输入的任何内容。",
  Denied: "已拒绝",
  Granted: "已允许",
  "Not requested yet": "尚未请求",
  Restricted: "受限制",
  "Screen Recording": "屏幕录制",
  "Lets T3 Code capture an image of the frontmost window. Only the single window you snap is captured, only at the moment you press the chord.":
    "允许 T3 Code 捕捉前台窗口图片；只会在你按下组合键的瞬间捕捉该单一窗口。",
  "Permission status": "权限状态",
  "Grant both permissions to T3 Code under System Settings → Privacy & Security, then recheck here. macOS may require relaunching the app after a change.":
    "请在“系统设置 → 隐私与安全性”中授予 T3 Code 两项权限，然后在此重新检查。macOS 在修改后可能要求重新启动应用。",
  "Recheck permissions": "重新检查权限",
  "Every keyboard shortcut available in T3 Code, grouped by context.":
    "T3 Code 的全部键盘快捷键，按使用场景分组。",
  "Search shortcuts": "搜索快捷键",
  "Search shortcuts...": "搜索快捷键…",
  Command: "命令",
  Keybinding: "按键",
  "Show keybindings": "显示快捷键",
  "Customize built-in commands and their context conditions.":
    "自定义内置命令及其适用的上下文条件。",
  "Set keybinding": "设置快捷键",
  "Capture up to two modifiers and one key.": "最多使用两个修饰键和一个普通按键。",
  "Changes are saved directly to": "更改会直接保存到",
  "Press a key or combo": "按下按键或组合键",
  "Press a key or combination": "按下按键或组合键",
  "Press a key...": "按下一个按键…",
  "Condition (optional)": "条件（可选）",
  "For example, !terminalFocus": "例如：!terminalFocus",
  "Optional condition, e.g. !terminalFocus": "可选条件，例如：!terminalFocus",
  "Use up to two modifiers and one key.": "最多使用两个修饰键和一个普通按键。",
  "Save keybinding": "保存快捷键",
  "Shortcut saved": "快捷键已保存",
  "The change is now persisted in keybindings.json.": "更改已保存到 keybindings.json。",
  "Could not save shortcut": "无法保存快捷键",
  "Check the shortcut format and try again.": "请检查快捷键格式后重试。",
  "Show keyboard shortcuts": "显示键盘快捷键",
  "Open this sheet from anywhere without leaving your current context.":
    "在任何位置打开此面板，无需离开当前上下文。",
  "Toggle sidebar": "切换侧边栏",
  "Collapse or reveal the sidebar shell.": "收起或展开侧边栏。",
  "Open the folder picker to import a local project into the sidebar.":
    "打开文件夹选择器，将本地项目导入侧边栏。",
  "Search projects and threads": "搜索项目和对话",
  "Open the sidebar search palette from anywhere in the app.": "在应用任意位置打开侧边栏搜索面板。",
  "Import thread": "导入对话",
  "Bring an existing conversation into the current workspace.": "将已有对话带入当前工作区。",
  "Start a fresh thread in the current project, or the most recent one.":
    "在当前项目或最近使用的项目中新建对话。",
  "New thread in latest project": "在最近项目中新建对话",
  "Jump back into the most recently used project with a new thread.":
    "回到最近使用的项目并新建对话。",
  "New terminal thread": "新建终端对话",
  "Create a thread that opens directly into terminal mode.": "创建直接进入终端模式的对话。",
  "Split chat": "拆分对话",
  "Open the current conversation in a second pane.": "在第二个面板中打开当前对话。",
  "Model picker": "模型选择器",
  "Open the composer provider and model picker.": "打开输入框的提供商和模型选择器。",
  "Reasoning picker": "推理选择器",
  "Focus composer": "聚焦输入框",
  "Choose visible providers, review CLI installs, and update provider tools.":
    "选择可见提供商、检查 CLI 安装并更新提供商工具。",
  Updates: "更新",
  "Automatic CLI update checks": "自动检查 CLI 更新",
  "Check Codex, Claude, and other provider CLIs for newer versions in the background.":
    "在后台检查 Codex、Claude 和其他提供商 CLI 的新版本。",
  "Provider updates": "提供商更新",
  "Review installed provider tools that T3 Code can safely update.":
    "检查 T3 Code 可以安全更新的已安装提供商工具。",
  "No provider updates detected": "未检测到提供商更新",
  "Provider picker": "提供商选择器",
  "provider picker": "提供商选择器",
  "provider tools": "提供商工具",
  "custom models": "自定义模型",
  "Visible providers": "可见提供商",
  "Drag providers into your preferred picker order and hide the ones you don't use. The provider you're currently using on a thread always stays visible.":
    "拖动提供商调整选择器排序，并隐藏不用的提供商；当前对话正在使用的提供商始终保持可见。",
  "All providers visible": "所有提供商均可见",
  "Installed CLIs": "已安装的 CLI",
  "Reset provider tools to default": "将提供商工具重置为默认值",
  "Review provider versions and update tools. Open a row only when you need binary overrides.":
    "检查提供商版本并更新工具。仅在需要二进制路径覆盖时展开条目。",
  "Codex binary path": "Codex 二进制路径",
  "CODEX_HOME path": "CODEX_HOME 路径",
  "Optional custom Codex home and config directory.": "可选的自定义 Codex 主目录和配置目录。",
  "Show Codex in the provider picker": "在提供商选择器中显示 Codex",
  "Show Claude in the provider picker": "在提供商选择器中显示 Claude",
  "Show Cursor in the provider picker": "在提供商选择器中显示 Cursor",
  "Show Gemini in the provider picker": "在提供商选择器中显示 Gemini",
  "Show Grok in the provider picker": "在提供商选择器中显示 Grok",
  "Show Droid in the provider picker": "在提供商选择器中显示 Droid",
  "Show Kimi Code in the provider picker": "在提供商选择器中显示 Kimi Code",
  "Show Kilo in the provider picker": "在提供商选择器中显示 Kilo",
  "Show OpenCode in the provider picker": "在提供商选择器中显示 OpenCode",
  "Show Pi in the provider picker": "在提供商选择器中显示 Pi",
  "Kimi Code": "Kimi Code",
  "Kimi binary path": "Kimi 二进制路径",
  "Kimi Code CLI is installed and logged in.": "Kimi Code CLI 已安装并已登录。",
  "Kimi Code CLI is installed but not logged in. Run `kimi login` in a terminal, then refresh providers.":
    "Kimi Code CLI 已安装但未登录。请在终端运行 `kimi login`，然后刷新提供商状态。",
  "Kimi Code CLI (`kimi`) is not installed or not on PATH.":
    "未安装 Kimi Code CLI（`kimi`），或不在 PATH 中。",
  "Save additional Kimi Code model slugs for the picker and `/model` command.":
    "为选择器和 `/model` 命令保存额外的 Kimi Code 模型标识。",
  "Create new thread in Kimi Code": "在 Kimi Code 中新建对话",
  "Create new terminal thread in Kimi Code": "在 Kimi Code 中新建终端对话",
  "Pin Kimi Code": "固定 Kimi Code",
  "From Kimi Code": "来自 Kimi Code",
  "New task in Kimi Code": "在 Kimi Code 中新建任务",
  "Show Kimi in the provider picker": "在提供商选择器中显示 Kimi",
  "Git writing defaults and custom model slugs.": "Git 写作默认设置与自定义模型标识。",
  "Generation defaults": "生成默认设置",
  "Git writing model": "Git 写作模型",
  "Used for generated commit messages, PR titles, and branch names.":
    "用于生成提交信息、拉取请求标题和分支名称。",
  "Saved model slugs": "已保存模型标识",
  "Reset custom models to default": "将自定义模型重置为默认值",
  "Add custom model slugs for supported providers.": "为支持的提供商添加自定义模型标识。",
  "Custom model provider": "自定义模型提供商",
  Add: "添加",
  "Remove grok-4.5": "移除 grok-4.5",
  "Streaming, diff handling, and destructive confirmations.":
    "流式输出、差异处理和破坏性操作确认。",
  "Runtime behavior": "运行时行为",
  "Show token-by-token output while a response is in progress.": "响应生成期间按 Token 显示输出。",
  "Stream assistant messages": "流式显示助手消息",
  "Diff line wrapping": "差异行换行",
  "Set the default wrap state when the diff panel opens. The in-panel wrap toggle only affects the current diff session.":
    "设置差异面板打开时的默认换行状态；面板内换行开关只影响当前差异会话。",
  "Wrap diff lines by default": "默认换行显示差异行",
  "Code block wrapping": "代码块换行",
  "Soft-wrap long lines in chat fenced code blocks by default. The wrap button on each block still overrides for that block.":
    "聊天里的围栏代码块默认对长行软换行；单个代码块标题栏上的换行按钮仍可单独覆盖。",
  "Wrap chat code blocks by default": "默认换行显示聊天代码块",
  "Safety confirmations": "安全确认",
  "Ask before deleting a thread and its chat history.": "删除对话及其聊天历史前询问。",
  "Confirm thread deletion": "确认删除对话",
  "Ask before archiving a thread.": "归档对话前询问。",
  "Confirm thread archive": "确认归档对话",
  "Ask before closing a terminal tab and clearing its history.": "关闭终端标签并清除其历史前询问。",
  "Confirm terminal tab close": "确认关闭终端标签",
  "Review and clean up the worktrees created by T3 Code.": "查看并清理由 T3 Code 创建的工作树。",
  "No app-managed worktrees found yet.": "暂未发现由应用管理的工作树。",
  "View and restore archived threads.": "查看并恢复已归档对话。",
  "No archived threads": "没有已归档对话",
  "Archived threads will appear here and can be restored to the sidebar.":
    "已归档对话将显示在这里，并可恢复到侧边栏。",
  "Every skill found across providers, with toggles to control availability.":
    "显示所有提供商发现的技能，并可用开关控制其可用性。",
  "Portable skills": "可移植技能",
  "T3 Code skills folder": "T3 Code 技能文件夹",
  "Skills placed here are available on every provider. When a provider already ships its own copy of a skill, that copy is used; otherwise T3 Code's copy is the fallback.":
    "放在此处的技能对所有提供商可用。提供商已有同名技能时优先使用其副本；否则使用 T3 Code 副本作为后备。",
  "Shared skills": "共享技能",
  "Provider copies": "提供商副本",
  "Provider copy": "提供商副本",
  "From Codex": "来自 Codex",
  "From Grok": "来自 Grok",
  "From Shared (.agents)": "来自共享目录（.agents）",
  "Remaining quota and credits for each signed-in provider.": "每个已登录提供商的剩余额度与积分。",
  "Provider usage": "提供商用量",
  "Loading provider usage…": "正在加载提供商用量…",
  "Usage is read locally from each provider CLI's stored credentials and fetched directly from the provider. Short-lived tokens are refreshed through the provider's own CLI or official token endpoint; if a provider shows “Not signed in”, re-authenticate with its CLI.":
    "用量从各提供商 CLI 本地保存的凭据读取，并直接从提供商获取。短期令牌会通过提供商自己的 CLI 或官方令牌端点刷新；如果提供商显示“未登录”，请使用其 CLI 重新认证。",
  "Usage is read locally from each provider CLI's stored credentials and fetched directly from the provider. OAuth providers may refresh short-lived tokens through their official token endpoint; if a provider shows “Not signed in”, re-authenticate with its CLI.":
    "用量从各提供商 CLI 本地保存的凭据读取，并直接向提供商获取。OAuth 提供商可能通过官方令牌端点刷新短期令牌；若显示“未登录”，请使用其 CLI 重新认证。",
  "App icon": "应用图标",
  "Choose the icon T3 Code uses in the dock or taskbar.":
    "选择 T3 Code 在程序坞或任务栏中使用的图标。",
  "Pull request diff colors": "拉取请求差异颜色",
  "Show additions in green and deletions in red in pull request summaries.":
    "在拉取请求摘要中用绿色显示新增内容，用红色显示删除内容。",
  "Worktree deleted": "工作树已删除",
  "This removes the Git worktree from disk.": "这会从磁盘中删除 Git 工作树。",
  "Archived conversations will be deleted first.": "已归档的对话会先被删除。",
  "Deleting it can break reopening those chats in the same workspace.":
    "删除后可能无法在同一工作区重新打开这些对话。",
  "Delete the worktree anyway?": "仍要删除工作树？",
  "Unable to delete the worktree.": "无法删除工作树。",
  "Keybindings, recovery, and version info.": "按键绑定、恢复与版本信息。",
  "Developer tools": "开发者工具",
  Keybindings: "按键绑定",
  "Open the persisted `keybindings.json` file to edit advanced bindings directly.":
    "打开持久化的 `keybindings.json` 文件以直接编辑高级按键绑定。",
  "Opens in your preferred editor.": "会在首选编辑器中打开。",
  "Open file": "打开文件",
  "Recovery tools": "恢复工具",
  "Rebuild local project indexes without clearing existing chats when the local state gets out of sync. Shown automatically only when recovery actions are relevant.":
    "当本地状态不同步时，重建本地项目索引但不清除已有对话；仅在恢复操作相关时自动显示。",
  "Repair state": "修复状态",
  About: "关于",
  Version: "版本",
  "Current application version.": "当前应用版本。",
  "Release history": "发布历史",
  "A running log of every update, newest first. Same notes the post-update dialog shows, kept here so you can revisit them any time.":
    "按最新优先记录每次更新；与更新后弹窗相同的说明会保留在此，随时可回看。",
  "View release history": "查看发布历史",
  "Shown automatically only when recovery actions are relevant.": "仅在恢复操作相关时自动显示。",
  Environment: "环境",
  "Environment:": "环境：",
  "Panel sections": "面板分区",
  "Initialize Git": "初始化 Git",
  "Local Servers": "本地服务器",
  "Open in Ghostty": "在 Ghostty 中打开",
  "Type here": "在此输入",
  "Source control": "源代码管理",
  "Refresh changes": "刷新更改",
  "Close source control": "关闭源代码管理",
  "No changes in the working tree. Select a file to view its diff.":
    "工作树没有更改。请选择文件以查看差异。",
  "Source control is unavailable for this thread.": "此对话无法使用源代码管理。",
  "Loading changes...": "正在加载更改…",
  Staged: "已暂存",
  Changes: "更改",
  "No staged changes.": "没有已暂存的更改。",
  "No unstaged changes.": "没有未暂存的更改。",
  "Select a file to view its diff.": "选择文件以查看差异。",
  "Unstage file": "取消暂存文件",
  "Unstage all": "全部取消暂存",
  "Stage file": "暂存文件",
  "Stage all": "全部暂存",
  "Working tree": "工作树",
  Unstaged: "未暂存",
  "Commit and Push unavailable; open Git actions menu": "提交并推送不可用；打开 Git 操作菜单",
  "Commit and Push unavailable. Open for more Git actions.":
    "提交并推送不可用。打开以查看更多 Git 操作。",
  "Switch project": "切换项目",
  "Hide chat panel": "隐藏对话面板",
  "Switch to chat view": "切换到对话视图",
  "Editor activity bar": "编辑器活动栏",
  "Hide diff sidebar": "隐藏差异侧边栏",
  "Changed files": "已更改文件",
  "Diff options": "差异选项",
  "File actions": "文件操作",
  "New editor rail item": "新建编辑器栏项目",
  "Chat history": "对话历史",
  "Reference in chat": "在对话中引用",
  "Ask why this changed": "询问为何发生此更改",
  "Copy path": "复制路径",
  "Resize chat panel": "调整对话面板宽度",
  "Drag to resize chat panel": "拖动以调整对话面板宽度",
  "Continue in": "继续在此处运行",
  "Local project": "本地项目",
  "New worktree": "新建工作树",
  "Rate limits remaining": "剩余额度",
  "No local usage data was found yet.": "暂未找到本地用量数据。",
  "No workspace": "没有工作区",
  "No workspace.": "没有工作区。",
  "No workspace is attached to this chat.": "此对话未关联工作区。",
  "No files in this diff.": "此差异中没有文件。",
  "This chat environment is still being prepared. Diffs will be available once the worktree is ready.":
    "此对话环境仍在准备中；工作树就绪后即可查看差异。",
  "Open in editor": "在编辑器中打开",
  "Editor options": "编辑器选项",
  "No installed editors found": "未找到已安装的编辑器",
  "Close file view": "关闭文件视图",
  "Turn diffs are unavailable because this project is not a git repository.":
    "当前项目不是 Git 仓库，无法查看对话差异。",
  "Search files": "搜索文件",
  "Search files...": "搜索文件…",
  "Select a file from the tree to view it.": "从文件树中选择文件以查看。",
  "New terminal tab": "新建终端标签",
  "Split right": "向右拆分",
  "Split down": "向下拆分",
  "Close active terminal tab": "关闭当前终端标签",
  "Scroll to bottom": "滚动到底部",
  "Terminal input": "终端输入",
  "Go back": "后退",
  "Go forward": "前进",
  Reload: "重新加载",
  "Search or enter a URL": "搜索或输入 URL",
  "Copy screenshot": "复制截图",
  "Copy link": "复制链接",
  "Browser actions": "浏览器操作",
  "New tab": "新建标签页",
  "Close tab": "关闭标签页",
  "Refresh local servers": "刷新本地服务器",
  "No local servers": "没有本地服务器",
  "Try another browser URL": "尝试其他浏览器 URL",
  "Capture screenshot": "捕捉截图",
  "Open externally": "在外部打开",
  "Close browser panel": "关闭浏览器面板",
  "Close selected Side": "关闭选中的侧边对话",
  "Reset environment panel default open to default": "将环境面板默认打开状态重置为默认值",
  "New automation": "新建自动化工作流",
  "Edit automation": "编辑自动化工作流",
  "Automation title": "工作流标题",
  "About automations": "关于自动化工作流",
  "Automations run this prompt on a schedule and open the result as a thread.":
    "自动化工作流会按计划运行此提示词，并将结果作为对话打开。",
  "Use template": "使用模板",
  "Automation prompt": "工作流提示词",
  "Add prompt e.g. look for crashes in $sentry": "添加提示词，例如：检查 $sentry 中的崩溃",
  "Select project": "选择项目",
  "Auto fallback may use local checkout": "自动回退可能使用本地检出",
  "If T3 Code cannot create a worktree, runs may fall back to editing the active project checkout.":
    "若 T3 Code 无法创建工作树，运行可能回退到编辑当前项目检出。",
  "Worktree cleanup": "工作树清理",
  "Generated worktrees or branches are kept after archiving until you remove them.":
    "生成的工作树或分支会在归档后保留，直到你手动移除。",
  "Auto fallback may use local checkout If T3 Code cannot create a worktree, runs may fall back to editing the active project checkout.":
    "自动回退可能使用本地检出：若 T3 Code 无法创建工作树，运行可能回退到编辑当前项目检出。",
  "Worktree cleanup Generated worktrees or branches are kept after archiving until you remove them.":
    "工作树清理：生成的工作树或分支会在归档后保留，直到你手动移除。",
  Schedule: "计划",
  Manual: "手动",
  Once: "一次",
  Hourly: "每小时",
  Daily: "每天",
  Weekdays: "工作日",
  Weekly: "每周",
  Unlimited: "不限次数",
  "Approval required": "需要批准",
  "Daily at 9:00": "每天 9:00",
  "Run mode": "运行模式",
  Permissions: "权限",
  Queued: "排队中",
  Starting: "正在启动",
  "Waiting for approval": "等待批准",
  Skipped: "已跳过",
  "Found something to review": "发现待审内容",
  "No findings": "无发现",
  "Completed; open the thread for the reply": "已完成；打开对话查看回复",
  "Last run cancelled": "上次运行已取消",
  "Last run interrupted": "上次运行已中断",
  "Every 15 min": "每 15 分钟",
  "Every 30 min": "每 30 分钟",
  "Every hour": "每小时",
  "Every 2 hours": "每 2 小时",
  "Every 6 hours": "每 6 小时",
  "Every 12 hours": "每 12 小时",
  "Every 24 hours": "每 24 小时",
  "Every minute": "每分钟",
  "10 runs": "10 次运行",
  "25 runs": "25 次运行",
  "50 runs": "50 次运行",
  "100 runs": "100 次运行",
  "250 runs": "250 次运行",
  "1 run": "1 次运行",
  "Dedicated thread": "专用对话",
  "Accept the automation proposal first": "请先接受自动化工作流提案",
  "Triage crashes": "分诊崩溃",
  "Daily summary": "每日摘要",
  "PR is ready to merge": "PR 已可合并",
  "No paused automations.": "没有已暂停的自动化工作流。",
  "No active automations.": "没有运行中的自动化工作流。",
  "Stop on error": "出错时停止",
  Notify: "通知",
  "All runs": "全部运行",
  "Failed runs only": "仅失败的运行",
  "Resume workflow": "恢复工作流",
  "Dismiss workflow panel": "关闭工作流面板",
  "Pause workflow": "暂停工作流",
  "Pause workflow (resume replays completed agents from cache)":
    "暂停工作流（恢复时从缓存重放已完成的智能体）",
  "Stop workflow": "停止工作流",
  "Expand workflow panel": "展开工作流面板",
  "Collapse workflow panel": "收起工作流面板",
  "No agents yet": "暂无智能体",
  "Copy script path and run id": "复制脚本路径与运行 ID",
  "Image view": "查看图片",
  "Assistant message": "助手消息",
  "User message": "用户消息",
  Error: "错误",
  "Revert to this message": "还原到此消息",
  "Collapse all projects": "折叠全部项目",
  "Triage new crashes": "分诊新的崩溃",
  "Update dependencies": "更新依赖",
  "Daily standup summary": "每日站会摘要",
  "Schedule needs review": "计划需要确认",
  "Choose when this automation should run before creating it.":
    "请先选择此自动化工作流的运行时间，再创建它。",
  "Schedule a prompt to run on its own, or wake an existing thread on a loop.":
    "让提示词按计划独立运行，或循环唤醒已有对话。",
  "New task": "新建任务",
  "New task in Grok": "在 Grok 中新建任务",
  "New task in Chats": "在对话中新建任务",
  "2 tasks": "2 个任务",
  "Choose the project for this task": "选择此任务所属项目",
  "Draft a prompt and place it in the board's Draft column. Drag it to In Progress to send it.":
    "编写提示词并放入看板的“草稿”列；拖到“进行中”即可发送。",
  "Describe the task, @tag files/folders, paste images, or use / for skills":
    "描述任务，使用 @ 引用文件/文件夹、粘贴图片，或输入 / 使用技能",
  "Task options": "任务选项",
  "Attach images": "附加图片",
  "Send as draft": "存为草稿",
  "Create task": "创建任务",
  "T3 Code": "T3 Code",
  Integrations: "集成",
  "Jump to space 9": "跳到空间 9",
  "Jump to space 8": "跳到空间 8",
  "Jump to space 7": "跳到空间 7",
  "Jump to space 6": "跳到空间 6",
  "Jump to space 5": "跳到空间 5",
  "Jump to space 4": "跳到空间 4",
  "Jump to space 3": "跳到空间 3",
  "Jump to space 2": "跳到空间 2",
  "Rebuild local project indexes without clearing existing chats when the local state gets out of sync.":
    "本地状态不同步时，重建本地项目索引，且不清空现有对话。",
  "Sign in with claude to see usage.": "使用 claude 登录后即可查看用量。",
  "Sign in with `claude` to see usage.": "使用 `claude` 登录后即可查看用量。",
  "Could not reach the Cursor dashboard.": "无法连接 Cursor 控制台。",
  "Could not reach the Codex usage endpoint.": "无法连接 Codex 用量接口。",
  "Not signed in": "未登录",
  Unsupported: "不支持",
  "Visible because projects exist but no chat history is currently available.":
    "当前有项目但看不到对话历史，因此显示此工具。",
  "What this does": "作用说明",
  "Opening...": "正在打开…",
  "Repairing...": "正在修复…",
  "Switch straight to this tab of the space switcher.": "直接切换到空间切换器中的此标签。",
  "Switch straight to the Void tab of the space switcher.": "直接切换到空间切换器中的 Void 标签。",
  "Switch to the next project space and restore its last working context.":
    "切换到下一个项目空间，并恢复其上次工作上下文。",
  "Switch to the previous project space and restore its last working context.":
    "切换到上一个项目空间，并恢复其上次工作上下文。",
  "Jump to Void": "跳到 Void",
  "Next space": "下一个空间",
  "Previous space": "上一个空间",
  "Desktop app notifications use your operating system notification center.":
    "桌面应用通知走操作系统的通知中心。",
  "Show an OS notification when a chat or managed terminal agent finishes or needs input while the app is in the background.":
    "应用在后台时，对话或受管理终端智能体完成或需要输入，会显示系统通知。",
  Revoke: "撤销",
  "· Expires": "· 过期于",
  "· Last used": "· 上次使用",
  Created: "创建于",
  "Permissions:": "权限：",
  "Projects:": "项目：",
  "Settings sections": "设置分区",
  Personal: "个人",
  Coding: "编程",
  "Chat behavior": "聊天行为",
  "Keyboard shortcuts": "键盘快捷键",
  "Usage & limits": "用量与限制",
  "MCP connections": "MCP 连接",
  "Agent providers": "智能体提供商",
  "Models & writing": "模型与写作",
  "Managed worktrees": "受管理的工作树",
  "Archived threads": "已归档对话",
  "Choose defaults for new chats, navigation, and the Environment panel.":
    "设置新建对话、导航和环境面板的默认选项。",
  "Search and customize shortcuts, grouped by where they work.":
    "搜索并自定义快捷键，按使用位置分组。",
  "See remaining quota and credits for every signed-in provider.":
    "查看每个已登录提供商的剩余配额和额度。",
  "Give Codex, Claude, and other local agents scoped access to T3 Code tasks.":
    "为 Codex、Claude 和其他本地智能体授予受限的 T3 Code 任务访问权限。",
  "Choose visible coding agents and manage their installed CLI tools.":
    "选择要显示的编程智能体，并管理已安装的 CLI 工具。",
  "Choose the model used for Git writing and add custom model slugs.":
    "选择用于 Git 写作的模型，并添加自定义模型标识。",
  "Review reusable workflows discovered across all configured providers.":
    "查看从所有已配置提供商中发现的可复用工作流。",
  "Review and clean up isolated workspaces created by T3 Code.":
    "查看并清理 T3 Code 创建的隔离工作区。",
  "Find and restore threads you previously archived.": "查找并恢复之前归档的对话。",
  "Control live responses, follow-ups, review defaults, and safety confirmations.":
    "控制实时回复、后续消息、审阅默认设置和安全确认。",
  Conversation: "对话",
  "Follow-up behavior": "后续消息行为",
  "Choose whether messages sent during an active turn wait in the queue or steer the current run. Ctrl/Cmd+Enter uses the opposite behavior for one message.":
    "选择在当前轮次运行期间发送的消息是排队等待，还是引导当前运行。Ctrl/Cmd+Enter 可让单条消息使用相反的行为。",
  Queue: "排队",
  Steer: "引导",
  "Annotate page": "标注页面",
  "Cancel annotation": "取消标注",
  "Cancel element selection (Esc)": "取消元素选择（Esc）",
  "Select an element to annotate": "选择要标注的元素",
  "Remove annotations": "清除标注",
  "Edit queued prompt": "编辑排队消息",
  "Delete queued prompt": "删除排队消息",
  "Delete queued follow-up": "删除排队消息",
  "Queued follow-up actions": "排队消息操作",
  "Queued follow-up": "排队消息",
  "Code block": "代码块",
  "Code and status": "代码和状态",
  "Context and notes": "上下文和备注",
  "Customize the theme, typography, density, and time format.":
    "自定义主题、字体、密度和时间格式。",
  "Typography and spacing": "字体与间距",
  Session: "会话",
  "Skill discovery failed": "技能发现失败",
  "No skills found": "未找到技能",
  "This browser": "此浏览器",
  "Choose how T3 Code tells you when work finishes or needs attention.":
    "选择 T3 Code 在工作完成或需要你注意时如何提醒你。",
  "Capture another app's frontmost window directly into a task.":
    "直接把其他应用当前最前方的窗口截取到任务中。",
  "Edit unfiled group": "编辑未归类分组",
  "Name the group that holds projects you haven't filed into a space. This is a local preference — the projects in it stay where they are.":
    "为尚未归入空间的项目分组命名。这只是本地偏好；其中的项目仍会保留在原处。",
  "Edit name and icon…": "编辑名称和图标…",
  "Reset to Void": "重置为 Void",
  "Provider limits": "提供商限制",
  "External agents": "外部智能体",
  "Coding agents": "编程智能体",
  "Model configuration": "模型配置",
  "Reusable workflows": "可复用工作流",
  "Manage sessions, recovery tools, low-level keybindings, and version details.":
    "管理会话、恢复工具、底层按键绑定和版本信息。",
  "Workflow defaults": "工作流默认值",
  "What’s new": "更新内容",
  "Send feedback": "发送反馈",
  Docs: "文档",
  "diff line wrapping": "差异行换行",
  "code block wrapping": "代码块换行",
  "Your stats": "你的统计",
  "Visual language": "视觉风格",
  Alerts: "提醒",
  "Interaction rules": "交互规则",
  "Screen capture": "屏幕截取",
  "Key bindings": "快捷键绑定",
  "Workspace management": "工作区管理",
  "Thread management": "对话管理",
  "AI configuration": "AI 配置",
  "Picker visibility": "选择器可见性",
  "Agent skills": "智能体技能",
  "Limits & credits": "额度与积分",
  "External MCP": "外部 MCP",
  "System tools": "系统工具",
  "Your local activity, streaks, and a shareable stats card.":
    "本地活动、连续天数和可分享的统计卡片。",
  "Pair local MCP clients with scoped, revocable access to T3 Code tasks.":
    "把本地 MCP 客户端配对到 T3 Code，授予可撤销、范围受限的任务访问权。",
  "Connect a coding agent": "连接编程智能体",
  "Coding agent": "编程智能体",
  "How this connection appears in T3 Code. Works with Codex, Claude, and any other MCP-capable agent.":
    "此连接在 T3 Code 中的显示名称。适用于 Codex、Claude 以及其他支持 MCP 的智能体。",
  "Access all of T3 Code": "访问全部 T3 Code 项目",
  "The agent can discover and work in every project, including ones you add later. Turn off to pick specific projects.":
    "智能体可发现并使用全部项目（含以后新增的）。关闭后可只选指定项目。",
  "No projects are available.": "暂无可用项目。",
  "Advanced permissions": "高级权限",
  "Optional access for existing tasks, shared checkouts, or execution without approvals. The safe defaults are recommended.":
    "可选权限：读取既有任务、共用本地检出，或无需审批即可执行。建议保持安全默认值。",
  "Read other project tasks": "读取项目内其他任务",
  "Without this permission, the agent can read only tasks it creates.":
    "未开启时，智能体只能读取它自己创建的任务。",
  "Use the shared local checkout": "使用共用本地检出",
  "High impact. Tasks may modify the checkout you are actively using instead of an isolated worktree.":
    "影响较大。任务可能改动你正在用的检出目录，而不是隔离工作树。",
  "Run without approval prompts": "无需审批即可执行",
  "High impact. The external agent may start full-access execution without asking you to approve tool actions.":
    "影响较大。外部智能体可能以完全访问启动，且不再征求工具操作批准。",
  "Create connection": "创建连接",
  "The connection lasts 30 days and can be revoked at any time. The next screen gives you one prompt to paste into your agent.":
    "连接有效期 30 天，可随时撤销。下一屏会给出一条可粘贴到智能体的设置提示词。",
  "Creating...": "正在创建…",
  "Connected agents": "已连接的智能体",
  "Loading connections...": "正在加载连接…",
  "No connected agents": "尚无已连接智能体",
  "Connect Codex, Claude, or another local MCP agent to create and follow T3 Code tasks.":
    "连接 Codex、Claude 或其他本地 MCP 智能体，以创建并跟进 T3 Code 任务。",
  Revoked: "已撤销",
  Expired: "已过期",
  Connected: "已连接",
  "Paired — waiting for first use": "已配对 — 等待首次使用",
  "Pairing code expired": "配对码已过期",
  "Waiting for pairing": "等待配对",
  "Paired — not used yet": "已配对 — 尚未使用",
  "This connection has been revoked and can no longer access T3 Code.":
    "此连接已撤销，无法再访问 T3 Code。",
  "This connection has expired and can no longer access T3 Code.":
    "此连接已过期，无法再访问 T3 Code。",
  "T3 Code received a request from this agent. Setup is complete.":
    "T3 Code 已收到该智能体的请求。设置完成。",
  "The private credential is stored locally. If the agent has not registered T3 Code yet, give it the setup prompt below.":
    "私有凭据已保存在本地。若智能体尚未注册 T3 Code，请把下方设置提示词交给它。",
  "The one-time pairing code was not used in time. Resume pairing to issue a fresh code without replacing this connection.":
    "一次性配对码未在有效期内使用。可恢复配对以签发新码，无需重建连接。",
  "Paste the setup prompt into your agent. This page updates automatically when pairing succeeds.":
    "把设置提示词粘贴到你的智能体。配对成功后本页会自动更新。",
  "Revoke and start over": "撤销并重新开始",
  "Resume pairing": "恢复配对",
  "Resuming...": "正在恢复…",
  "Continue setup": "继续设置",
  "1. Give your agent this prompt": "1. 把这段提示词交给智能体",
  "Copy the prompt and paste it into the agent you want to connect (Codex, Claude Code, or any MCP-capable app). The agent pairs this computer, registers T3 Code in its own configuration, and verifies the connection by itself.":
    "复制提示词并粘贴到要连接的智能体（Codex、Claude Code 或任意支持 MCP 的应用）。它会完成本机配对、在自身配置中注册 T3 Code，并自行验证连接。",
  "Paired. The prompt now covers only registration and verification.":
    "已配对。提示词现在只涵盖注册与验证。",
  "Copy setup prompt": "复制设置提示词",
  "Setup prompt copied": "已复制设置提示词",
  "Set up by hand instead": "改为手动设置",
  "For apps without a terminal or chat, like Claude Desktop: run the pairing command in Terminal, then add the JSON below to the app's MCP configuration.":
    "适用于没有终端/聊天的应用（如 Claude Desktop）：在「终端」运行配对命令，再把下方 JSON 加到该应用的 MCP 配置。",
  "Pairing command (run in Terminal)": "配对命令（在终端运行）",
  "Pairing command copied": "已复制配对命令",
  "MCP configuration (JSON)": "MCP 配置（JSON）",
  "Configuration copied": "已复制配置",
  "2. Try it": "2. 试一下",
  "Open a new chat in the agent you just connected and send this editable example. You never need to copy project IDs, model IDs, or request IDs yourself.":
    "在刚连接的智能体里开一个新对话，发送这条可编辑示例。你不必自己复制项目 ID、模型 ID 或请求 ID。",
  "Connection verified by T3 Code.": "T3 Code 已验证连接。",
  "T3 Code will show Connected after the agent makes its first request.":
    "智能体发出首次请求后，T3 Code 会显示「已连接」。",
  "Copy example prompt": "复制示例提示词",
  "Example prompt copied": "已复制示例提示词",
  "Could not copy": "无法复制",
  "Clipboard access failed.": "剪贴板访问失败。",
  "Connection ready": "连接已就绪",
  "Give your agent the setup prompt before the one-time code expires.":
    "请在一次性配对码过期前，把设置提示词交给智能体。",
  "Could not create connection": "无法创建连接",
  "External MCP setup failed.": "外部 MCP 设置失败。",
  "Connection revoked": "连接已撤销",
  "Its credential stops working immediately.": "其凭据会立即失效。",
  "Could not revoke connection": "无法撤销连接",
  "Revocation failed.": "撤销失败。",
  "New pairing code ready": "新配对码已就绪",
  "Copy the refreshed setup prompt. The new one-time code lasts 10 minutes.":
    "复制刷新后的设置提示词。新的一次性配对码有效期为 10 分钟。",
  "Could not resume pairing": "无法恢复配对",
  "Pairing refresh failed.": "配对刷新失败。",
  "Pairing already completed": "配对已完成",
  "All projects, including future ones": "全部项目（含以后新增）",
  "No projects": "无项目",
  "Create and follow its own tasks": "创建并跟进自己的任务",
  "Read other tasks in selected projects": "读取所选项目中的其他任务",
  "Show text": "显示文本",
  "Copy code": "复制代码",
  "Disable soft wrap": "关闭自动换行",
  "Enable soft wrap": "开启自动换行",
  // Fenced code-block language headers (lowercase fence tags → readable labels).
  text: "文本",
  plaintext: "纯文本",
  plain: "纯文本",
  bash: "Bash 脚本",
  sh: "Shell 脚本",
  zsh: "Zsh 脚本",
  shell: "Shell 脚本",
  toml: "TOML 配置",
  json: "JSON",
  yaml: "YAML",
  yml: "YAML",
  markdown: "Markdown",
  md: "Markdown",
  typescript: "TypeScript",
  ts: "TypeScript",
  javascript: "JavaScript",
  js: "JavaScript",
  python: "Python",
  py: "Python",
  rust: "Rust",
  rs: "Rust",
  go: "Go",
  sql: "SQL",
  css: "CSS",
  html: "HTML",
  xml: "XML",
  diff: "差异",
  ini: "INI",
  conf: "配置",
  config: "配置",
  dockerfile: "Dockerfile",
  "Message navigation": "消息导航",
  "Open the composer reasoning and trait controls.": "打开输入框的推理与特征控件。",
  "Focus or blur the chat prompt composer.": "聚焦或取消聚焦对话输入框。",
  "New Claude thread": "新建 Claude 对话",
  "Start a fresh thread with Claude selected.": "新建对话并选中 Claude。",
  "New Codex thread": "新建 Codex 对话",
  "Start a fresh thread with Codex selected.": "新建对话并选中 Codex。",
  "New Cursor thread": "新建 Cursor 对话",
  "Start a fresh thread with Cursor selected.": "新建对话并选中 Cursor。",
  "Previous recent view": "上一个最近视图",
  "Cycle backward through recently opened primary views.": "在最近打开的主视图中向后循环。",
  "Next recent view": "下一个最近视图",
  "Cycle forward through recently opened primary views.": "在最近打开的主视图中向前循环。",
  "Next model": "下一个模型",
  "Cycle to the next model for the active provider (favorites first, then remaining models).":
    "切换到当前提供商的下一个模型（先收藏，再其余模型）。",
  "Previous model": "上一个模型",
  "Cycle to the previous model for the active provider (favorites first, then remaining models).":
    "切换到当前提供商的上一个模型（先收藏，再其余模型）。",
  "Toggle terminal": "切换终端",
  "Show or hide the terminal surface for the active thread.": "显示或隐藏当前对话的终端面板。",
  "Toggle diff": "切换差异",
  "Open or close the working tree diff panel.": "打开或关闭工作树差异面板。",
  "Toggle browser": "切换浏览器",
  "Reveal the built-in browser panel for the active thread.": "显示当前对话的内置浏览器面板。",
  "Previous visible thread": "上一个可见对话",
  "Cycle to the previous thread that is currently visible in the sidebar.":
    "切换到侧边栏中当前可见的上一个对话。",
  "Next visible thread": "下一个可见对话",
  "Cycle to the next thread that is currently visible in the sidebar.":
    "切换到侧边栏中当前可见的下一个对话。",
  "Open in favorite editor": "在常用编辑器中打开",
  "Send the current thread or workspace target to your preferred editor.":
    "把当前对话或工作区目标发送到你偏好的编辑器。",
  "Commit and push": "提交并推送",
  "Commit pending changes and push the active thread's repo.": "提交待定更改并推送当前对话的仓库。",
  "Focus a visible thread directly from the sidebar number row.":
    "通过侧边栏数字行直接聚焦可见对话。",
  "Available now": "当前可用",
  "These reflect the current chat and sidebar context.": "对应当前对话与侧边栏上下文。",
  "These reflect the active workspace-terminal context.": "对应当前工作区终端上下文。",
  "Outside workspace mode": "工作区模式外",
  "In workspace mode": "工作区模式内",
  "Number-row jumps return when the terminal workspace is closed.":
    "关闭终端工作区后，数字行跳转会恢复。",
  "These bindings take over when the terminal switches into workspace mode.":
    "终端进入工作区模式时，这些快捷键会接管。",
  "Open full-width terminal workspace": "打开全宽终端工作区",
  "Expand the active thread into the workspace terminal layout.":
    "将当前对话展开为工作区终端布局。",
  "Focus terminal tab": "聚焦终端标签",
  "Switch the workspace to the terminal tab.": "将工作区切换到终端标签。",
  "Focus chat tab": "聚焦对话标签",
  "Switch the workspace back to the chat tab.": "将工作区切回对话标签。",
  "Close active workspace panel": "关闭当前工作区面板",
  "Close the currently focused workspace panel or tab.": "关闭当前聚焦的工作区面板或标签。",
  "Project scripts": "项目脚本",
  "Custom shortcuts defined for the active project's scripts.":
    "为当前项目脚本定义的自定义快捷键。",
  "Run the project setup script directly from the keyboard.": "通过键盘直接运行项目 setup 脚本。",
  "Run this project script without opening the scripts menu.":
    "无需打开脚本菜单即可运行此项目脚本。",
  "Select branch": "选择分支",
  "Open the empty chat landing view.": "打开空白对话落地页。",
  "Open the Create project dialog to import a local folder.":
    "打开「创建项目」对话框以导入本地文件夹。",
  "⌥ left": "⌥ 左",
  "⌥ right": "⌥ 右",
  "Record AppSnap shortcut": "录制应用截图快捷键",
  "Thread archived": "对话已归档",
  Sun: "周日",
  Mon: "周一",
  Tue: "周二",
  Wed: "周三",
  Thu: "周四",
  Fri: "周五",
  Sat: "周六",
  "Every second": "每秒",
  "Every seconds": "每秒",
  all: "全部",
  active: "运行中",
  paused: "已暂停",
  "Web search": "网页搜索",
  "Web search:": "网页搜索:",
  "X search": "X 搜索",
  "X search:": "X 搜索:",
  "Searched the web": "已搜索网页",
  "Generated image": "已生成图片",
  "Viewed image": "已查看图片",
  "Agent task": "智能体任务",
  "Ran command": "已运行命令",
  "Running command": "正在运行命令",
  "Command run": "已运行命令",
  "Dynamic tool call": "动态工具调用",
  "MCP tool call": "MCP 工具调用",
  "MCP tool": "MCP 工具",
  "MCP: tool": "MCP: 工具",
  "Tool call": "工具调用",
  Grep: "搜索",
  Glob: "文件匹配",
  Bash: "运行命令",
  Shell: "运行命令",
  StrReplace: "替换",
  Write: "写入",
  MultiEdit: "批量编辑",
  TodoWrite: "待办",
  "Read file": "读取文件",
  "Read File": "读取文件",
  "Runtime error": "运行错误",
  "Runtime warning": "运行警告",
  "Provider runtime error": "发生错误",
  "Turn failed": "此回合失败",
  "Turn completed": "回合完成",
  "T3 Code recovered a stale running state": "运行无响应，已自动结束",
  "T3 Code realigned the active provider turn": "已重新对齐当前回合",
  "Moved to background": "已移至后台",
  "OpenCode retrying": "OpenCode 正在重试",
  "Kilo retrying": "Kilo 正在重试",
  Edited: "已编辑",
  Ran: "已运行",
  Running: "正在运行",
  Reading: "正在读取",
  Searching: "正在搜索",
  Searched: "已搜索",
  Listed: "已列出",
  Listing: "正在列出",
  Found: "已找到",
  Finding: "正在查找",
  Removed: "已删除",
  Removing: "正在删除",
  Copied: "已复制",
  Copying: "正在复制",
  Moved: "已移动",
  Moving: "正在移动",
  Checked: "已检查",
  Checking: "正在检查",
  Compared: "已比较",
  Comparing: "正在比较",
  Inspected: "已检查",
  Inspecting: "正在检查",
  Reviewed: "已审阅",
  Reviewing: "正在审阅",
  Staging: "正在暂存",
  Committed: "已提交",
  Committing: "正在提交",
  Pushed: "已推送",
  Pushing: "正在推送",
  Pulled: "已拉取",
  Pulling: "正在拉取",
  "Switched to": "已切换到",
  "Switching to": "正在切换到",
  Creating: "正在创建",
  Find: "查找",
  Reasoning: "思考强度",
  "Reasoning update": "推理更新",
  "Reasoning trace": "推理轨迹",
  "Reasoning summary": "推理摘要",
  "Command execution": "运行命令",
  "Tool call complete": "工具调用完成",
  "Tool call completed": "工具调用完成",
  "Ran command started": "正在运行命令",
  "File change": "文件更改",
  "Spawn subagents": "启动子智能体",
  "Spawn agent": "启动智能体",
  "Subagent task": "子智能体任务",
  "Task: Subagent task": "任务：子智能体任务",
  "Steering conversation": "引导对话",
  "Sent via Automation": "由自动化发送",
  "Sent by agent": "由智能体发送",
  "Agent activity": "智能体活动",
  "Checkpoint captured": "已捕获检查点",
  "Compacting conversation...": "正在压缩对话…",
  "Compacting context": "正在压缩上下文",
  "Context compacted": "上下文已压缩",
  "Context compacted manually": "上下文已手动压缩",
  "Context compacted failed": "上下文压缩失败",
  "Context window updated": "上下文窗口已更新",
  "Context window configured": "上下文窗口已配置",
  "Updating files": "正在更新文件",
  "Task completed": "任务已完成",
  "Tool execution aborted": "工具执行已中止",
  "Fetching PR details": "正在获取 PR 详情",
  "Rate limits updated": "速率限制已更新",
  "Search tools": "搜索工具",
  "List tools": "列出工具",
  "Get tools": "获取工具",
  "Get MCP tools": "获取 MCP 工具",
  "Call MCP tool": "调用 MCP 工具",
  "Call tool": "调用工具",
  ToolSearch: "搜索工具",
  Workflow: "工作流",
  WebFetch: "网页获取",
  "T3 Code is checking its context": "T3 Code 正在检查上下文",
  "T3 Code checked its context": "T3 Code 已检查上下文",
  "T3 Code couldn't check its context": "T3 Code 无法检查上下文",
  "T3 Code is checking available agents": "T3 Code 正在检查可用智能体",
  "T3 Code checked available agents": "T3 Code 已检查可用智能体",
  "T3 Code couldn't check available agents": "T3 Code 无法检查可用智能体",
  "T3 Code is gathering an overview": "T3 Code 正在收集概览",
  "T3 Code gathered an overview": "T3 Code 已收集概览",
  "T3 Code couldn't gather an overview": "T3 Code 无法收集概览",
  "T3 Code is listing allowed projects": "T3 Code 正在列出允许的项目",
  "T3 Code listed allowed projects": "T3 Code 已列出允许的项目",
  "T3 Code couldn't list allowed projects": "T3 Code 无法列出允许的项目",
  "T3 Code is creating a task": "T3 Code 正在创建任务",
  "T3 Code created a task": "T3 Code 已创建任务",
  "T3 Code couldn't create a task": "T3 Code 无法创建任务",
  "T3 Code is waiting for a task": "T3 Code 正在等待任务",
  "T3 Code finished waiting for a task": "T3 Code 已完成等待任务",
  "T3 Code couldn't wait for a task": "T3 Code 无法等待任务",
  "T3 Code is reading a task": "T3 Code 正在读取任务",
  "T3 Code read a task": "T3 Code 已读取任务",
  "T3 Code couldn't read a task": "T3 Code 无法读取任务",
  "T3 Code is listing projects": "T3 Code 正在列出项目",
  "T3 Code listed projects": "T3 Code 已列出项目",
  "T3 Code couldn't list projects": "T3 Code 无法列出项目",
  "T3 Code is listing threads": "T3 Code 正在列出对话",
  "T3 Code listed threads": "T3 Code 已列出对话",
  "T3 Code couldn't list threads": "T3 Code 无法列出对话",
  "T3 Code is reading a thread": "T3 Code 正在读取对话",
  "T3 Code read a thread": "T3 Code 已读取对话",
  "T3 Code couldn't read a thread": "T3 Code 无法读取对话",
  "T3 Code is reading thread activity": "T3 Code 正在读取对话活动",
  "T3 Code read thread activity": "T3 Code 已读取对话活动",
  "T3 Code couldn't read thread activity": "T3 Code 无法读取对话活动",
  "T3 Code is reading thread events": "T3 Code 正在读取对话事件",
  "T3 Code read thread events": "T3 Code 已读取对话事件",
  "T3 Code couldn't read thread events": "T3 Code 无法读取对话事件",
  "T3 Code is reading thread runtime events": "T3 Code 正在读取对话运行时事件",
  "T3 Code read thread runtime events": "T3 Code 已读取对话运行时事件",
  "T3 Code couldn't read thread runtime events": "T3 Code 无法读取对话运行时事件",
  "T3 Code is diagnosing a thread": "T3 Code 正在诊断对话",
  "T3 Code diagnosed a thread": "T3 Code 已诊断对话",
  "T3 Code couldn't diagnose a thread": "T3 Code 无法诊断对话",
  "T3 Code is creating a thread": "T3 Code 正在创建对话",
  "T3 Code created a thread": "T3 Code 已创建对话",
  "T3 Code couldn't create a thread": "T3 Code 无法创建对话",
  "T3 Code is creating threads": "T3 Code 正在创建对话",
  "T3 Code created threads": "T3 Code 已创建对话",
  "T3 Code couldn't create threads": "T3 Code 无法创建对话",
  "T3 Code is waiting for threads": "T3 Code 正在等待对话",
  "T3 Code finished waiting for threads": "T3 Code 已完成等待对话",
  "T3 Code couldn't wait for threads": "T3 Code 无法等待对话",
  "T3 Code is sending a message": "T3 Code 正在发送消息",
  "T3 Code sent a message": "T3 Code 已发送消息",
  "T3 Code couldn't send a message": "T3 Code 无法发送消息",
  "T3 Code is interrupting a thread": "T3 Code 正在中断对话",
  "T3 Code interrupted a thread": "T3 Code 已中断对话",
  "T3 Code couldn't interrupt a thread": "T3 Code 无法中断对话",
  "T3 Code is renaming a thread": "T3 Code 正在重命名对话",
  "T3 Code renamed a thread": "T3 Code 已重命名对话",
  "T3 Code couldn't rename a thread": "T3 Code 无法重命名对话",
  "T3 Code is updating a thread": "T3 Code 正在更新对话",
  "T3 Code updated a thread": "T3 Code 已更新对话",
  "T3 Code couldn't update a thread": "T3 Code 无法更新对话",
  "T3 Code is creating an automation": "T3 Code 正在创建自动化",
  "T3 Code created an automation": "T3 Code 已创建自动化",
  "T3 Code couldn't create an automation": "T3 Code 无法创建自动化",
  "T3 Code is listing automations": "T3 Code 正在列出自动化",
  "T3 Code listed automations": "T3 Code 已列出自动化",
  "T3 Code couldn't list automations": "T3 Code 无法列出自动化",
  "T3 Code is viewing an automation": "T3 Code 正在查看自动化",
  "T3 Code viewed an automation": "T3 Code 已查看自动化",
  "T3 Code couldn't view an automation": "T3 Code 无法查看自动化",
  "T3 Code is updating an automation": "T3 Code 正在更新自动化",
  "T3 Code updated an automation": "T3 Code 已更新自动化",
  "T3 Code couldn't update an automation": "T3 Code 无法更新自动化",
  "T3 Code is updating automation memory": "T3 Code 正在更新自动化记忆",
  "T3 Code updated automation memory": "T3 Code 已更新自动化记忆",
  "T3 Code couldn't update automation memory": "T3 Code 无法更新自动化记忆",
  "T3 Code is reporting an automation result": "T3 Code 正在上报自动化结果",
  "T3 Code reported an automation result": "T3 Code 已上报自动化结果",
  "T3 Code couldn't report an automation result": "T3 Code 无法上报自动化结果",
  "T3 Code is stopping an automation": "T3 Code 正在停止自动化",
  "T3 Code stopped an automation": "T3 Code 已停止自动化",
  "T3 Code couldn't stop an automation": "T3 Code 无法停止自动化",
  files: "文件",
  file: "文件",
  directory: "目录",
  "current directory": "当前目录",
  "parent directory": "父目录",
  changes: "更改",
  commit: "提交",
  branch: "分支",
  "git status": "git 状态",
  "git history": "git 历史",
  "to remote": "到远程",
  "from remote": "从远程",
  web: "网页",
  "the web": "网页",
  internet: "互联网",
  "the internet": "互联网",
  repositories: "仓库",
  project: "项目",
  projects: "项目",
  task: "任务",
  tasks: "任务",
  thread: "对话",
  threads: "对话",
  "the project": "项目",
  "the repository": "仓库",
  "the task": "任务",
  "the thread": "对话",
  "the current thread": "当前对话",
  AppleScript: "AppleScript",
  "bun script": "bun 脚本",
  "node script": "node 脚本",
  "python script": "python 脚本",
  "deno script": "deno 脚本",
  "ruby script": "ruby 脚本",
  "perl script": "perl 脚本",
  tools: "工具",
  tool: "工具",
  agents: "智能体",
  agent: "智能体",
  subagents: "子智能体",
  subagent: "子智能体",
  Failed: "失败",
  Stopped: "已停止",
  Completed: "已完成",
  "Starting agents": "正在启动智能体",
  Variant: "推理",
  Agent: "智能体",
  Context: "上下文",
  Build: "构建",
  Waiting: "等待中",
  Streaming: "输出中",
  Cancelled: "已取消",
  Todowrite: "待办",
  notices: "条通知",
  "unknown certificate verification error": "证书校验失败。请检查系统时间、代理证书或网络拦截。",
  "Provider request failed; retrying.": "提供商请求失败，正在自动重试。",
  "Quarantined provider runtime event 'item.completed' after a permanent journal failure.":
    "永久性日志失败后，提供方运行时事件「item.completed」已被隔离。",
  "Cannot connect to API: The socket connection was closed unexpectedly.":
    "无法连接 API：模型服务连接意外中断。请重试；若持续失败，请切换模型或检查网络/代理。",
  "The socket connection was closed unexpectedly. For more information pass `--verbose`":
    "模型服务连接意外中断。请重试；若持续失败，请切换模型或检查网络/代理。",
  "The socket connection was closed unexpectedly.":
    "模型服务连接意外中断。请重试；若持续失败，请切换模型或检查网络/代理。",
  "Running tool": "正在运行工具",
  "Active now": "刚刚活跃",
  " out of ": " / ",
  " tasks completed": " 项任务已完成",
  "Timed out while running command.": "运行命令超时。",
  "Could not verify Cursor Agent authentication status.": "无法验证 Cursor Agent 认证状态。",
  "Could not verify Cursor Agent authentication status. Timed out while running command.":
    "无法验证 Cursor Agent 认证状态。运行命令超时。",
  "Cursor Agent CLI is installed but failed to run. Timed out while running command.":
    "Cursor Agent CLI 已安装但运行失败。运行命令超时。",
  "Cursor Agent is not authenticated. Run `cursor-agent login` and try again.":
    "Cursor Agent 未认证。请运行 `cursor-agent login` 后重试。",
  "Cursor Agent is installed, but T3 Code could not verify authentication status.":
    "Cursor Agent 已安装，但 T3 Code 无法验证认证状态。",
  "Could not verify Codex authentication status. Timed out while running command.":
    "无法验证 Codex 认证状态。运行命令超时。",
  "Error loading configuration: url is not supported for stdio\nin `mcp_servers.synara`":
    "配置加载失败：`mcp_servers.synara` 不能同时使用 stdio 与 url（多为 Codex Desktop 的 stdio 集成与 T3 Code HTTP 网关撞名）。",
  "Error loading configuration: url is not supported for stdio":
    "配置加载失败：stdio 类型的 MCP 服务不支持 url 字段。",
  "url is not supported for stdio": "stdio 类型的 MCP 服务不支持 url 字段",
  "url is not supported for stdio\nin `mcp_servers.synara`":
    "`mcp_servers.synara` 不能同时使用 stdio 与 url（Codex Desktop 集成与 T3 Code 网关冲突）",
  Aborted: "已中止",
  "Turn aborted": "回合已中止",
  "User input requested": "已请求用户输入",
  "User input submitted": "已提交用户输入",
  "User input requested.": "已请求用户输入。",
  Question: "提问",
  "Search branches...": "搜索分支…",
  "Create and checkout new branch...": "创建并切出新分支…",
  "No branches found.": "未找到分支。",
  "Checkout Pull Request": "检出拉取请求",
  current: "当前",
  worktree: "工作树",
  remote: "远程",
  default: "默认",
  "Uncommitted:": "未提交：",
  "Side is unavailable": "侧边对话不可用",
  "Open a server-backed main thread before starting Side.":
    "请先打开由服务器支持的主对话，再启动侧边对话。",
  "An error occurred while creating Side.": "创建侧边对话时出错。",
  "No changes in the working tree.": "工作树中没有更改。",
  Steps: "步骤",
  "Could not verify Claude authentication status. Timed out while running command.":
    "无法验证 Claude 认证状态。运行命令超时。",
  "Codex CLI is installed but failed to run. Timed out while running command.":
    "Codex CLI 已安装但运行失败。运行命令超时。",
  "Claude Agent CLI is installed but failed to run. Timed out while running command.":
    "Claude Agent CLI 已安装但运行失败。运行命令超时。",
  "Grok CLI is installed but failed to run. Timed out while running command.":
    "Grok CLI 已安装但运行失败。运行命令超时。",
  "Droid CLI is installed but failed to run. Timed out while running command.":
    "Droid CLI 已安装但运行失败。运行命令超时。",
  "Kilo CLI is installed but failed to run. Timed out while running command.":
    "Kilo CLI 已安装但运行失败。运行命令超时。",
  "Command exited with code 0.": "命令以代码 0 退出。",
};

// T3 Code adds a large settings surface and a desktop preview workflow that
// did not exist in the Synara source dictionary. Keep these additions in a
// separate overlay so upstream terminology can be refreshed without silently
// deleting the personal fork's newer labels.
const T3_UI_TEXT: Readonly<Record<string, string>> = {
  "Build what?": "构建什么？",
  "ACP Registry": "ACP 注册表",
  "Adding…": "正在添加…",
  "Agent activity disabled": "智能体活动已禁用",
  "Agent activity enabled": "智能体活动已启用",
  "Another script change is still saving. Try again.": "另一个脚本更改仍在保存，请重试。",
  "Applies your instructions to change descriptions and change request titles and descriptions in every project.":
    "将你的指令应用于所有项目的更改说明，以及变更请求的标题和说明。",
  "Approximate active CPU time for the T3 server root process and its descendants during the selected window. It grows only while sampled processes use CPU and older samples leave as the window moves.":
    "所选时间窗口内 T3 服务器根进程及其子进程的近似活跃 CPU 时间。只有采样到进程使用 CPU 时才会增长，窗口滚动后较旧的样本会移出。",
  "Archived thread action failed": "归档对话操作失败",
  "Automatic updates are not available in this build.": "此构建版本不支持自动更新。",
  "Backend added": "后端已添加",
  "Browser storage is unavailable, so the change was not kept.":
    "浏览器存储不可用，因此更改未保留。",
  "Cancel inspecting app colors": "取消检查应用颜色",
  Cause: "原因",
  "Change managed tunnel connectivity.": "更改托管隧道连接。",
  Child: "子进程",
  "Choose files": "选择文件",
  "Click to hide email": "点击隐藏邮箱",
  "Click to reveal email": "点击显示邮箱",
  "Code blocks, diffs, and file previews.": "代码块、差异和文件预览。",
  "Code font size": "代码字体大小",
  "Copied trace ID": "已复制 Trace ID",
  "Copy full trace ID": "复制完整 Trace ID",
  "Could not add backend": "无法添加后端",
  "Could not add provider instance": "无法添加提供商实例",
  "Could not change update track": "无法更改更新通道",
  "Could not change WSL backend": "无法更改 WSL 后端",
  "Could not connect backend": "无法连接后端",
  "Could not copy trace ID": "无法复制 Trace ID",
  "Could not create pairing URL": "无法创建配对 URL",
  "Could not disable Tailscale HTTPS": "无法禁用 Tailscale HTTPS",
  "Could not read that file. Paste the JSON below instead.":
    "无法读取该文件。请改为粘贴下面的 JSON。",
  "Could not remove backend": "无法移除后端",
  "Could not restart resource monitor": "无法重启资源监控器",
  "Could not revoke client access": "无法撤销客户端访问权限",
  "Could not revoke other clients": "无法撤销其他客户端",
  "Could not revoke pairing link": "无法撤销配对链接",
  "Could not save your theme": "无法保存你的主题",
  "Could not scan the server environment": "无法扫描服务器环境",
  "Could not set up Tailscale HTTPS": "无法设置 Tailscale HTTPS",
  "Could not update network access": "无法更新网络访问权限",
  "Couldn’t restore theme settings": "无法恢复主题设置",
  "Create comments while reviewing changes.": "审阅更改时创建评论。",
  "Create terminals and send input to running shells.": "创建终端并向运行中的 shell 发送输入。",
  "Current environment": "当前环境",
  "Custom instructions": "自定义指令",
  "Desktop only": "仅桌面端",
  "Change project": "切换项目",
  "Choose a project": "选择项目",
  Diagnostics: "诊断",
  Download: "下载",
  "Download failed.": "下载失败。",
  Duration: "持续时间",
  Ended: "结束时间",
  "Enter a backend host and pairing code.": "输入后端主机和配对码。",
  "Enter a backend host.": "输入后端主机。",
  "Enter a model slug.": "输入模型 slug。",
  "Enter a pairing code.": "输入配对码。",
  "Environment connected": "环境已连接",
  "Error background": "错误背景",
  "Error text": "错误文本",
  "Expand the theme editor": "展开主题编辑器",
  "Failed to add backend.": "添加后端失败。",
  "Failed to configure Tailscale HTTPS.": "配置 Tailscale HTTPS 失败。",
  "Failed to connect backend.": "连接后端失败。",
  "Failed to create pairing URL.": "创建配对 URL 失败。",
  "Failed to delete thread": "删除对话失败",
  "Failed to disable Tailscale HTTPS.": "禁用 Tailscale HTTPS 失败。",
  "Failed to import action.": "导入操作失败。",
  "Failed to remove backend.": "移除后端失败。",
  "Failed to revoke client access.": "撤销客户端访问权限失败。",
  "Failed to revoke other clients.": "撤销其他客户端失败。",
  "Failed to revoke pairing link.": "撤销配对链接失败。",
  "Failed to unarchive thread": "取消归档对话失败",
  "Failed to update network exposure.": "更新网络暴露设置失败。",
  "Failed to update WSL backend.": "更新 WSL 后端失败。",
  Failure: "失败",
  "Hide whitespace changes": "隐藏空白更改",
  "In-memory process samples retained by the server. This resets when the server restarts.":
    "服务器保留的内存进程样本。服务器重启后会重置。",
  "Inspect app colors": "检查应用颜色",
  "Inspect managed relay connectivity.": "检查托管中继连接。",
  "Inspect pairing links and authorized clients.": "检查配对链接和已授权客户端。",
  "Install failed.": "安装失败。",
  "Install Git on the server, add optional hosting integrations or credentials your workspace needs, then rescan.":
    "在服务器上安装 Git，添加工作区所需的可选托管集成或凭据，然后重新扫描。",
  "Instance label": "实例标签",
  "Interface font": "界面字体",
  "Interface font size": "界面字体大小",
  "Issue and revoke credentials for other clients.": "签发和撤销其他客户端的凭据。",
  "It’s now active.": "现在已生效。",
  "Last Seen": "上次出现",
  "Loading devices": "正在加载设备",
  "Loading failure groups...": "正在加载失败分组…",
  "Loading failures...": "正在加载失败记录…",
  "Loading provider settings": "正在加载提供商设置",
  "Loading recent logs...": "正在加载最近日志…",
  "Loading slow spans...": "正在加载慢跨度…",
  "Loading span names...": "正在加载跨度名称…",
  "Main colors": "主要颜色",
  "Manage access": "管理访问权限",
  "Manage relay": "管理中继",
  "Minimize the theme editor": "收起主题编辑器",
  "Name your theme first.": "请先为主题命名。",
  "No available editors found.": "未找到可用编辑器。",
  "No connected devices": "没有已连接的设备",
  "No environment is selected.": "未选择环境。",
  "No failed spans found.": "未找到失败跨度。",
  "No live descendant processes found.": "未找到正在运行的后代进程。",
  "No repeated failures found.": "未找到重复失败记录。",
  "No reported errors": "没有报告错误",
  "No spans found.": "未找到跨度。",
  "No warnings or errors found.": "未找到警告或错误。",
  "Nothing detected yet": "尚未检测到内容",
  "Other paired clients will need a new pairing link before reconnecting.":
    "其他已配对客户端在重新连接前需要新的配对链接。",
  "Pairing link": "配对链接",
  "Path copied": "路径已复制",
  "Pause on battery": "使用电池时暂停",
  "Pause on client low power": "客户端低电量时暂停",
  "Pause on host low power": "主机低电量时暂停",
  "Pause when host is locked": "主机锁定时暂停",
  "Process already exited": "进程已退出",
  "Project checkouts": "项目检出",
  "Project default model": "项目默认模型",
  "Project new-thread workspace": "项目新对话工作区",
  "Project title cannot be empty": "项目标题不能为空",
  "Prompt font": "提示词字体",
  "Prompt font size": "提示词字体大小",
  "Provider instance added": "提供商实例已添加",
  "Provider settings are unavailable": "提供商设置不可用",
  "Read threads, status, diffs, and configuration.": "读取对话、状态、差异和配置。",
  "Reading…": "正在读取…",
  "Remote link": "远程链接",
  "Run it in a terminal when you are ready to update.": "准备更新时，请在终端中运行它。",
  "Run the WSL backend alongside the Windows one, or stop the Windows backend and use only WSL? You can change this later from Settings.":
    "要让 WSL 后端与 Windows 后端同时运行，还是停止 Windows 后端、仅使用 WSL？之后可以在设置中更改。",
  "Search image files…": "搜索图像文件…",
  "Select icon": "选择图标",
  "Settings search results": "设置搜索结果",
  "Show full error": "显示完整错误",
  "Show full message": "显示完整消息",
  "Showing the full value instead.": "改为显示完整值。",
  "Source Control": "源代码管理",
  "SSH host or alias is required.": "必须填写 SSH 主机或别名。",
  "SSH port must be between 1 and 65535.": "SSH 端口必须介于 1 和 65535 之间。",
  "Start tasks and perform changes in the environment.": "在环境中启动任务并执行更改。",
  "Status colors": "状态颜色",
  "System monospace": "系统等宽字体",
  "Text generation model": "文本生成模型",
  "Toggle right panel": "切换右侧面板",
  "Right panel is unavailable": "右侧面板不可用",
  "Terminal drawer is unavailable": "终端抽屉不可用",
  "Maximize panel": "最大化面板",
  "Restore panel size": "恢复面板大小",
  "to start": "开始",
  "That custom model is already saved.": "该自定义模型已保存。",
  "That model is already built in.": "该模型已经内置。",
  "That theme file is invalid.": "该主题文件无效。",
  "The environment is saved and will reconnect on app startup.":
    "环境已保存，并会在应用启动时重新连接。",
  "The keybinding was not removed.": "快捷键未移除。",
  "The keybinding was not saved.": "快捷键未保存。",
  "The keybindings file was not opened.": "快捷键文件未打开。",
  "The provider failed its startup checks.": "提供商未通过启动检查。",
  "The provider is installed, but the server could not fully verify it.":
    "提供商已安装，但服务器无法完成验证。",
  "The resource monitor retry failed.": "资源监控器重试失败。",
  "Toolbar control text": "工具栏控件文本",
  "Toolbar text": "工具栏文本",
  "Total CPU across live child processes of the current server process. The desktop shell and other parent processes are not included.":
    "当前服务器进程的活动子进程占用的 CPU 总量。不包括桌面壳和其他父进程。",
  "Total resident memory across live child processes of the current server process. The desktop shell and other parent processes are not included.":
    "当前服务器进程的活动子进程占用的常驻内存总量。不包括桌面壳和其他父进程。",
  "Trace ID copied": "Trace ID 已复制",
  "Try again.": "重试。",
  "Unable to open logs folder.": "无法打开日志文件夹。",
  "Unable to remove keybinding": "无法移除快捷键",
  "Unable to save keybinding": "无法保存快捷键",
  Unassigned: "未分配",
  "Update check failed.": "更新检查失败。",
  "Update failed.": "更新失败。",
  "Update track change failed.": "更新通道更改失败。",
  "Use local SSH config, agent, and tunnels for the backend.":
    "对后端使用本地 SSH 配置、代理和隧道。",
  "Use terminals": "使用终端",
  "Use variables with !, &&, ||, and parentheses.": "使用 !、&&、|| 和括号组合变量。",
  "Uses Conventional Commit prefixes for change descriptions; change request titles and descriptions stay concise.":
    "更改说明使用 Conventional Commit 前缀；变更请求标题和说明保持简洁。",
  "View access": "查看访问权限",
  "View environment": "查看环境",
  "View relay": "查看中继",
  "Warning background": "警告背景",
  "Warning text": "警告文本",
  "Word wrap": "自动换行",
  "Write reviews": "撰写审阅意见",
  "Your changes are now active.": "你的更改现在已生效。",
  "Your changes are saved.": "你的更改已保存。",
  "Applying…": "正在应用…",
  "Restarting…": "正在重启…",
  "Accent color": "强调色",
  "Add environment": "添加环境",
  "Add Environment": "添加环境",
  "Add provider instance": "添加提供商实例",
  "Add instance": "添加实例",
  "Add keybinding": "添加快捷键",
  "Add a project to start": "添加项目开始",
  "Add a project to start your first thread.": "添加项目以开始你的第一个对话。",
  "Add a theme": "添加主题",
  "Add theme": "添加主题",
  "An error occurred.": "发生错误。",
  Agents: "智能体",
  "All projects": "全部项目",
  "Already installed": "已安装",
  Authenticated: "已认证",
  "Authenticated as": "认证身份",
  "Auto-accept edits": "自动接受编辑",
  Available: "可用",
  "Background activity": "后台活动",
  "Background Activity": "后台活动",
  "Tune the shared power policy and the background intervals that feed it.":
    "调整共享电源策略及其所使用的后台间隔。",
  "Clipboard API unavailable.": "剪贴板 API 不可用。",
  "Copied!": "已复制！",
  "Copy image": "复制图像",
  "Configure background activity": "配置后台活动",
  "Controls whether background work may run after a subscribed interval fires.":
    "控制订阅的间隔触发后是否允许后台工作运行。",
  "Host power monitor": "主机电源监控",
  "Idle host monitor": "空闲主机监控",
  "Poll host power state when no foreground client is active.":
    "没有前台客户端活动时轮询主机电源状态。",
  "Poll host power state while clients are active.": "客户端处于活动状态时轮询主机电源状态。",
  "Provider health interval": "提供商健康检查间隔",
  "Provider turn start failed": "提供商回合启动失败",
  ProviderAdapterProcessError: "提供商适配器进程错误",
  "ProviderAdapterProcessError:": "提供商适配器进程错误：",
  "Provider adapter process error": "提供商适配器进程错误",
  "API endpoint": "API 端点",
  "GitHub availability": "GitHub 可用性",
  "Cursor Pro+ Subscription": "Cursor Pro+ 订阅",
  "Git fetch interval": "Git 获取间隔",
  "Refresh provider availability, versions, auth state, and model metadata.":
    "刷新提供商可用性、版本、认证状态和模型元数据。",
  "Refresh provider status": "刷新提供商状态",
  "Refresh remote branch status in the background.": "在后台刷新远程分支状态。",
  "Refresh remote branch status in the background. Set this to 0 seconds if Git credentials or security keys should only be prompted by explicit Git actions.":
    "在后台刷新远程分支状态。将此值设为 0 秒后，仅在明确执行 Git 操作时提示输入 Git 凭据或安全密钥。",
  "Reset all": "全部重置",
  "Shared policy": "共享策略",
  "Latest turn": "最近回合",
  "Legacy features": "旧版功能",
  "Legacy models": "其他模型",
  Latest: "最新",
  Nightly: "夜间版",
  "No activity in this window.": "此时间窗口内没有活动。",
  "No instrumented application I/O has been recorded yet.": "尚未记录到插桩应用的 I/O 活动。",
  "No retained process samples in this window.": "此时间窗口内没有保留的进程样本。",
  "Open a project to search its files.": "请打开一个项目后搜索文件。",
  "Regenerating title": "正在重新生成标题",
  "Reload app": "重新加载应用",
  "Reveal in Files": "在文件中显示",
  "Reveal in File Explorer": "在文件资源管理器中显示",
  "Reveal in Finder": "在 Finder 中显示",
  Remote: "远程",
  "Remove theme": "移除主题",
  "Run on": "运行于",
  "Server update available": "服务器有可用更新",
  "Screenshot saved": "截图已保存",
  "Setup Required": "需要设置",
  Standard: "标准",
  Tokens: "Token",
  Total: "总计",
  "Use global default": "使用全局默认值",
  "Waiting for sample": "等待样本",
  Condition: "条件",
  Group: "分组",
  When: "条件",
  Not: "非",
  terminalFocus: "终端已聚焦",
  terminalOpen: "终端已打开",
  modelPickerOpen: "模型选择器已打开",
  previewFocus: "预览已聚焦",
  previewOpen: "预览已打开",
  seconds: "秒",
  "CPU Time": "CPU 时间",
  Process: "进程",
  Category: "类别",
  PID: "进程 ID",
  CPU: "CPU",
  Memory: "内存",
  "Max Mem": "最大内存",
  "Peak Mem": "峰值内存",
  "Peak CPU": "峰值 CPU",
  Average: "平均值",
  Peak: "峰值",
  Current: "当前值",
  Count: "数量",
  Samples: "样本数",
  Operation: "操作",
  Component: "组件",
  "Host state": "主机状态",
  "I/O reads": "I/O 读取",
  "I/O writes": "I/O 写入",
  "Logical bytes by operation": "按操作统计的逻辑字节数",
  "Logical Read": "逻辑读取",
  "Logical Write": "逻辑写入",
  "Read Total": "读取总量",
  "Read/s": "读取/秒",
  Level: "级别",
  Span: "跨度",
  Message: "消息",
  Trace: "追踪",
  INT: "INT",
  KILL: "KILL",
  "Send SIGINT": "发送 SIGINT",
  "Send SIGKILL": "发送 SIGKILL",
  "Retry monitor": "重试监控",
  "Refresh telemetry snapshot": "刷新遥测快照",
  "Collection health": "采集健康状态",
  "Desktop host signals not connected": "桌面主机信号未连接",
  "No active thread": "没有活动对话",
  "Pick a thread to continue": "选择一个对话继续",
  "Pick a thread to inspect turn diffs.": "选择一个对话查看回合差异。",
  "Select an existing thread or create a new one to get started.": "选择现有对话或新建对话开始。",
  "Send a message to start the conversation.": "发送消息开始对话。",
  "No provider available": "没有可用的提供商",
  "Preparing worktree...": "正在准备工作树…",
  "Context Window": "上下文窗口",
  Access: "访问权限",
  "PENDING APPROVAL": "等待权限确认",
  "Plan Ready": "计划已就绪",
  "Needs Approval": "需要批准",
  Settled: "已完结",
  Working: "工作中",
  Connecting: "连接中",
  Error: "错误",
  "Review the plan": "查看计划",
  "Implement in a new thread": "在新对话中实施",
  "Select one or more options.": "选择一个或多个选项。",
  "No terminal sessions for this thread yet.": "此对话还没有终端会话。",
  "Open diff": "打开差异",
  "Open the full diff": "打开完整差异",
  "Branch changes": "分支更改",
  Branch: "分支",
  "Working tree": "工作树",
  "No completed turns yet.": "还没有已完成的回合。",
  "No matching refs.": "没有匹配的引用。",
  "No matching refs": "没有匹配的引用",
  "No refs found.": "没有找到引用。",
  "Behind upstream. Pull/rebase first.": "落后于上游，请先拉取或变基。",
  "Commit message (optional)": "提交消息（可选）",
  "Commit on new refName": "在新 refName 上提交",
  "Checkout feature branch & continue": "检出功能分支并继续",
  "Publish repository": "发布仓库",
  "Publish repository...": "发布仓库…",
  "Publishing...": "正在发布…",
  "Publish failed": "发布失败",
  "Publish result unavailable.": "发布结果不可用。",
  Provider: "提供商",
  Visibility: "可见性",
  Protocol: "协议",
  Excluded: "已排除",
  none: "无",
  Abort: "中止",
  Scan: "扫描",
  "Rescan Git and hosting integrations": "重新扫描 Git 和托管平台集成",
  "From t3.json": "来自 t3.json",
  setup: "设置",
  "Choose a color": "选择颜色",
  Colors: "颜色",
  HEX: "HEX",
  RGB: "RGB",
  "Show T3 Code environment artwork": "显示 T3 Code 环境插画",
  "Sidebar artwork": "侧边栏插画",
  "Export theme file": "导出主题文件",
  "Import theme": "导入主题",
  "Theme JSON": "主题 JSON",
  "Keep both": "两者都保留",
  "Duplicate theme": "复制主题",
  "No matches.": "没有匹配项。",
  "No fonts found.": "未找到字体。",
  "Choose how T3 Code looks. Use a built-in theme or make your own.":
    "选择 T3 Code 的外观。你可以使用内置主题，也可以创建自己的主题。",
  "Choose how T3 Code looks.": "选择 T3 Code 的外观。",
  "Choose what to show in the right panel.": "选择右侧面板显示的内容。",
  "Open a surface": "打开一个面板",
  "Open DevTools": "打开开发者工具",
  "Open in system browser": "在系统浏览器中打开",
  "Clear cache": "清除缓存",
  "Clear Cache": "清除缓存",
  "Clear caches": "清除缓存",
  "Clearing caches never removes environment connections, credentials, account data, or appearance preferences.":
    "清除缓存绝不会删除环境连接、凭据、账户数据或外观偏好。",
  "Client storage is temporarily unavailable. Try again after restarting the app.":
    "客户端存储暂时不可用，请重启应用后重试。",
  "Clear All Caches": "清除全部缓存",
  "Clear cache for": "清除缓存（",
  "Clear cookies": "清除 Cookie",
  "Hard reload": "强制重新加载",
  More: "更多",
  Forward: "前进",
  "No preview yet": "还没有预览",
  "Recently used": "最近使用",
  "Local servers": "本地服务器",
  "Select a listening port to open it in this browser tab.":
    "选择一个监听端口，在此浏览器标签页中打开。",
  "Preview is only available in the T3 Code desktop app.": "预览仅在 T3 Code 桌面应用中可用。",
  "This site can’t be reached": "无法访问此网站",
  "Checking your connection": "正在检查连接",
  "Confirming the dev server is running": "正在确认开发服务器是否运行",
  "Checking the proxy and the firewall": "正在检查代理和防火墙",
  Try: "请尝试：",
  Reload: "重新加载",
  "Reconnecting preview…": "正在重新连接预览…",
  "Preview URL (optional)": "预览 URL（可选）",
  "Open this URL in the in-app preview when this action runs.":
    "此操作运行时在应用内预览中打开此 URL。",
  "Open preview automatically when this action runs": "此操作运行时自动打开预览",
  "Open keybindings.json": "打开 keybindings.json",
  "Open logs folder": "打开日志文件夹",
  "Copy as Markdown": "复制为 Markdown",
  "Copy as CSV": "复制为 CSV",
  "Copy to clipboard": "复制到剪贴板",
  "Copy command": "复制命令",
  "Copy code only": "仅复制代码",
  "Copy trace ID": "复制 Trace ID",
  "Copy update command": "复制更新命令",
  "Read more": "阅读更多",
  "Create link": "创建链接",
  "Create pairing link": "创建配对链接",
  "Pair another environment to this client.": "将另一个环境配对到此客户端。",
  "Pairing code": "配对码",
  "Pairing token": "配对令牌",
  "Pairing...": "正在配对…",
  "Paste a full pairing URL here to fill both fields automatically.":
    "在此粘贴完整配对 URL，自动填写两个字段。",
  "No pairing links or client sessions.": "没有配对链接或客户端会话。",
  "No saved remote environments": "没有已保存的远程环境",
  "No new SSH hosts were discovered.": "没有发现新的 SSH 主机。",
  "Default distro": "默认发行版",
  "From SSH config and known hosts": "来自 SSH 配置和已知主机",
  "Reach this machine via": "通过以下方式访问此机器",
  "Reachable at": "可访问地址",
  "Read only": "只读",
  "Set as default": "设为默认",
  "Setup required": "需要设置",
  "Enter a port from 1 to 65535.": "请输入 1 到 65535 之间的端口。",
  "Disable Tailscale HTTPS?": "要禁用 Tailscale HTTPS 吗？",
  "Set up Tailscale HTTPS?": "要设置 Tailscale HTTPS 吗？",
  "Limit what the paired client can do.": "限制已配对客户端可以执行的操作。",
  "Granted scopes": "已授予权限范围",
  "Client label (optional)": "客户端标签（可选）",
  Host: "主机",
  Port: "端口",
  "Managed above": "由上方管理",
  "Sign in to T3 Connect": "登录 T3 Connect",
  "Sign in to T3 Connect to connect this environment.": "登录 T3 Connect 以连接此环境。",
  "No mobile clients": "没有移动客户端",
  "Mobile clients": "移动客户端",
  "Devices registered to receive T3 Connect activity from your environments.":
    "已注册、用于接收环境 T3 Connect 活动的设备。",
  "Could not load mobile clients": "无法加载移动客户端",
  Refresh: "刷新",
  "Sign in": "登录",
  "One-time authorization code": "一次性授权码",
  "expires shortly": "即将过期",
  "Set up T3 Connect": "设置 T3 Connect",
  "Don’t show this again": "不再显示",
  "Don't show this again": "不再显示",
  "Not now": "暂不设置",
  "Download and install": "下载并安装",
  "Keep T3 Code open while the relay client is installed.": "安装中继客户端时请保持 T3 Code 打开。",
  "Managed relay client": "托管中继客户端",
  "Could not load T3 Connect environments": "无法加载 T3 Connect 环境",
  "Relay environment listing timed out.": "Relay 环境列表加载超时。",
  "Enable network access?": "启用网络访问？",
  "Disable network access?": "停用网络访问？",
  "T3 Code will restart to expose this environment over the network.":
    "T3 Code 将重启，并通过网络公开此环境。",
  "T3 Code will restart and limit this environment back to this machine.":
    "T3 Code 将重启，并将此环境限制回仅此设备可用。",
  "No agents yet": "还没有智能体",
  "When this thread spawns subagents or runs a workflow, they show up here with live status, activity, and token usage.":
    "当此对话启动子智能体或运行工作流时，它们会显示在这里，并实时展示状态、活动和 Token 用量。",
  "Direct spawns": "直接启动",
  "Could not load the script.": "无法加载脚本。",
  "Loading…": "加载中…",
  "Restart to update": "重启以更新",
  "Dismiss until next launch": "忽略到下次启动",
  "Dismiss until provider status changes": "忽略到提供商状态变化",
  "No threads found": "没有找到对话",
  Connections: "连接",
  "Branch changed — was": "分支已更改，原为",
  "Scroll to end": "滚动到末尾",
  "Jump to the latest messages": "跳到最新消息",
  "Switch branch": "切换分支",
  "Add variables to pass API keys, base URLs, or other per-instance CLI settings.":
    "添加要传递给 API 密钥、基础 URL 或其他实例级 CLI 设置的变量。",
  "Sensitive values are stored separately and are not returned to the app after saving.":
    "敏感值会单独保存，保存后不会返回给应用。",
  "Optional label shown in the provider list.": "提供商列表中显示的可选标签。",
  "Optional marker shown in the picker.": "选择器中显示的可选标记。",
  "Routing key used by threads and sessions. Letters, digits, '-', or '_'.":
    '对话和会话使用的路由键。可使用字母、数字、"-" 或 "_"。',
  "Health check interval": "健康检查间隔",
  "New thread in": "在此处新建对话",
  "Select a thread to inspect turn diffs.": "选择一个对话查看回合差异。",
  "Unable to load workspace image.": "无法加载工作区图片。",
  "Open file in preview browser": "在预览浏览器中打开文件",
  Comment: "评论",
  "No models found": "没有找到模型",
  Favorites: "收藏",
  Cost: "成本",
  "Daily cost": "每日成本",
  Breakdown: "明细",
  "Raw token cost": "原始 Token 成本",
  "This action cannot be undone.": "此操作无法撤销。",
  "Delete action": "删除操作",
  "Delete instance": "删除实例",
  "Remove custom model": "移除自定义模型",
  "Move up": "上移",
  "Move down": "下移",
  "No keybindings match your search.": "没有快捷键匹配你的搜索。",
  "Search keybindings": "搜索快捷键",
  "Searching…": "正在搜索…",
  "Select at least one permission.": "至少选择一项权限。",
  "Pair with this environment": "与此环境配对",
  "Pairing with this environment": "正在与此环境配对",
  "Copy the token and pair from another client using this backend's reachable host.":
    "复制令牌，并从另一客户端使用此后端可访问的主机完成配对。",
  "Couldn’t start a new thread": "无法启动新对话",
  "The project is still available. Try opening the draft again.":
    "项目仍然可用。请尝试重新打开草稿。",
  "Connect an environment to get started": "连接一个环境开始使用",
  "What should we work on?": "我们要处理什么？",
  "Something went wrong.": "出了点问题。",
  "Show error details": "显示错误详情",
  "Hide error details": "隐藏错误详情",
  "Restore defaults": "恢复默认值",
  "Search settings": "搜索设置",
  "No settings found": "没有找到设置",
  "Color scheme": "配色方案",
  "Add project starts in": "添加项目的起始位置",
  "Project grouping": "项目分组",
  "Project title": "项目标题",
  "Sidebar options": "侧边栏选项",
  "Sort projects": "项目排序",
  "Sort threads": "对话排序",
  "Visible threads": "可见对话",
  "No threads yet": "还没有对话",
  "Create a task to start a new coding session.": "创建任务以开始新的编码会话。",
  "Add an environment to load projects and start coding sessions.":
    "添加环境以加载项目并开始编码会话。",
  "Checking saved environments on this device.": "正在检查此设备上已保存的环境。",
  "No threads matching": "没有匹配的对话：",
  "No environments connected": "未连接任何环境",
  "Show more": "显示更多",
  "Show less": "显示更少",
  "New project": "新建项目",
  "Add project": "添加项目",
  "New thread": "新建对话",
  "Search threads": "搜索对话",
  "Filter threads by project": "按项目筛选对话",
  Settings: "设置",
  "Go to threads": "返回对话列表",
  "Snooze thread": "暂缓对话",
  "Settle thread": "收起对话",
  "Thread actions": "对话操作",
  "Copy options": "复制选项",
  "Initialize Git": "初始化 Git",
  "Copy link": "复制链接",
  "Ask anything, @tag files/folders, $use skills, or / for commands":
    "输入任何问题，@ 标记文件/文件夹，$ 使用技能，或用 / 输入命令",
  "Runtime mode": "操作权限",
  "Full access": "完全访问",
  "Context window": "上下文窗口",
  "Send message": "发送消息",
  "1 tool call": "1 次工具调用",
  "Ran command": "已运行命令",
  "Worked for": "运行耗时",
  "Running command": "正在运行命令",
  "Reading file": "正在读取文件",
  "Writing file": "正在写入文件",
  "Searching files": "正在搜索文件",
  "Waiting for approval": "等待权限确认",
  "Waiting for input": "等待输入",
  "Waiting for response": "等待回复",
  "Response complete": "回复完成",
  "Response failed": "回复失败",
  "Try again": "重试",
  "Stop response": "停止回复",
  "Cancel request": "取消请求",
  "Permission required": "需要权限",
  Allow: "允许",
  Deny: "拒绝",
  Approve: "批准",
  Reject: "拒绝",
  "User input requested": "已请求用户输入",
  "User input submitted": "已提交用户输入",
  "Turn completed": "回合已完成",
  "Turn failed": "回合失败",
  "Turn cancelled": "回合已取消",
  "Turn interrupted": "回合已中断",
  "Idle · resumable": "空闲 · 可恢复",
  "Working...": "正在运行…",
  "Work Log": "工作日志",
  "Command approval requested": "请求批准执行命令",
  "File-read approval requested": "请求批准读取文件",
  "File-change approval requested": "请求批准修改文件",
  "File to read": "待读取文件",
  "File change": "文件更改",
  "Waiting for Git...": "等待 Git…",
  "Waiting for the native process monitor.": "等待原生进程监控。",
  "Waiting for collector health.": "等待采集健康状态。",
  "Waiting for the server to report installation and authentication details.":
    "等待服务器报告安装和认证详情。",
  "Waiting for another provider update to finish.": "等待其他提供商更新完成。",
  "Stopping...": "正在停止…",
  "Show fewer tool calls": "收起工具调用",
  "Show fewer log entries": "收起日志条目",
  "Follow the system appearance": "跟随系统外观",
  "Use light mode": "使用浅色模式",
  "Use dark mode": "使用深色模式",
  "Up to Date": "已是最新",
  "View diagnostics": "查看诊断",
  "Create theme": "创建主题",
  "Edit theme": "编辑主题",
  "Use for both light and dark": "用于浅色和深色模式",
  "Use for light mode only": "仅用于浅色模式",
  "Use for dark mode only": "仅用于深色模式",
  "Couldn’t save theme selection": "无法保存主题选择",
  "Couldn’t remove theme": "无法移除主题",
  "Theme saved, but it could not be made active. Try again.":
    "主题已保存，但无法设为当前主题。请重试。",
  "Theme added, but it could not be selected. Try again.": "主题已添加，但无法选中。请重试。",
  "Limited to this machine.": "仅限此设备。",
  "Start Tailscale to set up HTTPS access through MagicDNS.":
    "启动 Tailscale 以通过 MagicDNS 设置 HTTPS 访问。",
  "Remote environments": "远程环境",
  "Open Connections": "打开连接设置",
  "Enable T3 Connect": "启用 T3 Connect",
  "Publish agent activity to mobile clients": "将智能体活动发布到移动客户端",
  "Click “Add environment” to pair another environment, or connect one from T3 Connect.":
    "点击“添加环境”以配对另一个环境，或从 T3 Connect 连接环境。",
  "Beta features": "Beta 功能",
  "Sidebar v2": "侧边栏 v2",
  "Enable the sidebar v2 beta": "启用侧边栏 v2 Beta",
  "One flat thread list in creation order. Active work renders as rich cards; settled threads collapse to compact rows. Settling requires an up-to-date server — on older servers threads simply stay active. Switch back any time.":
    "按创建顺序显示一个扁平对话列表。活动工作显示为信息卡片，已收起对话折叠为紧凑行。收起功能需要最新服务器；在旧服务器上，对话会保持活动状态。你可以随时切回。",
  "Threads with no activity for this long settle automatically. Threads on merged or closed PRs always settle.":
    "超过此时长没有活动的对话会自动收起。已合并或已关闭 PR 上的对话总会收起。",
  "Restore plan mode (legacy)": "恢复计划模式（旧版）",
  "Legacy feature. Brings back the Build/Plan toggle in the composer along with the /plan and /default commands and the Shift+Tab shortcut. While off, every thread runs in build mode.":
    "旧版功能。恢复输入框中的构建/计划切换，以及 /plan、/default 命令和 Shift+Tab 快捷键。关闭后，每个对话都以构建模式运行。",
  "No archived threads": "没有已归档对话",
  "Archived threads will appear here.": "已归档的对话会显示在这里。",
  "Repository conventions": "仓库约定",
  "In each project, matches recent change descriptions and change request titles.":
    "在每个项目中，匹配最近的更改说明和变更请求标题。",
  "Coming Soon": "即将推出",
  "Support for Jujutsu is coming soon.": "Jujutsu 支持即将推出。",
  "Support for": "支持",
  "is coming soon.": "即将推出。",
  "Available.": "可用。",
  "Not available on this server:": "此服务器不可用：",
  "is not authenticated on this server. Sign in or configure credentials using the":
    "未在此服务器上认证。请使用",
  "tool on the server host to enable change request features.":
    "工具在服务器主机上登录或配置凭据，以启用变更请求功能。",
  "Could not verify": "无法验证",
  as: "身份为",
  "Checking provider status": "正在检查提供商状态",
  Disabled: "已禁用",
  "Not found": "未找到",
  "Needs attention": "需要注意",
  Unavailable: "不可用",
  "Installed and ready, but authentication could not be verified.":
    "已安装并就绪，但无法验证认证状态。",
  "This provider is installed but disabled for new sessions in T3 Code.":
    "此提供商已安装，但已在 T3 Code 中对新对话禁用。",
  "CLI not detected on PATH.": "在 PATH 中未检测到 CLI。",
  "Not authenticated": "未认证",
  "Status unknown": "状态未知",
  "Toggle account email visibility": "切换账户邮箱可见性",
  "Toggle source control account visibility": "切换源代码管理账户可见性",
  "Click to reveal account": "点击显示账户",
  "Click to hide account": "点击隐藏账户",
  "?": "？",
  "Early Access": "抢先体验",
  "· ChatGPT Plus Subscription": "· ChatGPT Plus 订阅",
  "Install Git from https://git-scm.com/downloads or with your package manager.":
    "请从 https://git-scm.com/downloads 下载 Git，或使用你的包管理器安装。",
  "Install Jujutsu with `brew install jj` or from https://github.com/jj-vcs/jj.":
    "请使用 `brew install jj` 或从 https://github.com/jj-vcs/jj 安装 Jujutsu。",
  "Install the GitHub command-line tool (`gh`) via https://cli.github.com/ or your package manager (for example `brew install gh`).":
    "请通过 https://cli.github.com/ 或你的包管理器安装 GitHub 命令行工具（例如 `brew install gh`）。",
  "Install the GitLab command-line tool (`glab`) from https://gitlab.com/gitlab-org/cli or your package manager (for example `brew install glab`).":
    "请从 https://gitlab.com/gitlab-org/cli 或你的包管理器安装 GitLab 命令行工具（例如 `brew install glab`）。",
  "Install the Azure command-line tools (`az`), then enable Azure DevOps support with `az extension add --name azure-devops`.":
    "请安装 Azure 命令行工具（`az`），然后使用 `az extension add --name azure-devops` 启用 Azure DevOps 支持。",
  "Set T3CODE_BITBUCKET_EMAIL and T3CODE_BITBUCKET_API_TOKEN on the server (use a Bitbucket API token with pull request and repository scopes).":
    "请在服务器上设置 T3CODE_BITBUCKET_EMAIL 和 T3CODE_BITBUCKET_API_TOKEN（使用具有拉取请求和仓库权限范围的 Bitbucket API 令牌）。",
  "COMMAND KEYBINDING WHEN STATUS": "命令　快捷键　条件　状态",
  bindings: "个绑定",
  KEYBINDING: "快捷键",
  WHEN: "条件",
  EDIT: "编辑",
  "Failed to reconnect.": "重新连接失败。",
  "Failed to stop background work.": "停止后台工作失败。",
  "Failed to interrupt the current turn.": "中断当前回合失败。",
  "Failed to clean up implementation thread after start failure.": "启动失败后清理实施对话失败。",
  "Failed to switch checkout.": "切换检出失败。",
  "Failed to wake thread.": "唤醒对话失败。",
  "Failed to un-settle thread.": "取消收起对话失败。",

  // Remaining settings, diagnostics, preview, search, and accessibility chrome.
  "Dismiss Woke notification": "关闭“已唤醒”通知",
  "Update track": "更新通道",
  "WSL backend": "WSL 后端",
  "Background policy details": "后台策略详情",
  "Checked unavailable": "已检查但不可用",
  "Choose project icon": "选择项目图标",
  "Choose project": "选择项目",
  "Choose a project for what you shared": "为分享的内容选择项目",
  "Choose a project for the image you shared": "为分享的图片选择项目",
  "Close floating preview": "关闭浮动预览",
  "Days of inactivity before auto-settle": "无活动后自动收起的天数",
  "Discard draft": "放弃草稿",
  "Dismiss notification": "关闭通知",
  "Enable network access": "启用网络访问",
  Enter: "回车",
  "File picker": "文件选择器",
  "Filter colors": "筛选颜色",
  "Follow change request templates": "遵循变更请求模板",
  "Grouping rule": "分组规则",
  "Intel build on Apple Silicon": "Apple Silicon 上的 Intel 构建",
  Kill: "终止",
  "Network access": "网络访问",
  "Pairing link — scan to open on another device": "配对链接——扫描后在另一台设备上打开",
  "Publish agent activity": "发布智能体活动",
  "Resize floating preview": "调整浮动预览大小",
  "Search refs...": "搜索引用…",
  "Source Control Providers": "源代码管理提供商",
  "Source control writing style": "源代码管理写作风格",
  "This environment": "此环境",
  "Thread title": "对话标题",
  "Unpin thread": "取消固定对话",
  "Version Control": "版本控制",
  "Visible thread count": "可见对话数",
  "⌘/Ctrl Enter to send": "⌘/Ctrl + Enter 发送",
  "Active host power interval in seconds": "活跃主机电源监控间隔（秒）",
  "Add a comment…": "添加评论…",
  "Add panel surface": "添加面板",
  "add project base directory": "添加项目基目录",
  "Add project base directory": "添加项目基目录",
  "Administrative access": "管理员访问权限",
  "Allow sidebar artwork with this theme": "允许此主题使用侧边栏插画",
  "Almost connected": "即将连接",
  Always: "始终",
  "Any new activity un-settles a thread automatically.": "任何新活动都会自动取消收起对话。",
  "Appearance mode": "外观模式",
  "Authorization did not complete": "授权未完成",
  "Authorized clients": "已授权客户端",
  "Auto-settle inactive threads": "自动收起无活动对话",
  "Automatic Git fetch interval in seconds": "自动 Git 获取间隔（秒）",
  "Backend + agents": "后端 + 智能体",
  "Background activity profile": "后台活动配置",
  "Brings back the Build/Plan toggle in the composer along with the /plan and /default commands and the Shift+Tab shortcut. While off, every thread runs in build mode.":
    "恢复输入框中的构建/计划切换，以及 /plan、/default 命令和 Shift+Tab 快捷键。关闭后，每个对话都以构建模式运行。",
  "Brings back the original sidebar with per-project thread trees. The default sidebar shows one flat list: active work as rich cards, settled threads as compact rows.":
    "恢复按项目显示对话树的旧版侧边栏。默认侧边栏显示一个扁平列表：活动工作使用信息卡片，已收起对话使用紧凑行。",
  "Browser device preset": "浏览器设备预设",
  "Browser device toolbar": "浏览器设备工具栏",
  "Cancel new keybinding": "取消新增快捷键",
  "Cache savings": "缓存节省",
  "Cached input": "已缓存输入",
  Totals: "总计",
  Unpriced: "未计价",
  "By model": "按模型",
  "Check installed provider CLIs for newer available versions.":
    "检查已安装的提供商 CLI 是否有可用的新版本。",
  Checkouts: "检出",
  "Choose a project icon file": "选择项目图标文件",
  "Choose how Dev and Nightly environments are identified.": "选择如何标识 Dev 和 Nightly 环境。",
  "Clear settings search": "清除设置搜索",
  "Clear thread search": "清除对话搜索",
  "Close device toolbar": "关闭设备工具栏",
  "Close script": "关闭脚本",
  "Close the theme editor": "关闭主题编辑器",
  "Code block actions": "代码块操作",
  "Collapse workflow": "折叠工作流",
  "Configure advanced background activity": "配置高级后台活动",
  "Confirm thread archiving": "确认归档对话",
  "Connecting your terminal": "正在连接终端",
  "Context window usage": "上下文窗口使用量",
  "Control how transparent glass surfaces are. Higher values make menus, dialogs, and the composer more solid.":
    "控制玻璃表面的透明度。数值越高，菜单、对话框和输入框越不透明。",
  "Copy project path": "复制项目路径",
  "Custom hex accent color": "自定义 HEX 强调色",
  "Custom source control writing instructions": "自定义源代码管理写作说明",
  Danger: "危险",
  "Decrease active host power interval": "减小活跃主机电源监控间隔",
  "Decrease fetch interval": "减小获取间隔",
  "Decrease Git fetch interval": "减小 Git 获取间隔",
  "Decrease idle host power interval": "减小空闲主机电源监控间隔",
  "Decrease provider health check interval": "减小提供商健康检查间隔",
  "Decrease provider health interval": "减小提供商健康检查间隔",
  "Decrease visible thread count": "减少可见对话数",
  "Default model": "默认模型",
  "Delete comment": "删除评论",
  "Delete stashed prompt": "删除暂存提示",
  Devices: "设备",
  "Dismiss provider update notice": "关闭提供商更新通知",
  "Dismiss update": "关闭更新通知",
  "Displays the mobile sidebar.": "显示移动端侧边栏。",
  "Download as markdown": "下载为 Markdown",
  "Draft attachment may not persist": "草稿附件可能不会保留",
  Empty: "空",
  "Enable Tailscale HTTPS": "启用 Tailscale HTTPS",
  "Endpoint the pairing QR code and URL use": "配对二维码和 URL 使用的端点",
  "Environment identification": "环境标识",
  "Environment variables": "环境变量",
  "Error occurred": "发生错误",
  Esc: "Esc",
  "Expand composer": "展开输入框",
  "Expanded image preview": "展开图片预览",
  "Fetch interval": "获取间隔",
  "Floating browser preview": "浮动浏览器预览",
  "Git fetch interval in seconds": "Git 获取间隔（秒）",
  "Glass opacity": "玻璃透明度",
  "Hide whitespace changes by default": "默认隐藏空白更改",
  "Host & collection": "主机与采集",
  "HTTPS endpoint": "HTTPS 端点",
  "HTTPS port": "HTTPS 端口",
  "Idle host power interval in seconds": "空闲主机电源监控间隔（秒）",
  "Import from t3.json": "从 t3.json 导入",
  "Increase active host power interval": "增大活跃主机电源监控间隔",
  "Increase fetch interval": "增大获取间隔",
  "Increase Git fetch interval": "增大 Git 获取间隔",
  "Increase idle host power interval": "增大空闲主机电源监控间隔",
  "Increase provider health check interval": "增大提供商健康检查间隔",
  "Increase provider health interval": "增大提供商健康检查间隔",
  "Increase visible thread count": "增加可见对话数",
  "Instance ID": "实例 ID",
  "Instrumented application I/O": "插桩应用 I/O",
  "Invalid regular expression": "正则表达式无效",
  "Keep titles concise. Use short bullet points in descriptions.":
    "标题保持简洁。描述使用简短的项目符号。",
  "Latest Failures": "最新失败",
  "Leave empty to auto-generate": "留空以自动生成",
  "Limited permissions": "有限权限",
  Listening: "正在监听",
  "Live process tree": "实时进程树",
  "Live Processes": "实时进程",
  "Loading mobile clients": "正在加载移动客户端",
  "Monospace font": "等宽字体",
  "More composer controls": "更多输入框控件",
  "Most Common Failures": "最常见失败",
  Navigate: "导航",
  Navigation: "导航",
  "Negate group": "否定分组",
  "New model": "新模型",
  "New-thread workspace": "新对话工作区",
  "Next image": "下一张图片",
  "No providers available": "没有可用的提供商",
  "Not currently listening": "当前未监听",
  "Open in right panel": "在右侧面板打开",
  "Open preview in right panel": "在右侧面板打开预览",
  "Paste a one-time token or pairing secret": "粘贴一次性令牌或配对密钥",
  "PID + start time": "PID + 启动时间",
  "Plan actions": "计划操作",
  "Plan mode (legacy)": "计划模式（旧版）",
  "Preview menu": "预览菜单",
  "Previous image": "上一张图片",
  "Previous question": "上一个问题",
  "Project actions": "项目操作",
  "Project grouping rule": "项目分组规则",
  "Project icon": "项目图标",
  "Provider health check interval in seconds": "提供商健康检查间隔（秒）",
  "Provider health interval in seconds": "提供商健康检查间隔（秒）",
  "Provider instance accent color": "提供商实例强调色",
  "Publish this environment": "发布此环境",
  "Refresh resource history": "刷新资源历史",
  "Refresh resource telemetry": "刷新资源遥测",
  "Refresh usage": "刷新用量",
  "Refresh workspace files": "刷新工作区文件",
  "Relay client installation progress": "中继客户端安装进度",
  "Remote only": "仅远程",
  "Remove condition": "移除条件",
  "Remove group": "移除分组",
  "Remove negated group": "移除否定分组",
  "Remove preview annotation": "移除预览标注",
  "Rescan server environment": "重新扫描服务器环境",
  "Reset zoom": "重置缩放",
  "Resource History": "资源历史",
  "Resource monitor": "资源监控",
  "Resource timeline": "资源时间线",
  Responsive: "响应式",
  "Rotate viewport": "旋转视口",
  "Run WSL only": "仅运行 WSL",
  "Save plan to workspace": "将计划保存到工作区",
  "Script actions": "脚本操作",
  Scripts: "脚本",
  "Search fonts…": "搜索字体…",
  "Search hosts or type devbox": "搜索主机或输入 devbox",
  "Search models...": "搜索模型…",
  "Search or enter URL": "搜索或输入 URL",
  "Search project contents": "搜索项目内容",
  "Server URL": "服务器 URL",
  "Server password": "服务器密码",
  Optional: "可选",
  "Path to the OpenCode binary.": "OpenCode 二进制文件路径。",
  "Leave blank to let T3 Code spawn the server when needed.":
    "留空后，T3 Code 会在需要时启动服务器。",
  "Stored in plain text on disk.": "以明文存储在磁盘上。",
  Sensitive: "敏感",
  "Server environment": "服务器环境",
  "Shared background policy": "共享后台策略",
  "Show advanced typography settings": "显示高级排版设置",
  Sidebar: "侧边栏",
  "Sidebar (legacy)": "侧边栏（旧版）",
  "Slowest Spans": "最慢跨度",
  "Source control writer model": "源代码管理写作模型",
  "Span Logs": "Span 日志",
  "Split diff view": "分栏差异视图",
  "SSH Password Required": "需要 SSH 密码",
  "Stacked diff view": "堆叠差异视图",
  "Start from origin": "从 origin 开始",
  "Start new worktrees from origin by default": "默认从 origin 创建新工作树",
  "Start worktree from origin": "从 origin 创建工作树",
  "Stream token by token (legacy)": "逐令牌流式输出（旧版）",
  "Suggested hosts": "推荐主机",
  "T3 Code splash screen": "T3 Code 启动画面",
  "t3.json is invalid": "t3.json 无效",
  "Terminal font preview": "终端字体预览",
  "Text generation": "文本生成",
  "Theme appearance": "主题外观",
  "Theme file": "主题文件",
  "Theme name": "主题名称",
  Themes: "主题",
  "This code belongs to a different request": "此代码属于其他请求",
  "Thread search results": "对话搜索结果",
  "Toggle main sidebar": "切换主侧边栏",
  "Toggle task": "切换任务",
  "Toggle terminal drawer": "切换终端抽屉",
  "Tool call failed": "工具调用失败",
  "Top Span Names": "顶部 Span 名称",
  "Total processed": "已处理 Token",
  "Trace Diagnostics": "Trace 诊断",
  "Try:": "请尝试：",
  Turn: "回合",
  "Two colors, rest derived": "两种颜色，其余自动派生",
  Type: "类型",
  Typography: "排版",
  "Un-settle thread": "取消收起对话",
  "Update available — view details": "有可用更新 — 查看详情",
  "Use a separate source control writer model": "使用单独的源代码管理写作模型",
  "Use advanced theme colors": "使用高级主题颜色",
  Value: "值",
  Variable: "变量",
  "Viewport dimensions": "视口尺寸",
  "Viewport height": "视口高度",
  "Viewport width": "视口宽度",
  "Wake thread now": "立即唤醒对话",
  "When expression": "条件表达式",
  Woke: "已唤醒",
  "Workspace path": "工作区路径",
  "Wrap code, tables, diffs, and file previews by default":
    "默认换行显示代码块、表格、差异和文件预览",
  "Write custom answer": "编写自定义回答",
  "Write Total": "写入总量",
  "Write/s": "写入/秒",
  "WSL only": "仅 WSL",
  Zoom: "缩放",
  "Zoom in": "放大",
  "Zoom out": "缩小",
  "archive confirmation": "归档确认",
  "auto-settle": "自动收起",
  "background activity": "后台活动",
  "change request templates": "变更请求模板",
  "Check provider versions": "检查提供商版本",
  custom: "自定义",
  "delete confirmation": "删除确认",
  "diff whitespace changes": "差异中的空白更改",
  drawing: "绘图",
  element: "元素",
  "e.g. Living room iPad": "例如：客厅 iPad",
  "e.g. Work": "例如：工作",
  "environment identification": "环境标识",
  "fetch interval": "获取间隔",
  "glass opacity": "玻璃透明度",
  hidden: "已隐藏",
  Label: "标签",
  "new threads": "新对话",
  "new worktrees start from origin": "新工作树从 origin 开始",
  region: "区域",
  "Resident memory": "常驻内存",
  "source control writing style": "源代码管理写作风格",
  "style change": "样式更改",
  Thermal: "温度",
  "Warning: default refName": "警告：默认 refName",
  "Write throughput": "写入吞吐量",

  // Settings descriptions and labels are deliberately exact so every option
  // remains readable even when it is rendered through a portal or tooltip.
  "A t3.json exists at the workspace root but fails to parse, so every script and icon it declares is ignored. Check the JSON syntax and icon values.":
    "工作区根目录存在 t3.json，但解析失败，因此其中声明的脚本和图标都会被忽略。请检查 JSON 语法和图标值。",
  "Child Processes": "子进程",
  "Client scopes": "客户端权限范围",
  "Code blocks, diffs, file previews, and the terminal.": "代码块、差异、文件预览和终端。",
  "Collection time": "采集时间",
  "Combine matching repositories across environments.": "合并不同环境中匹配的仓库。",
  "Couldn't load the WSL backend state.": "无法加载 WSL 后端状态。",
  "CPU speed limit": "CPU 速度限制",
  "Creates the worktree from the latest matching branch on origin instead of your local branch.":
    "从 origin 上最新的匹配分支创建工作树，而不是使用本地分支。",
  "Current CPU": "当前 CPU",
  "Current version of the application.": "应用的当前版本。",
  "Default model for generated text like thread titles and source control content. Source control settings can override it with a dedicated source control writer model.":
    "用于生成对话标题、源代码管理内容等文本的默认模型。源代码管理设置可以使用专用的源代码管理写作模型覆盖此设置。",
  Desktop: "桌面端",
  "Electron main process": "Electron 主进程",
  "Everything outside code blocks and the terminal.": "代码块和终端之外的全部界面。",
  Failures: "失败数",
  "font smoothing": "字体平滑",
  Idle: "空闲",
  Inaccessible: "不可访问",
  Interval: "间隔",
  'Leave empty to use "~/" when the Add Project browser opens.':
    "留空后，添加项目浏览器打开时将使用“~/”。",
  "Live Activities": "实时活动",
  "Low power mode": "低电量模式",
  "Make this environment available to your other devices through T3 Connect.":
    "通过 T3 Connect 让你的其他设备使用此环境。",
  "Match case": "区分大小写",
  "Match whole word": "匹配整个单词",
  "Monitor overhead": "监控开销",
  Native: "原生",
  "Native process monitor": "原生进程监控",
  "New threads in this project start with this model. Applies to every checkout in this group.":
    "此项目中的新对话使用此模型开始。该设置适用于此分组中的每个检出。",
  "No authorization code was returned. Re-run `t3 connect` in your terminal and try again.":
    "未返回授权码。请在终端中重新运行 `t3 connect`，然后重试。",
  "Only the box you write prompts in. Mono works well here.":
    "仅用于编写提示词的输入框。这里使用等宽字体效果很好。",
  "Optional model override for change descriptions, change request titles and descriptions, and branch or bookmark names. Off uses the global text generation model.":
    "可选的模型覆盖项，用于生成更改说明、变更请求标题和说明，以及分支或书签名称。关闭后使用全局文本生成模型。",
  Output: "输出",
  "Paints assistant output token by token instead of in complete chunks. Not recommended: it is significantly slower, and long responses become harder to follow. Kept only for compatibility with the old behavior.":
    "逐令牌绘制助手输出，而不是按完整分块显示。不建议开启：速度会明显变慢，长回复也更难阅读。保留此选项仅为兼容旧行为。",
  "Pairing link scopes": "配对链接权限范围",
  "Pairing links and client-session management require the access:write scope for this backend.":
    "配对链接和客户端会话管理需要此后端的 access:write 权限范围。",
  "Parse Errors": "解析错误",
  "Power source": "电源状态",
  "Process count": "进程数",
  "Process scan": "进程扫描",
  "Processed tokens": "已消耗 Token",
  Processes: "进程",
  "project default model": "项目默认模型",
  "project grouping": "项目分组",
  "project icon": "项目图标",
  "project workspace default": "项目工作区默认值",
  "provider health check interval": "提供商健康检查间隔",
  "provider update checks": "提供商更新检查",
  "Push notifications": "推送通知",
  "Read throughput": "读取吞吐量",
  "Refresh provider availability, versions, auth state, and model metadata in the background. Set this to 0 seconds to rely on manual refreshes.":
    "在后台刷新提供商可用性、版本、认证状态和模型元数据。设为 0 秒可改为依赖手动刷新。",
  "Refresh process diagnostics": "刷新进程诊断",
  "Refresh trace diagnostics": "刷新 Trace 诊断",
  "Render text with thinner grayscale anti-aliasing instead of macOS's heavier default.":
    "使用更细的灰度抗锯齿显示文本，而不是 macOS 较厚重的默认效果。",
  "Require a second click on the inline archive action before a thread is archived.":
    "归档对话前，需要再次点击行内归档操作。",
  "Resize browser viewport from bottom edge": "从底边调整浏览器视口大小",
  "Resize browser viewport from bottom-left corner": "从左下角调整浏览器视口大小",
  "Resize browser viewport from bottom-right corner": "从右下角调整浏览器视口大小",
  "Resize browser viewport from left edge": "从左边调整浏览器视口大小",
  "Resize browser viewport from right edge": "从右边调整浏览器视口大小",
  Restarts: "重启次数",
  "Run a second backend inside a WSL distro alongside the Windows one. Pick a distro to start it; pick Off to stop it. Projects opened against the WSL backend live on the Linux side; Windows projects stay where they are.":
    "在 Windows 后端旁边的 WSL 发行版中运行第二个后端。选择发行版即可启动，选择关闭即可停止。使用 WSL 后端打开的项目位于 Linux 侧，Windows 项目保持原位置。",
  "Send activity from this environment to your mobile clients for push notifications and Live Activities.":
    "将此环境的活动发送到移动客户端，以接收推送通知和实时活动。",
  "Send activity from this environment to your mobile clients for push notifications and Live Activities. Works without a T3 Connect tunnel.":
    "将此环境的活动发送到移动客户端，以接收推送通知和实时活动。无需 T3 Connect 隧道也能工作。",
  "Server PID": "服务器 PID",
  "Set whether the diff panel ignores whitespace-only edits by default.":
    "设置差异面板默认是否忽略仅空白字符的编辑。",
  "Sidebar threads with no activity for this long settle automatically. Threads on merged or closed PRs always settle.":
    "侧边栏中超过此时长没有活动的对话会自动收起。已合并或已关闭 PR 上的对话总会收起。",
  Sidecar: "伴随进程",
  "Slow Spans": "慢跨度",
  Spans: "跨度",
  "Stable follows full releases. Nightly follows the nightly desktop channel and can switch back to stable immediately.":
    "稳定版跟随正式发布。Nightly 跟随桌面夜间版渠道，并且可以立即切回稳定版。",
  "Stop the Windows backend and run only the WSL backend. Useful if you develop entirely inside WSL and don't want a second backend process. T3 Code restarts when you change this.":
    "停止 Windows 后端，仅运行 WSL 后端。如果你完全在 WSL 中开发、不希望运行第二个后端进程，这会很有用。更改此设置后 T3 Code 会重启。",
  "Structures change request descriptions using the current repository's template when one is available.":
    "如果当前仓库提供模板，则按照该模板组织变更请求说明。",
  "Switches the hosted app release channel.": "切换托管应用的发布渠道。",
  "Terminal output, independent from code blocks and diffs.": "独立于代码块和差异的终端输出。",
  "text generation model": "文本生成模型",
  "This authorization response does not match a connect request started in this browser. Re-run `t3 connect` in your terminal and open the freshly printed URL in this browser.":
    "此授权响应与当前浏览器发起的连接请求不匹配。请在终端中重新运行 `t3 connect`，然后在此浏览器中打开刚打印出的 URL。",
  "Uncached input": "未缓存输入",
  "Used to distinguish this instance in picker rails and model lists.":
    "用于在选择器栏和模型列表中区分此实例。",
  "Use regular expression": "使用正则表达式",
  "Unable to capture screenshot": "无法截取屏幕截图",
  "Unable to copy screenshot": "无法复制屏幕截图",
  "Unable to copy screenshot path": "无法复制屏幕截图路径",
  "Where new threads in this project start. Overrides t3.json and the global default; applies to every checkout in this group.":
    "此项目中新对话的起始位置。会覆盖 t3.json 和全局默认值，并适用于此分组中的每个检出。",
  "word wrapping": "自动换行",
  "Wrap long lines in code blocks, tables, diffs, and file previews by default.":
    "默认在代码块、表格、差异和文件预览中换行显示长行。",
  "WSL is no longer available, so the Windows backend is running instead. Switch off the WSL backend to clear this preference.":
    "WSL 已不可用，因此当前改为运行 Windows 后端。关闭 WSL 后端即可清除此偏好设置。",

  // Settings chrome that is emitted as enum labels, option values, or dialog steps.
  Balanced: "均衡",
  Performance: "性能优先",
  "Battery saver": "省电",
  Advanced: "高级",
  "Check for Updates": "检查更新",
  Stable: "稳定版",
  "Local trace file.": "本地 Trace 文件。",
  "Service Tier": "速度响应",
  Driver: "驱动",
  Identity: "身份",
  "Select a color below": "请选择下方颜色",
  "Other colors": "其他颜色",
  "Update text": "更新文字",
  "Operate tasks": "操作任务",
  Chrome: "界面外壳",
  Surface: "表面",
  Text: "文字",
  "Text Muted": "弱化文字",
  Placeholder: "占位符",
  "Secondary Label": "次要标签",
  "Icon Muted": "弱化图标",
  "Message Surface": "消息背景",
  "Message Action": "消息操作",
  "No image files found.": "未找到图像文件。",
  Play: "运行",
  Lint: "代码检查",
  Configure: "配置",
  Debug: "调试",
  "No scripts yet. Scripts run in a project terminal from the thread top bar; one script can run automatically when a worktree is created.":
    "还没有脚本。脚本会在对话顶部栏的项目终端中运行；创建工作树时可自动运行一个脚本。",
  "Default (current checkout)": "默认（当前检出）",
  "Default (global: current checkout)": "默认（全局：当前检出）",
  "Current checkout": "当前检出",
  "Default (Group by repository)": "默认（按仓库分组）",
  "Group by repository": "按仓库分组",
  "Group by repository path": "按仓库路径分组",
  "Keep separate": "保持分开",
  "Matching repositories appear as one project.": "匹配的仓库会合并显示为一个项目。",
  "Keep monorepo paths separate.": "保持 monorepo 路径相互独立。",
  "Show every workspace as its own project.": "将每个工作区作为独立项目显示。",
  "ChatGPT Plus Subscription": "ChatGPT Plus 订阅",
  "Click “Add environment” to pair another environment.": "点击“添加环境”以配对另一个环境。",
  Monitoring: "监控中",
  Approval: "权限确认",
  Input: "等待输入",
  "Local folder": "本地文件夹",
  "Browse a folder on disk": "浏览磁盘上的文件夹",
  Sources: "来源",
  Environments: "环境",
  "Environment unavailable": "环境不可用",
  "The selected environment": "所选环境",
  "Open file in preferred editor": "在首选编辑器中打开文件",
  "Choose editor": "选择编辑器",
  "Remove from favorites": "从收藏中移除",
  "Add to favorites": "添加到收藏",
  "Toggle theme editor": "切换主题编辑器",
  "Project settings": "项目设置",
  "Search commands, projects, and threads...": "搜索命令、项目和对话…",
  "Go to file": "转到文件",
  "Open WSL folder": "打开 WSL 文件夹",
  "Open settings": "打开设置",
  "Select where to clone": "选择克隆位置",
  "Unable to browse projects": "无法浏览项目",
  "No environment is available.": "没有可用的环境。",
  "Failed to add project": "添加项目失败",
  "Failed to open project": "打开项目失败",
  "Windows-style paths are only supported on Windows.": "Windows 风格路径仅在 Windows 上受支持。",
  "Relative paths require an active project.": "相对路径需要先选择一个活动项目。",
  "Repository lookup failed": "仓库查询失败",
  "Clone failed": "克隆失败",
  "Could not add WSL project": "无法添加 WSL 项目",
  "Start the matching WSL backend, then choose the folder again.":
    "请启动匹配的 WSL 后端，然后重新选择文件夹。",
  "Unable to run command": "无法运行命令",
  "Auto-approve edits, ask before other actions.": "自动批准编辑，其他操作前询问。",
  "Supported providers approve routine actions; others still ask.":
    "支持的提供商会自动批准常规操作，其他操作仍会询问。",
  "Run provider command": "运行提供商命令",
  "Switch this thread back to normal build mode": "将此对话切回普通构建模式",
  "Branch copied": "分支已复制",
  "Failed to copy branch": "复制分支失败",
  "Failed to settle thread": "收起对话失败",
  "Failed to pin thread": "固定对话失败",
  "Failed to unpin thread": "取消固定对话失败",
  "Failed to reorder pinned threads": "调整置顶对话顺序失败",
  "Failed to snooze thread": "暂缓对话失败",
  "Failed to snooze threads": "暂缓对话失败",
  "Failed to regenerate thread titles": "重新生成对话标题失败",
  "Failed to regenerate thread title": "重新生成对话标题失败",
  "Could not create thread": "无法创建对话",
  "Path unavailable": "路径不可用",
  "This thread does not have a workspace path to copy.": "此对话没有可供复制的工作区路径。",
  Snooze: "暂缓",
  "In 1 hour": "1 小时后",
  "This evening": "今天傍晚",
  Tomorrow: "明天",
  "Next week": "下周",
  "Regenerate title": "重新生成标题",
  "Delete anyway": "仍要删除",
  "T3 system footprint": "T3 系统资源概览",
  "Live native counters for the server, providers, terminals, desktop processes, and the monitor itself.":
    "实时显示服务器、提供商、终端、桌面进程和监控器本身的原生计数。",
  "Sampling every": "采样间隔",
  "CPU average": "CPU 平均值",
  "Identity:": "身份：",
  Renderer: "渲染器",
  Server: "服务器",
  "Electron utility": "Electron 工具进程",
  Monitor: "监控器",
  "T3 process": "T3 进程",
  "Storage bytes": "存储字节",
  "Logical bytes": "逻辑字节",
  "All I/O bytes": "全部 I/O 字节",
  "External power": "外接电源",
  nominal: "正常",
  serious: "严重",
  critical: "临界",
};

// A final overlay for literals introduced by newer settings, connection, Git,
// preview, and workflow surfaces. Keeping it separate makes upstream merges
// conflict-light and allows an exact string to override an older translation.
const EXTRA_UI_TEXT: Readonly<Record<string, string>> = {
  "Access denied.": "访问被拒绝。",
  "Activating installation": "正在激活安装",
  "Active response.": "响应进行中。",
  "Active thread": "活动对话",
  "Add a project from the sidebar to configure it here.":
    "请从侧边栏添加项目，然后在这里进行配置。",
  "Add feedback to refine the plan, or leave this blank to implement it":
    "添加反馈以完善计划，留空则直接实施",
  "Agent controlling browser": "智能体正在控制浏览器",
  "Agents are only available from a thread.": "仅在对话中可使用智能体面板。",
  "Alerts enabled for approvals, completions.": "已启用权限确认和完成提醒。",
  "An error occurred while copying.": "复制时发生错误。",
  "An error occurred while creating the new thread.": "创建新对话时发生错误。",
  "An error occurred while saving.": "保存时发生错误。",
  "Authentication failed.": "认证失败。",
  "Authorization request": "授权请求",
  "Automatic updates": "自动更新",
  "Available when this page runs inside the desktop app.": "此页面在桌面应用中运行时可用。",
  "Available · Checking relay status…": "可用 · 正在检查中继状态…",
  "Available · Relay offline": "可用 · 中继离线",
  "Available · Relay online": "可用 · 中继在线",
  Offline: "离线",
  "Available · Relay status unavailable": "可用 · 中继状态不可用",
  "Awaiting Input": "等待输入",
  "Backend child": "后端子进程",
  "Backend paired": "后端已配对",
  "Background work running": "后台工作运行中",
  "Branch is up to date. No action needed.": "分支已是最新版本，无需操作。",
  "Branch name copied": "分支名称已复制",
  "Browse and read workspace files.": "浏览并读取工作区文件。",
  "Browser previews are only available in the T3 Code desktop app.":
    "浏览器预览仅在 T3 Code 桌面应用中可用。",
  "Checking connected environments.": "正在检查已连接环境。",
  "Checking current installation": "正在检查当前安装",
  "Checking first.": "正在进行首次检查。",
  "Checking relay status": "正在检查中继状态",
  "Checked unavailable": "检查时间不可用",
  "Checked just now": "已检查刚刚",
  "Checking what this session is allowed to change.": "正在检查此会话允许更改的内容。",
  "Checkout switched, but the thread could not be updated": "检出已切换，但无法更新对话",
  "Choose a clock.": "选择时钟。",
  "Choose a destination path and press Enter to clone.": "选择目标路径并按 Enter 克隆。",
  "Choose a project above to start a thread": "请先在上方选择一个项目，再开始对话",
  "Choose how this project should be grouped in the sidebar.": "选择此项目在侧边栏中的分组方式。",
  "Click to retry": "点击重试",
  "Clients on this machine": "此机器上的客户端",
  "Clone from a remote URL": "从远程 URL 克隆",
  "Close all": "全部关闭",
  "Close others": "关闭其他窗口",
  "Close popped-out preview": "关闭弹出的预览",
  "Close separate preview window": "关闭独立预览窗口",
  "Close separate window": "关闭独立窗口",
  "Close to the right": "关闭右侧窗口",
  "Commit & push": "提交并推送",
  "Commit changes": "提交更改",
  "Commit is currently unavailable.": "提交当前不可用。",
  "Commit or stash local changes before pushing.": "推送前请先提交或暂存本地更改。",
  "Committing...": "正在提交…",
  "Connect an execution environment before configuring providers.":
    "配置提供商前，请先连接执行环境。",
  "Connect devices": "连接设备",
  "Connecting to this backend.": "正在连接此后端。",
  "Connecting...": "正在连接…",
  "Connection failed": "连接失败",
  "Connection refused": "连接被拒绝",
  "Connection timed out": "连接超时",
  "Connection was closed": "连接已关闭",
  "Connection was reset": "连接已重置",
  "Conventional Commits": "约定式提交",
  "Copied error": "错误信息已复制",
  "Copy authorization code": "复制授权码",
  "Copy branch": "复制分支",
  "Copy branch name": "复制分支名称",
  "Copy error": "复制错误信息",
  "Copy full path": "复制完整路径",
  "Copy mention": "复制提及",
  "Copy relative path": "复制相对路径",
  "Copy table": "复制表格",
  "Could not choose environment": "无法选择环境",
  "Could not connect environment": "无法连接环境",
  "Could not connect the T3 Connect environment.": "无法连接 T3 Connect 环境。",
  "Could not connect to this device": "无法连接此设备",
  "Could not copy hosted app link": "无法复制托管应用链接",
  "Could not copy pairing URL": "无法复制配对 URL",
  "Could not copy pairing code": "无法复制配对码",
  "Could not copy update command": "无法复制更新命令",
  "Could not create the theme.": "无法创建主题。",
  "Could not load archived threads": "无法加载已归档对话",
  "Could not read image data.": "无法读取图像数据。",
  "Could not reconnect environment": "无法重新连接环境",
  "Could not restore persisted sidebar width.": "无法恢复已保存的侧边栏宽度。",
  "Could not save plan": "无法保存计划",
  "Could not save the theme.": "无法保存主题。",
  "Could not stash this prompt": "无法暂存此提示",
  "Could not update": "无法更新",
  "Create & Add": "创建并添加",
  "Create & Clone": "创建并克隆",
  "Create MR": "创建 MR",
  "Create PR": "创建 PR",
  "Create thread": "创建对话",
  "Creating pull request...": "正在创建拉取请求…",
  "Current thread": "当前对话",
  "Current worktree": "当前工作树",
  "Default mode — click to enter plan mode": "默认模式 — 点击进入计划模式",
  "Delete all threads in this project before removing it.":
    "移除项目之前，请先删除其中的全部对话。",
  "Deletes the project entry and its threads. Files on disk are not touched.":
    "删除项目记录及其对话，不会触碰磁盘上的文件。",
  "Diff is only available for server threads in Git repositories.":
    "差异仅适用于 Git 仓库中的服务器对话。",
  "Disable WSL": "禁用 WSL",
  "Disable WSL backend?": "禁用 WSL 后端？",
  "Disable diff line wrapping": "禁用差异换行",
  "Disable line wrap": "禁用换行",
  "Disable line wrapping": "禁用换行",
  "Disable network access?": "禁用网络访问？",
  "Dismiss Codex provider error": "关闭 Codex 提供商错误",
  "Dismiss Codex provider warning": "关闭 Codex 提供商警告",
  "Dismiss Grok provider warning": "关闭 Grok 提供商警告",
  "Dismiss branch change notice": "关闭分支更改提示",
  "Dismiss update notice": "关闭更新提示",
  "Dismiss warning": "关闭警告",
  "Done.": "完成。",
  "Download ARM build": "下载 ARM 版本",
  "Download the available update": "下载可用更新",
  "Downloading relay client": "正在下载中继客户端",
  "Earlier response.": "较早的回复。",
  "Edit Action": "编辑操作",
  "Enable diff line wrapping": "启用差异换行",
  "Enable line wrapping": "启用换行",
  "Enable network access?": "启用网络访问？",
  "Enter Git clone URL": "输入 Git 克隆 URL",
  "Enter a Git clone URL and press Enter to continue.": "输入 Git 克隆 URL，然后按 Enter 继续。",
  "Environment added": "环境已添加",
  "Environment disconnected": "环境已断开连接",
  "Environment reconnected": "环境已重新连接",
  "Environment is not connected.": "环境未连接。",
  "Every project path gets its own sidebar row.": "每个项目路径都会在侧边栏中单独显示。",
  "Existing PR": "已有拉取请求",
  "Expand all files": "展开所有文件",
  "Expand all folders": "展开所有文件夹",
  "Expand diff": "展开差异",
  "Expand plan": "展开计划",
  "Expand table cells": "展开表格单元格",
  "Installing relay client": "正在安装中继客户端",
  "Instance ID is required.": "必须填写实例 ID。",
  "Instance ID must be 64 characters or fewer.": "实例 ID 最多只能包含 64 个字符。",
  "Instance ID must start with a letter and use only letters, digits, '-', or '_'.":
    "实例 ID 必须以字母开头，只能包含字母、数字、“-”或“_”。",
  "It may be finishing an update. One moment.": "更新可能还在收尾，请稍候。",
  "Link opening is unavailable.": "无法打开链接。",
  "Load earlier turns": "加载较早的回合",
  "Loading archived threads": "正在加载已归档对话",
  "Loading branch diff...": "正在加载分支差异…",
  "Loading checkpoint diff...": "正在加载检查点差异…",
  "Loading earlier turns…": "正在加载较早的回合…",
  "Loading live processes...": "正在加载活动进程…",
  "Loading more refs...": "正在加载更多引用…",
  "Loading refs...": "正在加载引用…",
  "Loading working tree diff...": "正在加载工作树差异…",
  "Local checkout": "本地检出",
  "Local device": "本地设备",
  "Local sandbox project": "本地沙盒项目",
  "Local trace file": "本地 Trace 文件",
  "Mention copied": "提及已复制",
  "Messages loading": "正在加载消息",
  "Monitoring in the background": "正在后台监控",
  "My Theme": "我的主题",
  "Name is required.": "必须填写名称。",
  "Network error": "网络错误",
  "New Terminal": "新建终端",
  "New sessions will use the updated provider.": "新对话将使用更新后的提供商。",
  "New sessions will use the updated providers.": "新对话将使用更新后的提供商。",
  "New thread mode": "新对话模式",
  "New worktrees start from origin": "新工作树从 origin 开始",
  "No git remote detected": "未检测到 Git 远程仓库",
  "No files found.": "未找到文件。",
  "No matching actions.": "没有匹配的操作。",
  "No matching commands, projects, or threads.": "没有匹配的命令、项目或对话。",
  "No matching files or folders.": "没有匹配的文件或文件夹。",
  "No matching image files.": "没有匹配的图像文件。",
  "No net changes in this selection.": "当前选择中没有净变化。",
  "No open pull request found.": "未找到开放的拉取请求。",
  "No patch available for this selection.": "当前选择没有可用补丁。",
  "No process resource samples found for this window.": "此时间窗口内没有找到进程资源样本。",
  "No results found.": "未找到结果。",
  "No trace records": "没有 Trace 记录",
  "Not connected": "未连接",
  "Not connected yet.": "尚未连接。",
  "Not connected: message not sent": "未连接：消息未发送",
  "Not ready": "尚未就绪",
  "Open Agents ▸": "打开智能体 ▸",
  "Open Settings -> Source Control to configure this provider.":
    "打开“设置 -> 源代码管理”以配置此提供商。",
  "Open a chat for this project and try again.": "打开此项目中的对话，然后重试。",
  "Open a local app or URL.": "打开本地应用或 URL。",
  "Open the pull request for this thread's branch.": "打开此对话分支的拉取请求。",
  "Open in browser": "在浏览器中打开",
  "Open in integrated browser": "在内置浏览器中打开",
  "Open in preview": "在预览中打开",
  "Open separate preview window": "打开独立预览窗口",
  "Pairing URL copied": "配对 URL 已复制",
  "Pairing backend": "配对后端",
  "Pairing code copied": "配对码已复制",
  "Pairing failed": "配对失败",
  "Paste it into another client to finish pairing.": "将其粘贴到另一个客户端以完成配对。",
  "Pending Approval": "等待权限确认",
  "Pending MagicDNS endpoint": "等待 MagicDNS 端点",
  "Pick a color from the app": "从应用中选取颜色",
  "Plan saved to workspace": "计划已保存到工作区",
  "Pop into separate window": "弹出到独立窗口",
  "Pop preview into separate window": "将预览弹出到独立窗口",
  "Preparing feature ref...": "正在准备功能引用…",
  "Preparing local...": "正在准备本地环境…",
  "Preparing worktree": "正在准备工作树",
  "Press Enter to create this folder and add it as a project.":
    "按 Enter 创建此文件夹并将其添加为项目。",
  "Previous worktree": "上一个工作树",
  "Primary device": "主设备",
  "Process exited": "进程已退出",
  "Project Grouping": "项目分组",
  "Project is not empty": "项目不为空",
  "Projects from the same repository share one sidebar row.":
    "来自同一仓库的项目共用侧边栏中的一行。",
  "Projects group only when both the repository and repo-relative path match.":
    "仅当仓库和相对仓库路径都匹配时，项目才会分组。",
  "Proposed plan": "拟定计划",
  "Provider status unavailable. Open Settings -> Source Control and rescan.":
    "提供商状态不可用。请打开“设置 -> 源代码管理”并重新扫描。",
  "Provider still needs an update": "提供商仍需要更新",
  "Provider update failed": "提供商更新失败",
  "Provider update failed.": "提供商更新失败。",
  "Provider updated": "提供商已更新",
  "Provider updates finished": "提供商更新已完成",
  "Providers still need updates": "部分提供商仍需要更新",
  "Pull failed": "拉取失败",
  "Pulling...": "正在拉取…",
  "Push is currently unavailable.": "推送当前不可用。",
  "Pushing...": "正在推送…",
  "Reading connected execution environments.": "正在读取已连接的执行环境。",
  "Recent Threads": "最近对话",
  "Reconnect this environment before sending messages or running actions.":
    "发送消息或运行操作前，请先重新连接此环境。",
  "Reconnecting to the environment. Try again once it is connected.":
    "正在重新连接环境。连接成功后再试。",
  "Reconnecting...": "正在重新连接…",
  "Recording saved": "录音已保存",
  "Refresh diff": "刷新差异",
  "Refresh files": "刷新文件",
  "Refreshing diff": "正在刷新差异",
  "Relative path": "相对路径",
  "Relay offline": "中继离线",
  "Relay online": "中继在线",
  "Relay status unavailable": "中继状态不可用",
  "Remote device": "远程设备",
  "Remote project": "远程项目",
  "Remove all entries": "移除全部条目",
  "Remove project": "移除项目",
  "Remove this project everywhere": "从所有位置移除此项目",
  "Repository created": "仓库已创建",
  "Repository published": "仓库已发布",
  "Resolve this approval request to continue": "解决此权限请求后继续",
  "Restart and disable": "重启并禁用",
  "Restart and enable": "重启并启用",
  "Restore branch": "恢复分支",
  "Restored prompt may reappear in the stash": "已恢复的提示可能会重新出现在暂存区",
  "Restoring...": "正在恢复…",
  "Review and confirm your commit. Leave the message blank to auto-generate one.":
    "请检查并确认提交。留空提交信息可自动生成。",
  "Review changes in this thread.": "审阅此对话中的更改。",
  "Revoke others": "撤销其他客户端",
  "Revoked 1 other client": "已撤销 1 个其他客户端",
  "Run action on default refName?": "在默认 refName 上运行操作？",
  "Run both backends": "运行两个后端",
  "Run only the WSL backend?": "仅运行 WSL 后端？",
  "Run provider skill": "运行提供商技能",
  "Running git action...": "正在运行 Git 操作…",
  "Running provider update command.": "正在运行提供商更新命令。",
  "SSH password prompt failed.": "SSH 密码提示失败。",
  "Screenshot · Shift-click to record": "截图 · Shift-点击以录制",
  "Script not found.": "未找到脚本。",
  "Search files…": "搜索文件…",
  "Search project contents…": "搜索项目内容…",
  "Search...": "搜索…",
  "Searching project files…": "正在搜索项目文件…",
  "Searching thread messages…": "正在搜索对话消息…",
  "Searching workspace files...": "正在搜索工作区文件…",
  "Searching workspace skills...": "正在搜索工作区技能…",
  "Select an element · Esc to cancel": "选择元素 · Esc 取消",
  "Select ref": "选择引用",
  "Server update failed": "服务器更新失败",
  "Server update failed.": "服务器更新失败。",
  "Show code": "显示代码",
  "Show details": "显示详情",
  "Show device toolbar": "显示设备工具栏",
  "Show file explorer": "显示文件浏览器",
  "Show files": "显示文件",
  "Show in picker": "在选择器中显示",
  "Show link": "显示链接",
  "Show markdown source": "显示 Markdown 源码",
  "Show rendered markdown": "显示渲染后的 Markdown",
  "Show requests": "显示请求",
  "Show whitespace changes": "显示空白更改",
  "Some images were not restored": "部分图像未恢复",
  "Some requests are slow": "部分请求较慢",
  "Spans at or above the configured slow-span threshold.": "达到或超过配置的慢跨度阈值的跨度。",
  "Split Terminal Horizontally": "水平拆分终端",
  "Split Terminal Vertically": "垂直拆分终端",
  "Start a new chat to change models": "开始新对话以更换模型",
  "Start a shell in this workspace.": "在此工作区启动 Shell。",
  "Start the WSL backend": "启动 WSL 后端",
  "Stop recording": "停止录制",
  "Stored secret - enter a new value to replace": "已保存密钥 — 输入新值以替换",
  "Stream token by token": "逐令牌流式输出",
  "Submit answer": "提交回答",
  "Switch WSL distro?": "切换 WSL 发行版？",
  "Switch distro": "切换发行版",
  "Switch to Windows": "切换到 Windows",
  "Sync ref": "同步引用",
  "Terminal closed": "终端已关闭",
  "Terminal logs only": "仅终端日志",
  "Terminal surfaces are only available from a project thread.": "仅在项目对话中可使用终端面板。",
  "Terminal write failed": "终端写入失败",
  "The chat isn't ready to accept input right now.": "当前对话还没有准备好接收输入。",
  "The composer is busy; try again once it is ready.": "输入框正在忙碌；准备好后再试。",
  "The preview could not be opened.": "无法打开预览。",
  "The process is not a child of the T3 Server. It might already have exited.":
    "该进程不是 T3 Server 的子进程，可能已经退出。",
  "Thread ID copied": "对话 ID 已复制",
  "Thread action failed": "对话操作失败",
  "Thread archived, but navigation failed": "对话已归档，但导航失败",
  "Thread context is unavailable.": "对话上下文不可用。",
  "Too many redirects": "重定向次数过多",
  "Toolbar background": "工具栏背景",
  "Toolbar border": "工具栏边框",
  "Toolbar control": "工具栏控件",
  "Toolbar control hover": "工具栏控件悬停",
  "Turn off WSL and switch back to Windows?": "关闭 WSL 并切回 Windows？",
  "Turn on token-by-token output?": "开启逐令牌输出？",
  "Type to search across your project.": "输入内容以搜索整个项目。",
  "Type your own answer, or leave this blank to use the selected option":
    "输入自定义回答，留空则使用所选选项",
  "Un-settling...": "正在取消收起…",
  "Unable to add to chat": "无法添加到对话",
  "Unable to copy terminal selection": "无法复制终端选择内容",
  "Unable to open file in browser": "无法在浏览器中打开文件",
  "Unable to open link": "无法打开链接",
  "Unable to open path": "无法打开路径",
  "Unable to open preview": "无法打开预览",
  "Unable to open pull request link": "无法打开拉取请求链接",
  "Unable to start recording": "无法开始录制",
  "Unable to stop recording": "无法停止录制",
  "Unknown error removing project.": "移除项目时发生未知错误。",
  "Up to date": "已是最新",
  "Update available.": "有可用更新。",
  "Update background": "更新背景",
  "Update command copied": "更新命令已复制",
  "Update downloaded": "更新已下载",
  "Update now": "立即更新",
  "Update time unavailable": "更新时间不可用",
  "Update timed out — try again.": "更新超时 — 请重试。",
  "Updating provider": "正在更新提供商",
  "Updating providers": "正在更新提供商",
  "Updating server": "正在更新服务器",
  "Use only WSL": "仅使用 WSL",
  "Uses custom background intervals with the selected shared power policy.":
    "使用所选共享电源策略的自定义后台间隔。",
  "Validating executable": "正在验证可执行文件",
  "Verifying download": "正在验证下载",
  "Version pill": "版本标记",
  "View ▸": "查看 ▸",
  "Waiting for installer": "等待安装程序",
  "Wake now": "立即唤醒",
  "Wake thread": "唤醒对话",
  "Waking...": "正在唤醒…",
  "Watch subagents and workflows run.": "查看子智能体和工作流运行情况。",
  "What's changed": "更改内容",
  "Worked for ...": "已运行…",
  "Working for Xs": "运行时长：X 秒",
  "Workspace path is unavailable": "工作区路径不可用",
  "Workspace query failed.": "工作区查询失败。",
  "Worktree is clean. Make changes before committing.": "工作树干净，请先做出更改再提交。",
  "Wrap lines": "换行显示",
  "You appear to be offline.": "你似乎处于离线状态。",
  "You stopped this response": "你已停止此回复",
  "Your session does not have permission to manage T3 Connect access.":
    "你的会话没有管理 T3 Connect 访问权限。",
  "Allows scoped background probes while any subscribed client remains connected.":
    "只要有订阅客户端保持连接，就允许按范围执行后台探测。",
  "Also pauses background probes when the host or client is on battery.":
    "主机或客户端使用电池时也会暂停后台探测。",
  "Annotate elements, regions, and drawings": "标注元素、区域和绘图",
  "Annotate preview": "标注预览",
  "Annotated preview crop": "已标注预览裁剪图",
  "Annotation attached to draft": "标注已附加到草稿",
  "Anyone on the web": "网页上的任何人",
  "Ask anything...": "输入任何问题…",
  "Ask the repo agent, or run a command…": "提出后续修改",
  "Browser storage is unavailable, so this stash is kept in memory only for this session.":
    "浏览器存储不可用，此暂存内容只会保留在本次会话的内存中。",
  "Browser storage rejected the delete, so this prompt could reappear after a reload.":
    "浏览器存储拒绝了删除操作，因此重新加载后此提示可能再次出现。",
  "Browser storage rejected the update, so this entry could still be there after a reload.":
    "浏览器存储拒绝了更新操作，因此重新加载后此条目可能仍然存在。",
  "Browser storage rejected the write, so the composer was left as-is. Free up site data and try again.":
    "浏览器存储拒绝了写入，输入框保持不变。请清理站点数据后重试。",
  "Cancel and clear the selection": "取消并清除选择",
  "Cancel annotation (Esc)": "取消标注（Esc）",
  "Certificate authority is not trusted": "证书颁发机构不受信任",
  "Certificate hostname mismatch": "证书主机名不匹配",
  "Certificate is expired or not yet valid": "证书已过期或尚未生效",
  "Clipboard copy is unavailable here. Manually copy this code into another client.":
    "此处无法使用剪贴板复制。请手动将此代码复制到另一个客户端。",
  "Clipboard copy is unavailable here. Open or manually copy this full pairing URL on the device you want to connect.":
    "此处无法使用剪贴板复制。请在要连接的设备上打开或手动复制完整配对 URL。",
  "Clipboard copy is unavailable here. Open or manually copy this hosted app link on the device you want to connect.":
    "此处无法使用剪贴板复制。请在要连接的设备上打开或手动复制托管应用链接。",
  "Clipboard copy unavailable": "剪贴板复制不可用",
  "Codex Personal — Unavailable.": "Codex Personal — 不可用。",
  "Collapse all files": "收起所有文件",
  "Collapse all folders": "收起所有文件夹",
  "Collapse diff": "收起差异",
  "Collapse plan": "收起计划",
  "Collapse table cells": "收起表格单元格",
  "Collecting process resource samples...": "正在采集进程资源样本…",
  "Command is required.": "必须填写命令。",
  "Commit & push to default ref?": "提交并推送到默认 ref？",
  "Could not read persisted thread sidebar width.": "无法读取已保存的对话侧边栏宽度。",
  "DNS address could not be found": "找不到 DNS 地址",
  "Desktop-managed pairing and one-time pairing tokens are both accepted for this environment.":
    "此环境同时支持桌面管理配对和一次性配对令牌。",
  "Detached HEAD: checkout a refName before pushing.":
    "当前处于 Detached HEAD 状态，请先检出 refName 再推送。",
  "Devices on the same network": "同一网络上的设备",
  "Devices on your private network": "你的私有网络上的设备",
  "Diff whitespace changes": "差异中的空白更改",
  "Dismiss to clear the Woke indicator, or send a message to keep going.":
    "关闭可清除“已唤醒”标记；发送消息则继续。",
  "Drop T3 Code or VS Code .json files": "拖入 T3 Code 或 VS Code 的 .json 文件",
  "Editor opening is unavailable.": "无法打开编辑器。",
  "Electron main": "Electron 主进程",
  "Enable a provider in Settings": "在设置中启用提供商",
  "Enable a provider in Settings to send a message": "请在设置中启用提供商后再发送消息",
  "Enter a pairing token to start a session with this environment.":
    "输入配对令牌以开始与此环境的会话。",
  "Enter a repository path and press Enter to look it up.": "输入仓库路径并按 Enter 查询。",
  "Enter a workspace path": "输入工作区路径",
  "Enter this code in your waiting terminal to finish connecting.":
    "在等待中的终端输入此代码以完成连接。",
  "Expired terminal context": "终端上下文已过期",
  "Expired terminal contexts": "终端上下文已过期",
  "Exposed on all interfaces.": "已暴露到所有网络接口。",
  "Failed to archive thread": "归档对话失败",
  "Failed to clear terminal": "清除终端失败",
  "Failed to connect": "连接失败",
  "Failed to connect SSH host.": "连接 SSH 主机失败。",
  "Failed to copy": "复制失败",
  "Failed to copy branch name": "复制分支名称失败",
  "Failed to copy mention": "复制提及失败",
  "Failed to create and switch ref.": "创建并切换引用失败。",
  "Failed to delete terminal input": "删除终端输入失败",
  "Failed to move cursor": "移动光标失败",
  "Failed to open diff file in editor.": "无法在编辑器中打开差异文件。",
  "Failed to read image.": "读取图像失败。",
  "Failed to refresh providers": "刷新提供商失败",
  "Failed to remove keybinding": "移除快捷键失败",
  "Failed to remove project": "移除项目失败",
  "Failed to save action.": "保存操作失败。",
  "Failed to save keybinding": "保存快捷键失败",
  "Failed to save scripts": "保存脚本失败",
  "Failed to switch checkout": "切换检出失败",
  "Failed to switch ref.": "切换引用失败。",
  "Failed to update default model": "更新默认模型失败",
  "Failed to update new-thread workspace": "更新新对话工作区失败",
  "Failed to update project icon": "更新项目图标失败",
  "Failed to wake thread": "唤醒对话失败",
  "Files are only available when a project is open.": "打开项目后才能使用文件。",
  "Float preview over chat": "让预览浮在对话上方",
  "Follow system": "跟随系统",
  "Full path": "完整路径",
  "Generating commit message...": "正在生成提交信息…",
  "Git URL": "Git URL",
  "Git action in progress.": "Git 操作进行中。",
  "Git initialization failed": "Git 初始化失败",
  "Git status is unavailable.": "Git 状态不可用。",
  "Group into...": "分组到…",
  "Hide details": "隐藏详情",
  "Hide device toolbar": "隐藏设备工具栏",
  "Hide file explorer": "隐藏文件浏览器",
  "Hide files": "隐藏文件",
  "Hide from picker": "从选择器中隐藏",
  "Hosted app link copied": "托管应用链接已复制",
  "Hosted app pairing link": "托管应用配对链接",
  "Human control": "人工控制",
  "Indexing project files…": "正在索引项目文件…",
  "Indexing workspace files…": "正在索引工作区文件…",
  "Initializing...": "正在初始化…",
  "Install ARM build": "安装 ARM 版本",
  "Install relay client?": "安装中继客户端？",
  "Install the update now or review provider settings.": "立即安装更新，或查看提供商设置。",
  "Mon 9:00": "周一 9:00",
  "Name (1)": "名称（1）",
  "No active project is available for this pull request.": "此拉取请求没有可用的活动项目。",
  "No internet connection": "没有网络连接",
  "No local commits to push.": "没有可推送的本地提交。",
  "Oldest stashed prompt discarded": "最早的暂存提示已丢弃",
  "Only invited people": "仅受邀人员",
  "Open it in the browser on the device you want to connect.": "在要连接的设备上的浏览器中打开它。",
  "Open it in the client you want to pair to this environment.":
    "在要与此环境配对的客户端中打开它。",
  "Opening links is unavailable in this browser.": "此浏览器无法打开链接。",
  "Opens the hosted app, no install needed": "打开托管应用，无需安装",
  "Other entries in this grouped project are unaffected.": "此分组项目中的其他条目不受影响。",
  "Page didn't load — pick unavailable until the page renders": "页面尚未加载 — 渲染完成前无法选择",
  "Pauses background probes when clients are idle, the host is locked, or low power mode is active.":
    "客户端空闲、主机锁定或低电量模式启用时暂停后台探测。",
  "Push notifications are disabled on this device.": "此设备已禁用推送通知。",
  "Push notifications are enabled, but no alert types are selected.":
    "已启用推送通知，但未选择任何提醒类型。",
  "Push to default ref?": "推送到默认 ref？",
  "Re-add it if you want that terminal output included.": "如果要包含该终端输出，请重新添加它。",
  "Re-enable the Windows backend?": "重新启用 Windows 后端？",
  "Reachable from anywhere": "可从任何位置访问",
  "Recently seen": "最近查看",
  "Redirecting to authorize T3 Connect for your CLI…": "正在跳转，以便为 CLI 授权 T3 Connect…",
  "Refreshing diff…": "正在刷新差异…",
  "Remove it or re-add it to include terminal output.": "移除它，或重新添加以包含终端输出。",
  "Send again once its thumbnail appears.": "缩略图出现后再发送。",
  "Sending a message moves it back to Active in the sidebar.":
    "发送消息会将其移回侧边栏的“活动”区域。",
  "Sending a message wakes it and moves it back to Active in the sidebar.":
    "发送消息会唤醒它，并将其移回侧边栏的“活动”区域。",
  "Sending is unavailable right now. Finish the current action, then send.":
    "当前无法发送。请完成当前操作后再发送。",
  "Sign in to T3 Connect to manage this environment.": "登录 T3 Connect 以管理此环境。",
  "Sign in to continue authorizing T3 Connect for your CLI.": "登录后继续为 CLI 授权 T3 Connect。",
  "Sign in via the CLI to authenticate again.": "请通过 CLI 重新认证。",
  "Stash entry may come back": "暂存条目可能会回来",
  "Stashed images did not attach": "暂存图像未能附加",
  "Stashed images were not saved": "暂存图像未保存",
  "Stashed prompt will not survive a reload": "重新加载后暂存提示不会保留",
  "Step 1 of 2 · Browser authorization": "第 1 步，共 2 步 · 浏览器授权",
  "Step 2 of 2 · Terminal handoff": "第 2 步，共 2 步 · 终端交接",
  "Still compressing a pasted image.": "仍在压缩已粘贴的图像。",
  "Tailscale HTTPS": "Tailscale HTTPS",
  "The link is missing its authorization request. Re-run `t3 connect` in your terminal and open the freshly printed URL.":
    "链接缺少授权请求。请在终端重新运行 `t3 connect`，然后打开刚打印的 URL。",
  "The managed tunnel was removed. Agent activity publishing stays on.":
    "托管隧道已移除，但智能体活动发布仍保持开启。",
  "The prompt was stashed, but browser storage rejected its images. They will be missing if you reload.":
    "提示已暂存，但浏览器存储拒绝了其中的图像。重新加载后这些图像会丢失。",
  "The provider update command could not be started.": "无法启动提供商更新命令。",
  "Theme mix": "主题混合",
  "This SSH password prompt expired. Try connecting again.": "SSH 密码提示已过期，请重新连接。",
  "This action is currently unavailable.": "此操作当前不可用。",
  "This backend is already configured for remote access. Network exposure changes must be made where the server is launched.":
    "此后端已配置为远程访问。网络暴露设置必须在启动服务器的位置更改。",
  "This backend is only reachable on this machine. Restart it with a non-loopback host to enable remote pairing.":
    "此后端只能在此机器上访问。请使用非回环主机地址重启，以启用远程配对。",
  "This connect link is incomplete": "此连接链接不完整",
  "This device": "此设备",
  "This environment accepts one-time pairing tokens. Pairing links can open this page directly, or you can paste the token here.":
    "此环境接受一次性配对令牌。配对链接可直接打开此页面，也可以在这里粘贴令牌。",
  "This environment expects a trusted pairing credential before the app can connect.":
    "此环境需要受信任的配对凭据，应用才能连接。",
  "This environment is available through T3 Connect.": "此环境可通过 T3 Connect 使用。",
  "This environment is available to your other devices through T3 Connect.":
    "你的其他设备可通过 T3 Connect 使用此环境。",
  "This environment is desktop-managed. Open it from the desktop app or paste a bootstrap credential if one was issued explicitly.":
    "此环境由桌面端管理。请从桌面应用打开，或粘贴明确签发的引导凭据。",
  "This environment is no longer available through T3 Connect.":
    "此环境已无法通过 T3 Connect 使用。",
  "This environment isn’t connected — try again once it reconnects.":
    "此环境未连接 — 重新连接后再试。",
  "This environment publishes agent activity to your mobile clients.":
    "此环境会将智能体活动发布到你的移动客户端。",
  "This environment will stop publishing agent activity.": "此环境将停止发布智能体活动。",
  "This install is using the correct architecture.": "此安装使用了正确的架构。",
  "This one-time pairing token was already submitted. Request a new pairing link.":
    "此一次性配对令牌已提交。请请求新的配对链接。",
  "This pairing link is missing its backend host or token.": "此配对链接缺少后端主机或令牌。",
  "This permanently clears conversation history for those threads.":
    "将永久清除那些对话的历史记录。",
  "This provider does not allow switching models after a conversation has started.":
    "此提供商不允许在对话开始后切换模型。",
  "This removes only the project entries, not the files on disk.":
    "这只会移除项目记录，不会删除磁盘上的文件。",
  "This removes only this project entry.": "这只会移除此项目记录。",
  "This site can't be reached": "无法访问此网站",
  "This thread does not have a workspace path to save into.": "此对话没有可用于保存的工作区路径。",
  "This thread's branch has no pull request": "此对话的分支没有拉取请求",
  "This thread's branch has no pull request yet.": "此对话的分支尚无拉取请求。",
  "This thread woke from snooze": "此对话已从暂缓状态唤醒",
  "This will discard newer messages and turn diffs in this thread.":
    "这会丢弃此对话中较新的消息和回合差异。",
  "Unable to copy recording path": "无法复制录制路径",
  "Unable to initialize libghostty-vt": "无法初始化 libghostty-vt",
  "Unable to open release notes": "无法打开发布说明",
  "Unable to resize browser viewport": "无法调整浏览器视口大小",
  "Unable to update popped-out preview": "无法更新弹出的预览",
  "Update the project title.": "更新项目标题。",
  "Use Tailscale Serve to expose this backend through a MagicDNS HTTPS URL.":
    "使用 Tailscale Serve 通过 MagicDNS HTTPS URL 暴露此后端。",
  "What should we build in": "想在",
  "WSL backend off": "WSL 后端已关闭",
  "Add a project": "添加项目",
  "Copy Link": "复制链接",
  "Failed to un-settle thread": "取消收起对话失败",
  "Hide requests": "隐藏请求",
  "New thread in...": "在项目中新建对话…",
  "Searching workspace files…": "正在搜索工作区文件…",
  "The environment": "环境",
  Warning: "警告",
  Config: "配置",
  HEALTHY: "健康",
  healthy: "健康",
  starting: "启动中",
  degraded: "已降级",
  unavailable: "不可用",
  WARN: "警告",
  Unlocked: "已解锁",
  process: "进程",
  processes: "进程",
  retained: "已保留",
  "Last Seen": "最近出现",
  "Git availability": "Git 可用性",
  "GitLab availability": "GitLab 可用性",
  "Azure DevOps availability": "Azure DevOps 可用性",
  "Bitbucket availability": "Bitbucket 可用性",
  "git version": "Git 版本",
  "Native counters identify which process is reading or writing. These application-level counters identify known T3 operations so process spikes can be correlated with specific persistence and logging paths.":
    "原生计数器标识正在读取或写入的进程；应用级计数器标识已知的 T3 操作，便于将进程峰值与具体的持久化和日志路径关联起来。",
  "CPU details": "CPU 详情",
  "Memory details": "内存详情",
  "CPU Time details": "CPU 时间详情",
  "Samples details": "样本数详情",
  "Slow Spans details": "慢跨度详情",
  "LAST SEEN": "最近出现",
  "Root process": "根进程",
  "No running descendants.": "未找到正在运行的后代进程。",
  "Desktop only": "仅桌面端",
  "Shown in the provider list. Optional.": "显示在提供商列表中，可选。",
  "Use #2563eb accent": "使用 #2563eb 强调色",
  "Use #16a34a accent": "使用 #16a34a 强调色",
  "Use #ea580c accent": "使用 #ea580c 强调色",
  "Use #dc2626 accent": "使用 #dc2626 强调色",
  "Use #7c3aed accent": "使用 #7c3aed 强调色",
  "Use #089b2a accent": "使用 #089b2a 强调色",
  "Binary path": "二进制路径",
  "Path to the Codex binary used by this instance.": "此实例使用的 Codex 二进制文件路径。",
  "Shadow home path": "备用主目录路径",
  "Account-specific Codex home. Keeps auth.json separate while sharing state from CODEX_HOME.":
    "账户专用 Codex 主目录。将 auth.json 分开，同时与 CODEX_HOME 共享状态。",
  "Launch arguments": "启动参数",
  "Additional CLI arguments passed to codex app-server on session start.":
    "会话启动时传递给 codex app-server 的额外 CLI 参数。",
  "Custom Codex home and config directory.": "自定义 Codex 主目录和配置目录。",
  "Span Logs": "跨度日志",
  "Top Span Names": "顶部跨度名称",
  Kill: "终止",
  "CPU avg": "CPU 平均",
  "CPU peak": "CPU 峰值",
  Read: "读取",
  Write: "写入",
  "e.g. Aurora": "例如：Aurora",
  "Interface font family": "界面字体",
  "Prompt font family": "提示词字体",
  "Code font family": "代码字体",
  "Terminal font family": "终端字体",
  "interface font family": "界面字体",
  "prompt font family": "提示词字体",
  "code font family": "代码字体",
  "terminal font family": "终端字体",
  "Stable follows full releases. Nightly follows the nightly desktop channel and can switch back to stable immediately.":
    "稳定版跟随正式发布。夜间版跟随桌面夜间版渠道，并且可以立即切回稳定版。",

  // ── Mobile thread-list chrome ────────────────────────────────────────
  "Filter and sort threads": "筛选并排序对话",
  "Clear search": "清除搜索",
  "Show threads from every environment": "显示所有环境中的对话",
  "Show threads from every project": "显示所有项目中的对话",
  "Loading threads…": "正在加载对话…",
  "No threads in": "中没有对话",
  "Opens environment settings": "打开环境设置",
  "Opens the thread": "打开对话",
  "Opens the queued task for editing": "打开待处理任务进行编辑",
  "Expands the project": "展开项目",
  "Collapses the project": "收起项目",
  "Create new thread in": "新建对话于",
  threads: "个对话",
  "Swipe left for archive and delete actions": "左滑查看归档和删除操作",
  "Delete thread?": "删除对话？",
  "will be permanently deleted, including its terminal history.": "将被永久删除，包括其终端历史。",
  "Delete pending task?": "删除待处理任务？",
  "has not been sent yet and will be removed from the outbox.": "尚未发送，将从发件箱中移除。",
  "Could not unarchive thread": "无法取消归档对话",
  Created: "创建于",
  "Could not settle thread": "无法完结对话",
  "Could not un-settle thread": "无法取消完结对话",
  "Could not snooze thread": "无法暂缓对话",
  "Could not wake thread": "无法唤醒对话",
  "Could not pin thread": "无法置顶对话",
  "Could not unpin thread": "无法取消置顶对话",
  "Could not move thread": "无法移动对话",
  "Could not delete pending task": "无法删除待处理任务",
  "The pending task could not be removed.": "无法移除待处理任务。",
  "The thread could not be": "对话无法被",
  "archived.": "归档。",
  "unarchived.": "取消归档。",
  "deleted.": "删除。",
  "settled.": "完结。",
  "un-settled.": "取消完结。",
  "This environment's server does not support settling yet. Update the server to use Settle.":
    "此环境的服务端尚不支持完结功能。请更新服务端后再使用完结。",
  "This thread still needs attention. Resolve or interrupt it first, then try again.":
    "该对话仍需处理。请先解决或中断它，然后重试。",
  "This thread is working. Interrupt it first, then try again.":
    "该对话正在工作中。请先中断它，然后重试。",
  "This environment's server does not support snoozing yet. Update the server to use Snooze.":
    "此环境的服务端尚不支持暂缓功能。请更新服务端后再使用暂缓。",
  "This thread is waiting on you. Respond to the pending request before snoozing it.":
    "该对话正在等待你处理。请先回应待处理请求，再暂缓它。",
  "This thread is still starting a turn. Try again once it's running.":
    "该对话仍在本回合启动中。请等它运行后再试。",
  "The thread could not be snoozed.": "无法暂缓该对话。",
  "This environment's server does not support snoozing yet. Update the server to wake this thread.":
    "此环境的服务端尚不支持暂缓功能。请更新服务端后再唤醒该对话。",
  "The thread could not be woken.": "无法唤醒该对话。",
  "This environment's server does not support pinning yet. Update the server to use Pin.":
    "此环境的服务端尚不支持置顶功能。请更新服务端后再使用置顶。",
  "The thread could not be pinned.": "无法置顶该对话。",
  "The thread could not be unpinned.": "无法取消置顶该对话。",
  "This environment's server does not support pinned reordering yet. Update the server to reorder pins.":
    "此环境的服务端尚不支持置顶排序功能。请更新服务端后再调整置顶顺序。",
  "The pinned thread could not be moved.": "无法移动该置顶对话。",
  Settle: "完结",
  "Un-settle": "取消完结",
  Wake: "唤醒",
  Pin: "置顶",
  Unpin: "取消置顶",
  Snoozed: "暂缓",
  "Snooze until": "暂缓至",
  "Choose when to snooze": "选择何时暂缓",
  "That snooze time has passed. Choose another time.": "该暂缓时间已过，请重新选择。",
  "Collapses the snoozed threads.": "收起暂缓对话。",
  "Expands the snoozed threads.": "展开暂缓对话。",
  "1 snoozed thread": "1 个暂缓对话",
  "snoozed threads": "个暂缓对话",
  "Collapses the settled threads.": "收起已完结对话。",
  "Expands the settled threads.": "展开已完结对话。",
  "1 settled thread": "1 个已完结对话",
  "settled threads": "个已完结对话",
  "settled hidden": "个已完结对话已隐藏",
  "Opens the thread. Swipe left to": "打开对话。左滑可",
  "Opens the thread. Swipe left for": "打开对话。左滑可",
  " and snooze actions.": "和暂缓操作。",
};

const MOBILE_APPEND_UI_TEXT: Readonly<Record<string, string>> = {
  "Switch model": "切换模型",
  "Switch to plan mode": "切换到计划模式",
  "Switch to default mode": "切换到默认模式",
  "Loading messages...": "正在加载消息…",
  "Syncing messages...": "正在同步消息…",
  Commands: "命令",
  "Searching files…": "正在搜索文件…",
  "No skills found.": "未找到技能。",
  "No matching commands.": "没有匹配的命令。",
  "No results.": "没有结果。",
  Edits: "编辑",
  "Full access": "完全访问",
  Full: "完全",
  Runtime: "操作权限",
  "Hide legacy models": "隐藏其他模型",
  "Show legacy models": "显示其他模型",
  "Add Comment": "添加评论",
  "No selection": "未选择",
  "Select a diff line or range first.": "请先选择差异行或范围。",
  "File comment": "文件评论",
  "Leave a comment...": "留下评论…",
  "Partial diff": "部分差异",
  "Review unavailable": "审查不可用",
  "No review diffs": "没有可审查的差异",
  "This thread has no ready turn diffs and the worktree diff is empty.":
    "此对话没有可用的回合差异，且工作树差异为空。",
  "Loading diff…": "正在加载差异…",
  "No changes": "没有更改",
  "This diff is empty.": "此差异为空。",
  "Select diff": "选择差异",
  "Back to chat": "返回对话",
  "Hide changed files": "隐藏更改的文件",
  "Sort by archived date": "按归档日期排序",
  "Could not load every archive": "无法加载所有归档",
  "Filter and sort archived threads": "筛选并排序已归档对话",
  "Refresh archived threads": "刷新已归档对话",
  "Open git controls": "打开 Git 控制",
  "Go to threads list": "前往对话列表",
  "No conversation yet": "尚无对话",
  "Ask the agent to inspect the repo, run a command, or continue the active thread.":
    "让智能体检查仓库、运行命令，或继续当前对话。",
  "Could not load conversation": "无法加载对话",
  "Messages not cached": "消息未缓存",
  "This thread was deleted or is no longer available.": "此对话已被删除或不再可用。",
  "Reconnect this environment to load the conversation.": "重新连接此环境以加载对话。",
  "This thread is not available in the current mobile snapshot.": "当前移动快照中无法使用此对话。",
  "Try another search or environment.": "尝试其他搜索或环境。",
  "Threads you archive will appear here.": "您归档的对话将显示在这里。",
  "Try again": "重试",
  "Start or reconnect an environment before adding a project.":
    "添加项目前，请先启动或重新连接环境。",
  "Project already exists": "项目已存在",
  "Lookup repository": "查找仓库",
  "Browse folders": "浏览文件夹",
  Clone: "克隆",
  "No environments connected yet.": "还没有连接任何环境。",
  Tap: "点击",
  "to add one.": "即可添加一个。",
  "Invalid QR code": "无效的二维码",
  "Scan QR Code": "扫描二维码",
  "Close scanner": "关闭扫描器",
  "Scan QR code": "扫描二维码",
  "Camera permission is required to scan a QR code.": "扫描二维码需要相机权限。",
  "Allow camera access to scan an environment pairing QR code.":
    "允许访问相机以扫描环境配对二维码。",
  "Scanned QR code was not recognized.": "未能识别扫描的二维码。",
  Host: "主机",
  "Retry now": "立即重试",
  " Trace ID: ": " 追踪 ID：",
  "The app will keep retrying automatically.": "应用将持续自动重试。",
  "Sign in to your T3 account to set up T3 Connect.": "登录你的 T3 账户以设置 T3 Connect。",
  "Native terminal unavailable. Using text fallback.": "原生终端不可用，正在使用文本回退。",
  "Open terminal to start a shell.": "打开终端以启动 Shell。",
  "type and press return": "输入并按回车",
  "Native Ghostty surface": "原生 Ghostty 界面",
  "Terminal unavailable": "终端不可用",
  "this workspace": "此工作区",
  "Dismiss keyboard": "收起键盘",
  "Show keyboard": "显示键盘",
  "Decrease terminal text size": "减小终端文字大小",
  "Increase terminal text size": "增大终端文字大小",
  "Files unavailable": "文件不可用",
  "This thread does not have an active workspace path.": "此对话没有活跃的工作区路径。",
  "This file path is invalid.": "此文件路径无效。",
  "No files found": "未找到文件",
  "Try a different search.": "尝试其他搜索。",
  "The workspace file index is empty.": "工作区文件索引为空。",
  "Maximize files": "最大化文件",
  "Hide file navigator": "隐藏文件导航",
  "Open in Safari": "在 Safari 中打开",
  "Plain text": "纯文本",
  Text: "文本",
  "Code & Diffs": "代码与差异",
  Increase: "增大",
  Decrease: "减小",
  Environment: "环境",
  "Partial file": "部分文件",
  "Preview limited to the first 1 MB of a truncated file.": "预览限于被截断文件的前 1 MB。",
  "This terminal route needs an active thread and workspace.": "此终端路由需要活跃的对话和工作区。",
  "This thread does not have a workspace root yet, so there is nowhere to open a shell.":
    "此对话还没有工作区根目录，因此无处打开 Shell。",
};

const UI_TEXT_ALL: Readonly<Record<string, string>> = {
  ...UI_TEXT,
  ...T3_UI_TEXT,
  ...EXTRA_UI_TEXT,
  ...MOBILE_APPEND_UI_TEXT,
};

const TOOL_CALL_VERBS_ZH: Record<string, string> = {
  Ran: "已运行",
  Running: "正在运行",
  Read: "已读取",
  Reading: "正在读取",
  Searched: "已搜索",
  Searching: "正在搜索",
  Listed: "已列出",
  Listing: "正在列出",
  Found: "已找到",
  Finding: "正在查找",
  Removed: "已删除",
  Removing: "正在删除",
  Copied: "已复制",
  Copying: "正在复制",
  Moved: "已移动",
  Moving: "正在移动",
  Edited: "已编辑",
  Checked: "已检查",
  Checking: "正在检查",
  Compared: "已比较",
  Comparing: "正在比较",
  Inspected: "已检查",
  Inspecting: "正在检查",
  Reviewed: "已审阅",
  Reviewing: "正在审阅",
  Staged: "已暂存",
  Staging: "正在暂存",
  Committed: "已提交",
  Committing: "正在提交",
  Pushed: "已推送",
  Pushing: "正在推送",
  Pulled: "已拉取",
  Pulling: "正在拉取",
  "Switched to": "已切换到",
  "Switching to": "正在切换到",
  Search: "搜索",
  Created: "已创建",
  Creating: "正在创建",
};

// Tool identifiers are intentionally kept in runtime payloads and links, but
// their visible timeline/card labels should read like normal Chinese UI.
const TOOL_IDENTIFIER_ZH: Readonly<Record<string, string>> = {
  Tool: "工具",
  get_app_state: "读取应用状态",
  mcp__kimi_cu__get_app_state: "读取应用状态",
  preview_open: "打开预览",
  preview_navigate: "导航预览",
  preview_resize: "调整预览大小",
  preview_set_appearance: "设置预览外观",
  preview_snapshot: "读取预览快照",
  mcp__t3_code__preview_snapshot: "读取预览快照",
  preview_status: "读取预览状态",
  mcp__t3_code__preview_status: "读取预览状态",
  preview_click: "点击预览",
  preview_type: "在预览中输入",
  preview_press: "在预览中按键",
  preview_scroll: "滚动预览",
  preview_evaluate: "执行预览脚本",
  preview_wait_for: "等待预览条件",
  preview_recording_start: "开始录制预览",
  preview_recording_stop: "停止录制预览",
  read_mcp_resource: "读取 MCP 资源",
  list_mcp_resources: "列出 MCP 资源",
  list_mcp_resource_templates: "列出 MCP 资源模板",
  mcp__node_repl__js: "运行 JavaScript（Node 内核）",
  exec_command: "运行终端命令",
  write_stdin: "轮询终端会话",
  apply_patch: "修改文件",
  web_search: "网页搜索",
  web__run: "网页搜索",
  "web.run": "网页搜索",
  mcp__kimi_cu__click: "点击界面",
  mcp__kimi_cu__set_value: "设置界面值",
  mcp__kimi_cu__type_text: "输入文字",
  mcp__kimi_cu__scroll: "滚动界面",
};

function translateToolIdentifier(value: string): string | null {
  return TOOL_IDENTIFIER_ZH[value] ?? null;
}
const WORKFLOW_TOOL_VERB_ZH: Record<string, string> = {
  search: "搜索",
  list: "列出",
  get: "获取",
  call: "调用",
  read: "读取",
  write: "写入",
  create: "创建",
  update: "更新",
  delete: "删除",
  fetch: "获取",
  run: "运行",
  execute: "执行",
  find: "查找",
  grep: "搜索",
  glob: "匹配",
};

const COMMAND_TARGET_PHRASE_ZH: Record<string, string> = {
  files: "文件",
  file: "文件",
  directory: "目录",
  "current directory": "当前目录",
  "parent directory": "父目录",
  changes: "更改",
  commit: "提交",
  branch: "分支",
  "git status": "git 状态",
  "git history": "git 历史",
  "to remote": "到远程",
  "from remote": "从远程",
  AppleScript: "AppleScript",
  "bun script": "bun 脚本",
  "node script": "node 脚本",
  "python script": "python 脚本",
  "deno script": "deno 脚本",
  "ruby script": "ruby 脚本",
  "perl script": "perl 脚本",
  tools: "工具",
  tool: "工具",
  agents: "智能体",
  agent: "智能体",
  subagents: "子智能体",
  subagent: "子智能体",
};

function translateCommandTargetPhrase(value: string): string {
  const exact = COMMAND_TARGET_PHRASE_ZH[value];
  if (exact) return exact;
  let match = /^for (.+) in (.+)$/i.exec(value);
  if (match) return `搜索 ${match[1]}（于 ${match[2]}）`;
  match = /^for (.+)$/i.exec(value);
  if (match) return `搜索 ${match[1]}`;
  match = /^in (.+)$/i.exec(value);
  if (match) return `于 ${match[1]}`;
  match = /^(\d+) lines?$/i.exec(value);
  if (match) return `${match[1]} 行`;
  match = /^(\d+) files?$/i.exec(value);
  if (match) return `${match[1]} 个文件`;
  match = /^(\d+) subagents?$/i.exec(value);
  if (match) return `${match[1]} 个子智能体`;
  return value;
}

function translateWorkflowToolObjectPhrase(value: string): string {
  const normalized = value.trim();
  if (!normalized) return value;
  const exact = UI_TEXT_ALL[normalized] ?? COMMAND_TARGET_PHRASE_ZH[normalized];
  if (exact) return exact;
  const availableMatch = /^available (.+)$/i.exec(normalized);
  if (availableMatch) return `可用${translateWorkflowToolObjectPhrase(availableMatch[1] ?? "")}`;
  const allMatch = /^all (.+)$/i.exec(normalized);
  if (allMatch) return `全部${translateWorkflowToolObjectPhrase(allMatch[1] ?? "")}`;
  const tokens = normalized.split(/\s+/);
  if (tokens.length === 1) return UI_TEXT_ALL[tokens[0]!] ?? tokens[0]!;
  return tokens
    .map((token) => {
      const lower = token.toLowerCase();
      if (lower === "mcp") return "MCP";
      return UI_TEXT_ALL[token] ?? COMMAND_TARGET_PHRASE_ZH[lower] ?? token;
    })
    .join(" ");
}

function translateAnsweredQuestionsChrome(value: string): string | null {
  let match = /^Question User has answered your questions:\s*(.*)$/s.exec(value);
  if (match) {
    const answer = (match[1] ?? "").trim();
    return answer ? `提问：用户已回答你的问题：${answer}` : "提问：用户已回答你的问题";
  }
  match = /^User has answered your questions:\s*(.*)$/s.exec(value);
  if (match) {
    const answer = (match[1] ?? "").trim();
    return answer ? `用户已回答你的问题：${answer}` : "用户已回答你的问题";
  }
  return null;
}

function translateWorkflowToolTitle(value: string): string | null {
  const exact = UI_TEXT_ALL[value];
  if (exact) return exact;
  // Don't treat "User has answered…: \"…\"" as a tool title (`Label: "arg"`).
  if (translateAnsweredQuestionsChrome(value)) return null;
  // These compact lifecycle labels have a more natural completed-state form in
  // translateToolCallChrome ("已读取 42 行"), so leave them for that layer.
  if (/^Read \d+ (?:lines?|files?)$/i.test(value)) return null;
  let match = /^(.+?):\s*"(.+)"$/.exec(value);
  if (match) {
    const title = translateWorkflowToolTitle(match[1] ?? "") ?? match[1];
    return `${title}："${match[2]}"`;
  }
  match =
    /^(Search|List|Get|Call|Read|Write|Create|Update|Delete|Fetch|Run|Execute|Grep|Glob)\s+(.+)$/i.exec(
      value,
    );
  if (match) {
    const rest = match[2] ?? "";
    // Keep combobox/chrome copy intact — these share verb prefixes with tool titles.
    if (
      /\.\.\.|…/.test(value) ||
      /\bcheckout\b/i.test(rest) ||
      /\bbranches?\b/i.test(rest) ||
      /\bpull request\b/i.test(rest)
    ) {
      return null;
    }
    const verbZh = WORKFLOW_TOOL_VERB_ZH[match[1]!.toLowerCase()];
    const objectZh = translateWorkflowToolObjectPhrase(rest);
    if (verbZh) return `${verbZh}${/^[\u3400-\u9fff]/u.test(objectZh) ? "" : " "}${objectZh}`;
  }
  return null;
}

function translateT3CodeMcpFallbackChrome(value: string): string | null {
  let match = /^T3 Code is handling (.+)$/i.exec(value);
  if (match) return `T3 Code 正在处理 ${translateWorkflowToolObjectPhrase(match[1] ?? "")}`;
  match = /^T3 Code handled (.+)$/i.exec(value);
  if (match) return `T3 Code 已处理 ${translateWorkflowToolObjectPhrase(match[1] ?? "")}`;
  match = /^T3 Code couldn't handle (.+)$/i.exec(value);
  if (match) return `T3 Code 无法处理 ${translateWorkflowToolObjectPhrase(match[1] ?? "")}`;
  return null;
}

function translateWorkflowChrome(value: string): string | null {
  const toolTitle = translateWorkflowToolTitle(value);
  if (toolTitle) return toolTitle;

  const synaraFallback = translateT3CodeMcpFallbackChrome(value);
  if (synaraFallback) return synaraFallback;

  const commandTarget = translateCommandTargetPhrase(value);
  if (commandTarget !== value) return commandTarget;

  let match = /^Agent activity \((\d+)\)$/.exec(value);
  if (match) return `智能体活动（${match[1]}）`;

  match = /^Spawning (\d+) agents?$/.exec(value);
  if (match) return `正在启动 ${match[1]} 个智能体`;
  match = /^Waiting on (\d+) agents?$/.exec(value);
  if (match) return `正在等待 ${match[1]} 个智能体`;
  match = /^Closing (\d+) agents?$/.exec(value);
  if (match) return `正在关闭 ${match[1]} 个智能体`;
  match = /^Resuming (\d+) agents?$/.exec(value);
  if (match) return `正在恢复 ${match[1]} 个智能体`;
  match = /^Updating (\d+) agents?$/.exec(value);
  if (match) return `正在更新 ${match[1]} 个智能体`;

  match = /^Created automation: (.+)$/.exec(value);
  if (match) return `已创建自动化：${match[1]}`;
  match = /^Suggested automation: (.+)$/.exec(value);
  if (match) return `建议自动化：${match[1]}`;
  match = /^Created (\d+) T3 Code threads?$/.exec(value);
  if (match) return `已创建 ${match[1]} 个 T3 Code 对话`;

  match = /^(\d+) of (\d+) agents? running$/i.exec(value);
  if (match) return `${match[1]} / ${match[2]} 个智能体运行中`;
  match = /^(\d+) agents? running$/i.exec(value);
  if (match) return `${match[1]} 个智能体运行中`;
  match = /^(\d+) agents?$/i.exec(value);
  if (match) return `${match[1]} 个智能体`;
  match = /^(\d+) tool calls?$/i.exec(value);
  if (match) return `${match[1]} 次工具调用`;
  match = /^Every (\d+) hours?$/i.exec(value);
  if (match) return `每 ${match[1]} 小时`;
  match = /^Every (\d+) minutes?$/i.exec(value);
  if (match) return `每 ${match[1]} 分钟`;
  match = /^Every (\d+) min$/i.exec(value);
  if (match) return `每 ${match[1]} 分钟`;
  match = /^Every (\d+) sec(?:onds?)?$/i.exec(value);
  if (match) return `每 ${match[1]} 秒`;
  match = /^Every (\d+)h$/i.exec(value);
  if (match) return `每 ${match[1]} 小时`;
  match = /^Every (\d+)m$/i.exec(value);
  if (match) return `每 ${match[1]} 分钟`;
  match = /^Every (\d+)s$/i.exec(value);
  if (match) return `每 ${match[1]} 秒`;
  match = /^(\d+) runs?$/i.exec(value);
  if (match) return `${match[1]} 次运行`;
  match = /^New task in (.+)$/.exec(value);
  if (match) return `在 ${match[1]} 中新建任务`;
  match = /^Daily at (.+)$/i.exec(value);
  if (match) return `每天 ${match[1]}`;
  match = /^Weekdays at (.+)$/i.exec(value);
  if (match) return `工作日 ${match[1]}`;
  match = /^Cron (.+)$/i.exec(value);
  if (match) return `Cron ${match[1]}`;
  match = /^Next run now$/i.exec(value);
  if (match) return "即将运行";
  match = /^Next run in (\d+) minutes?$/i.exec(value);
  if (match) return `${match[1]} 分钟后运行`;
  match = /^Next run in (\d+) hours?$/i.exec(value);
  if (match) return `${match[1]} 小时后运行`;
  match = /^Next run in (\d+) days?$/i.exec(value);
  if (match) return `${match[1]} 天后运行`;
  match = /^in (\d+) minutes?$/i.exec(value);
  if (match) return `${match[1]} 分钟后`;
  match = /^in (\d+) hours?$/i.exec(value);
  if (match) return `${match[1]} 小时后`;
  match = /^in (\d+) days?$/i.exec(value);
  if (match) return `${match[1]} 天后`;
  match = /^in 1 minute$/i.exec(value);
  if (match) return "1 分钟后";
  match = /^in 1 hour$/i.exec(value);
  if (match) return "1 小时后";
  match = /^in 1 day$/i.exec(value);
  if (match) return "1 天后";

  match = /^Context compacted( manually| failed)?$/i.exec(value);
  if (match) {
    if (match[1] === " manually") return "上下文已手动压缩";
    if (match[1] === " failed") return "上下文压缩失败";
    return "上下文已压缩";
  }

  return null;
}

const LIVE_ACTIVITY_SUBJECT_ZH: Record<string, string> = {
  command: "命令",
  "file read": "文件读取",
  edit: "编辑",
  search: "搜索",
  agent: "智能体",
  tool: "工具",
};

function translateLiveActivitySubject(subject: string): string {
  return LIVE_ACTIVITY_SUBJECT_ZH[subject.toLowerCase()] ?? subject;
}

function translateLiveActivityLead(value: string): string | null {
  const match =
    /^(Starting|Running|Completed|Failed|Cancelled) (command|file read|edit|search|agent|tool)$/i.exec(
      value,
    );
  if (!match) return null;
  const verb = match[1]!.toLowerCase();
  const subjectZh = translateLiveActivitySubject(match[2] ?? "");
  switch (verb) {
    case "starting":
      return `正在开始${subjectZh}`;
    case "running":
      return `正在运行${subjectZh}`;
    case "completed":
      return `已完成${subjectZh}`;
    case "failed":
      return `${subjectZh}失败`;
    case "cancelled":
      return `已取消${subjectZh}`;
    default:
      return null;
  }
}

function translateRuntimeMessageBody(value: string): string {
  const runtimeError = translateRuntimeError(value);
  if (runtimeError) return runtimeError;

  const exact = UI_TEXT_ALL[value];
  if (exact) return exact;

  let match = /^(\d+) notices$/.exec(value);
  if (match) return `${match[1]} 条通知`;
  match = /^(\d+) notices - (.+)$/.exec(value);
  if (match) return `${match[1]} 条通知 — ${translateRuntimeMessageBody(match[2] ?? "")}`;
  match = /^Quarantined provider runtime event '(.+)' after a permanent journal failure\.$/.exec(
    value,
  );
  if (match) {
    return `永久性日志失败后，提供方运行时事件「${match[1]}」已被隔离。`;
  }
  match = /^Cannot connect to API: (.+)$/.exec(value);
  if (match) {
    const tail = translateRuntimeMessageBody(match[1] ?? "");
    return `无法连接 API：${tail}`;
  }

  return value;
}

function translateProviderTransportDetail(value: string): string {
  const detail = value
    .replace(
      /\s*For more information,?\s+pass `verbose: true` in the second argument to fetch\(\)\.?$/i,
      "",
    )
    .trim();

  const structuredMessageMatch = /^\{"message":"([^\"]+)"(?:,|\})/i.exec(detail);
  if (structuredMessageMatch) {
    const structuredMessage = translateProviderTransportDetail(structuredMessageMatch[1] ?? "");
    if (structuredMessage !== structuredMessageMatch[1]) return structuredMessage;
  }

  if (/^The socket connection was closed unexpectedly\b/i.test(detail)) {
    return "模型服务连接意外中断。请重试；若持续失败，请切换模型或检查网络/代理。";
  }
  if (/^upstream fetch failed after a credential-visible connection reset:/i.test(detail)) {
    return "上游服务重置了连接，当前无法连接。请检查网络、代理或登录状态后重试。";
  }
  if (/^Unable to connect\b/i.test(detail)) {
    return "无法连接到上游服务。请检查网络或代理后重试。";
  }
  if (/^unknown certificate verification error\.?$/i.test(detail)) {
    return "证书校验失败。请检查系统时间、代理证书或网络拦截。";
  }
  if (/^upstream stream ended without a terminal signal/i.test(detail)) {
    return "上游输出流提前结束，内容可能不完整。请重试；若持续失败，请切换模型。";
  }

  return detail;
}

function translateContextLengthError(value: string): string | null {
  if (
    /^Your input exceeds the context window of this model\. Please adjust your input and try again\.?$/i.test(
      value,
    )
  ) {
    return "你的输入超出了该模型的上下文窗口。请调整输入后重试。";
  }

  let match =
    /^Your input exceeds the context window of this model\.\s*(Please (?:adjust|reduce|shorten) .+?)\.?$/i.exec(
      value,
    );
  if (match) {
    const followUp = match[1]!.toLowerCase();
    return `你的输入超出了该模型的上下文窗口。${
      /^please adjust your input and try again$/i.test(followUp)
        ? "请调整输入后重试。"
        : "请缩短输入内容后重试。"
    }`;
  }

  match =
    /^This model(?:'s| has a) maximum context length (?:is|of) ([\d,]+) tokens?\.?\s*(?:However, )?(?:your messages|your input) (?:resulted in|contains|contained) ([\d,]+) tokens?\.?\s*(.+)?$/i.exec(
      value,
    );
  if (match) {
    const tail = match[3]?.trim();
    const suffix =
      tail && /^Please reduce the length of (?:the )?messages?\.?$/i.test(tail)
        ? "请缩短消息内容。"
        : "请缩短输入内容后重试。";
    return `此模型的最大上下文长度为 ${match[1]} Token，但你的输入共 ${match[2]} Token。${suffix}`;
  }

  match = /^maximum context length is ([\d,]+) tokens?\.?.*$/i.exec(value);
  if (match) return `最大上下文长度为 ${match[1]} Token。请缩短输入内容后重试。`;

  return null;
}

function translateStructuredErrorPayload(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed) as unknown;
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;

  const root = parsed as Record<string, unknown>;
  const nestedError = root.error;
  const payload =
    nestedError && typeof nestedError === "object" && !Array.isArray(nestedError)
      ? (nestedError as Record<string, unknown>)
      : root;
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (!message) return null;

  const translatedMessage = translateContextLengthError(message) ?? UI_TEXT_ALL[message] ?? message;
  const details: string[] = [];
  if (typeof payload.type === "string" && payload.type.trim()) {
    details.push(`类型：${payload.type.trim()}`);
  }
  if (typeof payload.code === "string" || typeof payload.code === "number") {
    details.push(`代码：${String(payload.code)}`);
  }

  if (translatedMessage === message) return null;
  return details.length > 0 ? `${translatedMessage}（${details.join("，")}）` : translatedMessage;
}

function translateRuntimeWarningChrome(value: string): string | null {
  let match = /^Runtime warning (.+)$/.exec(value);
  if (match) return `运行警告：${translateRuntimeMessageBody(match[1] ?? "")}`;
  match = /^OpenCode retrying (.+)$/.exec(value);
  if (match) return `OpenCode 正在重试：${translateRuntimeMessageBody(match[1] ?? "")}`;
  match = /^Kilo retrying (.+)$/.exec(value);
  if (match) return `Kilo 正在重试：${translateRuntimeMessageBody(match[1] ?? "")}`;
  return null;
}

function translateLiveActivitySegment(value: string): string {
  const runtimeMessage = translateRuntimeMessageBody(value);
  if (runtimeMessage !== value) return runtimeMessage;

  const runtimeWarning = translateRuntimeWarningChrome(value);
  if (runtimeWarning) return runtimeWarning;

  const liveLead = translateLiveActivityLead(value);
  if (liveLead) return liveLead;

  const workflowTitle = translateWorkflowToolTitle(value);
  if (workflowTitle && workflowTitle !== value) return workflowTitle;

  const commandTarget = translateCommandTargetPhrase(value);
  if (commandTarget !== value) return commandTarget;

  const exact = UI_TEXT_ALL[value];
  if (exact) return exact;

  let match = /^([\d][\d,.]*(?:\.\d+)?)(?:\s+)tok$/i.exec(value);
  if (match) return `${match[1]} Token`;
  match = /^(\d+) tools?$/i.exec(value);
  if (match) return `${match[1]} 个工具`;
  match = /^run (\d+)$/i.exec(value);
  if (match) return `运行 ${match[1]}`;
  match = /^(\d+) active$/i.exec(value);
  if (match) return `${match[1]} 个活跃`;
  match = /^(\d+) done$/i.exec(value);
  if (match) return `${match[1]} 个已完成`;
  if (value === "pending") return "待处理";
  if (value === "resumable") return "可恢复";

  match = /^(.+) elapsed$/.exec(value);
  if (match) {
    const duration = translateClockDurationLabel(match[1] ?? "") ?? match[1];
    return `${duration} 用时`;
  }
  match = /^Active (.+) ago$/.exec(value);
  if (match) {
    const duration = translateClockDurationLabel(match[1] ?? "") ?? match[1];
    return `${duration} 前活跃`;
  }
  match = /^No activity for (.+)$/.exec(value);
  if (match) {
    const duration = translateClockDurationLabel(match[1] ?? "") ?? match[1];
    return `${duration} 无活动`;
  }
  match = /^Task: (.+)$/.exec(value);
  if (match) {
    const taskLabel = UI_TEXT_ALL[match[1]!] ?? match[1];
    return `任务：${taskLabel}`;
  }
  const answeredQuestions = translateAnsweredQuestionsChrome(value);
  if (answeredQuestions) return answeredQuestions;
  match = /^(.+) \(default\)$/.exec(value);
  if (match) return `${UI_TEXT_ALL[match[1]!] ?? match[1]}（默认）`;
  if (value === " (default)") return "（默认）";

  return value;
}

function translateLiveActivityChrome(value: string): string | null {
  if (value.includes(" · ")) {
    const parts = value.split(" · ");
    const translated = parts.map((part) => translateLiveActivitySegment(part.trim()));
    if (translated.some((part, index) => part !== parts[index]?.trim())) {
      return translated.join(" · ");
    }
  }

  const segment = translateLiveActivitySegment(value);
  return segment !== value ? segment : null;
}

function translateCompactDurationZh(raw: string): string {
  return raw
    .replace(/(\d+)\s*d\b/gi, "$1天")
    .replace(/(\d+)\s*h\b/gi, "$1小时")
    .replace(/(\d+)\s*m\b/gi, "$1分钟")
    .replace(/(\d+)\s*s\b/gi, "$1秒")
    .replace(/<\s*1\s*m\b/gi, "不足1分钟")
    .replace(/\s+/g, "");
}

function trimCompactNumber(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
}

/** Keep AI-style English compact units (54k / 1m / 1.2bn). */
function preserveEnglishCompactAmount(numRaw: string, suffix: string): string {
  const unit = suffix.toLowerCase();
  if (unit === "bn" || unit === "b") return `${numRaw}bn`;
  if (unit === "m") return `${numRaw}m`;
  if (unit === "k") return `${numRaw}k`;
  return `${numRaw}${suffix}`;
}

/**
 * Convert English compact suffixes into 亿/万 for non-AI count surfaces.
 * 1m = 100万 (not 10万); 100k = 10万 (not 100千).
 */
function compactEnglishSuffixToZh(numRaw: string, suffix: string): string {
  const num = Number(numRaw.replace(/,/g, ""));
  if (!Number.isFinite(num)) return `${numRaw}${suffix}`;
  const unit = suffix.toLowerCase();
  if (unit === "bn" || unit === "b") return `${trimCompactNumber(num * 10)}亿`;
  if (unit === "m") {
    // 1,000,000 = 100万; prefer 亿 once we hit 100m+.
    return num >= 100 ? `${trimCompactNumber(num / 100)}亿` : `${trimCompactNumber(num * 100)}万`;
  }
  if (unit === "k") {
    return num >= 10 ? `${trimCompactNumber(num / 10)}万` : `${trimCompactNumber(num)}千`;
  }
  return `${numRaw}${suffix}`;
}

function translateRuntimeError(value: string): string | null {
  if (/^Runtime error$/i.test(value)) return "运行错误";

  if (
    /^(?:The )?selected model is at capacity\.\s*Please try (?:a )?different model\.?$/i.test(value)
  ) {
    return "所选模型当前容量已满，请尝试其他模型。";
  }

  const structuredError = translateStructuredErrorPayload(value);
  if (structuredError) return structuredError;

  const contextLengthError = translateContextLengthError(value);
  if (contextLengthError) return contextLengthError;

  let match = /^Provider unreachable:\s*(.*)$/i.exec(value);
  if (match) {
    const detail = translateProviderTransportDetail(match[1] ?? "");
    return detail ? `提供商无法连接：${detail}` : "提供商无法连接。请检查网络或代理后重试。";
  }

  match = /^Cannot connect to API:\s*(.+)$/i.exec(value);
  if (match) {
    return `无法连接 API：${translateProviderTransportDetail(match[1] ?? "")}`;
  }

  const directTransportDetail = translateProviderTransportDetail(value);
  if (directTransportDetail !== value) return directTransportDetail;

  match = /^stream disconnected before completion: error sending request for url \((.+)\)$/i.exec(
    value,
  );
  if (match) {
    return `流式连接在完成前断开：无法向请求地址发送请求（${match[1]}）`;
  }
  match = /^stream disconnected before completion: (.+)$/i.exec(value);
  if (match) return `流式连接在完成前断开：${match[1]}`;
  match = /^error sending request for url \((.+)\)$/i.exec(value);
  if (match) return `无法向请求地址发送请求（${match[1]}）`;
  match =
    /^unexpected status (\d+ [^:]+): upstream service temporarily unavailable, url: (.+), request id: (.+)$/i.exec(
      value,
    );
  if (match) {
    return `异常状态 ${match[1]}：上游服务暂时不可用，URL：${match[2]}，请求 ID：${match[3]}`;
  }

  match =
    /^The latest version of this model is only available hosted in China and requires explicit opt in:\s*(.+)$/i.exec(
      value,
    );
  if (match) {
    return `此模型的最新版本仅在中国区托管，需要先明确开启：${match[1]}`;
  }
  if (
    /^The latest version of this model is only available hosted in China and requires explicit opt in\.?$/i.test(
      value,
    )
  ) {
    return "此模型的最新版本仅在中国区托管，需要先明确开启。";
  }

  match = /^Thread is blocked by an earlier provider failure:\s*(.+)$/i.exec(value);
  if (match) {
    const detail = match[1] ?? "";
    const translatedDetail = UI_TEXT_ALL[detail] ?? detail;
    return `对话因先前的提供商失败而被阻塞：${translatedDetail}`;
  }

  match = /^Only the latest rollbackable user message can be edited and resent \((.+?)\)\.?$/i.exec(
    value,
  );
  if (match) {
    return `只能编辑并重发最新一条可回滚的用户消息（${match[1]}）。`;
  }

  match = /^Fast mode is (on|off)$/i.exec(value);
  if (match) {
    return match[1]!.toLowerCase() === "on" ? "快速模式已开启" : "快速模式已关闭";
  }
  match = /^Fast mode (enabled|disabled)$/i.exec(value);
  if (match) {
    return match[1]!.toLowerCase() === "enabled" ? "已开启快速模式" : "已关闭快速模式";
  }

  // Cursor/provider transport cancels and siblings (often mid-build / mid-turn interrupt).
  const retriableTranslated = translateRetriableTransportError(value);
  if (retriableTranslated) return retriableTranslated;

  const attachmentTranslated = translateComposerAttachmentError(value);
  if (attachmentTranslated) return attachmentTranslated;

  return null;
}

function translateComposerAttachmentError(value: string): string | null {
  let match = /^Unsupported file type for '(.+)'\. Please attach image files only\.$/i.exec(value);
  if (match) return `不支持的文件类型「${match[1]}」。请只附加图片文件。`;

  match = /^Unsupported file type for '(.+)'\.$/i.exec(value);
  if (match) return `不支持的文件类型「${match[1]}」。`;

  match = /^You can attach up to (\d+) images? per message\.$/i.exec(value);
  if (match) return `每条消息最多可附加 ${match[1]} 张图片。`;

  match = /^'(.+)' could not be read as an image\.$/i.exec(value);
  if (match) return `「${match[1]}」无法作为图片读取。`;

  match = /^'(.+)' is too large to attach, even after compression\.$/i.exec(value);
  if (match) return `「${match[1]}」过大，压缩后仍无法附加。`;

  match = /^'(.+)' exceeds the (\d+)\s*MB attachment limit\.$/i.exec(value);
  if (match) return `「${match[1]}」超过 ${match[2]} MB 附件上限。`;

  match = /^Failed to read '(.+)'\.$/i.exec(value);
  if (match) return `无法读取「${match[1]}」。`;

  match = /^'(.+)' is too large to drop into the composer as text\.$/i.exec(value);
  if (match) return `「${match[1]}」太大，无法作为文本拖入输入框。`;

  return null;
}

function translateHttp2StreamClosedDetail(detail: string): string | null {
  const cancelMatch = /^http\/2 stream closed with error code CANCEL\s*\(0x8\)$/i.exec(
    detail.trim(),
  );
  if (cancelMatch) return "HTTP/2 连接流被取消关闭";

  const codeMatch =
    /^http\/2 stream closed with error code ([A-Z_]+)\s*\((0x[0-9a-fA-F]+)\)$/i.exec(detail.trim());
  if (codeMatch) {
    return `HTTP/2 连接流已关闭（${codeMatch[1]} ${codeMatch[2]}）`;
  }

  if (/^http\/2 stream closed\b/i.test(detail.trim())) {
    return "HTTP/2 连接流已关闭";
  }

  return null;
}

function translateRetriableTag(tag: string): string {
  const normalized = tag.trim().toLowerCase();
  if (normalized === "canceled" || normalized === "cancelled") return "已取消";
  if (normalized === "aborted") return "已中止";
  if (normalized === "timeout" || normalized === "timed_out" || normalized === "timedout") {
    return "超时";
  }
  if (normalized === "unavailable") return "暂不可用";
  return tag.trim();
}

function translateRetriableTransportError(value: string): string | null {
  const trimmed = value.trim();

  // Exact common Cursor cancel — keep the short user-facing line.
  if (
    /^(?:Error:\s*)?RetriableError:\s*\[(?:canceled|cancelled)\]\s*http\/2 stream closed with error code CANCEL\s*\(0x8\)$/i.test(
      trimmed,
    ) ||
    /^http\/2 stream closed with error code CANCEL\s*\(0x8\)$/i.test(trimmed)
  ) {
    return "错误：网络请求连接中断。";
  }

  let match = /^(?:Error:\s*)?RetriableError:\s*\[([^\]]+)\]\s*(.+)$/i.exec(trimmed);
  if (match) {
    const tagZh = translateRetriableTag(match[1] ?? "");
    const detailRaw = (match[2] ?? "").trim();
    const detailZh =
      translateHttp2StreamClosedDetail(detailRaw) ?? translateProviderTransportDetail(detailRaw);
    if (detailZh && detailZh !== detailRaw) {
      return `错误：可重试失败（${tagZh}）：${detailZh}`;
    }
    return `错误：可重试失败（${tagZh}）：${detailRaw}`;
  }

  match = /^(?:Error:\s*)?RetriableError:\s*(.+)$/i.exec(trimmed);
  if (match) {
    const detailRaw = (match[1] ?? "").trim();
    const detailZh =
      translateHttp2StreamClosedDetail(detailRaw) ?? translateProviderTransportDetail(detailRaw);
    if (detailZh && detailZh !== detailRaw) {
      return `错误：可重试失败：${detailZh}`;
    }
    return `错误：可重试失败：${detailRaw}`;
  }

  const http2Only = translateHttp2StreamClosedDetail(trimmed);
  if (http2Only) return `错误：${http2Only}`;

  return null;
}

function translateUsageChrome(value: string): string | null {
  let match = /^(\d+(?:\.\d+)?)%\s+left$/i.exec(value);
  if (match) return `剩余 ${match[1]}%`;

  match = /^(\d+(?:\.\d+)?)%\s+in deficit$/i.exec(value);
  if (match) return `超进度 ${match[1]}%`;

  match = /^(\d+(?:\.\d+)?)%\s+in reserve$/i.exec(value);
  if (match) return `进度余裕 ${match[1]}%`;

  if (value === "Resets soon") return "即将重置";
  if (value === "Lasts until reset") return "可用至重置";
  if (value === "Limit reached") return "已达上限";

  match = /^Resets in (.+)$/i.exec(value);
  if (match) return `${translateCompactDurationZh(match[1] ?? "")}后重置`;

  match = /^Runs out in (.+)$/i.exec(value);
  if (match) return `约${translateCompactDurationZh(match[1] ?? "")}后用尽`;

  match = /^(\d+)\s+recent sessions?$/i.exec(value);
  if (match) return `最近 ${match[1]} 次会话`;

  // Token amounts stay in AI-domain English compact form (k/m/bn).
  match = /^([\d][\d,.]*(?:\.\d+)?)(bn|[kmBKM])\s+tokens$/i.exec(value);
  if (match) return `${preserveEnglishCompactAmount(match[1] ?? "", match[2] ?? "")} Token`;

  match = /^([\d][\d,.]*(?:\.\d+)?)(bn|[kmBKM])$/i.exec(value);
  if (match) return preserveEnglishCompactAmount(match[1] ?? "", match[2] ?? "");

  match = /^([\d][\d,.]*(?:\.\d+)?(?:亿|万|千)?)\s+tokens$/i.exec(value);
  if (match) return `${match[1]} Token`;

  if (value === "24h") return "24小时";
  if (value === "7d") return "7天";
  if (value === "30d") return "30天";
  if (value === "5h") return "5小时";
  if (value === "Weekly") return "每周";
  if (value === "Current") return "当前";

  return null;
}

function translateContextWindowTokenAmount(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  const compact = /^([\d][\d,.]*(?:\.\d+)?)(bn|[kmBKM])$/i.exec(trimmed);
  if (compact) {
    return preserveEnglishCompactAmount(compact[1] ?? "", compact[2] ?? "");
  }
  const withTokens =
    translateUsageChrome(`${trimmed} tokens`) ?? translateUsageChrome(trimmed) ?? trimmed;
  return withTokens.replace(/\s+tokens?$/i, "");
}

function translateContextWindowChrome(value: string): string | null {
  let match = /^Context window (\d+(?:\.\d+)?%)\s+used$/i.exec(value);
  if (match) return `上下文窗口已用 ${match[1]}`;

  match = /^Context window (.+) tokens used$/i.exec(value);
  if (match) {
    return `上下文窗口已用 ${translateContextWindowTokenAmount(match[1] ?? "")} Token`;
  }

  match = /^(.+)\s+context used$/i.exec(value);
  if (match) return `${translateContextWindowTokenAmount(match[1] ?? "")} 已用上下文`;

  match = /^(.+)\s+tokens used so far$/i.exec(value);
  if (match) {
    return `目前已用 ${translateContextWindowTokenAmount(match[1] ?? "")} Token`;
  }

  match = /^Model window:\s*(.+)\s+tokens$/i.exec(value);
  if (match) {
    return `模型窗口：${translateContextWindowTokenAmount(match[1] ?? "")} Token`;
  }

  match = /^Total processed:\s*(.+)\s+tokens$/i.exec(value);
  if (match) {
    return `累计处理：${translateContextWindowTokenAmount(match[1] ?? "")} Token`;
  }

  match = /^Session cost:\s*(.+)$/i.exec(value);
  if (match) return `会话费用：${match[1]}`;

  match = /^Current session:\s*(.+)$/i.exec(value);
  if (match) {
    const label = match[1] === "Unknown" ? "未知" : match[1];
    return `当前会话：${label}`;
  }

  match = /^Next turn:\s*(.+)$/i.exec(value);
  if (match) return `下轮对话：${match[1]}`;

  match = /^(.+): (.+) Click to change permissions\.$/.exec(value);
  if (match) {
    const label = UI_TEXT_ALL[match[1] ?? ""] ?? match[1];
    const description = UI_TEXT_ALL[match[2] ?? ""] ?? match[2];
    return `${label}：${description}${UI_TEXT_ALL["Click to change permissions."] ?? "点击修改权限。"}`;
  }

  return null;
}

function translateClockDurationText(raw: string): string {
  return raw
    .replace(/(\d+)h\b/g, "$1 小时")
    .replace(/(\d+)m\b/g, "$1 分")
    .replace(/(\d+(?:\.\d+)?)s\b/g, "$1 秒");
}

function translateClockDurationLabel(value: string): string | null {
  if (!/^[\d.\s]+(?:s|m|h)(?: [\d.\s]+(?:s|m|h)?)?$/u.test(value)) return null;
  return translateClockDurationText(value);
}

const PROFILE_SHORT_MONTHS: Record<string, string> = {
  Jan: "1月",
  Feb: "2月",
  Mar: "3月",
  Apr: "4月",
  May: "5月",
  Jun: "6月",
  Jul: "7月",
  Aug: "8月",
  Sep: "9月",
  Oct: "10月",
  Nov: "11月",
  Dec: "12月",
};

function translateProfileShortDate(value: string): string {
  const match = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})$/i.exec(value);
  if (!match) return value;
  const monthKey = match[1]!.charAt(0).toUpperCase() + match[1]!.slice(1).toLowerCase();
  const month = PROFILE_SHORT_MONTHS[monthKey];
  return month ? `${month}${match[2]}日` : value;
}

function translateProfileHourLabel(value: string): string | null {
  const match = /^(\d{1,2})\s+(AM|PM)$/i.exec(value);
  if (!match) return null;
  const hour = Number(match[1]);
  const period = match[2]!.toUpperCase();
  if (period === "AM") {
    if (hour === 12) return "凌晨 12 点";
    return `上午 ${hour} 点`;
  }
  if (hour === 12) return "中午 12 点";
  return `晚上 ${hour} 点`;
}

function translateProfileChrome(value: string): string | null {
  const hourLabel = translateProfileHourLabel(value);
  if (hourLabel) return hourLabel;

  let match = /^([\d,]+)\s+days?$/i.exec(value);
  if (match) return `${match[1]} 天`;

  match = /^(\d+)\s+runs?$/i.exec(value);
  if (match) return `${match[1]} 次`;

  match = /^([\d,]+)\s+runs?$/i.exec(value);
  if (match) return `${match[1]} 次`;

  match = /^(.+?) · ([\d,]+)\s+prompts?$/i.exec(value);
  if (match) return `${match[1]} · ${match[2]} 条提示`;

  const reasoningLevels = [
    "Minimal",
    "Low",
    "Medium",
    "High",
    "Extra High",
    "Max",
    "Maximum",
    "Ultra",
    "Ultrathink",
    "Ultracode",
  ] as const;
  for (const level of reasoningLevels) {
    match = new RegExp(`^${level.replace(" ", "\\s+")} · ([\\d.]+%)$`, "i").exec(value);
    if (match) {
      const label = UI_TEXT_ALL[level] ?? level;
      return `${label} · ${match[1]}`;
    }
  }

  match = /^No prompts? on (.+)$/i.exec(value);
  if (match) return `${translateProfileShortDate(match[1] ?? "")} 无提示`;

  match = /^No tokens? on (.+)$/i.exec(value);
  if (match) return `${translateProfileShortDate(match[1] ?? "")} 无用量`;

  match = /^([\d.,]+(?:\.\d+)?)(bn|[kmBKM]|亿|万|千)?\s+prompts? on (.+)$/i.exec(value);
  if (match) {
    const count = match[2]
      ? /[亿万千]/u.test(match[2])
        ? `${match[1]}${match[2]}`
        : compactEnglishSuffixToZh(match[1] ?? "", match[2] ?? "")
      : (match[1] ?? "");
    return `${count} 条提示 · ${translateProfileShortDate(match[3] ?? "")}`;
  }

  match = /^([\d.,]+(?:\.\d+)?)(bn|[kmBKM]|亿|万|千)?\s+tokens? on (.+)$/i.exec(value);
  if (match) {
    const count = match[2]
      ? /[亿万千]/u.test(match[2])
        ? `${match[1]}${match[2]}`
        : preserveEnglishCompactAmount(match[1] ?? "", match[2] ?? "")
      : (match[1] ?? "");
    return `${count} Token · ${translateProfileShortDate(match[3] ?? "")}`;
  }

  return null;
}

function translateSpaceChrome(value: string): string | null {
  let match = /^Delete [“"](.+?)[”"]\?$/.exec(value);
  if (match) return `删除「${match[1]}」？`;

  match = /^(\d+) projects? will move to Void\.$/.exec(value);
  if (match) return `${match[1]} 个项目将移至 Void。`;

  match = /^Move projects to (.+)$/.exec(value);
  if (match) return `移动项目到 ${match[1]}`;

  match = /^Every project is already in (.+)\.$/.exec(value);
  if (match) {
    const place = match[1] === "this space" ? "此空间" : match[1];
    return `所有项目已在 ${place} 中。`;
  }

  match = /^Move (\d+) projects?$/.exec(value);
  if (match) return `移动 ${match[1]} 个项目`;

  match =
    /^(\d+) could not be moved\. Projects processed before the failure remain in (.+)\. Try again\.$/.exec(
      value,
    );
  if (match) {
    const place = match[2] === "the target space" ? "目标空间" : match[2];
    return `${match[1]} 个项目未能移动。失败前已处理的项目仍留在 ${place}。请重试。`;
  }

  match = /^Switch to (.+)$/.exec(value);
  if (match) {
    const target = match[1] ?? "";
    if (
      !target.startsWith("the next") &&
      !target.startsWith("the previous") &&
      target !== "chat view"
    ) {
      return `切换到 ${target}`;
    }
  }

  return null;
}

function translateMcpToolLabel(value: string): string | null {
  const match = /^MCP:\s*(.+)$/i.exec(value);
  if (!match) {
    return null;
  }
  const toolPart = match[1]?.trim() ?? "";
  if (!toolPart) {
    return "MCP:";
  }
  if (/^tool$/i.test(toolPart)) {
    return "MCP: 工具";
  }
  const toolIdentifierLabel = translateToolIdentifier(toolPart);
  if (toolIdentifierLabel) {
    return `MCP：${toolIdentifierLabel}`;
  }
  const exact = UI_TEXT_ALL[toolPart];
  if (exact) {
    return `MCP: ${exact}`;
  }
  return `MCP 工具：${toolPart}`;
}

function translateToolCallChrome(value: string): string | null {
  const numberedToolHeaderMatch = /^([0-9]+)\/([0-9]+)([A-Za-z][A-Za-z0-9_.:-]*)(?:\s+.*)?$/.exec(
    value.trim(),
  );
  if (numberedToolHeaderMatch) {
    const toolLabel = translateToolIdentifier(numberedToolHeaderMatch[3] ?? "");
    if (toolLabel) {
      return `第 ${numberedToolHeaderMatch[1]}/${numberedToolHeaderMatch[2]} 步：${toolLabel}`;
    }
  }

  const namespacedToolMatch = /^(.+)__([A-Za-z][A-Za-z0-9_.:-]*)$/.exec(value.trim());
  if (namespacedToolMatch) {
    const toolLabel = translateToolIdentifier(namespacedToolMatch[2] ?? "");
    if (toolLabel) {
      return `${namespacedToolMatch[1]}__${toolLabel}`;
    }
  }

  const toolCardMatch = /^(.+?)\s*·\s*([A-Za-z][A-Za-z0-9_.:-]*)$/.exec(value.trim());
  if (toolCardMatch) {
    const toolLabel = translateToolIdentifier(toolCardMatch[2] ?? "");
    if (toolLabel) {
      return `${toolCardMatch[1]} · ${toolLabel}`;
    }
  }

  const directToolLabel = translateToolIdentifier(value.trim());
  if (directToolLabel) return directToolLabel;

  const workflowTitle = translateWorkflowToolTitle(value);
  if (workflowTitle && workflowTitle !== value) return workflowTitle;

  if (value.includes(", ")) {
    const parts = value.split(", ");
    const translated = parts.map((part) => translateToolCallChrome(part) ?? part);
    if (translated.some((part, index) => part !== parts[index])) {
      return translated.join("，");
    }
  }

  const mcpToolLabel = translateMcpToolLabel(value);
  if (mcpToolLabel) {
    return mcpToolLabel;
  }

  if (
    /^(functions\.exec|web(?:__run|\.run)|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|mcp__node_repl__js)$/i.test(
      value,
    )
  ) {
    return `工具调用：${value}`;
  }

  let match = /^Ran command\s+(.+)$/.exec(value);
  if (match) return `已运行命令 ${match[1]}`;
  match = /^Running command\s+(.+)$/.exec(value);
  if (match) return `正在运行命令 ${match[1]}`;

  // Codex/OpenCodex search tools: "Web search:" / "X search: query"
  match = /^(Web search|X search):\s*(.*)$/.exec(value);
  if (match) {
    const kind = match[1] === "X search" ? "X 搜索" : "网页搜索";
    const query = (match[2] ?? "").trim();
    return query.length > 0 ? `${kind}: ${query}` : `${kind}:`;
  }

  match = /^Read (\d+) lines?$/.exec(value);
  if (match) return `已读取 ${match[1]} 行`;
  match = /^Grep (.+)$/.exec(value);
  if (match) return `搜索 ${match[1]}`;
  match = /^(\d+) files? found( \(truncated\))?$/.exec(value);
  if (match) return `找到 ${match[1]} 个文件${match[2] ? "（已截断）" : ""}`;

  match = /^Ran (\d+) commands?$/.exec(value);
  if (match) return `已运行 ${match[1]} 条命令`;
  match = /^Edited (\d+) files?$/.exec(value);
  if (match) return `已编辑 ${match[1]} 个文件`;
  match = /^Read (\d+) files?$/.exec(value);
  if (match) return `已读取 ${match[1]} 个文件`;
  match = /^Searched (\d+) files?$/.exec(value);
  if (match) return `已搜索 ${match[1]} 个文件`;
  match = /^Ran (\d+) agent tasks?$/.exec(value);
  if (match) return `已运行 ${match[1]} 个智能体任务`;
  match = /^Used (\d+) tools?$/.exec(value);
  if (match) return `已使用 ${match[1]} 个工具`;
  match = /^Ran (\d+) tool calls?$/.exec(value);
  if (match) return `已运行 ${match[1]} 次工具调用`;
  match = /^(\d+) other tool calls?$/.exec(value);
  if (match) return `${match[1]} 次其他工具调用`;
  match = /^\+(\d+) more tool calls?$/.exec(value);
  if (match) return `+${match[1]} 更多工具调用`;
  match = /^(\d+) files?$/.exec(value);
  if (match) return `${match[1]} 个文件`;
  match = /^(\d+) subagents?$/.exec(value);
  if (match) return `${match[1]} 个子智能体`;
  match = /^Jump to visible thread (\d+)$/.exec(value);
  if (match) return `跳到可见对话 ${match[1]}`;
  match = /^(.+) setup script$/.exec(value);
  if (match) return `${match[1]} setup 脚本`;

  const verbs = Object.keys(TOOL_CALL_VERBS_ZH).sort((a, b) => b.length - a.length);
  for (const verb of verbs) {
    const zh = TOOL_CALL_VERBS_ZH[verb]!;
    if (value === verb) return zh;
    if (!value.startsWith(`${verb} `)) continue;
    const rest = value.slice(verb.length + 1);
    const translatedRest = translateCommandTargetPhrase(rest);
    // Avoid mangling UI chrome like "Search settings..." — only rewrite tool targets.
    const looksLikeToolTarget =
      translatedRest !== rest ||
      /[/~]/.test(rest) ||
      /\.[A-Za-z0-9]{1,8}\b/.test(rest) ||
      /^(?:cd|ls|rg|grep|find|cat|git|npm|bun|node|deno|python3?|ruby|perl|sleep|curl|wget|mkdir|rm|cp|mv|echo|printf|zsh|bash|sh)\b/i.test(
        rest,
      ) ||
      /^(?:tools?|files?|directory|agents?|subagents?|mcp)$/i.test(rest) ||
      (verb !== "Search" && verb !== "Read" && verb !== "Edited");
    if (!looksLikeToolTarget) continue;
    return `${zh} ${translatedRest}`;
  }
  return null;
}

function translateDesktopUpdateChrome(value: string): string | null {
  let match = /^(\d+) out of (\d+) tasks completed$/.exec(value);
  if (match) return `已完成 ${match[1]} / ${match[2]} 项任务`;

  match = /^T3 Code (.+) is already the newest version\.$/.exec(value);
  if (match) return `T3 Code ${match[1]} 目前已是最新版本。`;

  match = /^You're up to date on (.+)\. Click to check again\.$/.exec(value);
  if (match) return `当前版本 ${match[1]} 已是最新，点击可再次检查。`;

  match = /^You're already on the latest version \((.+)\)\.$/.exec(value);
  if (match) return `当前已是最新版本（${match[1]}）。`;

  match = /^Preparing update \((\d+)%\)$/.exec(value);
  if (match) return `正在准备更新（${match[1]}%）`;

  match = /^Preparing update (.+)$/.exec(value);
  if (match) return `正在准备更新 ${match[1]}`;

  match = /^Update (.+) is ready\. Click to restart and install\.$/.exec(value);
  if (match) return `更新 ${match[1]} 已就绪，点击即可重启并安装。`;

  match = /^T3 Code restarted, but update (.+) was not installed\. Click to try again\.$/.exec(
    value,
  );
  if (match) return `T3 Code 已重启，但更新 ${match[1]} 未能安装，点击重试。`;

  match = /^Could not prepare update (.+)\. Click to retry\.$/.exec(value);
  if (match) return `无法准备更新 ${match[1]}，点击重试。`;

  match = /^Could not install update (.+)\. Click to retry\.$/.exec(value);
  if (match) return `无法安装更新 ${match[1]}，点击重试。`;

  return null;
}

function translateProviderUpdateDurationPhrase(value: string): string {
  let match = /^(\d+) milliseconds?$/.exec(value);
  if (match) return `${match[1]} 毫秒`;
  match = /^(\d+) minutes?$/.exec(value);
  if (match) return `${match[1]} 分钟`;
  match = /^(\d+) seconds?$/.exec(value);
  if (match) return `${match[1]} 秒`;
  return value;
}

function translateProviderUpdateReason(reason: string): string {
  const exact = UI_TEXT_ALL[reason];
  if (exact) return exact;

  let match = /^Update timed out after (.+)\. The provider process was stopped\.$/.exec(reason);
  if (match) {
    return `更新超时（${translateProviderUpdateDurationPhrase(match[1]!)}），已停止提供商进程。`;
  }
  match = /^(.+) update timed out after (.+)\.$/.exec(reason);
  if (match) {
    return `${match[1]} 更新超时（${translateProviderUpdateDurationPhrase(match[2]!)}）。`;
  }
  match = /^Update command exited with code (\d+)\.$/.exec(reason);
  if (match) return `更新命令以代码 ${match[1]} 退出。`;

  return reason;
}

function translateProviderUpdateSegment(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return value;

  const exact = UI_TEXT_ALL[trimmed];
  if (exact) return exact;

  let match = /^(.+): (.+)$/.exec(trimmed);
  if (match && !trimmed.includes("://")) {
    const reason = translateProviderUpdateReason(match[2]!);
    if (reason !== match[2]) return `${match[1]}：${reason}`;
  }

  match = /^(.+) update available$/.exec(trimmed);
  if (match) return `${match[1]} 有可用更新`;
  match = /^(\d+) provider updates available$/.exec(trimmed);
  if (match) return `有 ${match[1]} 个提供商更新可用`;
  match = /^(.+) has a newer version available\.$/.exec(trimmed);
  if (match) return `${match[1]} 有新版本可用。`;
  match = /^(.+) and (\d+) more provider has newer versions available\.$/.exec(trimmed);
  if (match) return `${match[1]} 及其他 ${match[2]} 个提供商有新版本可用。`;
  match = /^(.+) and (\d+) more providers have newer versions available\.$/.exec(trimmed);
  if (match) return `${match[1]} 及其他 ${match[2]} 个提供商有新版本可用。`;
  match = /^Run (.+)$/.exec(trimmed);
  if (match) return `运行 ${match[1]}`;
  match = /^Latest (.+)$/.exec(trimmed);
  if (match) return `最新 ${match[1]}`;

  const reason = translateProviderUpdateReason(trimmed);
  if (reason !== trimmed) return reason;

  return trimmed;
}

function translateProviderUpdateChrome(value: string): string | null {
  if (value.includes("\n")) {
    const lines = value.split("\n");
    const translatedLines = lines.map((line) => {
      if (line.trim().length === 0) return line;
      const translated = translateProviderUpdateSegment(line);
      return translated !== line.trim() ? translated : line;
    });
    if (translatedLines.some((line, index) => line !== lines[index])) {
      return translatedLines.join("\n");
    }
    return null;
  }

  const translated = translateProviderUpdateSegment(value);
  return translated !== value ? translated : null;
}

function translateProviderHealthDetail(detail: string): string {
  const exact = UI_TEXT_ALL[detail];
  if (exact) return exact;
  return detail;
}

function translateProviderHealthChrome(value: string): string | null {
  let match = /^Checking (.+) availability(?:\.\.\.|…)$/i.exec(value);
  if (match) return `正在检查 ${match[1]} 可用性…`;

  match = /^(.+) ACP model discovery timed out after (\d+(?:\.\d+)?)\s*ms\.$/i.exec(value);
  if (match) return `${match[1]} ACP 模型发现在 ${match[2]} 毫秒后超时。`;
  match = /^(.+) ACP model discovery failed\.?$/i.exec(value);
  if (match) return `${match[1]} ACP 模型发现失败。`;
  match = /^(.+) ACP model discovery returned no built-in models\.?$/i.exec(value);
  if (match) return `${match[1]} ACP 模型发现未返回内置模型。`;
  match = /^Provider connect timeout after (\d+(?:\.\d+)?)\s*ms\.?$/i.exec(value);
  if (match) return `提供商连接在 ${match[1]} 毫秒后超时。`;
  match =
    /^(.+) Agent is authenticated, but model discovery timed out before T3 Code could verify available models\.$/i.exec(
      value,
    );
  if (match) {
    return `${match[1]} Agent 已通过认证，但模型发现超时，T3 Code 无法确认可用模型。`;
  }
  match = /^(.+) is unauthenticated$/i.exec(value);
  if (match) return `${match[1]} 未认证`;
  match = /^Dismiss (.+) provider (warning|error)$/i.exec(value);
  if (match)
    return `关闭 ${match[1]} 提供商${match[2]!.toLowerCase() === "warning" ? "警告" : "错误"}`;

  match = /^Could not verify (.+) authentication status\. (.+)$/.exec(value);
  if (match) {
    return `无法验证 ${match[1]} 认证状态。${translateProviderHealthDetail(match[2]!)}`;
  }
  match = /^Could not verify (.+) authentication status: (.+)\.$/.exec(value);
  if (match) return `无法验证 ${match[1]} 认证状态：${match[2]}。`;
  match = /^Could not verify (.+) authentication status\.$/.exec(value);
  if (match) return `无法验证 ${match[1]} 认证状态。`;
  match = /^(.+ CLI) is installed but failed to run\. (.+)$/.exec(value);
  if (match) {
    return `${match[1]} 已安装但运行失败。${translateProviderHealthDetail(match[2]!)}`;
  }
  match = /^(.+ CLI) is installed but failed to run\.$/.exec(value);
  if (match) return `${match[1]} 已安装但运行失败。`;
  match = /^(.+) is not authenticated\. Run `(.+)` and try again\.$/.exec(value);
  if (match) return `${match[1]} 未认证。请运行 \`${match[2]}\` 后重试。`;
  match = /^(.+) is installed, but T3 Code could not verify authentication status\.$/.exec(value);
  if (match) return `${match[1]} 已安装，但 T3 Code 无法验证认证状态。`;
  match = /^(.+) provider is unavailable\.$/.exec(value);
  if (match) return `${match[1]} 提供商不可用。`;
  match = /^(.+) provider has limited availability\.$/.exec(value);
  if (match) return `${match[1]} 提供商可用性受限。`;
  match = /^(.+) provider status$/.exec(value);
  if (match) return `${match[1]} 提供商状态`;
  match = /^Command exited with code (\d+)\.$/.exec(value);
  if (match) return `命令以代码 ${match[1]} 退出。`;
  return null;
}

function translateProviderAdapterError(value: string): string | null {
  let match =
    /^ProviderAdapterProcessError:\s*Provider adapter process error \(([^)]+)\) for thread ([\w-]+): session ([\w-]+) is archived\. Run `([^`]+)` to unarchive it first\.(?:\s*(.*))?$/i.exec(
      value,
    );
  if (match) {
    const tail = (match[6] ?? "").trim();
    return `提供商适配器进程错误（ProviderAdapterProcessError，${match[1]}）：对话 ${match[2]} 的会话 ${match[3]} 已归档。请先运行 \`${match[4]}\` 取消归档。${tail && !/^at\b/i.test(tail) ? ` ${tail}` : ""}`;
  }

  match = /^Provider adapter process error \(([^)]+)\) for thread ([\w-]+):\s*(.*)$/i.exec(value);
  if (match) {
    return `提供商适配器进程错误（${match[1]}），对话 ${match[2]}：${match[3]}`;
  }

  match =
    /^session ([\w-]+) is archived\. Run `([^`]+)` to unarchive it first\.(?:\s*(.*))?$/i.exec(
      value,
    );
  if (match) {
    const tail = (match[3] ?? "").trim();
    return `会话 ${match[1]} 已归档。请先运行 \`${match[2]}\` 取消归档。${tail && !/^at\b/i.test(tail) ? ` ${tail}` : ""}`;
  }

  return null;
}

export function translateExact(value: string): string {
  const runtimeTranslated = translateRuntimeError(value);
  if (runtimeTranslated) return runtimeTranslated;
  const backgroundPolicyMatch =
    /^Uses custom background intervals with the selected shared power policy\. Current shared policy: (.+)\.$/.exec(
      value,
    );
  if (backgroundPolicyMatch) {
    const policy = backgroundPolicyMatch[1] ?? "";
    return `使用所选共享电源策略的自定义后台间隔。当前共享策略：${UI_TEXT_ALL[policy] ?? policy}。`;
  }
  // Prefer exact dictionary hits before verb/chrome heuristics that can mangle phrases
  // like "Found something to review" → "已找到 something to review".
  const exactEarly = UI_TEXT_ALL[value];
  if (exactEarly) return exactEarly;
  const normalizedWhitespaceValue = value.replaceAll("\u00a0", " ");
  if (normalizedWhitespaceValue !== value) {
    const normalizedExact = UI_TEXT_ALL[normalizedWhitespaceValue];
    if (normalizedExact) return normalizedExact;
  }
  const automaticCompactionMatch = /^(.+) automatically compacts its context when needed\.$/.exec(
    value,
  );
  if (automaticCompactionMatch) {
    return `${automaticCompactionMatch[1]} 会在需要时自动压缩上下文。`;
  }
  const usageMultiplierMatch = /^(.+)\s+\((\d+)x usage\)$/i.exec(value);
  if (usageMultiplierMatch) {
    return `${usageMultiplierMatch[1]}（${usageMultiplierMatch[2]}倍用量）`;
  }
  let projectRenameMatch = /^Update the title for (.+)\.$/.exec(value);
  if (projectRenameMatch) return `更新 ${projectRenameMatch[1]} 的标题。`;
  if (value === "Update the project title.") return "更新项目标题。";
  const environmentDetailMatch = /^Environment:\s*(.+)$/.exec(value);
  if (environmentDetailMatch) return `环境：${environmentDetailMatch[1]}`;
  const providerAdapterError = translateProviderAdapterError(value);
  if (providerAdapterError) return providerAdapterError;
  let providerUiMatch = /^Choose custom accent color for (.+)$/i.exec(value);
  if (providerUiMatch) return `为 ${providerUiMatch[1]} 选择自定义强调色`;
  providerUiMatch = /^Clear accent color for (.+)$/i.exec(value);
  if (providerUiMatch) return `清除 ${providerUiMatch[1]} 的强调色`;
  const clearSizeMatch = /^Clear (.+)$/.exec(value);
  if (clearSizeMatch) return `清除 ${clearSizeMatch[1]}`;
  providerUiMatch = /^Select (#[0-9a-fA-F]{6}) color$/i.exec(value);
  if (providerUiMatch) return `选择 ${providerUiMatch[1]} 颜色`;
  providerUiMatch = /^Path to the (.+) agent binary\.$/i.exec(value);
  if (providerUiMatch) return `${providerUiMatch[1]} 智能体二进制文件路径。`;
  providerUiMatch = /^Override the (.+) API endpoint for this instance\.$/i.exec(value);
  if (providerUiMatch) return `覆盖此实例的 ${providerUiMatch[1]} API 端点。`;
  providerUiMatch = /^(.*?)(\d+) upstream providers? connected through (.+)\.$/i.exec(value);
  if (providerUiMatch) {
    return `${providerUiMatch[1]}已通过 ${providerUiMatch[3]} 连接 ${providerUiMatch[2]} 个上游提供商。`;
  }
  providerUiMatch = /^(\d+) models? available\.$/i.exec(value);
  if (providerUiMatch) return `${providerUiMatch[1]} 个可用模型。`;
  providerUiMatch = /^Details for (.+)$/i.exec(value);
  if (providerUiMatch) return `查看 ${providerUiMatch[1]} 详情`;
  providerUiMatch = /^Remove (.+) from favorites$/i.exec(value);
  if (providerUiMatch) return `从收藏中移除 ${providerUiMatch[1]}`;
  providerUiMatch = /^Add (.+) to favorites$/i.exec(value);
  if (providerUiMatch) return `将 ${providerUiMatch[1]} 添加到收藏`;
  providerUiMatch = /^Move (.+) up$/i.exec(value);
  if (providerUiMatch) return `将 ${providerUiMatch[1]} 上移`;
  providerUiMatch = /^Move (.+) down$/i.exec(value);
  if (providerUiMatch) return `将 ${providerUiMatch[1]} 下移`;
  providerUiMatch = /^Show (.+) in picker$/i.exec(value);
  if (providerUiMatch) return `在选择器中显示 ${providerUiMatch[1]}`;
  providerUiMatch = /^Hide (.+) from picker$/i.exec(value);
  if (providerUiMatch) return `在选择器中隐藏 ${providerUiMatch[1]}`;
  const showPreviousWorkEntriesMatch = /^Show (\d+) previous (tool calls?|log entr(?:y|ies))$/.exec(
    value,
  );
  if (showPreviousWorkEntriesMatch) {
    const noun = showPreviousWorkEntriesMatch[2]?.startsWith("tool") ? "工具调用" : "日志条目";
    return `显示 ${showPreviousWorkEntriesMatch[1]} 个${noun}`;
  }
  providerUiMatch = /^Show (.+)$/i.exec(value);
  if (
    providerUiMatch &&
    !/^(?:where\b|text\b|error\b|more\b|requests?\b)/i.test(providerUiMatch[1] ?? "")
  ) {
    return `显示 ${providerUiMatch[1]}`;
  }
  providerUiMatch = /^Hide (.+)$/i.exec(value);
  if (
    providerUiMatch &&
    !/^(?:where\b|text\b|error\b|more\b|requests?\b)/i.test(providerUiMatch[1] ?? "")
  ) {
    return `隐藏 ${providerUiMatch[1]}`;
  }
  providerUiMatch = /^Remove (.+)$/i.exec(value);
  if (providerUiMatch) return `移除 ${providerUiMatch[1]}`;
  providerUiMatch = /^Model slugs must be (\d+) characters or less\.$/i.exec(value);
  if (providerUiMatch) return `模型 slug 最多 ${providerUiMatch[1]} 个字符。`;
  if (/^!?[A-Za-z_][\w]*(?:\s*(?:&&|\|\|)\s*!?[A-Za-z_][\w]*)*$/.test(value)) {
    const translatedWhen = translateZhCnWhenExpression(value);
    if (translatedWhen !== value) return translatedWhen;
  }
  if (value === "just now") return "刚刚";
  if (value === "today") return "今天";
  if (value === "yesterday") return "昨天";
  const compactAgoLabelMatch = /^(\d+(?:\.\d+)?)\s*(s|m|h|d|w|mo|y)\s+ago$/i.exec(value);
  if (compactAgoLabelMatch) {
    const unit = compactAgoLabelMatch[2]!.toLowerCase();
    const unitZh: Record<string, string> = {
      s: "秒",
      m: "分钟",
      h: "小时",
      d: "天",
      w: "周",
      mo: "个月",
      y: "年",
    };
    return `${compactAgoLabelMatch[1]}${unitZh[unit] ?? unit}前`;
  }
  const waitingConfigurationMatch = /^Waiting for (.+)'s configuration\.$/.exec(value);
  if (waitingConfigurationMatch) {
    return `等待 ${waitingConfigurationMatch[1]} 的配置。`;
  }
  const previousWorkEntriesMatch = /^\+(\d+) previous (tool calls?|log entr(?:y|ies))$/.exec(value);
  if (previousWorkEntriesMatch) {
    const noun = previousWorkEntriesMatch[2]?.startsWith("tool") ? "工具调用" : "日志条目";
    return `+${previousWorkEntriesMatch[1]} 个${noun}`;
  }
  const stoppedAfterMatch = /^You stopped after (.+)$/i.exec(value);
  if (stoppedAfterMatch) {
    return `已停止，运行 ${translateClockDurationText(stoppedAfterMatch[1] ?? "")}`;
  }
  const newThreadOnBranchMatch = /^New thread on (.+)$/i.exec(value);
  if (newThreadOnBranchMatch) return `在 ${newThreadOnBranchMatch[1]} 上新建对话`;
  const snoozePresetMatch =
    /^(In \d+ (?:minute|minutes|hour|hours|day|days|week|weeks)|This evening|Tomorrow|Next week) \((.+)\)$/i.exec(
      value,
    );
  if (snoozePresetMatch) {
    return `${translateExact(snoozePresetMatch[1] ?? "")}（${snoozePresetMatch[2]}）`;
  }
  if (value === "Wake thread") return "唤醒对话";
  if (value === "Regenerating…") return "正在重新生成标题…";
  const regenerateTitlesMatch = /^Regenerate titles \((\d+)\)$/i.exec(value);
  if (regenerateTitlesMatch) return `重新生成标题（${regenerateTitlesMatch[1]}）`;
  const regeneratingTitlesMatch = /^Regenerating… \((\d+)\)$/i.exec(value);
  if (regeneratingTitlesMatch) return `正在重新生成标题（${regeneratingTitlesMatch[1]}）`;
  const workEntryCountMatch = /^(\d+) log entries?$/i.exec(value);
  if (workEntryCountMatch) return `${workEntryCountMatch[1]} 个日志条目`;
  const themedModeMatch = /^Use (.+) (light|dark) mode$/i.exec(value);
  if (themedModeMatch) {
    const theme = UI_TEXT_ALL[themedModeMatch[1]!] ?? themedModeMatch[1];
    const mode = themedModeMatch[2]!.toLowerCase() === "light" ? "浅色" : "深色";
    return `使用${theme}${mode}模式`;
  }
  const themeModeMatch = /^Use (.+) mode$/.exec(value);
  if (themeModeMatch) {
    const mode =
      themeModeMatch[1] === "light"
        ? "浅色"
        : themeModeMatch[1] === "dark"
          ? "深色"
          : themeModeMatch[1];
    return `使用${mode}模式`;
  }
  const duplicateThemeMatch = /^Duplicate (.+)$/.exec(value);
  if (duplicateThemeMatch) return `复制 ${duplicateThemeMatch[1]} 主题`;
  const useForModeMatch = /^Use for (light|dark) mode only$/.exec(value);
  if (useForModeMatch) return `仅用于${useForModeMatch[1] === "light" ? "浅色" : "深色"}模式`;
  const keybindingCommandMatch =
    /^(Chat|Command Palette|Composer|Diff|Editor|File Picker|Model Picker|Preview|Project Search|Right Panel|Sidebar|Terminal|Theme Editor|Thread): (.+)$/.exec(
      value,
    );
  if (keybindingCommandMatch) {
    const group = {
      Chat: "对话",
      "Command Palette": "命令面板",
      Composer: "输入框",
      Diff: "差异",
      Editor: "编辑器",
      "File Picker": "文件选择器",
      "Model Picker": "模型选择器",
      Preview: "预览",
      "Project Search": "项目搜索",
      "Right Panel": "右侧面板",
      Sidebar: "侧边栏",
      Terminal: "终端",
      "Theme Editor": "主题编辑器",
      Thread: "对话",
    }[keybindingCommandMatch[1]!];
    const action = keybindingCommandMatch[2]!;
    const jumpMatch = /^Jump: (\d+)$/.exec(action);
    const actionZh = jumpMatch
      ? `跳转：${jumpMatch[1]}`
      : ({
          New: "新建",
          "New Local": "新建本地",
          Toggle: "切换",
          Stash: "暂存",
          "Open Favorite": "打开收藏",
          "Focus Url": "聚焦 URL",
          Refresh: "刷新",
          "Reset Zoom": "重置缩放",
          "Zoom In": "放大",
          "Zoom Out": "缩小",
          Close: "关闭",
          Split: "拆分",
          "Split Vertical": "垂直拆分",
          Next: "下一个",
          Previous: "上一个",
        }[action] ?? action);
    return `${group ?? keybindingCommandMatch[1]}：${actionZh}`;
  }
  const editShortcutMatch = /^Edit shortcut for (.+)$/.exec(value);
  if (editShortcutMatch) return `编辑快捷键：${translateExact(editShortcutMatch[1] ?? "")}`;
  const editWhenMatch = /^Edit when clause for (.+)$/.exec(value);
  if (editWhenMatch) return `编辑条件：${translateExact(editWhenMatch[1] ?? "")}`;
  const conflictMatch = /^Conflicts with (.+)\.$/.exec(value);
  if (conflictMatch) return `与${translateExact(conflictMatch[1] ?? "")}冲突。`;
  const checkedAgoMatch = /^Checked (.+) ago$/i.exec(value);
  if (checkedAgoMatch) {
    const rawDuration = checkedAgoMatch[1] ?? "";
    const duration =
      translateClockDurationLabel(rawDuration) ??
      ({ "just now": "刚刚", today: "今天", yesterday: "昨天" } as Record<string, string>)[
        rawDuration.toLowerCase()
      ] ??
      rawDuration;
    const compactDurationMatch = /^(\d+(?:\.\d+)?)\s*(s|m|h|d|w|mo|y)$/i.exec(rawDuration);
    if (compactDurationMatch) {
      const unit =
        {
          s: "秒",
          m: "分钟",
          h: "小时",
          d: "天",
          w: "周",
          mo: "个月",
          y: "年",
        }[compactDurationMatch[2]!.toLowerCase()] ?? compactDurationMatch[2];
      return `已检查 ${compactDurationMatch[1]}${unit}前`;
    }
    return `已检查 ${duration}前`;
  }
  const checkedRelativeMatch = /^Checked (just now|today|yesterday)$/i.exec(value);
  if (checkedRelativeMatch) {
    const relativeLabel =
      {
        "just now": "刚刚",
        today: "今天",
        yesterday: "昨天",
      }[checkedRelativeMatch[1]!.toLowerCase()] ?? checkedRelativeMatch[1];
    return `已检查${relativeLabel}`;
  }
  const averageCpuMatch = /^Average CPU ([\d.]+)%, peak CPU ([\d.]+)%$/.exec(value);
  if (averageCpuMatch) return `CPU 平均值 ${averageCpuMatch[1]}%，峰值 ${averageCpuMatch[2]}%`;
  const averageCpuShortMatch = /^Avg ([\d.]+)%, peak ([\d.]+)%$/.exec(value);
  if (averageCpuShortMatch)
    return `平均值 ${averageCpuShortMatch[1]}%，峰值 ${averageCpuShortMatch[2]}%`;
  const cpuAverageShortMatch = /^CPU avg ([\d.]+)%$/.exec(value);
  if (cpuAverageShortMatch) return `CPU 平均 ${cpuAverageShortMatch[1]}%`;
  const cpuPeakShortMatch = /^CPU peak ([\d.]+)%$/.exec(value);
  if (cpuPeakShortMatch) return `CPU 峰值 ${cpuPeakShortMatch[1]}%`;
  const readLinesMatch = /^Read (\d+) lines?$/i.exec(value);
  if (readLinesMatch) return `已读取 ${readLinesMatch[1]} 行`;
  const readFilesMatch = /^Read (\d+) files?$/i.exec(value);
  if (readFilesMatch) return `已读取 ${readFilesMatch[1]} 个文件`;
  const ioMetricMatch = /^(Read|Write) (.+)$/.exec(value);
  if (ioMetricMatch) return `${ioMetricMatch[1] === "Read" ? "读取" : "写入"} ${ioMetricMatch[2]}`;
  const accentColorMatch = /^Use (#[\da-f]{6}) accent$/i.exec(value);
  if (accentColorMatch) return `使用 ${accentColorMatch[1]} 强调色`;
  const collapseProcessMatch = /^(Collapse|Expand) (.+)$/.exec(value);
  if (collapseProcessMatch) {
    return `${collapseProcessMatch[1] === "Collapse" ? "收起" : "展开"}${collapseProcessMatch[2]}`;
  }
  const rootProcessMatch = /^Root process (.+)$/.exec(value);
  if (rootProcessMatch) return `${rootProcessMatch[1]} 根进程`;
  const gitVersionMatch = /^git version (.+)$/i.exec(value);
  if (gitVersionMatch) return `Git 版本 ${gitVersionMatch[1]}`;
  const authenticatedAsMatch = /^(.+) Authenticated as$/.exec(value);
  if (authenticatedAsMatch) return `${authenticatedAsMatch[1]} 已认证为`;
  const disabledProviderMatch = /^Disabled - (.+) is disabled in T3 Code settings\.$/.exec(value);
  if (disabledProviderMatch) {
    return `已禁用——${disabledProviderMatch[1]} 已在 T3 Code 设置中禁用。`;
  }
  const providerDisabledDetailMatch = /^(.+) is disabled in T3 Code settings\.$/.exec(value);
  if (providerDisabledDetailMatch) {
    return `${providerDisabledDetailMatch[1]} 已在 T3 Code 设置中禁用。`;
  }
  const toggleDetailsMatch = /^Toggle (.+) details$/.exec(value);
  if (toggleDetailsMatch) return `切换 ${toggleDetailsMatch[1]} 详情`;
  const toggleVisibilityMatch = /^Toggle (.+) visibility$/.exec(value);
  if (toggleVisibilityMatch) return `切换${toggleVisibilityMatch[1]}可见性`;
  const sourceControlAuthMatch =
    /^(.+) is not authenticated on this server\. Sign in or configure credentials using the (.+) tool on the server host to enable change request features\.$/.exec(
      value,
    );
  if (sourceControlAuthMatch) {
    return `${sourceControlAuthMatch[1]} 未在此服务器上认证。请在服务器主机上使用 ${sourceControlAuthMatch[2]} 工具登录或配置凭据，以启用变更请求功能。`;
  }
  const sourceControlVerifyMatch = /^Could not verify (.+)\. (.+)$/.exec(value);
  if (sourceControlVerifyMatch) {
    return `无法验证 ${sourceControlVerifyMatch[1]}：${sourceControlVerifyMatch[2]}`;
  }
  const appNavigationBackMatch = /^Back \((.+)\)$/.exec(value);
  if (appNavigationBackMatch) return `后退（${appNavigationBackMatch[1]}）`;
  const appNavigationForwardMatch = /^Forward \((.+)\)$/.exec(value);
  if (appNavigationForwardMatch) return `前进（${appNavigationForwardMatch[1]}）`;
  const deleteWorktreeMatch = /^Delete worktree "(.+)"\?$/.exec(value);
  if (deleteWorktreeMatch) return `删除工作树“${deleteWorktreeMatch[1]}”？`;
  const linkedWorktreeConversationsMatch =
    /^(\d+) active and (\d+) archived (?:conversation is|conversations are) linked to this worktree\.$/.exec(
      value,
    );
  if (linkedWorktreeConversationsMatch) {
    return `有 ${linkedWorktreeConversationsMatch[1]} 个进行中的对话和 ${linkedWorktreeConversationsMatch[2]} 个已归档对话关联到此工作树。`;
  }
  const removedWithArchivedConversationsMatch =
    /^(.+) was removed and (\d+) archived conversations? were deleted\.$/.exec(value);
  if (removedWithArchivedConversationsMatch) {
    return `${removedWithArchivedConversationsMatch[1]} 已移除，并删除了 ${removedWithArchivedConversationsMatch[2]} 个已归档对话。`;
  }
  const removedWorktreeMatch = /^(.+) was removed\.$/.exec(value);
  if (removedWorktreeMatch) return `${removedWorktreeMatch[1]} 已移除。`;
  if (value === "Updating providers...") return "正在更新提供商…";
  const activeSpaceLabelMatch = /^(.+) · Active$/.exec(value);
  if (activeSpaceLabelMatch) return `${activeSpaceLabelMatch[1]} · 当前`;
  const usageTranslated = translateUsageChrome(value);
  if (usageTranslated) return usageTranslated;
  const contextWindowTranslated = translateContextWindowChrome(value);
  if (contextWindowTranslated) return contextWindowTranslated;
  const desktopUpdateTranslated = translateDesktopUpdateChrome(value);
  if (desktopUpdateTranslated) return desktopUpdateTranslated;
  const providerHealthTranslated = translateProviderHealthChrome(value);
  if (providerHealthTranslated) return providerHealthTranslated;
  const answeredQuestionsTranslated = translateAnsweredQuestionsChrome(value);
  if (answeredQuestionsTranslated) return answeredQuestionsTranslated;
  const createBranchMatch = /^Create and checkout "(.+)"$/.exec(value);
  if (createBranchMatch) return `创建并切出「${createBranchMatch[1]}」`;
  const fromBranchMatch = /^From (.+)$/.exec(value);
  if (fromBranchMatch) {
    const exactFrom = UI_TEXT_ALL[value];
    if (exactFrom) return exactFrom;
    return `基于 ${fromBranchMatch[1]}`;
  }
  const projectPromptMatch = /^What should we do in (.+?)\s*\?$/.exec(value);
  if (projectPromptMatch) return `我们该在 ${projectPromptMatch[1]} 构建什么？`;
  const projectNameInMatch = /^Project name in (.+)$/i.exec(value);
  if (projectNameInMatch) return `${projectNameInMatch[1]} 中的项目名称`;
  const groupingRuleForMatch = /^Grouping rule for (.+)$/i.exec(value);
  if (groupingRuleForMatch) return `${groupingRuleForMatch[1]} 的分组规则`;
  if (value === "What should we build in") return "想在";
  const newThreadInProjectMatch = /^New thread in (.+)$/.exec(value);
  if (newThreadInProjectMatch) return `在 ${newThreadInProjectMatch[1]} 中新建对话`;
  if (value === "New thread in...") return "在项目中新建对话…";
  const threadActionsForMatch = /^Thread actions for (.+)$/.exec(value);
  if (threadActionsForMatch) return `对话操作：${threadActionsForMatch[1]}`;
  const toggleRightPanelMatch = /^Toggle right panel(?:\s*\(([^)]+)\))?$/.exec(value);
  if (toggleRightPanelMatch) {
    return `切换右侧面板${toggleRightPanelMatch[1] ? `（${toggleRightPanelMatch[1]}）` : ""}`;
  }
  const toggleRightPanelAgentsMatch =
    /^Toggle right panel(?:\s*\(([^)]+)\))?(?:,|\s·)?\s*(\d+)\s+agents?\s+working$/.exec(value);
  if (toggleRightPanelAgentsMatch) {
    const shortcut = toggleRightPanelAgentsMatch[1];
    const count = toggleRightPanelAgentsMatch[2];
    return `切换右侧面板${shortcut ? `（${shortcut}）` : ""} · ${count} 个智能体正在运行`;
  }
  if (value === "Choose a project first") return "请先选择一个项目";
  if (value === "This draft no longer points to an available project.") {
    return "此草稿已不再指向可用项目。";
  }
  const resetProviderSettingsMatch = /^Reset (.+) provider settings to default$/i.exec(value);
  if (resetProviderSettingsMatch) {
    return `将${resetProviderSettingsMatch[1]}提供商设置恢复为默认值`;
  }
  const resetSettingMatch = /^Reset (.+) to default$/.exec(value);
  if (resetSettingMatch) {
    const settingLabel = resetSettingMatch[1] ?? "";
    return `将${UI_TEXT_ALL[settingLabel] ?? settingLabel}恢复为默认值`;
  }
  const snoozeCountMenuMatch = /^Snooze \((\d+)\)$/i.exec(value);
  if (snoozeCountMenuMatch) return `暂缓（${snoozeCountMenuMatch[1]}）`;
  const snoozedUntilMatch = /^Snoozed until (.+)$/i.exec(value);
  if (snoozedUntilMatch) return `暂缓至 ${snoozedUntilMatch[1]}`;
  const snoozedSummaryMatch = /^Snoozed (\d+) of (\d+) threads?$/i.exec(value);
  if (snoozedSummaryMatch) {
    return `已暂缓 ${snoozedSummaryMatch[1]} / ${snoozedSummaryMatch[2]} 个对话`;
  }
  const snoozedThreadStateMatch = /^This thread is (snoozed|settled)$/i.exec(value);
  if (snoozedThreadStateMatch) {
    return snoozedThreadStateMatch[1]!.toLowerCase() === "snoozed"
      ? "此对话已暂缓"
      : "此对话已收起";
  }
  if (value === "Disabled -") return "已禁用——";
  const enableProviderMatch = /^Enable (Codex|Claude|Cursor|Grok|OpenCode)$/i.exec(value);
  if (enableProviderMatch) return `启用 ${enableProviderMatch[1]}`;
  const providerWizardDescriptionMatch =
    /^Configure an additional provider instance on\s+(.+?)\s+—\s+for example,\s+(.+)\.$/.exec(
      value,
    );
  if (providerWizardDescriptionMatch) {
    const example =
      providerWizardDescriptionMatch[2] ===
      "a second Codex install pointed at a different workspace"
        ? "安装第二个 Codex 并将其指向不同的工作区"
        : providerWizardDescriptionMatch[2];
    return `在 ${providerWizardDescriptionMatch[1]} 上配置额外的提供商实例——例如，${example}。`;
  }
  const providerWizardStepMatch =
    /^(Driver|Identity|Configuration|Config|配置),?\s*step\s*(\d+)$/i.exec(value);
  if (providerWizardStepMatch) {
    const label =
      providerWizardStepMatch[1]!.toLowerCase() === "driver"
        ? "驱动"
        : providerWizardStepMatch[1]!.toLowerCase() === "identity"
          ? "身份"
          : "配置";
    return `${label}，第 ${providerWizardStepMatch[2]} 步`;
  }
  const providerWizardStepMixedMatch = /^(.+)[，,]\s*step\s*(\d+)$/i.exec(value);
  if (providerWizardStepMixedMatch) {
    return `${providerWizardStepMixedMatch[1]}，第 ${providerWizardStepMixedMatch[2]} 步`;
  }
  const healthBadgeMatch = /^(.+)\s+(healthy|starting|degraded|unavailable)$/i.exec(value);
  if (healthBadgeMatch) {
    const status = UI_TEXT_ALL[healthBadgeMatch[2]!.toLowerCase()] ?? healthBadgeMatch[2];
    return `${UI_TEXT_ALL[healthBadgeMatch[1]!] ?? healthBadgeMatch[1]} ${status}`;
  }
  const projectCheckoutThreadCountMatch =
    /^No git remote detected\s*·\s*(\d+) checkouts?\s*·\s*(\d+) threads?$/i.exec(value);
  if (projectCheckoutThreadCountMatch) {
    return `未检测到 Git 远程仓库 · ${projectCheckoutThreadCountMatch[1]} 个检出 · ${projectCheckoutThreadCountMatch[2]} 个对话`;
  }
  const simpleCountLabelMatch = /^(\d+) (models?|threads?|checkouts?|uses?|processes?)$/i.exec(
    value,
  );
  if (simpleCountLabelMatch) {
    const noun = simpleCountLabelMatch[2]!.toLowerCase();
    const nounZh = noun.startsWith("model")
      ? "个模型"
      : noun.startsWith("thread")
        ? "个对话"
        : noun.startsWith("checkout")
          ? "个检出"
          : noun.startsWith("process")
            ? "个进程"
            : "处使用";
    return noun.startsWith("model")
      ? `${simpleCountLabelMatch[1]}${nounZh}`
      : `${simpleCountLabelMatch[1]} ${nounZh}`;
  }
  const retainedCountMatch = /^(\d+)\/(\d+) retained$/i.exec(value);
  if (retainedCountMatch) return `${retainedCountMatch[1]}/${retainedCountMatch[2]} 已保留`;
  const pullRequestStateMatch = /^(.+) (open|closed|merged)$/i.exec(value);
  if (pullRequestStateMatch) {
    const state = pullRequestStateMatch[2]!.toLowerCase();
    const stateZh = state === "open" ? "已打开" : state === "closed" ? "已关闭" : "已合并";
    return `${pullRequestStateMatch[1]} ${stateZh}`;
  }
  const diagnosticDurationMatch =
    /^(\d+(?:\.\d+)?)\s*(milliseconds?|seconds?|minutes?|hours?)$/i.exec(value);
  if (diagnosticDurationMatch) {
    const unit = diagnosticDurationMatch[2]!.toLowerCase();
    const unitZh = unit.startsWith("millisecond")
      ? "毫秒"
      : unit.startsWith("second")
        ? "秒"
        : unit.startsWith("minute")
          ? "分钟"
          : "小时";
    return `${diagnosticDurationMatch[1]} ${unitZh}`;
  }
  const samplingEveryMatch = /^Sampling every\s+(.+)$/i.exec(value);
  if (samplingEveryMatch) {
    const interval = translateExact(samplingEveryMatch[1] ?? "");
    return `每 ${interval} 采样`;
  }
  const observedCpuTimeMatch = /^(.+) observed CPU time$/i.exec(value);
  if (observedCpuTimeMatch) {
    const duration = translateExact(observedCpuTimeMatch[1] ?? "");
    return `${duration}观测 CPU 时间`;
  }
  const combinedProcessPeaksMatch = /^(.+) combined process peaks$/i.exec(value);
  if (combinedProcessPeaksMatch) {
    return `${combinedProcessPeaksMatch[1]}进程峰值合计`;
  }
  const observedValueMatch = /^(.+) observed$/i.exec(value);
  if (observedValueMatch) return `${observedValueMatch[1]}观测值`;
  const processStartsExitsMatch = /^(\d+) starts?\s*·\s*(\d+) exits?$/i.exec(value);
  if (processStartsExitsMatch) {
    return `${processStartsExitsMatch[1]} 次启动 · ${processStartsExitsMatch[2]} 次退出`;
  }
  const thermalStateMatch = /^(.+) thermal state$/i.exec(value);
  if (thermalStateMatch) {
    const state = UI_TEXT_ALL[thermalStateMatch[1]!] ?? thermalStateMatch[1];
    return `${state} 温度状态`;
  }
  const themeUsageMatch = /^(Show|Hide) (.+) usage$/i.exec(value);
  if (themeUsageMatch) {
    const label = UI_TEXT_ALL[themeUsageMatch[2]!] ?? themeUsageMatch[2];
    return themeUsageMatch[1]!.toLowerCase() === "show"
      ? `显示“${label}”的使用位置`
      : `隐藏“${label}”的使用位置`;
  }
  const themeWhereUsedMatch = /^(Show|Hide) where (.+) is used$/i.exec(value);
  if (themeWhereUsedMatch) {
    const label = UI_TEXT_ALL[themeWhereUsedMatch[2]!] ?? themeWhereUsedMatch[2];
    return themeWhereUsedMatch[1]!.toLowerCase() === "show"
      ? `显示“${label}”的使用位置`
      : `隐藏“${label}”的使用位置`;
  }
  const chooseThemeColorMatch = /^Choose (.+) color$/i.exec(value);
  if (chooseThemeColorMatch) {
    const label = UI_TEXT_ALL[chooseThemeColorMatch[1]!] ?? chooseThemeColorMatch[1];
    return `选择${label}颜色`;
  }
  const themePickerLabelMatch = /^(.+) picker (hex|RGB) value$/i.exec(value);
  if (themePickerLabelMatch) {
    const label =
      UI_TEXT_ALL[themePickerLabelMatch[1]!.replace(/ picker$/i, "")] ??
      themePickerLabelMatch[1]!.replace(/ picker$/i, "");
    return `${label}取色器 ${themePickerLabelMatch[2]!.toUpperCase()} 值`;
  }
  const themeSaturationBrightnessMatch = /^(.+) saturation and brightness$/i.exec(value);
  if (themeSaturationBrightnessMatch) {
    const label =
      UI_TEXT_ALL[themeSaturationBrightnessMatch[1]!] ?? themeSaturationBrightnessMatch[1];
    return `${label}饱和度和亮度`;
  }
  const themeHueMatch = /^(.+) hue$/i.exec(value);
  if (themeHueMatch) {
    const label = UI_TEXT_ALL[themeHueMatch[1]!] ?? themeHueMatch[1];
    return `${label}色相`;
  }
  const useThemeMatch = /^Use (.+) theme$/i.exec(value);
  if (useThemeMatch) {
    const theme = UI_TEXT_ALL[useThemeMatch[1]!] ?? useThemeMatch[1];
    return `使用${theme}主题`;
  }
  if (value === "Pin project") return "固定项目";
  if (value === "Unpin project") return "取消固定项目";
  if (value === "Pin thread") return "固定对话";
  if (value === "Unpin thread") return "取消固定对话";
  if (value === "Pin message") return "固定消息";
  if (value === "Unpin message") return "取消固定消息";
  const markUnreadCountMatch = /^Mark unread \((\d+)\)$/.exec(value);
  if (markUnreadCountMatch) return `标记为未读（${markUnreadCountMatch[1]}）`;
  const archiveCountMatch = /^Archive \((\d+)\)$/.exec(value);
  if (archiveCountMatch) return `归档（${archiveCountMatch[1]}）`;
  const deleteCountMatch = /^Delete \((\d+)\)$/.exec(value);
  if (deleteCountMatch) return `删除（${deleteCountMatch[1]}）`;
  const allowMacPermissionsMatch = /^Allow (.+) in macOS System Settings, then try again\.$/.exec(
    value,
  );
  if (allowMacPermissionsMatch) {
    const permissionNames = (allowMacPermissionsMatch[1] ?? "")
      .split(" and ")
      .map((name) => UI_TEXT_ALL[name] ?? name)
      .join("和");
    return `请在 macOS 系统设置中允许${permissionNames}，然后重试。`;
  }
  const listeningSnapMatch = /^Listening — press (.+) to snap$/.exec(value);
  if (listeningSnapMatch) {
    const shortcut = listeningSnapMatch[1] ?? "";
    const shortcutLabel = shortcut === "the shortcut" ? "快捷键" : shortcut;
    return `监听中 — 按 ${shortcutLabel} 截取`;
  }
  const selectionCountMatch = /^(\d+) selections?$/.exec(value);
  if (selectionCountMatch) return `${selectionCountMatch[1]} 条引用`;
  const handoffFromMatch = /^Handoff from (.+)$/.exec(value);
  if (handoffFromMatch) return `来自 ${handoffFromMatch[1]} 的交接`;
  const handoffToMatch = /^Handoff to (.+)$/.exec(value);
  if (handoffToMatch) return `交接给 ${handoffToMatch[1]}`;
  const reorderProviderMatch = /^Reorder (.+)$/.exec(value);
  if (reorderProviderMatch) return `调整 ${reorderProviderMatch[1]} 的顺序`;
  const currentVersionMatch = /^Current (v.+)$/.exec(value);
  if (currentVersionMatch) return `当前版本 ${currentVersionMatch[1]}`;
  const updatingProvidersCountMatch = /^Updating (\d+) providers?\.$/.exec(value);
  if (updatingProvidersCountMatch) {
    return `正在更新 ${updatingProvidersCountMatch[1]} 个提供商。`;
  }
  const updatingProviderMatch = /^Updating (.+)\.$/.exec(value);
  if (updatingProviderMatch) return `正在更新 ${updatingProviderMatch[1]}。`;
  const updatedProvidersCountMatch = /^(\d+) providers updated$/.exec(value);
  if (updatedProvidersCountMatch) return `已更新 ${updatedProvidersCountMatch[1]} 个提供商`;
  const updatedProviderMatch = /^(.+) updated$/.exec(value);
  if (updatedProviderMatch) {
    const exactPhrase = UI_TEXT_ALL[value];
    if (exactPhrase) return exactPhrase;
    return `${updatedProviderMatch[1]} 已更新`;
  }
  const updateFinishedMatch = /^(.+) update finished$/.exec(value);
  if (updateFinishedMatch) return `${updateFinishedMatch[1]} 更新完成`;
  const couldNotUpdateProviderMatch = /^Could not update (.+)$/.exec(value);
  if (couldNotUpdateProviderMatch) return `无法更新 ${couldNotUpdateProviderMatch[1]}`;
  const enabledSkillsMatch = /^(\d+) of (\d+) skills enabled$/.exec(value);
  if (enabledSkillsMatch)
    return `已启用 ${enabledSkillsMatch[1]} / ${enabledSkillsMatch[2]} 个技能`;
  const providerCopiesMatch = /^Provider copies: (.+)$/.exec(value);
  if (providerCopiesMatch) return `提供商副本：${providerCopiesMatch[1]}`;
  const providerCopyMatch = /^Provider copy: (.+)$/.exec(value);
  if (providerCopyMatch) return `提供商副本：${providerCopyMatch[1]}`;
  const enableSkillMatch = /^Enable the (.+) skill$/.exec(value);
  if (enableSkillMatch) return `启用 ${enableSkillMatch[1]} 技能`;
  const unavailableMatch = /^(.+) Unavailable$/.exec(value);
  if (unavailableMatch) return `${unavailableMatch[1]} 不可用`;
  const profileTranslated = translateProfileChrome(value);
  if (profileTranslated) return profileTranslated;
  const spaceTranslated = translateSpaceChrome(value);
  if (spaceTranslated) return spaceTranslated;
  const useColorMatch = /^Use (#[0-9a-fA-F]{6})$/.exec(value);
  if (useColorMatch) return `使用颜色 ${useColorMatch[1]}`;
  const providerBinaryPathMatch = /^(.+) binary path$/.exec(value);
  if (providerBinaryPathMatch) return `${providerBinaryPathMatch[1]} 二进制路径`;
  const serverUrlMatch = /^(.+) server URL$/.exec(value);
  if (serverUrlMatch) return `${serverUrlMatch[1]} 服务器 URL`;
  const serverPasswordMatch = /^(.+) server password$/.exec(value);
  if (serverPasswordMatch) return `${serverPasswordMatch[1]} 服务器密码`;
  const existingServerMatch =
    /^Optional existing (.+) server URL\. Leave blank to spawn a local server\.$/.exec(value);
  if (existingServerMatch)
    return `可填写现有 ${existingServerMatch[1]} 服务器 URL；留空则启动本地服务器。`;
  const externalServerPasswordMatch =
    /^Optional password for an externally managed (.+) server\.$/.exec(value);
  if (externalServerPasswordMatch)
    return `外部管理的 ${externalServerPasswordMatch[1]} 服务器可选密码。`;
  const hexValueMatch = /^(.+) hex value$/.exec(value);
  if (hexValueMatch) {
    const colorLabel = hexValueMatch[1] ?? "";
    return `${UI_TEXT_ALL[colorLabel] ?? colorLabel} 十六进制值`;
  }
  const saturationBrightnessMatch = /^Saturation (\d+%), Brightness (\d+%)$/.exec(value);
  if (saturationBrightnessMatch)
    return `饱和度 ${saturationBrightnessMatch[1]}，亮度 ${saturationBrightnessMatch[2]}`;
  const pinProjectMatch = /^Pin (.+)$/.exec(value);
  if (pinProjectMatch) return `固定 ${pinProjectMatch[1]}`;
  const terminalThreadMatch = /^Create new terminal thread in (.+)$/.exec(value);
  if (terminalThreadMatch) return `在 ${terminalThreadMatch[1]} 中新建终端对话`;
  const terminalThreadShortcutMatch = /^New terminal thread \((.+)\)$/.exec(value);
  if (terminalThreadShortcutMatch) return `新建终端对话（${terminalThreadShortcutMatch[1]}）`;
  const newThreadShortcutMatch = /^New thread \((.+)\)$/.exec(value);
  if (newThreadShortcutMatch) return `新建对话（${newThreadShortcutMatch[1]}）`;
  const newChatShortcutMatch = /^New chat \((.+)\)$/.exec(value);
  if (newChatShortcutMatch) return `新建对话（${newChatShortcutMatch[1]}）`;
  const threadsCreatedMatch = /^(\d+) threads created$/.exec(value);
  if (threadsCreatedMatch) return `已创建 ${threadsCreatedMatch[1]} 个对话`;
  const requestedThreadsCreatedMatch = /^(\d+)\/(\d+) requested threads created$/.exec(value);
  if (requestedThreadsCreatedMatch) {
    return `已创建 ${requestedThreadsCreatedMatch[1]}/${requestedThreadsCreatedMatch[2]} 个请求的对话`;
  }
  const newThreadMatch = /^Create new thread in (.+)$/.exec(value);
  if (newThreadMatch) return `在 ${newThreadMatch[1]} 中新建对话`;
  const stagedSummaryMatch = /^Staged (.+)$/.exec(value);
  if (stagedSummaryMatch) return `已暂存 ${stagedSummaryMatch[1]}`;
  const changesSummaryMatch = /^Changes (.+)$/.exec(value);
  if (changesSummaryMatch) return `更改 ${changesSummaryMatch[1]}`;
  const localServersMatch = /^Local servers (\d+)$/.exec(value);
  if (localServersMatch) return `本地服务器 ${localServersMatch[1]}`;
  const changedFilesMatch = /^Changed files (\d+)$/.exec(value);
  if (changedFilesMatch) return `已更改文件 ${changedFilesMatch[1]}`;
  const chatCountMatch = /^(\d+)\s+chats?$/.exec(value);
  if (chatCountMatch) return `${chatCountMatch[1]} 个对话`;
  const unmodifiedLineMatch = /^(\d+)\s+unmodified lines?$/.exec(value);
  if (unmodifiedLineMatch) return `${unmodifiedLineMatch[1]} 行未修改`;
  const closeSidechatMatch = /^Close Sidechat: (.+)$/.exec(value);
  if (closeSidechatMatch) return `关闭侧边对话：${closeSidechatMatch[1]}`;
  const sidechatMatch = /^Sidechat: (.+)$/.exec(value);
  if (sidechatMatch) return `侧边对话：${sidechatMatch[1]}`;
  const closeTerminalMatch = /^Close Terminal (\d+)$/.exec(value);
  if (closeTerminalMatch) return `关闭终端 ${closeTerminalMatch[1]}`;
  const terminalMatch = /^Terminal (\d+)$/.exec(value);
  if (terminalMatch) return `终端 ${terminalMatch[1]}`;
  const taskCountMatch = /^(\d+)\s+tasks?$/.exec(value);
  if (taskCountMatch) return `${taskCountMatch[1]} 个任务`;
  // React often splits `{n} tasks` into a bare " tasks" / " task" text node.
  if (value === " tasks" || value === " task") return " 个任务";
  if (value === "tasks" || value === "task") return "个任务";
  const workingForMatch = /^Working for (.+)$/.exec(value);
  if (workingForMatch) {
    return `正在运行 ${translateClockDurationText(workingForMatch[1] ?? "")}`;
  }
  const workedForMatch = /^Worked for (.+)$/.exec(value);
  if (workedForMatch) {
    return `已运行 ${translateClockDurationText(workedForMatch[1] ?? "")}`;
  }
  const clockDurationLabel = translateClockDurationLabel(value);
  if (clockDurationLabel) return clockDurationLabel;
  const reconnectingMatch = /^Reconnecting\.\.\. (\d+)\/(\d+)$/.exec(value);
  if (reconnectingMatch) {
    return `运行警告，正在重连… ${reconnectingMatch[1]}/${reconnectingMatch[2]}`;
  }
  const runtimeWarningReconnectingMatch = /^Runtime warning Reconnecting\.\.\. (\d+)\/(\d+)$/.exec(
    value,
  );
  if (runtimeWarningReconnectingMatch) {
    return `运行警告，正在重连… ${runtimeWarningReconnectingMatch[1]}/${runtimeWarningReconnectingMatch[2]}`;
  }
  const showMoreMatch = /^Show (\d+) more$/.exec(value);
  if (showMoreMatch) {
    return `展开${showMoreMatch[1]} 条信息`;
  }
  const removeBrowserAnnotationMatch = /^Remove browser annotation (\d+)$/.exec(value);
  if (removeBrowserAnnotationMatch) {
    return `移除浏览器标注 ${removeBrowserAnnotationMatch[1]}`;
  }
  const browserAnnotationAriaMatch = /^Browser annotation (\d+): (.+)$/.exec(value);
  if (browserAnnotationAriaMatch) {
    return `浏览器标注 ${browserAnnotationAriaMatch[1]}：${browserAnnotationAriaMatch[2]}`;
  }
  const openWhatsNewMatch = /^Open What's new in v(.+)$/.exec(value);
  if (openWhatsNewMatch) {
    return `打开 v${openWhatsNewMatch[1]} 更新说明`;
  }
  const whatsNewInVersionMatch = /^What's new in v(.+)$/.exec(value);
  if (whatsNewInVersionMatch) {
    return `v${whatsNewInVersionMatch[1]} 有什么新内容`;
  }
  const newVersionBadgeMatch = /^New · v(.+)$/.exec(value);
  if (newVersionBadgeMatch) {
    return `新建 · v${newVersionBadgeMatch[1]}`;
  }
  const showMoreBrowserAnnotationsMatch = /^Show (\d+) more browser annotations?$/.exec(value);
  if (showMoreBrowserAnnotationsMatch) {
    return `显示另外 ${showMoreBrowserAnnotationsMatch[1]} 条浏览器标注`;
  }
  const moreBrowserAnnotationsMatch = /^(\d+) more annotations?$/.exec(value);
  if (moreBrowserAnnotationsMatch) {
    return `另外 ${moreBrowserAnnotationsMatch[1]} 条标注`;
  }
  const selfManagedReleaseMatch =
    /^(.+) manages its own releases, so T3 Code cannot tell whether a newer version exists\. Run the update to be sure\.$/.exec(
      value,
    );
  if (selfManagedReleaseMatch) {
    return `${selfManagedReleaseMatch[1]} 自行管理版本发布，T3 Code 无法判断是否有新版本。请直接运行更新以确认。`;
  }
  const filesChangedMatch = /^(\d+) files? changed$/.exec(value);
  if (filesChangedMatch) return `${filesChangedMatch[1]} 个文件已更改`;
  const showTextLinesMatch = /^Show text · ([\d,]+) lines?$/.exec(value);
  if (showTextLinesMatch) return `显示文本 · ${showTextLinesMatch[1]} 行`;
  const linesOnlyMatch = /^([\d,]+) lines?$/.exec(value);
  if (linesOnlyMatch) return `${linesOnlyMatch[1]} 行`;
  const showTextOnlyMatch = /^Show text$/.exec(value);
  if (showTextOnlyMatch) return `显示文本`;
  const messageNavMatch = /^Message (\d+): (.+)$/.exec(value);
  if (messageNavMatch) {
    const messageText = messageNavMatch[2] ?? "";
    const preview = messageText.length > 40 ? `${messageText.slice(0, 40)}…` : messageText;
    return `消息 ${messageNavMatch[1]}：${preview}`;
  }
  const lastConnectedMatch = /^Last connected (.+)\.$/.exec(value);
  if (lastConnectedMatch) return `上次连接 ${lastConnectedMatch[1]}。`;
  const connectionExpiresMatch = /^Connection expires (.+)\.$/.exec(value);
  if (connectionExpiresMatch) return `连接将于 ${connectionExpiresMatch[1]} 过期。`;
  const pairingCodeExpiresMatch = /^Pairing code expires (.+)\.$/.exec(value);
  if (pairingCodeExpiresMatch) return `配对码将于 ${pairingCodeExpiresMatch[1]} 过期。`;
  const projectsLabelMatch = /^Projects: (.+)$/.exec(value);
  if (projectsLabelMatch) {
    const rest = projectsLabelMatch[1] ?? "";
    return `项目：${UI_TEXT_ALL[rest] ?? rest}`;
  }
  const permissionsLabelMatch = /^Permissions: (.+)$/.exec(value);
  if (permissionsLabelMatch) {
    const rest = permissionsLabelMatch[1] ?? "";
    // Permissions may join multiple clauses with " · ".
    const translated = rest
      .split(" · ")
      .map((part) => UI_TEXT_ALL[part] ?? part)
      .join(" · ");
    return `权限：${translated}`;
  }
  const createdLastUsedMatch = /^Created (.+) · Last used (.+) · Expires (.+)$/.exec(value);
  if (createdLastUsedMatch) {
    const lastUsed = createdLastUsedMatch[2] ?? "";
    return `创建于 ${createdLastUsedMatch[1]} · 上次使用 ${UI_TEXT_ALL[lastUsed] ?? lastUsed} · 过期于 ${createdLastUsedMatch[3]}`;
  }
  const connectNameMatch = /^Connect (.+)$/.exec(value);
  if (connectNameMatch && connectNameMatch[1] !== "a coding agent") {
    return `连接 ${connectNameMatch[1]}`;
  }

  if (value === "Projects:" || value.startsWith("Projects:")) {
    const rest = value.slice("Projects:".length).trim();
    return rest ? `项目：${UI_TEXT_ALL[rest] ?? rest}` : "项目：";
  }
  if (value === "Permissions:" || value.startsWith("Permissions:")) {
    const rest = value.slice("Permissions:".length).trim();
    if (!rest) return "权限：";
    const translated = rest
      .split(" · ")
      .map((part) => UI_TEXT_ALL[part] ?? part)
      .join(" · ");
    return `权限：${translated}`;
  }
  if (value === "Created") return "创建于";
  if (
    /^Created .+ · /.test(value) ||
    /^Created (?:\d|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i.test(value)
  ) {
    const rest = value.slice("Created".length).trim();
    return `创建于 ${rest}`;
  }
  if (value === "· Last used" || value.startsWith("· Last used")) {
    const rest = value.slice("· Last used".length).trim();
    return rest ? `· 上次使用 ${UI_TEXT_ALL[rest] ?? rest}` : "· 上次使用";
  }
  if (value === "· Expires" || value.startsWith("· Expires")) {
    const rest = value.slice("· Expires".length).trim();
    return rest ? `· 过期于 ${rest}` : "· 过期于";
  }

  const archivedAgoMatch = /^Archived ((?:\d+\s*(?:mo|[dhmswy])|just now|today|yesterday))$/i.exec(
    value,
  );
  if (archivedAgoMatch) {
    const raw = archivedAgoMatch[1] ?? "";
    const pretty = raw
      .replace(/^(\d+)\s*d$/i, "$1天前")
      .replace(/^(\d+)\s*h$/i, "$1小时前")
      .replace(/^(\d+)\s*m$/i, "$1分钟前")
      .replace(/^(\d+)\s*s$/i, "$1秒前")
      .replace(/^(\d+)\s*w$/i, "$1周前")
      .replace(/^(\d+)\s*mo$/i, "$1个月前")
      .replace(/^(\d+)\s*y$/i, "$1年前")
      .replace(/^just now$/i, "刚刚")
      .replace(/^today$/i, "今天")
      .replace(/^yesterday$/i, "昨天");
    return `${pretty} 归档`;
  }
  const archivedThreadsMatch = /^Archived (\d+) threads?$/.exec(value);
  if (archivedThreadsMatch) return `已归档 ${archivedThreadsMatch[1]} 个对话`;
  const jumpToSpaceMatch = /^Jump to space (\d+)$/.exec(value);
  if (jumpToSpaceMatch) return `跳到空间 ${jumpToSpaceMatch[1]}`;
  const signInWithMatch = /^Sign in with `?([\w.-]+)`? to see usage\.$/.exec(value);
  if (signInWithMatch) return `使用 ${signInWithMatch[1]} 登录后即可查看用量。`;
  const couldNotReachMatch = /^Could not reach the (.+)\.$/.exec(value);
  if (couldNotReachMatch) {
    const target = couldNotReachMatch[1] ?? "";
    const mapped = {
      "Codex usage endpoint": "Codex 用量接口",
      "Cursor dashboard": "Cursor 控制台",
    }[target];
    return `无法连接 ${mapped ?? target}。`;
  }

  const providersHiddenMatch = /^(\d+) providers? hidden$/.exec(value);
  if (providersHiddenMatch) return `已隐藏 ${providersHiddenMatch[1]} 个提供商`;

  const permanentlyDeleteThreadMatch = /^Permanently delete "(.+)"\?$/.exec(value);
  if (permanentlyDeleteThreadMatch) {
    return `永久删除对话「${permanentlyDeleteThreadMatch[1]}」？`;
  }
  const deleteThreadMatch = /^Delete thread "(.+)"\?$/.exec(value);
  if (deleteThreadMatch) return `删除对话「${deleteThreadMatch[1]}」？`;
  const archiveThreadMatch = /^Archive thread "(.+)"\?$/.exec(value);
  if (archiveThreadMatch) return `归档对话「${archiveThreadMatch[1]}」？`;
  const removeProjectMatch = /^Remove project "(.+)"\?$/.exec(value);
  if (removeProjectMatch) return `移除项目「${removeProjectMatch[1]}」？`;
  const deleteThreadsInProjectMatch = /^Delete (\d+) threads? in "(.+)"\?$/.exec(value);
  if (deleteThreadsInProjectMatch) {
    return `删除「${deleteThreadsInProjectMatch[2]}」中的 ${deleteThreadsInProjectMatch[1]} 个对话？`;
  }
  const archiveThreadsInProjectMatch = /^Archive (\d+) threads? in "(.+)"\?$/.exec(value);
  if (archiveThreadsInProjectMatch) {
    return `归档「${archiveThreadsInProjectMatch[2]}」中的 ${archiveThreadsInProjectMatch[1]} 个对话？`;
  }
  const deleteCountThreadsMatch = /^Delete (\d+) threads?\?$/.exec(value);
  if (deleteCountThreadsMatch) return `删除 ${deleteCountThreadsMatch[1]} 个对话？`;
  const archiveCountThreadsMatch = /^Archive (\d+) threads?\?$/.exec(value);
  if (archiveCountThreadsMatch) return `归档 ${archiveCountThreadsMatch[1]} 个对话？`;
  if (value === "This permanently clears conversation history for this thread.") {
    return "将永久清除此对话的历史记录。";
  }
  if (value === "This permanently clears conversation history for these threads.") {
    return "将永久清除这些对话的历史记录。";
  }
  if (value === "This will remove the thread and its conversation history forever.") {
    return "将永久移除此对话及其全部历史记录。";
  }
  if (value === "Archived threads are hidden from the sidebar but can be restored later.") {
    return "已归档的对话会从侧边栏隐藏，之后仍可恢复。";
  }
  const deleteThreadsInFolderMatch =
    /^This will delete (\d+) threads? in this folder and remove the project\.$/.exec(value);
  if (deleteThreadsInFolderMatch) {
    return `将删除此文件夹中的 ${deleteThreadsInFolderMatch[1]} 个对话，并移除该项目。`;
  }
  const mobileReconnectingMatch = /^Reconnecting to (.+?)\.\.\.$/.exec(value);
  if (mobileReconnectingMatch) return "正在重新连接…";
  const mobileReconnectingNoDotsMatch = /^Reconnecting to (.+?)$/.exec(value);
  if (mobileReconnectingNoDotsMatch) return "正在重新连接…";
  const mobileReconnectingCountMatch = /^Reconnecting (\d+) environments$/.exec(value);
  if (mobileReconnectingCountMatch) return "正在重新连接…";
  if (value === "Syncing threads...") return "正在同步对话…";
  if (value === "Loading threads...") return "正在加载对话…";
  if (value === "Not connected") return "未连接";
  const mobileRetryConnectMatch = /^Failed to connect\. Retrying (.+?)\.\.\.$/.exec(value);
  if (mobileRetryConnectMatch) return "正在重新连接…";
  const mobileConnectErrorMatch = /^Failed to connect to (.+): (.+)$/.exec(value);
  if (mobileConnectErrorMatch) {
    return `无法连接到 ${mobileConnectErrorMatch[1]}：${mobileConnectErrorMatch[2]}`;
  }
  const mobileConnectMatch = /^Failed to connect to (.+)$/.exec(value);
  if (mobileConnectMatch) return `无法连接到 ${mobileConnectMatch[1]}`;
  const mobileNotConnectedMatch = /^(.+) is not connected$/.exec(value);
  if (mobileNotConnectedMatch) return `${mobileNotConnectedMatch[1]} 未连接`;
  const mobileConnectingMatch = /^Connecting to (.+?)\.\.\.$/.exec(value);
  if (mobileConnectingMatch) return `正在连接 ${mobileConnectingMatch[1]}…`;
  const mobileUnavailableMatch = /^(.+) is unavailable$/.exec(value);
  if (mobileUnavailableMatch) return `${mobileUnavailableMatch[1]} 不可用`;
  const mobileDisconnectedMatch = /^(.+) is disconnected$/.exec(value);
  if (mobileDisconnectedMatch) return `${mobileDisconnectedMatch[1]} 已断开连接`;
  const mobileCachedDataMatch =
    /^Cached data remains available\. The (.+) will load when your connection returns\.$/.exec(
      value,
    );
  if (mobileCachedDataMatch)
    return `已保留缓存数据。连接恢复后，${mobileCachedDataMatch[1]} 将加载。`;
  const mobileEnvironmentReadyMatch =
    /^The (.+) will load as soon as the environment is ready\.$/.exec(value);
  if (mobileEnvironmentReadyMatch) return `${mobileEnvironmentReadyMatch[1]} 将在环境就绪后加载。`;
  const mobileReconnectToLoadMatch = /^Reconnect the environment to load the (.+)\.$/.exec(value);
  if (mobileReconnectToLoadMatch) return `重新连接环境以加载 ${mobileReconnectToLoadMatch[1]}。`;
  const startAnotherShellMatch = /^Start another shell in (.+)$/i.exec(value);
  if (startAnotherShellMatch)
    return `在 ${translateExact(startAnotherShellMatch[1] ?? "")} 中启动另一个 shell`;
  const queuedSendMatch = /^(\d+) queued messages? will send automatically\.$/.exec(value);
  if (queuedSendMatch) return `${queuedSendMatch[1]} 条排队消息将自动发送。`;
  const reviewLineMatch = /^Line (\d+)$/.exec(value);
  if (reviewLineMatch) return `第 ${reviewLineMatch[1]} 行`;
  const reviewLinesRangeMatch = /^Lines (\d+)-(\d+)$/.exec(value);
  if (reviewLinesRangeMatch) return `第 ${reviewLinesRangeMatch[1]}-${reviewLinesRangeMatch[2]} 行`;
  const reviewLinesSelectedMatch = /^(\d+) lines? selected$/.exec(value);
  if (reviewLinesSelectedMatch) return `已选择 ${reviewLinesSelectedMatch[1]} 行`;
  const fileCountMatch = /^(\d+) files?$/.exec(value);
  if (fileCountMatch) return `${fileCountMatch[1]} 个文件`;
  const commentCountMatch = /^(\d+) comments?$/.exec(value);
  if (commentCountMatch) return `${commentCountMatch[1]} 条评论`;
  const unarchiveThreadMatch = /^Unarchive (.+)$/.exec(value);
  if (unarchiveThreadMatch) return `取消归档 ${unarchiveThreadMatch[1]}`;
  const selectedSuffixMatch = /^(.+) \(selected\)$/.exec(value);
  if (selectedSuffixMatch) return `${selectedSuffixMatch[1]}（已选中）`;
  const closeSubmenuMatch = /^Close (.+)$/.exec(value);
  if (closeSubmenuMatch) return `关闭 ${closeSubmenuMatch[1]}`;

  const exact = UI_TEXT_ALL[value];
  if (exact) return exact;

  const providerUpdateTranslated = translateProviderUpdateChrome(value);
  if (providerUpdateTranslated) return providerUpdateTranslated;

  const workflowTranslated = translateWorkflowChrome(value);
  if (workflowTranslated) return workflowTranslated;

  const liveActivityTranslated = translateLiveActivityChrome(value);
  if (liveActivityTranslated) return liveActivityTranslated;

  const runtimeWarningTranslated = translateRuntimeWarningChrome(value);
  if (runtimeWarningTranslated) return runtimeWarningTranslated;

  const toolCallTranslated = translateToolCallChrome(value);
  if (toolCallTranslated) return toolCallTranslated;

  return value;
}

/** Translate a UI string for surfaces MutationObserver cannot reach (native menus). */
export function translateZhCnUiText(value: string): string {
  return translateExact(value);
}

/**
 * Translate provider/runtime error chrome when the whole string is a known error.
 * Returns null for ordinary assistant prose so chat markdown stays untouched.
 */
export function translateZhCnProviderErrorMessage(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  // Keep multi-paragraph / fenced assistant answers out of the error path.
  if (/\n\s*\n/.test(trimmed) || /```/.test(trimmed)) return null;
  return translateRuntimeError(trimmed);
}

const KEYBINDING_WHEN_LABEL_ZH: Readonly<Record<string, { positive: string; negative: string }>> = {
  terminalFocus: { positive: "终端已聚焦", negative: "终端未聚焦" },
  terminalOpen: { positive: "终端已打开", negative: "终端未打开" },
  modelPickerOpen: { positive: "模型选择器已打开", negative: "模型选择器未打开" },
  previewFocus: { positive: "预览已聚焦", negative: "预览未聚焦" },
  previewOpen: { positive: "预览已打开", negative: "预览未打开" },
  true: { positive: "始终", negative: "从不" },
  false: { positive: "从不", negative: "始终" },
};

/** Presentation-only display for keybinding conditions; saved expressions stay English. */
export function translateZhCnWhenExpression(value: string): string {
  if (!value.trim()) return value;
  let translated = value.replace(/!\s*([A-Za-z_][\w]*)/g, (full, identifier: string) => {
    const label = KEYBINDING_WHEN_LABEL_ZH[identifier];
    return label?.negative ?? `非${label?.positive ?? identifier}`;
  });
  translated = translated.replace(/\b([A-Za-z_][\w]*)\b/g, (full, identifier: string) => {
    const label = KEYBINDING_WHEN_LABEL_ZH[identifier];
    return label?.positive ?? full;
  });
  return translated.replace(/\s*&&\s*/g, " 且 ").replace(/\s*\|\|\s*/g, " 或 ");
}
