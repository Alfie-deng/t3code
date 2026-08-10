# T3 Code 简体中文汉化盘点与验收清单

## 盘点口径

- 基线：`ba9c9ae81dce4e554b4dd52abfd28d0c01b5c651`
- 目标：macOS 桌面端的全量可见体验
- 参考：`/Users/alfie/Developer/Synara-ZH/apps/web/src/localization/zhCN.ts`、`CUSTOMIZATIONS.md`、Electron 原生中文菜单/对话框实现
- 记录方式：先按真实窗口和源码完整盘点，再集中修改，最后一次构建、签名、覆盖安装和真实验收

## 当前窗口已观察到的英文

以下来自现有 `/Applications/T3 Code.app` 的真实 AX 界面读取，后续必须在新构建窗口逐项回读：

- 侧边栏：`Go to threads`、`Search threads`、`New thread`、`Filter threads by project`、`New project`、`Settings`
- 线程操作：`Snooze thread`、`Settle thread`、`Thread actions`、`Add action`、`Open`、`Copy options`、`Initialize Git`、`Copy link`
- 工作流：`Worked for 18s`、`1 tool call`、`Ran command pwd && ls -la`
- 输入区：`Ask anything, @tag files/folders, $use skills, or / for commands`、`Send message`
- 运行控制：`Runtime mode`、`Full access`、`Context window 2.4% used`
- 模型/推理：提供商模型名保留；推理等级、运行模式和上下文说明汉化

## 页面与入口

| 表面            | 必查入口                                                                                | 状态                                 |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------ |
| 主工作区        | 线程列表、项目列表、空状态、搜索、创建线程、线程操作菜单                                | 最终窗口已回读；顶部个人入口隐藏生效 |
| 线程工作流      | 发送、排队、思考、工具调用、权限、用户输入、重试、完成、失败、取消                      | P0，源码覆盖并以真实线程回读         |
| 设置            | General、Appearance、Keybindings、Providers、Source Control、Connections、Beta、Archive | 已逐页观察，新增提供商详情漏点已补   |
| 命令面板        | 动作列表、搜索、项目/线程跳转、快捷键提示、文件/内容搜索                                | 源码覆盖；命令面板中文入口已回归     |
| 右侧面板        | Files、Diff、Preview、Browser、Terminal、Agents                                         | 源码覆盖；Agents 空状态正文已补中文  |
| Git/项目        | 项目创建、重命名、删除、分支、工作树、提交、推送、发布                                  | 源码覆盖；用户可见入口已纳入翻译层   |
| 更新/诊断       | 提供商更新、桌面更新、诊断、日志、资源监控、错误边界                                    | 源码覆盖；原生提示与提供商状态已回归 |
| Electron 原生层 | 应用菜单、编辑菜单、窗口菜单、缩放、更新对话框、启动/连接错误                           | 中文菜单/对话框测试通过              |

## 真实窗口盘点记录（现有官方安装版）

盘点对象：`/Applications/T3 Code.app`，版本 `0.0.32`，仅用于记录上游当前可见表面；未对它做修改或覆盖安装。

- General：项目分组、时间格式、空白更改、助手输出、提供商更新检查、后台活动、新对话默认工作区、添加项目路径、归档/删除确认、文本生成模型、版本/更新通道/诊断。
- Appearance：颜色模式、主题卡片、玻璃透明度、界面/提示词/代码/终端字体、字体平滑、自动换行。
- Keybindings：绑定数量、命令/快捷键/条件/状态表头、编辑快捷键、条件菜单、冲突提示、模型/预览/项目搜索/右侧面板快捷键。
- Providers：健康检查间隔、提供商版本与认证、启用/禁用、抢先体验标记、账户邮箱显隐、提供商详情。
- Source Control：Git/Jujutsu、GitHub/GitLab/Azure DevOps/Bitbucket 状态、认证和安装提示、源代码管理写作风格、变更请求模板、写作模型。
- Connections：本机网络访问、Tailscale HTTPS、T3 Connect、移动端活动发布、远程环境配对。原版截图核对发现，定制构建缺少根目录 `.env` 公共连接配置时会隐藏 `T3 Connect` 与 `Publish agent activity`；已补回构建配置，最终安装后必须按原版截图回读。
- Beta：侧边栏 v2、无活动自动收起、旧版计划模式。
- Archive：空归档状态及恢复入口语义。
- 主线程空状态：新建对话、项目选择、输入提示、模型/推理等级、运行模式、发送按钮、线程操作和 Git 初始化。

