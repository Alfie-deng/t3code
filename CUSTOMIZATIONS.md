# Alfie · T3 Code 个人定制真源

给下一位 Agent（或 Alfie）接手用。**同步上游、继续定制、覆盖安装前，先完整读本文件。**

本文件只回答一件事：相对上游 `pingdotgg/t3code`，这个私人发行版**必须保留什么、不能怎么破坏、合完怎么验收**。

- 上游功能历史 → `CHANGELOG.md`
- 逐页汉化盘点 → `customizations/translation-inventory.md`
- 密钥 / Token / Cookie → **禁止**写入本文件或仓库

---

## 0. 接手 60 秒

| 项          | 值                                                             |
| ----------- | -------------------------------------------------------------- |
| 本地路径    | `/Users/alfie/developer/t3code`（`~/Developer/t3code` 同目录） |
| 私人 fork   | `https://github.com/Alfie-deng/t3code`（remote：`origin`）     |
| 上游        | `https://github.com/pingdotgg/t3code`（remote：`upstream`）    |
| 工作分支    | `agent/zh-cn-personal-desktop`                                 |
| 桌面安装    | `/Applications/T3 Code.app`，Bundle `com.t3tools.t3code`       |
| 手机安装    | 真机 Bundle `com.jetdeng.t3code`（个人 Team 覆盖生产包名）     |
| 签名        | `Apple Development: jet.deng@me.com (PTY74USJAK)`              |
| GitHub 命令 | 用 `~/bin/git`（见 `~/developer/AGENTS.md`）                   |

**分支语义（别搞混）**

| 名字              | 含义                                                              |
| ----------------- | ----------------------------------------------------------------- |
| `HEAD` / 私人 tip | 当前私人分支尖端（含全部本地定制）                                |
| `上次合入上游`    | 最近一次 `merge upstream/main` 落在私人分支上的合并提交或当时 tip |
| `upstream/main`   | 官方最新；只 fetch 不代表已合入                                   |

盘点时三者都要写清。只写一个 SHA 等于没写。

---

## 1. 当前盘点（2026-08-12）

| 字段                                            | 值                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| 私人 tip                                        | `e9b0cb372`（盘点文档；合并本体 `edd915ee4`）                                        |
| 上次合入上游                                    | `edd915ee4`（合入上游 23 笔至 `5a8461480`；主题/侧栏/手机作曲与标题重生/用量近 24h） |
| 合并基点 merge-base（相对当下 `upstream/main`） | `5a8461480`（已与 `upstream/main` 对齐）                                             |
| 官方 tip（已 fetch）                            | `5a8461480`                                                                          |
| 桌面安装版                                      | `/Applications/T3 Code.app` `0.0.33`（**尚未**用本合并覆盖安装；等 Alfie 到电脑旁）  |
| 手机安装版                                      | 真机 `com.jetdeng.t3code`（**尚未**用本合并重装；等 Alfie 到电脑旁）                 |

下次合完上游后：立刻改本表三行 tip / 上次合入 / merge-base，并勾验收清单。

### 本轮合并备注（2026-08-12）

- 冲突优先保留：侧栏藏 PR（`PERSONAL_UI.hideSidebarPullRequests`）、发送钮靛蓝尺寸、用量中文（含「近 24 小时」）、手机 `t()` 汉化、隐藏 ultracode effort。
- 吸收上游：侧栏底部图标化 + Back、主题 OKLCH/Open VSX、手机作曲稳定与标题重生、用量按小时。
- `pnpm install` 因本机 Corepack 拉 pnpm 失败未重跑；lockfile 先用上游版。到电脑旁装桌面/iOS 前先 `pnpm install`。
- 合前 stash：`wip: sticky working timer before upstream merge`（空态计时 WIP）仍在 stash，未并入本提交。

---

## 2. 硬规矩（违反即翻车）

