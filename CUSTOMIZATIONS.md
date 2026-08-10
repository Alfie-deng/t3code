# Alfie 的 T3 Code 个人定制清单

本文件是这个私人发行版的维护入口。它记录相对 T3 Code 上游必须保留、可以被上游等价实现替代，以及每次同步后必须重新验收的改动。

不要把这里当发布日志；上游功能历史看 `CHANGELOG.md`，逐项汉化盘点看 `customizations/translation-inventory.md`。本文件只回答一件事：**同步上游或继续做个人定制时，哪些本地决定不能悄悄丢失。**

## 当前基线

- 盘点日期：2026-08-09
- 私人 fork：`https://github.com/Alfie-deng/t3code`
- 本地路径：`/Users/alfie/Developer/t3code`
- 上游：`https://github.com/pingdotgg/t3code`
- 当前基线：`ba9c9ae81dce4e554b4dd52abfd28d0c01b5c651`
- 当前安装版：`/Applications/T3 Code.app`，Bundle `com.t3tools.t3code`，版本 `0.0.32`
- 构建目标：macOS Apple Silicon，覆盖安装 `/Applications/T3 Code.app`

## 定制总览

### 1. 简体中文汉化层

状态：**必须保留；上游若以后提供原生本地化，逐项比较后再迁移。**

- Web UI 与动态工作流：`apps/web/src/localization/zhCN.ts`
- 单源字典与工具流翻译层：`packages/zh-locale/src/zhCN.ts`（`@t3tools/zh-locale`，DOM-free 纯 TS，web 与移动端共用同一份词典/正则/动词表，桌面改一处移动端自动同步；web 只保留 MutationObserver 安装器，移动端用 `apps/mobile/src/localization/zhCN.ts` 的 `t()` 在渲染期调用）
- Clerk 登录与账户中心：`@clerk/localizations` 的 `zhCN` 资源通过 `apps/web/src/main.tsx` 注入；账户中心不再依赖 DOM 字符串替换。
- 字典分层：Synara/T3 基础词典 + `EXTRA_UI_TEXT` 增量覆盖；上游新增文案优先加到增量层，避免改乱基线。移动端独有文案放在 `apps/mobile/src/localization/zhCN.ts` 的 `MOBILE_UI_TEXT`，公共条目一律进 `packages/zh-locale`。
- Electron 原生菜单：`apps/desktop/src/applicationMenuZh.ts`
- Electron 原生系统对话框：`apps/desktop/src/desktopDialogZh.ts`
- 逐页、逐选项、逐工作流的盘点与验收：`customizations/translation-inventory.md`
- UI 文案翻译边界：用户消息、助手正文、代码、终端输出、路径、URL、模型名，以及复制/详情中的底层工具名和协议标识保留；可见的工具卡标题、动作名称、状态、权限、错误、提示和设置说明必须汉化。快捷键条件只翻译显示层，实际表达式继续保存原值。
- 汉化运行时只监听 DOM 新增节点、文本和可见属性变化；禁止用固定周期全量扫描拖慢长工作流。

### 2. 工作流优先级

以下链路属于 P0，不能因为普通设置页已经中文就宣布完成：

- 新建线程、发送、排队、等待、重试、取消和完成
- 思考/运行状态、耗时、工具调用数量和工具调用标题
- 读取文件、运行命令、搜索、创建/修改/删除文件、启动子智能体等动作
- 权限请求、批准/拒绝、用户输入、阻塞与解除阻塞
- 提供商连接、模型选择、运行模式、上下文窗口和错误恢复
- 线程操作、项目操作、归档、删除、分支/工作树、Git 与预览面板
- 登录账户、个人资料、安全设置、Passkey、已连接账户和移动客户端入口

移动端工具流挂接点（复用同一套翻译，改动公共层即自动同步）：

- 工具/工作日志标题：`apps/mobile/src/features/threads/thread-work-log.tsx` 渲染时 `t(row.summary)`（复制内容 `getCopyText()` 保持原文）
- 线程状态标签：`apps/mobile/src/features/threads/threadPresentation.ts`（`Needs Approval`/`Awaiting Input`/`Working`/`Connecting`/`Error`/`Plan Ready` 已入共享词典）

### 3. 后续个人定制

未来新增的个人模型、默认值、提供商筛选、工作流策略、快捷键、品牌或可靠性修复，必须单独记录在本文件对应章节，不能混进翻译字典里伪装成“汉化”。

原则：