本轮还发现并纳入定制层的非 DOM 表面：Electron 应用/编辑/视图/窗口菜单、系统消息框、右键菜单、WSL 启动页，以及预览标注编辑器。

## 2026-08-09 真实工作流追加盘点

在 T3 Code 真实线程“全量盘点可调用工具”中，按串行方式触发了 10 个不同工具，并逐项记录时间线与工具卡。该线程暴露的漏点已经进入本次集中修复，修复后必须用同一线程回读：

- 工具卡标题：`Kimi-cu · get_app_state`、`T3-code · preview_snapshot`、`Creative_production_mcp · read_mcp_resource` 等内部标识直接显示；应保留服务名/技术标识，但把动作标题显示为“读取应用状态”“读取预览快照”“读取 MCP 资源”等。
- 预览 MCP 工具：`T3-code__preview_open` 等双下划线形式保留 `T3-code__` 服务前缀，仅将动作名翻译为“打开预览”“读取预览快照”等；仓库中已盘点的 14 个 `preview_*` 动作全部纳入同一映射。
- 时间线摘要：`8/10mcp__kimi_cu__get_app_state`、`9/10mcp__node_repl__js`、`10/10preview_snapshot` 未翻译；应显示为“第 8/10 步：读取应用状态”等。
- 工作流状态：`You stopped after 39s` 未翻译；`+N previous tool calls` 必须保持全中文。
- 原生线程右键菜单：`Pin thread`、`Settle thread`、`Snooze`、`Rename thread`、`Regenerate title`、`Mark unread`、`Copy path`、`Delete` 绕过网页观察器，必须在 Electron 菜单构造层翻译。
- 快捷键条件：`!terminalFocus`、`modelPickerOpen` 等只能在显示层转成“终端未聚焦”“模型选择器已打开”，底层快捷键表达式不能被改写。
- 错误恢复：`Provider turn start failed`、`ProviderAdapterProcessError` 及“session is archived / codex unarchive”说明必须中文化，同时保留错误码、会话 ID 和可执行命令。
- 提供商详情：`Cursor Pro+ Subscription`、颜色选择无障碍标题、`models available`、`upstream provider connected through OpenCode` 必须中文化；GitHub 的可用性描述也不能漏。

本节记录的是“已观察到的证据”和“已进入源码补丁”，不是安装后通过证明；最终关闭仍以新构建窗口的可见 AX/截图回读为准。

## 2026-08-09 19:00 截图追加盘点

- 网络访问确认框：确认按钮已中文，但重启并公开网络的说明仍为英文；已补入连接文案。
- 用量页：日期范围、成本/Token 切换、统计卡片副说明、图表无障碍标题和命令面板 `Actions / Select` 仍有英文；已改为源组件直接输出中文，避免 React 拆分文本节点后只翻到半句。
- relay 列表：真实窗口出现 `Relay environment listing timed out.`；已补中文错误文案，网络端点本身仍需以运行时请求结果判断。
- Clerk 账户中心：`Account / Security / Profile details / Password / Passkeys / Active devices` 属于 Clerk 预置账户组件；已接入官方 `@clerk/localizations` 的 `zhCN` 资源，覆盖登录、账户、资料、安全和移动客户端页面。
- iOS 移动客户端卡片：截图 `/Users/alfie/Desktop/截屏2026-08-09 19.51.08.png` 发现更新时间和提醒详情仍为英文；已将日期格式、提醒类型、加载/空状态/错误/刷新按钮全部改为源组件直接输出简体中文。

## 2026-08-09 最终构建与窗口回读

最终交付构建：`0.0.32`，macOS Apple Silicon，最终阶段目录为 `t3code-desktop-mac-stage-lsqeHX`；覆盖安装目标为 `/Applications/T3 Code.app`。临时阶段目录和截图只作本轮证据，不是仓库产物。