1. **合并方式**：`git fetch upstream main` → 工作区干净 → `git merge upstream/main`。禁止 `git checkout upstream/main -- <file>` 整文件盖本地。
2. **冲突顺序**：先保住下面「必须保留」行为 → 再吸收上游结构和新功能 → 再跑测试/构建 → 真窗口或真机验收后才覆盖安装。
3. **桌面真源 vs 手机**：模型隐藏/排序/收藏以桌面 `~/.t3/userdata/client-settings.json` 为真源；手机**只读投影，禁止写回**。
4. **界面减法 ≠ 删功能**：隐藏的入口必须仍能从快捷键、命令面板、设置或别的路径用到。
5. **签名**：只用 Alfie 本机 Development 证 + `customizations/macos-electron.entitlements.plist`；不要默认 ad-hoc；不要在对话里要钥匙串密码。
6. **产物**：不保留 dmg/zip；长期靠 `/Applications` + 源码。构建缓存可再生（`node_modules`、`dist`、`ios/Pods` 等），可清。
7. **宿主会话**：若 Agent 正在 `/Applications/T3 Code.app` 里跑，覆盖安装会杀会话。先让人退出，或在外部终端/Cursor 做覆盖。
8. **本仓没有** Synara 那种 `guards.json` 机械守卫。同步后靠本文件验收清单 + 测试，别假设有自动门禁。

---

## 3. 必须保留 · 行为定制总表

状态栏：`必须保留` = 合上游时不得丢；`已启用` = 当前生效。汉化「词典增量」细节以 `translation-inventory.md` 为准，这里只锁**行为与入口**。

### 3.1 简体中文层

状态：**必须保留**

| 层                     | 路径 / 说明                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| 共享词典真源           | `packages/zh-locale`（`@t3tools/zh-locale`）— DOM-free；桌面 MutationObserver + 手机 `t()` 共用 |
| Web 安装器             | `apps/web/src/localization/zhCN.ts`                                                             |
| 手机独有文案           | `apps/mobile/src/localization/zhCN.ts` 的 `MOBILE_UI_TEXT`；能公共的一律进共享包                |
| Clerk                  | `apps/web/src/main.tsx` 注入 `@clerk/localizations` 的 `zhCN`                                   |
| Electron 菜单 / 对话框 | `apps/desktop/src/applicationMenuZh.ts`、`desktopDialogZh.ts` 及对应 Electron 接线              |
| 盘点                   | `customizations/translation-inventory.md`                                                       |

边界：用户消息、助手正文、代码、终端输出、路径、URL、模型名、底层工具协议名**不翻**；可见 UI / 工具卡标题 / 状态 / 权限 / 错误 / 设置说明**必须翻**。

手机挂接点（公共词典改了这里自动受益）：

- `apps/mobile/src/features/threads/thread-work-log.tsx` → `t(row.summary)`（复制内容保持原文）
- `apps/mobile/src/features/threads/threadPresentation.ts` → 状态标签

### 3.2 Memmy 记忆桥

状态：**必须保留**（默认开；`T3_MEMMY_MEMORY_ENABLED=0` 可关）

- 核心：`apps/server/src/orchestration/memmyContextInjection.ts`（source=`t3`，env 前缀 `T3_MEMMY_*`）
- 注入：`ProviderCommandReactor` 在发给 provider 的 input 前缀 `<memmy_memory_context>`（**UI 不显示**）
- 写回：`ProviderRuntimeIngestion` 在 turn 完成/中止时收尾
- 测试：`memmyContextInjection.test.ts` + Reactor 断言
- 验收：新开真实会话发消息后，`~/.memmy/memory-service/memory.sqlite` 出现 `source='t3'`；界面无记忆标签明文

### 3.3 手机模型列表只读投影桌面

状态：**必须保留。桌面 ClientSettings 真源；手机只读，禁止写回。**

| 层       | 路径                                                                                                                                                                    |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 契约     | `packages/contracts`：`ClientModelListPreferences` → 可选 `ServerConfig.modelListPreferences` + 流事件 `modelListPreferencesUpdated`（勿塞进可写 `ServerSettings`）     |
| 服务端   | `apps/server/src/clientModelListPreferences.ts` 读/监视 `~/.t3/userdata/client-settings.json` 的 `favorites` + `providerModelPreferences`；`apps/server/src/ws.ts` 下发 |
| 客户端   | `packages/client-runtime/src/state/server.ts` 处理更新事件                                                                                                              |
| 手机应用 | `apps/mobile/src/lib/modelOptions.ts`（隐藏/排序/收藏；自定义模型被标隐藏仍可见）                                                                                       |
| 排序共享 | `packages/shared/src/modelOrdering.ts`；web `apps/web/src/modelOrdering.ts` 转导出                                                                                      |