1. 能独立提交就独立提交，便于上游同步和回滚。
2. 任何会改变用户可见默认值或工作流行为的定制，都必须写出真实验收项。
3. 不把密钥、Token、Cookie、代理订阅或账号凭据写进本文件、仓库或构建日志。

### 4. Alfie 的顶部工作区精简

状态：**已启用；仅隐藏入口，不删除能力。**

- 实现：`apps/web/src/personalUi.ts`
- 已隐藏：顶部品牌 `T3 Code`、项目操作 `添加操作`、编辑器入口 `打开`、Git 快捷入口 `初始化 Git`、终端抽屉按钮。
- 输入框底部的 `完全访问` 运行模式选择器及其左侧分隔线也隐藏；运行模式状态和底层发送逻辑保留，不再占用个人输入框空间。
- 右侧面板按钮、快捷键、命令面板和设置页中的对应能力继续保留；这是界面减法，不是功能删除。

### 4.1 线程标题点击区与窗口拖动

状态：**已启用；只收窄交互命中范围，不删除线程菜单。**

- `apps/web/src/components/chat/ChatHeader.tsx`：线程标题菜单按钮不再使用 `flex-1` 撑满整个标题栏，只包住标题文字和下拉箭头；标题过长时仍截断显示。
- Electron 顶部栏的空白区域继续沿用 `drag-region`，因此可以从标题两侧拖动窗口；点击标题文字或箭头仍打开原有对话操作菜单。
- 上游同步时必须保留 `max-w-full min-w-0 flex-none` 这组约束；如果上游重做标题栏，先验证“标题可点开菜单”和“空白顶部区域可拖动窗口”两条交互，再合并。

### 5. Alfie 的输入框与封面排版

状态：**已启用；只改变个人界面密度，不改变发送和工作流行为。**

- 已有对话的普通输入框显示简短占位文字“提出后续修改”，不再显示冗长的操作指南；首页新建线程输入框显示“随心构建你的想法”。
- 首页输入框按 Synara 的紧凑规格收敛：编辑区最小高度采用两行行高（`2lh`），底部工具栏使用更紧的垂直间距；可输入内容的最大高度缩短约四分之一。审批、用户输入和计划反馈等必要提示继续显示。
- 封面项目标题采用 Synara 的“想在〔项目名〕构建什么？”文案与排版：`26px`，桌面端 `30px`，字重和行高保持一致。
- 封面项目名仍保留项目选择器和键盘焦点能力，但去掉项目名下方的虚线装饰。
- 右侧智能体空状态正文与面板快捷键提示也纳入汉化验收，避免只翻标题、不翻说明。
- 发送和停止按钮的外圆在原尺寸基础上各缩小 `2px`，并整体向右移动 `2px`；颜色与交互保持 T3 原样。内部箭头直接复用 `apps/web/public/synara-icons/arrow-up.svg`，按 `18px`、`bg-current` 的 CSS mask 呈现；停止方块最终为 `10px`、`1px` 圆角。

### 5.1 线程正文字号

状态：**已启用；线程内每个文字层级增加 `1px`，不改变后台全局字号设置。**

- `apps/web/src/personalUi.ts`：`threadContentFontSizeStepPx: 1` 是本人的独立线程字号定制，不接入 Settings → Appearance 的全局 `fontSizeInterface`。
- `apps/web/src/components/chat/MessagesTimeline.tsx`：给线程时间线建立 `data-thread-content` 范围，覆盖我的正文、助手正文、工具标题/预览、助手工具卡片、工作流状态、计划步骤和时间戳；空线程提示也在同一范围内。
- `apps/web/src/index.css`：在该范围内同步放大 Tailwind 的 `text-xs/text-sm` 等层级、工具卡片的固定 `10/11/12/13px` 文本、Markdown 标题、行内代码、代码块和 diff 字号；侧边栏、顶部栏、输入框和后台全局字号不受影响。
- 上游同步时保留 `data-thread-content` 与 `threadContentFontSizeStepPx`，不要把这项个人偏好改写成全局根字号。

### 6. 本次代码改动逐文件对照

这份对照是给以后同步上游用的。看到同名文件冲突时，不能整文件选择上游版本；先保留下面列出的本地行为，再把上游的新功能合并进来。

#### 汉化运行时与工作流