- 代码验证：针对性测试 4 个文件、19 个测试全部通过；`@t3tools/web` 类型检查通过；`git diff --check` 通过。
- 签名验证：`Identifier=com.t3tools.t3code`、Team `D4SUBHNYW9`，身份为 `Apple Development: jet.deng@me.com (PTY74USJAK)`；使用 `--timestamp=none`，过程中没有密码提示。
- 首页证据：`/tmp/t3code-final20-home.png`。可见“想在 Agent工作台 构建什么？”、“随心构建你的想法”、模型和“构建”；`完全访问`及其左侧分隔线不再出现。
- 已有对话证据：`/tmp/t3code-final20-existing.png`。可见占位“提出后续修改”、中文模型/构建控件和“停止生成”；外圆缩小 2px 并右移 2px，颜色保持 T3 原样。
- 工具流证据：`/tmp/t3code-final20-workflow.png`。真实对话窗口可见 `1 次工具调用`、旧构建中的 `+1 个之前的工具调用`、命令卡、工具动作和中文运行状态；该摘要文案已在 2026-08-10 后续定制中收敛。
- Synara 图标边界：`ComposerPrimaryActions.tsx` 的发送/停止外圆各缩小 `2px` 并向右移动 `2px`，颜色未改；发送内图标使用 `synara-icons/arrow-up.svg`，当前为 `18px`；停止内方块最终为 `10px`、`1px` 圆角。

本节关闭的是本轮已实际回读的最终包；以后上游同步仍必须按本文“文件逐项对照”和 P0 矩阵重新验收，不能因为这次通过就跳过。

## 2026-08-10 增补盘点与回读

- 项目菜单真实回读：`重命名`、`分组到…`、`复制路径`、`移除`；原生菜单功能保持不变。
- 重命名弹窗真实回读：标题路径、`环境：` 前缀、项目标题、取消和保存均为中文；证据：`/tmp/t3code-final-rename-dialog-20260810.jpeg`。
- 首页真实截图：`/tmp/t3code-final-rename-home-20260810.jpeg`；项目名仍可点击切换，但虚线下划线已移除。
- 工作流术语：独立的 `Bash` / `Shell` / `Command execution` 显示为“运行命令”；“已运行命令”等完整状态不重复叠加。
- 最终覆盖安装：`/Applications/T3 Code.app`，签名使用 `Apple Development: jet.deng@me.com (PTY74USJAK)`，并保留 Electron JIT/动态库所需 entitlements。

## 2026-08-10 最终变更卡片

- 对话最终助手消息下的变更文件摘要卡片已隐藏；不再显示变更文件数量、增删统计、“显示文件”和“打开差异”。
- 变更数据与差异查看底层逻辑未删除，后续若需要恢复展示，只需恢复 `MessagesTimeline` 的卡片挂载。
- 滚动提示：保留“滚动到末尾”的无障碍语义和点击功能，视觉上只显示 Synara 风格下箭头，不再显示文字胶囊。

## 2026-08-10 搜索栏

- 搜索入口仍可点击、`⌘K` 仍可用；仅隐藏搜索栏右侧的可见快捷键提示，避免界面出现多余的 `⌘K`。

## 2026-08-10 用量单位

- 用量页所有 Token 数字统一改为中文单位：`≥1亿` 用“亿”，`1万–1亿` 用“万”，低于 `1万` 用千位分隔整数，最多两位小数且不保留尾随零。
- 覆盖用量标题、提供商行、统计卡片、模型/日期明细表、Token 图表坐标轴和悬浮提示；“个 Token”统一改为“Token”，避免中英文单位混排。
- 回归样例：`878M → 8.78亿`、`27M → 2700万`、`2.73M → 273万`、`108K → 10.8万`。

## 2026-08-10 用量术语

- 用量页所有用户可见术语统一使用 `Token`，不再混用“令牌”；标题使用“原始 Token 成本 / 已消耗 Token”，图表使用“每日消耗的 Token”。
- 提供商行的成本模式改为“成本占比 100.0% · … Token”，Token 模式改为“Token 占比 … · $…”，百分比含义明确为当前统计范围内的成本或 Token 占比。

## 2026-08-10 工具调用摘要与输入框底部状态条

- 工具调用折叠摘要统一显示为 `+N 个工具调用`，删除“之前的”冗余字样；工具调用展开、收起和底层工作流记录不变。
- 输入框下方的“本地检出”和分支名状态条直接隐藏；检出、分支切换、工作区模式和远程环境能力仍保留在状态与交互逻辑中。

## 2026-08-10 线程标题点击区