文案：`Legacy models` / Show|Hide legacy models →「其他模型 / 显示|隐藏其他模型」。

模型设置行文案（共享词典，桌面/手机同改）：`Reasoning`/`Effort` →「思考强度」；`Service Tier` →「速度响应」；`Runtime`/`Runtime mode` →「操作权限」（勿用「服务等级」「运行时」这类怪译）。

附属（同批次，也要留）：

- 新任务草稿输入框 `placeholder=""`（`NewTaskDraftScreen.tsx`，不要恢复英文 Describe…）
- 模型设置选项标签走 `t()`

验收：

1. 桌面隐藏模型后，手机选择器变短；手机改不了桌面隐藏列表。
2. 设置 → 提供商详情仍可能看到「已隐藏」；选择器可见集才是投影结果。
3. 旧中转残留 slug（如 `opencodex/opencode-go/deepseek-v4-flash`）若仍是当前选型会以幽灵项出现——迁官方 slug 或藏掉；那是脏选型，不是投影失败。
4. 桌面 asar 可搜到 `modelListPreferences`；手机需 production Release 重装。

### 3.4 Nightly / 星夜应用图标

状态：**必须保留**

- 真源：`scripts/lib/brand-assets.ts` → `PERSONAL_DEFAULT_APP_ICON_PATHS`
- 必留资产：`assets/nightly/nightly-ios-icon-solid.png`（不是临时产物）
- 接线：`apps/mobile/app.config.ts`、`BrandMark.tsx`、`scripts/build-desktop-artifact.ts`、桌面 `electron-launcher` / `resources/icon.*`
- 禁止：`icons:export` 后把 production 图标改回 `assets/prod/black-*`；禁止删 solid 图标
- 范围：应用图标；网页 favicon / 启动画面渠道识别不要一锅端

另：启动 splash `imageWidth: 110`（上游常见 220）— `apps/mobile/app.config.ts`，**必须保留**。

### 3.5 桌面 UI 精简与排版（`PERSONAL_UI`）

状态：**必须保留** · 开关集中在 `apps/web/src/personalUi.ts`

当前标志：

```ts
hideTopBarBrand: false; // 显示「T3 Code」；Code 用 data-translation-skip 保英文
hideTopBarProjectActions: true; // 藏「添加操作」
hideTopBarOpenInEditor: true;
hideTopBarGitActions: true;
hideTopBarTerminalToggle: true;
hideSidebarPullRequests: true; // 藏侧栏左下「Pull Requests」；路由与线程内 PR 仍可用
hideRuntimeModeControl: true; // 藏「完全访问」及左侧分隔线
hideComposerContextStrip: true; // 藏输入框下检出/分支状态条
compactComposer: true;
hideComposerGuide: true;
newThreadComposerPlaceholder: "随心构建你的想法";
threadContentFontSizeStepPx: 1; // 仅线程正文域 +1px，不接全局字号设置
```

连带必须保留的实现细节：

| 项                        | 位置 / 要点                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| 线程标题窄点击区          | `ChatHeader.tsx`：标题菜单按钮勿 `flex-1`；空白区可拖窗                                    |
| 已有对话占位              | 「提出后续修改」；仅草稿英雄态用新线程占位（`ChatComposer` 的 draft 分流，`b8a16de91`）    |
| 紧凑输入框                | `ComposerPromptEditor` `compact`：`2lh` 等；草稿态略增高且勿污染已有对话                   |
| 封面文案                  | `DraftHeroHeadline`：「想在〔项目名〕构建什么？」；无虚线下划线                            |
| 英雄区上移                | `ChatView` 空白草稿 `-translate-y-16`                                                      |
| 发送/停止外形             | 外圆各 -2px、右移 2px；箭头 mask 用 `public/synara-icons/arrow-up.svg`                     |
| 藏最终变更卡片            | `MessagesTimeline`：末尾 changed files 摘要卡不渲染；差异能力仍在                          |
| 滚动胶囊 → 下箭头圆钮     | `ChatView`                                                                                 |
| 藏搜索栏 ⌘K 提示          | `LegacySidebar`：功能在，可见 Kbd 提示无                                                   |
| 藏侧栏 Pull Requests      | `SidebarChrome`：`hideSidebarPullRequests`；手输 `/pull-requests`、线程 PR 仍可用          |
| 提供商状态卡片            | `providerStatusBannerErrorsOnly`：只弹 error，藏「正在检查可用性」等 warning               |
| 拖入 Markdown/文本        | `composerTextFileDrop`：拖入后把正文塞进输入框（带头文件名）；协议仍只支持图片附件         |
| 聊天气泡 Markdown 表格    | 自动换行贴合气泡；字号从 `0.75rem` 提到 `sm`（`0.875rem` / `--thread-font-size-sm`）       |
| 发送后空态 Working 灯     | 一点发送就开始「正在运行」计秒；冷启动接着数到真 running，不归零；切线程回来也不从 1s 重数 |
| 用量中文单位与 Token 术语 | `packages/shared/src/usageFormat.ts` + Usage 页组件                                        |
| 运行时错误汉化            | 共享词典集中；见 §3.1 与 inventory                                                         |

