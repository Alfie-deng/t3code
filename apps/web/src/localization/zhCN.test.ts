import { describe, expect, it } from "vite-plus/test";

import { translateZhCnUiText, translateZhCnWhenExpression } from "./zhCN";

describe("T3 Code 简体中文工作流文案", () => {
  it("translates the observed running, tool, and completion states", () => {
    expect(translateZhCnUiText("Worked for 18s")).toBe("已运行 18 秒");
    expect(translateZhCnUiText("Working for 1m 2s")).toBe("正在运行 1 分 2 秒");
    expect(translateZhCnUiText("Ran command pwd && ls -la")).toBe("已运行命令 pwd && ls -la");
    expect(translateZhCnUiText("2 tool calls")).toBe("2 次工具调用");
    expect(translateZhCnUiText("+2 previous tool calls")).toBe("+2 个工具调用");
    expect(translateZhCnUiText("Show 2 previous tool calls")).toBe("显示 2 个工具调用");
    expect(translateZhCnUiText("You stopped after 39s")).toBe("已停止，运行 39 秒");
    expect(translateZhCnUiText("Waiting for demo's configuration.")).toBe("等待 demo 的配置。");
  });

  it("translates approval, input, settings, and composer chrome", () => {
    expect(translateZhCnUiText("PENDING APPROVAL")).toBe("等待权限确认");
    expect(translateZhCnUiText("Command approval requested")).toBe("请求批准执行命令");
    expect(translateZhCnUiText("Select one or more options.")).toBe("选择一个或多个选项。");
    expect(translateZhCnUiText("Settings")).toBe("设置");
    expect(translateZhCnUiText("Open user menu")).toBe("打开用户菜单");
    expect(translateZhCnUiText("Manage account")).toBe("管理账户");
    expect(translateZhCnUiText("Sign out")).toBe("退出登录");
    expect(translateZhCnUiText("Passkeys")).toBe("通行密钥");
    expect(translateZhCnUiText("Add a passkey")).toBe("添加通行密钥");
    expect(translateZhCnUiText("Full access")).toBe("完全访问");
    expect(
      translateZhCnUiText("Ask anything, @tag files/folders, $use skills, or / for commands"),
    ).toBe("输入任何问题，@ 标记文件/文件夹，$ 使用技能，或用 / 输入命令");
  });

  it("keeps the project cover and workflow/tool titles natural", () => {
    expect(translateZhCnUiText("What should we do in Agent工作台?")).toBe(
      "我们该在 Agent工作台 构建什么？",
    );
    expect(translateZhCnUiText("Web search: T3 Code localization")).toBe(
      "网页搜索: T3 Code localization",
    );
    expect(translateZhCnUiText("Read 42 lines")).toBe("已读取 42 行");
    expect(translateZhCnUiText("Search files")).toBe("搜索文件");
    expect(translateZhCnUiText("Search the web")).toBe("搜索网页");
    expect(translateZhCnUiText("List available tools")).toBe("列出可用工具");
    expect(translateZhCnUiText("Tool")).toBe("工具");
    expect(translateZhCnUiText("T3-code · preview_snapshot")).toBe("T3-code · 读取预览快照");
    expect(translateZhCnUiText("T3-code__preview_open")).toBe("T3-code__打开预览");
    expect(translateZhCnUiText("t3-code__preview_recording_start")).toBe("t3-code__开始录制预览");
    expect(translateZhCnUiText("8/10mcp__kimi_cu__get_app_state T3 Code T3")).toBe(
      "第 8/10 步：读取应用状态",
    );
    expect(translateZhCnUiText("mcp__node_repl__js")).toBe("运行 JavaScript（Node 内核）");
    expect(translateZhCnUiText("MCP: functions.exec")).toBe("MCP 工具：functions.exec");
    expect(translateZhCnUiText("functions.exec")).toBe("工具调用：functions.exec");
    expect(translateZhCnUiText("Use T3 Code light mode")).toBe("使用T3 Code浅色模式");
    expect(translateZhCnUiText("Terminal: Split Vertical")).toBe("终端：垂直拆分");
    expect(translateZhCnUiText("配置, step 3")).toBe("配置，第 3 步");
    expect(translateZhCnUiText("Config, step 3")).toBe("配置，第 3 步");
    expect(translateZhCnUiText("Native healthy")).toBe("原生 健康");
    expect(translateZhCnUiText("7/717 retained")).toBe("7/717 已保留");
  });

  it("translates settings menus, diagnostics, and thread actions", () => {
    expect(translateZhCnUiText("Update the title for /Users/alfie/Codex/Agent工作台.")).toBe(
      "更新 /Users/alfie/Codex/Agent工作台 的标题。",
    );
    expect(translateZhCnUiText("Update the project title.")).toBe("更新项目标题。");
    expect(translateZhCnUiText("Environment:")).toBe("环境：");
    expect(translateZhCnUiText("Environment: Alfie Macbook")).toBe("环境：Alfie Macbook");
    expect(translateZhCnUiText("Bash")).toBe("运行命令");
    expect(translateZhCnUiText("Shell")).toBe("运行命令");
    expect(translateZhCnUiText("Command execution")).toBe("运行命令");
    expect(translateZhCnUiText("Raw token cost")).toBe("原始 Token 成本");
    expect(translateZhCnUiText("Processed tokens")).toBe("已消耗 Token");
    expect(translateZhCnUiText("Balanced")).toBe("均衡");
    expect(translateZhCnUiText("4m ago")).toBe("4分钟前");
    expect(translateZhCnUiText("Reset Claude provider settings to default")).toBe(
      "将Claude提供商设置恢复为默认值",
    );
    expect(translateZhCnUiText("Show where Background is used")).toBe("显示“背景”的使用位置");
    expect(translateZhCnUiText("Sampling every 1 second")).toBe("每 1 秒 采样");
    expect(translateZhCnUiText("1.54s observed CPU time")).toBe("1.54 秒观测 CPU 时间");
    expect(translateZhCnUiText("Snooze")).toBe("暂缓");
    expect(translateZhCnUiText("In 1 hour")).toBe("1 小时后");
    expect(translateZhCnUiText("Tomorrow (9:00 AM)")).toBe("明天（9:00 AM）");
    expect(translateZhCnUiText("Checked 2m ago")).toBe("已检查 2分钟前");
    expect(translateZhCnUiText("Project name in Alfie Macbook")).toBe("Alfie Macbook 中的项目名称");
    expect(translateZhCnUiText("Grouping rule for Alfie Macbook")).toBe("Alfie Macbook 的分组规则");
    expect(translateZhCnUiText("Warning")).toBe("警告");
    expect(translateZhCnUiText("Interface font family")).toBe("界面字体");
    expect(translateZhCnUiText("Checked just now")).toBe("已检查刚刚");
    expect(translateZhCnUiText("Average CPU 1.0%, peak CPU 2.5%")).toBe(
      "CPU 平均值 1.0%，峰值 2.5%",
    );
    expect(translateZhCnUiText("Use #2563eb accent")).toBe("使用 #2563eb 强调色");
    expect(
      translateZhCnUiText(
        "Configure an additional provider instance on Alfie Macbook — for example, a second Codex install pointed at a different workspace.",
      ),
    ).toBe(
      "在 Alfie Macbook 上配置额外的提供商实例——例如，安装第二个 Codex 并将其指向不同的工作区。",
    );
    expect(translateZhCnUiText("Provider turn start failed")).toBe("提供商回合启动失败");
    expect(translateZhCnUiText("Relay environment listing timed out.")).toBe(
      "Relay 环境列表加载超时。",
    );
    expect(translateZhCnUiText("Choose custom accent color for Cursor")).toBe(
      "为 Cursor 选择自定义强调色",
    );
    expect(translateZhCnUiText("33 models available.")).toBe("33 个可用模型。");
    expect(translateZhCnUiText("GitHub availability")).toBe("GitHub 可用性");
    expect(translateZhCnUiText("1 upstream provider connected through OpenCode.")).toBe(
      "已通过 OpenCode 连接 1 个上游提供商。",
    );
    expect(translateZhCnUiText("T3 Connect")).toBe("T3 Connect");
    expect(translateZhCnUiText("Publish agent activity")).toBe("发布智能体活动");
    expect(
      translateZhCnUiText(
        "Send activity from this environment to your mobile clients for push notifications and Live Activities. Works without a T3 Connect tunnel.",
      ),
    ).toBe(
      "将此环境的活动发送到移动客户端，以接收推送通知和实时活动。无需 T3 Connect 隧道也能工作。",
    );
    expect(
      translateZhCnUiText(
        "Click “Add environment” to pair another environment, or connect one from T3 Connect.",
      ),
    ).toBe("点击“添加环境”以配对另一个环境，或从 T3 Connect 连接环境。");
    expect(
      translateZhCnUiText(
        "ProviderAdapterProcessError: Provider adapter process error (codex) for thread thread-1: session session-1 is archived. Run `codex unarchive session-1` to unarchive it first. at...",
      ),
    ).toBe(
      "提供商适配器进程错误（ProviderAdapterProcessError，codex）：对话 thread-1 的会话 session-1 已归档。请先运行 `codex unarchive session-1` 取消归档。",
    );
  });

  it("translates keybinding conditions for display without changing expressions", () => {
    expect(translateZhCnUiText("terminalFocus")).toBe("终端已聚焦");
    expect(translateZhCnUiText("modelPickerOpen")).toBe("模型选择器已打开");
    expect(translateZhCnWhenExpression("!terminalFocus")).toBe("终端未聚焦");
    expect(translateZhCnWhenExpression("terminalOpen && !modelPickerOpen")).toBe(
      "终端已打开 且 模型选择器未打开",
    );
  });
});