- `apps/web/src/components/chat/ChatHeader.tsx`：线程标题操作按钮从整段可伸展区域收窄为标题文字和下拉箭头本身；标题菜单功能保留。
- Electron 顶部栏周围的空白区域仍是窗口拖动区；验收时必须同时回读标题菜单可打开、顶部空白处可拖动这两个结果，不能只检查源码或 AX 标签。

## 2026-08-10 线程正文字号

- 线程时间线单独增加 `1px` 字号步进，覆盖用户正文、助手正文、工具/工作流文字、工具卡片、计划步骤和代码/diff 文本。
- 该定制只挂在 `MessagesTimeline` 的 `data-thread-content` 范围内；后台界面字号设置、侧边栏、顶部栏和输入框不跟随放大。

## P0 工作流验收矩阵

| 阶段       | 中文必须覆盖                                                           | 证据                                                                            |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 新建线程   | 新建线程、项目选择、工作区模式、模型、推理等级、个人隐藏的访问模式控件 | 最终窗口已回读：`想在…构建什么？`、`随心构建你的想法`；`完全访问`及其分隔线隐藏 |
| 发送前     | 输入提示、附件、引用、命令/技能、发送/停止按钮                         | 最终首页截图已回读；箭头为 Synara 资源，外圆缩小 2px 并右移 2px                 |
| 运行中     | 正在思考、正在运行、耗时、排队/等待、连接中                            | 真实线程已回读：`正在运行`、耗时、`停止生成`                                    |
| 工具调用   | 工具调用数量、动作动词、工具标题、参数提示、展开/折叠                  | 真实线程需回读：`1 次工具调用`、`+N 个工具调用`、命令/工具卡中文                |
| 权限与输入 | 请求权限、允许/拒绝、始终允许、等待用户输入、提交/取消                 | 源码覆盖；动态翻译规则保留底层命令与标识符                                      |
| 完成       | 已完成、文件更改、差异、复制、继续修改、重新运行                       | 源码覆盖；真实窗口可见复制/完成语义                                             |
| 失败恢复   | 失败原因、重试、重连、停止、解除阻塞、错误详情                         | 动态规则覆盖；保留错误码、会话 ID 和可执行命令                                  |

## 术语基线

| English        | 简体中文   | 备注                                     |
| -------------- | ---------- | ---------------------------------------- |
| thread         | 对话       | 与 Synara 统一，不译成“线程”作为用户文案 |
| project        | 项目       | 保留项目语义                             |
| workspace      | 工作区     | 与路径/工作树区分                        |
| worktree       | 工作树     | Git 语义不改成“工作区”                   |
| provider       | 提供商     | 模型运行时入口                           |
| model          | 模型       | 模型名本身保留                           |
| turn           | 回合       | 一次用户请求到助手完成的工作流           |
| tool call      | 工具调用   | P0                                       |
| reasoning      | 思考/推理  | 按界面语境选择                           |
| runtime mode   | 运行模式   | `Full access` → `完全访问`               |
| context window | 上下文窗口 | 百分比和数值保留                         |
| approval       | 权限确认   | 动作是“允许/拒绝”                        |
| archive        | 归档       | 不译为删除                               |
| checkpoint     | 检查点     | 回滚/恢复语境                            |

## 关闭规则

每一项必须同时满足：源码入口已覆盖、动态状态已覆盖、真实窗口已回读。只在词典里出现、只通过类型检查、只看到构建产物，都不算关闭。

## iOS/移动端同步基线（2026-08-09）

- **单源**：全部词典与工具流翻译层在 `packages/zh-locale/src/zhCN.ts`（`@t3tools/zh-locale`），桌面与 iOS 共用，改一处两处生效。
- 桌面 web：`apps/web/src/localization/zhCN.ts` = re-export + MutationObserver 安装器。
- iOS/移动端：`apps/mobile/src/localization/zhCN.ts` = 共享包 + `MOBILE_UI_TEXT` 移动端专属文案 + `t()` 渲染期翻译。
- 已挂接：`thread-work-log.tsx`（工具/工作日志标题、`work log`、`Copied`、折叠标签）；`threadPresentation.ts`（六个状态标签，公共条目已入共享词典）。
- **未完成清单（移动端）**：其余硬编码英文表面（设置页、环境、Git 控件、通知/实时活动、文件/差异/终端面板、新任务流程、空状态）尚未逐一挂 `t()`；移动端独有英文约 500 条待盘点。翻译边界与桌面一致：复制内容、命令、代码、路径、模型名保留原文。