### 3.6 手机 UI / 视觉 / 交互钉

状态：**必须保留**（合上游手机改动时逐条核对）

| 定制                    | 位置                                                                           | 要点                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 靛蓝强调色              | `apps/mobile/global.css`                                                       | 亮色 primary / user-bubble `#5856d6`；暗色 `#5e5ce6`。列表工作状态色见 `threadPresentation` / list items                         |
| 线程列表苹方            | `thread-list-items.tsx`、`thread-list-v2-items.tsx`                            | iOS `PingFangSC-Regular` / `Semibold`                                                                                            |
| 主页项目组头行距收紧    | `thread-list-items.tsx` `ThreadListGroupHeader`                                | 折叠只露文件夹时，非首行 `paddingTop` 从 24→10、`paddingBottom` 12→6；勿恢复上游松散间距                                         |
| 重连文案固定短句        | `workspace-connection-status.ts`、`ThreadComposer`、`WorkspaceConnectionTitle` | 连接中/重试一律 `正在重新连接…`，不拼环境名；状态字走苹方 Semibold                                                               |
| 滚到底钮贴输入框上方    | `ThreadFeed.tsx`                                                               | `bottom = contentInsetEndAdjustment + safeArea修正 + 8`；勿沉到手势条/输入框底下                                                 |
| 藏主页 iOS 搜索栏筛选钮 | `HomeHeader.tsx` `IosHomeHeader`                                               | 不传 `filterMenu` / `filterButtonId` 给 native mail search toolbar；搜索框靠左；筛选能力仍可从别处/逻辑保留                      |
| 去 ALPHA 徽标           | `CompactBrandTitle.tsx`                                                        | 只留 T3 Code 字标                                                                                                                |
| 藏线程页右上工具栏      | `ThreadRouteScreen.tsx`                                                        | `renderThreadRouteBody(false)` — 藏 git/files/terminal 顶栏钮；能力别删代码路径                                                  |
| 线程标题字重            | 同文件 headerTitleStyle                                                        | `800 → 700`                                                                                                                      |
| Bundle / 能力裁剪       | `app.config.ts` + `plugins/withoutIosPersonalTeamCapabilities.cjs`             | 个人 Team 用 `com.jetdeng.t3code`；插件去掉推送/Sign in with Apple/App Group/Associated Domains 等个人 Team 签不了的 entitlement |
| prebuild 后修复         | `scripts/fix-ios-prebuild.sh`                                                  | **每次** `expo prebuild` 后、`xcodebuild` 前跑；抬 iOS deployment target 到 18，修 Xcode 与旧 Pod                                |

### 3.7 构建与签名资产

状态：**必须保留**

- `customizations/macos-electron.entitlements.plist` — Electron hardened runtime；无上游 Associated Domains
- 仓库根 `.env`（由 `.env.example` 来，**不提交密钥**）— Connections 页需要；缺了会藏 T3 Connect 等，不是汉化开关

---

## 4. 合上游操作卡