| 文件                                                                                                                                          | 本地定制内容                                                                                                                                                     | 上游同步时必须保留                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `apps/web/src/localization/zhCN.ts`                                                                                                           | 简体中文词典、动态状态/工具调用/错误/快捷键条件/线程操作翻译；保留技术前缀、路径、URL、代码和用户内容；支持 `T3-code__preview_open` 这类服务前缀加动作名的翻译。 | 字典分层、动态翻译入口、工具动作映射和 MutationObserver；不要用上游新字典覆盖整个文件。 |
| `apps/web/src/localization/zhCN.test.ts`                                                                                                      | 验证 `Tool`、`T3-code__preview_open`、`preview_*`、工具调用数量和中文状态。                                                                                      | 新增英文 UI 时同步补测试，不要删除这些定制断言。                                        |
| `packages/zh-locale/src/zhCN.ts`                                                                                                              | 补充项目重命名弹窗的动态文案（标题路径、环境前缀）；工作流独立工具标题 `Bash` / `Shell` / `Command execution` 统一显示为“运行命令”。                             | 共享词典仍是桌面与移动端共用单一真源；工作流状态中的“已运行命令”不重复改成病句。        |
| `apps/desktop/src/desktopDialogZh.ts`、`apps/desktop/src/electron/ElectronMenu.ts`                                                            | 原生项目菜单补齐“分组到…”和“移除”，并保留“重命名”“复制路径”等中文菜单项。                                                                                        | 原生菜单必须走白名单翻译，不能依赖 Web DOM MutationObserver。                           |
| `apps/web/src/components/chat/MessagesTimeline.tsx`                                                                                           | 工作流分组、`previous tool calls`、工具调用数量、展开/收起和时间线标签进入中文翻译层。                                                                           | 翻译调用必须包住新增工作流行，不要只翻静态标题。                                        |
| `apps/web/src/components/AgentsPanel.tsx`                                                                                                     | “还没有智能体”及子智能体/工作流说明、活动和 Token 用量说明汉化。                                                                                                 | 空状态正文不能只留下标题中文。                                                          |
| `apps/web/src/components/chat/ProviderStatusBanner.tsx`                                                                                       | 提供商状态、CLI 可用性、认证失败、受限状态和关闭按钮标签汉化。                                                                                                   | raw 状态先保留，再交给 `translateZhCnUiText`；错误码和提供商名不乱翻。                  |
| `apps/web/src/components/chat/ProviderStatusBanner.test.tsx`                                                                                  | 锁定提供商状态中文输出。                                                                                                                                         | 上游变更状态枚举时同时更新本地测试和字典。                                              |
| `apps/web/src/components/CommandPaletteContent.tsx`                                                                                           | 命令面板的关闭、导航、后退、选择等底部快捷键提示汉化。                                                                                                           | 快捷键本身不改，只改显示文字。                                                          |
| `apps/web/src/components/CommandPaletteResults.tsx`                                                                                           | 命令/项目/对话/动作分组与“无匹配”空状态汉化。                                                                                                                    | 分组 label 进入翻译层，不要只改默认空状态。                                             |
| `apps/web/src/components/chat/ChatHeader.tsx`、`apps/web/src/components/ChatView.tsx`、`apps/web/src/components/chat/PanelLayoutControls.tsx` | 顶部个人精简开关接入；终端入口可以隐藏但能力保留，右侧面板入口仍保留。                                                                                           | 保留 `PERSONAL_UI` 控制，不要把隐藏误合并成删除功能。                                   |

#### 输入框、封面和 Synara 图标