```sh
cd ~/developer/t3code
~/bin/git status                    # 必须干净（HANDOFF/_work 未跟踪可忽略，勿 add）
~/bin/git fetch upstream main
~/bin/git log --oneline HEAD..upstream/main   # 先读再合
~/bin/git merge upstream/main
```

冲突时按文件打开本文件 §3，对号保留本地行为。尤其警惕：

- `apps/web/src/personalUi.ts`、`ChatComposer`、`ChatHeader`、`MessagesTimeline`、`DraftHeroHeadline`
- `packages/zh-locale/**`、`apps/web/src/localization/**`
- `apps/server/**/memmy*`、`clientModelListPreferences*`、`ws.ts`
- `apps/mobile/**/modelOptions*`、`ThreadFeed`、`HomeHeader`、`ThreadRouteScreen`、`global.css`、`app.config.ts`
- `scripts/lib/brand-assets.ts`、`scripts/build-desktop-artifact.ts`

合完清单：

1. 更新 §1 盘点三行 SHA + 日期。
2. 扫 `translation-inventory.md` P0；上游新英文进共享词典增量层，勿打翻整本字典。
3. 有则跑：定制相关单测、web/mobile/desktop typecheck、需要的正式构建。
4. 真桌面窗口 + 真机（若动了手机）按 §5 验；再覆盖安装。
5. 若上游自制了 ClientSettings 远程同步：先比写回方向，**本 fork 仍禁止手机写回隐藏列表**。

---

## 5. 验收清单（交付门）

### 桌面（真实 `/Applications/T3 Code.app` 窗口）

- [ ] 顶部：有 T3 Code 品牌；无项目操作/编辑器/Git/终端抽屉钮；输入框无「完全访问」条
- [ ] 侧栏左下：无 Pull Requests；Usage / Settings 仍在
- [ ] 新线程封面文案与上移；已有对话占位「提出后续修改」；草稿占位不污染已有对话
- [ ] 线程正文略大于 chrome；末尾无变更摘要卡；搜索无可见 ⌘K 提示
- [ ] 工作流/工具卡/提供商错误可见中文；用户代码与终端原文不误伤
- [ ] 发一条真实消息：Memmy DB 有 `t3` 会话；UI 无 `<memmy_memory_context>`
- [ ] asar/`bin.mjs` 能搜到 `memmy-t3-bridge` 与 `modelListPreferences`（装过投影包时）

### 手机（真机 `com.jetdeng.t3code`）

- [ ] 图标为星夜 solid；splash 图标偏小（110）
- [ ] 气泡/发送键为靛蓝系，不是系统蓝/黑主色默认
- [ ] 列表标题苹方；主页搜索栏左侧无筛选钮
- [ ] 线程页右上无 git/files/terminal 三钮；标题非极粗 800
- [ ] 滚到底钮在输入框上方可点
- [ ] 模型选择器长度跟桌面隐藏偏好走；「其他模型」文案；草稿框无英文长 placeholder

### 构建签名

- [ ] `codesign -dv` 为 Alfie Development；带本仓 entitlements
- [ ] 无无故索取钥匙串密码；失败勿报完成

---

## 6. 桌面构建 → 覆盖安装 runbook

全程约 10–15 分钟。细节坑见表。

```sh
cd ~/developer/t3code
pnpm install --prefer-offline          # electron 卡住见下行镜像补救
security find-identity -v -p codesigning
# .env 必须存在

pnpm run build:desktop
strings apps/server/dist/bin.mjs | grep -o "memmy-t3-bridge" | head -1

node scripts/build-desktop-artifact.ts --skip-build --platform mac --target dir --arch arm64 --keep-stage
# 必须 --keep-stage
APP=$(ls -dt /var/folders/th/*/T/t3code-desktop-mac-stage-* | head -1)/app/dist/mac-arm64/"T3 Code (Alpha).app"

codesign --force --deep --sign "ADCEE876C506C947B0D27F5DF46DF94052FB38DA" \
  --options runtime \
  --entitlements customizations/macos-electron.entitlements.plist "$APP"
codesign --verify --deep --strict "$APP"

# 人先退出正在用的 T3；不要用「杀进程再 cp」的脚本（会杀宿主 Agent）
# 备份放到仓库本地目录（已进 .gitignore），禁止留 /Applications/T3 Code.bak.app
BAK_DIR="$PWD/.desktop-install-bak"
rm -rf "$BAK_DIR"
mkdir -p "$BAK_DIR"
mv "/Applications/T3 Code.app" "$BAK_DIR/T3 Code.app"
cp -R "$APP" "/Applications/T3 Code.app"    # 直接从 staging cp，勿经桌面/Finder
codesign --verify --deep --strict "/Applications/T3 Code.app"
open "/Applications/T3 Code.app"
# 打开成功后立刻清掉备份（不要留在应用程序里）
rm -rf "$BAK_DIR"
```

| 坑                      | 解法                                                                         |
| ----------------------- | ---------------------------------------------------------------------------- |
| pnpm 卡在 electron 下载 | npmmirror 下 zip → 解到对应 `node_modules/.../electron/dist` 并写 `path.txt` |
| 不带 `--keep-stage`     | staging 被清，`.app` 找不着                                                  |
| 脚本 `--signed`         | 缺 provisioning profile；改 unsigned + 手签                                  |
| 经 Finder/桌面拷贝      | resource fork → codesign 挂；只用 staging `cp -R`                            |
| 脚本先 kill T3          | 宿主会话一起死，后半段不跑                                                   |
| `/Applications/*.bak`   | 禁止；备份只用 `.desktop-install-bak/`，装成后删                             |

手机：`expo prebuild`（若需要）→ `bash scripts/fix-ios-prebuild.sh` → `pod install` / `expo run:ios --configuration Release --device <物理 UDID>`。真机 UDID 用系统设备号，不要用 CoreDevice UUID。锁屏时 launch 失败很常见。

---

## 7. 合并冲突时优先对照的文件

汉化与词典：`packages/zh-locale/**`、`apps/web/src/localization/**`、`apps/mobile/src/localization/**`、`apps/desktop/src/*Zh*`、`ElectronMenu`、`ElectronDialog`、预览 `PickPreload.ts`

桌面个人 UI：`personalUi.ts`、`ChatComposer.tsx`、`ComposerPromptEditor.tsx`、`ChatHeader.tsx`、`ChatView.tsx`、`DraftHeroHeadline.tsx`、`ComposerPrimaryActions.tsx`、`MessagesTimeline.tsx`、`LegacySidebar.tsx`、`index.css`、`public/synara-icons/**`

服务端定制：`memmyContextInjection.ts*`、`ProviderCommandReactor.ts`、`ProviderRuntimeIngestion.ts`、`clientModelListPreferences.ts*`、`ws.ts`

手机定制：`modelOptions.ts*`、`ThreadFeed.tsx`、`HomeHeader.tsx`、`ThreadRouteScreen.tsx`、`CompactBrandTitle.tsx`、`thread-list-*.tsx`、`threadPresentation.ts`、`global.css`、`app.config.ts`、`BrandMark.tsx`、`NewTaskDraftScreen.tsx`、`withoutIosPersonalTeamCapabilities.cjs`

品牌与打包：`scripts/lib/brand-assets.ts`、`scripts/build-desktop-artifact.ts`、`scripts/fix-ios-prebuild.sh`、`assets/nightly/**`、`customizations/macos-electron.entitlements.plist`

契约 / 共享：`packages/contracts`（`modelListPreferences`、相关 stream）、`packages/shared/src/modelOrdering.ts`、`packages/shared/src/usageFormat.ts`、`packages/client-runtime/src/state/server.ts`

---

## 8. 完成定义

同时满足才算「这轮定制/同步做完」：

1. §1 盘点数字与仓库现实一致。
2. §3 必须保留项在代码里仍在；合上游冲突已按行为优先处理。
3. §5 桌面（及若涉及则手机）验收勾完，有真实执行证据，不是只编译绿。
4. 未把密钥写进仓；未留下当交付物的 dmg/zip/`_work` 大包。

---

## 9. 维护约定

- 新增会改变默认值或可见行为的定制：**先改代码，再立刻在本文件 §3 加一条**（路径 + 验收），不要只写进词典假装是汉化。
- 能独立提交的定制独立提交，方便回滚。
- 退役定制：移到文末「已退役」并改验收项，不要静默删除历史。
- Alfie 说「提交 / 推送」才 commit / push；推送 ≠ 擅自提交。