| 文件                                                      | 本地定制内容                                                                                                                                                                                              | 上游同步时必须保留                                                                                                     |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `apps/web/src/personalUi.ts`                              | 集中保存顶部入口隐藏、完全访问运行模式隐藏、紧凑输入框、隐藏冗余指南、隐藏输入框下方检出/分支状态条、新线程占位文字等个人开关。                                                                           | 新增个人偏好优先放这里，不要散落硬编码。                                                                               |
| `apps/web/src/components/chat/ChatComposer.tsx`           | 已有对话占位“提出后续修改”；新线程占位“随心构建你的想法”；保留审批/计划/用户输入等必要提示；输入框按 Synara 的 `2lh` 高度和更紧工具栏布局；按 `hideRuntimeModeControl` 同时移除“完全访问”和其左侧分隔线。 | 不要把普通对话和新线程占位文字混成一个默认值；隐藏运行模式时也要隐藏它配套的分隔线。                                   |
| `apps/web/src/components/ComposerPromptEditor.tsx`        | 增加 `compact` 模式，最小高度 `2lh`，最大高度缩短，保持编辑器行为不变。                                                                                                                                   | 保留 `compact` 参数和可访问文本编辑行为。                                                                              |
| `apps/web/src/components/chat/DraftHeroHeadline.tsx`      | 封面采用“想在〔项目名〕构建什么？”；字号 `26px`，桌面端 `30px`，字重/行高按 Synara；项目名保留选择器功能但移除虚线下划线。                                                                                | 文案、排版和项目选择器交互是个人定制，不要被上游默认标题或装饰线覆盖。                                                 |
| `apps/web/src/components/chat/ComposerPrimaryActions.tsx` | 发送/停止按钮外圆各缩小 `2px` 并向右移动 `2px`，颜色与交互不动；箭头使用 Synara 原始资源的 CSS mask，按 `size-4.5` 渲染；停止键最终使用 `size-2.5 rounded-[1px]`。                                        | 上游同步时保留这组外圆尺寸/偏移定制；不要恢复原尺寸；保留 `data-synara-icon="arrow-up"` / `stop-square` 便于回归检查。 |
| `apps/web/public/synara-icons/arrow-up.svg`               | 从 Synara 直接带入的 `arrow-up` 原资源。                                                                                                                                                                  | 上游同步时不得删除；若 Synara 更新图标，先视觉对比再替换。                                                             |

#### 账户、设置、用量和普通页面

| 文件                                                                                                                                                                               | 本地定制内容                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `apps/web/src/main.tsx`、`apps/web/package.json`、`pnpm-lock.yaml`                                                                                                                 | 接入 `@clerk/localizations` 的 `zhCN`，覆盖登录、账户、个人资料、安全、Passkey 和移动客户端页面，并覆盖本地 Passkey 术语。 |
| `apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx`、`MobileClientsUserProfilePage.logic.ts`、对应 `.test.ts`                                                         | 移动客户端卡片、推送通知、实时活动、更新时间、加载/空状态/错误/刷新按钮直接输出简体中文并使用中文日期格式。                |
| `apps/web/src/components/settings/AddProviderInstanceDialog.tsx`、`AddProviderInstanceWizardSteps.tsx`、`DiagnosticsSettings.tsx`、`KeybindingsSettings.tsx`                       | 添加提供商、向导步骤、诊断、快捷键条件/状态等设置入口汉化。                                                                |
| `apps/web/src/components/settings/ProviderAccentColorPicker.tsx`、`ProviderInstanceCard.tsx`、`ProviderModelsSection.tsx`、`ProviderSettingsPanel.tsx`、`SettingsFontPreviews.tsx` | 提供商卡片、账户/版本/模型数量/连接状态、颜色选择无障碍标题、字体预览等碎片文案汉化。                                      |
| `apps/web/src/components/color-selector.tsx`                                                                                                                                       | 颜色选择器的可访问名称汉化。                                                                                               |
| `apps/web/src/components/usage/UsagePage.tsx`、`UsageProviderChart.tsx`、`apps/web/src/usage/usageFormat.ts`                                                                       | 用量页日期范围、成本/Token、统计卡片、图表说明、缓存节省和无障碍标签汉化；数值格式保持原语义。                             |
| `apps/web/src/components/sidebar/SidebarChrome.tsx`                                                                                                                                | 隐藏顶部品牌入口，保留侧边栏、搜索、设置、用量和项目能力。                                                                 |

#### Electron 原生层与预览标注编辑器

| 文件                                                                                                                                 | 本地定制内容                                                                                    | 上游同步时必须保留                                        |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `apps/desktop/src/applicationMenuZh.ts`                                                                                              | 新增应用、编辑、视图、窗口菜单的中文构造与缩放回调。                                            | 菜单角色/快捷键/回调保留，不能只保留中文 label 而丢功能。 |
| `apps/desktop/src/window/DesktopApplicationMenu.ts`                                                                                  | 注入中文应用菜单、设置、更新、关闭、服务、隐藏/显示、帮助和缩放入口。                           | 与 `applicationMenuZh.ts` 成对同步。                      |
| `apps/desktop/src/desktopDialogZh.ts`                                                                                                | 新增原生消息框、确认框、更新提示和错误文本翻译。                                                | 系统对话框不能依赖网页 DOM 翻译。                         |
| `apps/desktop/src/electron/ElectronDialog.ts`、`ElectronMenu.ts`                                                                     | 原生对话框、右键菜单、线程菜单标签进入中文翻译层。                                              | 保留原始 action/id/role，只翻用户可见 label。             |
| `apps/desktop/src/window/DesktopWindow.ts`                                                                                           | WSL 连接提示、右键菜单的复制/剪切/粘贴/全选/无建议等中文化。                                    | 原生行为和编辑权限不变。                                  |
| `apps/desktop/src/preview/PickPreload.ts`                                                                                            | 预览标注编辑器的展开/收起、描述、字体、颜色、宽高、间距、选择/绘制/擦除、附加截图等全部中文化。 | 预览标注工具的事件、快捷键和提交逻辑不变。                |
| `apps/desktop/src/electron/ElectronDialog.test.ts`、`ElectronMenu.test.ts`、`apps/desktop/src/window/DesktopApplicationMenu.test.ts` | 原生中文菜单/对话框回归测试。                                                                   | 上游新增原生入口时补进这些测试。                          |
| `customizations/macos-electron.entitlements.plist`                                                                                   | 本人签名所需 hardened runtime 权限，不带上游团队专属 Associated Domains。                       | 不用上游签名配置覆盖；签名身份与权限必须单独验收。        |

#### 个人维护边界

- `CUSTOMIZATIONS.md` 是定制真源；`customizations/translation-inventory.md` 是逐页、逐工作流盘点真源。两者都要随代码一起更新。
- 上游同步前先 `git fetch upstream main`，确认工作区干净，再逐文件合并；禁止 `git checkout upstream/main -- <file>` 这类整文件覆盖。
- 冲突处理顺序：先保留行为（占位逻辑、顶部隐藏、工作流翻译、Synara 图标、原生菜单/对话框），再吸收上游结构和新功能，最后重跑定制测试、类型检查、构建、签名和真实窗口验收。
- `.env` 只保留在本机，用于 Connections 页面所需的公共运行配置；不提交、不写入本文件、不复制进发布产物说明。
- 每次上游更新必须重点回归：新线程/已有对话占位、发送/停止、工具调用流、Agents 空状态、命令面板、账户/移动客户端、Connections、原生菜单，以及顶部五个隐藏入口仍未回归出现。

## 2026-08-10 增补回读

- 项目菜单真实回读：`重命名`、`分组到…`、`复制路径`、`移除` 均为中文；项目菜单功能保留。
- 项目重命名弹窗真实回读：`更新 /Users/alfie/Codex/Agent工作台 的标题。`、`项目标题`、`环境： Alfie Macbook`、`取消`、`保存`。
- 封面真实截图：`/tmp/t3code-final-rename-home-20260810.jpeg`；项目名 `Agent工作台` 下方虚线已移除，点击切换项目能力仍保留。
- 弹窗真实截图：`/tmp/t3code-final-rename-dialog-20260810.jpeg`；英文 `Environment:` 不再出现。
- 当前覆盖安装：`/Applications/T3 Code.app`，版本 `0.0.32`；签名身份仍为 `Apple Development: jet.deng@me.com (PTY74USJAK)`，并带 `customizations/macos-electron.entitlements.plist`，无密码提示。

## 2026-08-10 隐藏最终变更卡片

- `apps/web/src/components/chat/MessagesTimeline.tsx`：隐藏最终助手消息下的变更文件摘要卡片，不再在对话末尾显示 `1 changed file +N -N / 显示文件 / 打开差异`；差异数据和底层差异查看能力保留。
- `apps/web/src/components/chat/MessagesTimeline.test.tsx`：回归测试改为确认存在变更数据时不渲染该卡片。
- `apps/web/src/components/ChatView.tsx`：将“滚动到末尾”文字胶囊替换为 Synara 风格的纯下箭头圆形按钮；点击和无障碍标签仍保留。

## 2026-08-10 隐藏搜索快捷键提示

- `apps/web/src/components/LegacySidebar.tsx`：搜索入口继续保留点击和 `⌘K` 快捷键功能，但隐藏搜索栏右侧的可见 `⌘K` 提示；同步移除该入口不再需要的 `Kbd` 展示依赖。

## 2026-08-10 用量单位统一

- `apps/web/src/usage/usageFormat.ts`：用量数字统一走中文单位格式化器：`≥1亿` 显示“亿”，`1万–1亿` 显示“万”，低于 `1万` 使用千位分隔整数；最多保留两位小数并去掉尾随零。
- `apps/web/src/components/usage/UsagePage.tsx`、`UsageProviderChart.tsx`：标题、提供商明细、统计卡片、模型/日期表格、图表坐标轴和悬浮提示全部复用同一格式化器；移除“个 Token”混搭文案，保留技术术语 `Token`。
- `apps/web/src/usage/usageFormat.test.ts`：锁定 `8.78亿`、`2700万`、`273万`、`10.8万` 和 `8,765` 等边界与代表性输出。

## 2026-08-10 用量术语统一

- `apps/web/src/components/usage/UsagePage.tsx`、`UsageProviderChart.tsx`、`packages/zh-locale/src/zhCN.ts`：用量页用户文案统一使用 `Token`，将“原始令牌成本 / 已处理令牌 / 每日已处理令牌”改为“原始 Token 成本 / 已消耗 Token / 每日消耗的 Token”。
- 提供商明细中的 `100.0% 的成本` 改为“成本占比 100.0%”，Token 模式对应显示“Token 占比 …”，明确百分比是成本或 Token 在当前统计范围内的占比。

## 2026-08-10 新建会话英雄区位置

- `apps/web/src/components/ChatView.tsx`：新建会话的标题与输入框整体使用 Synara 同款 `-translate-y-16`，相对当前居中位置上移 `64px`；仅作用于空白草稿英雄区，已有对话的底部输入框不变。
- 参考源码：`/Users/alfie/Developer/Synara-ZH/apps/web/src/components/ChatView.tsx` 的空白落地容器同样使用 `className="flex w-full -translate-y-16 flex-col justify-center"`。

## 2026-08-10 线程摘要与输入框状态条

- `packages/zh-locale/src/zhCN.ts`、`apps/web/src/localization/zhCN.test.ts`：工具流折叠摘要从 `+N 个之前的工具调用` 收敛为 `+N 个工具调用`；底层 `previous tool calls` 识别规则保留，展开/折叠能力不变。
- `apps/web/src/personalUi.ts`、`apps/web/src/components/ChatView.tsx`：隐藏输入框下方的“本地检出”和当前分支名状态条；检出、切换工作区、分支选择和相关状态逻辑保留，只移除这条个人不需要的可见栏。

## 上游同步原则

更新入口：

```sh
git fetch upstream main
git merge upstream/main
```

同步前确认没有未提交的 tracked 修改。冲突时先理解上游新行为，再按“上游功能 + 本地必须保留定制”处理，禁止机械选择一边覆盖另一边。

每次同步后必须：

1. 更新本文件的基线和盘点日期。
2. 重新检查 `customizations/translation-inventory.md` 中的 P0 工作流。
3. 跑定制守卫、相关测试、类型检查和一次正式构建。
4. 只在真实 T3 Code 窗口逐项核对后覆盖安装。

## 构建、签名与安装硬规则

- 只做一次最终构建和一次覆盖安装；扫描、记录和修改阶段不反复安装。
- 构建前必须保留仓库根目录的 `.env` 公共连接配置（由 `.env.example` 提供），否则 `Connections` 页面会按设计隐藏 `T3 Connect`、`Publish agent activity` 和云连接空状态提示；这不是汉化层的可选项。
- 只使用本机现有的本人 Apple 签名身份：`Apple Development: jet.deng@me.com (PTY74USJAK)`，除非本机实际身份已变化。
- Electron hardened runtime 所需的 JIT/动态库权限记录在 `customizations/macos-electron.entitlements.plist`，不携带上游团队专属的 Associated Domains 权限。
- 运行前先确认签名身份可用；禁止调用会要求输入钥匙串密码的流程。
- 如果签名需要密码、身份不可用、只能退回 ad-hoc，立即停止，不报告为完成。
- 构建生成的 DMG/ZIP 只作为临时产物，验收后删除；长期只保留 `/Applications/T3 Code.app` 和源码证据。
- 构建签名、Bundle、安装路径和真实窗口状态分别验证，不能拿其中一项冒充另外三项。

## 完成定义

只有同时满足以下条件，才可以说 T3 Code 汉化完成：

- 盘点清单已闭环，没有“看到了但以后再翻”的 P0/P1 项。
- Web UI、动态工作流、Electron 菜单和原生对话框均已覆盖。
- 相关测试/类型检查/构建通过。
- 使用本人签名完成，过程中没有密码提示。
- 覆盖安装后的真实 T3 Code 窗口逐页可见中文。
- 至少开一个真实测试线程，从发送到工具调用、等待、完成/失败恢复走完，并确认工作流没有漏翻。
