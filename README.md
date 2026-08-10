# 给产品人的 Agent 速成课

> **不写一行代码，看懂所有 AI Agent 产品的底层逻辑。**
> 面向产品经理、运营和所有非工程背景的 AI 从业者。

📖 **在线阅读：[https://你的用户名.github.io/ai-harness-tutorial/](#)（GitHub Pages，发布后替换此链接）**

![lessons](https://img.shields.io/badge/课程-7%20节%20+%20案例课-b3541e) ![products](https://img.shields.io/badge/解剖产品-10%20款-1a1a18) ![quiz](https://img.shields.io/badge/测验-24%20道即时反馈-2f6b3a) ![license](https://img.shields.io/badge/license-MIT-d8d4c8)

---

## 为什么做这门课

ChatGPT、Codex、Claude Code、Cursor、Manus、千问办公、WorkBuddy、Qoder……
每个人都在聊 Agent，但大多数产品人只能复述营销话术。这门课用 **4 节核心课 + 3 节真实产品解剖**，让你拥有自己的分析框架：

- 看到任何 Agent 产品，能推断它的架构取舍
- 和工程师对等对话：`tool_use`、`stop_reason`、`pass^k`、Compaction……
- 为 Agent 产品定义正确的指标，而不是"感觉变好了"

## 课程地图

| # | 课程 | 一句话收获 |
|---|---|---|
| 01 | [Harness：模型之外的那半个产品](lessons/0001-harness-overview.html) | 产品体验差距的主战场不在模型，在 Harness |
| 02 | [Agent Loop：思考-行动-观察循环](lessons/0002-agent-loop.html) | 一切 Agent 的内核是一个 while 循环 |
| 03 | [上下文工程：治理注意力预算](lessons/0003-context-engineering.html) | 上下文是稀缺资源，压缩/笔记/子 Agent 是三板斧 |
| 04 | [Agent 评估：把"感觉变差"变成数字](lessons/0004-agent-evaluation.html) | 定义成功、度量成功、守护成功——PM 的主场 |
| 05 | [案例：解剖 Qoder 与千问办公](lessons/0005-case-anatomy-qoder-qwenwork.html) | 垂直深 Harness vs 横向交付平台 |
| 06 | [案例：七款热门产品的分类学](lessons/0006-case-taxonomy-popular-agents.html) | 超级应用 / 编程 Harness / 交付平台三类物种 |
| 07 | [案例：十款产品 × 六维度全矩阵](lessons/0007-case-matrix-ten-products.html) | 从结对同事到数字员工的组织角色阶梯 |

📌 每课附**即时反馈小测验**；速查卡（可打印）在 [reference/](reference/)。

## 这门课不一样在哪

- **立场明确**：每个概念都落到"你能做什么产品决策"
- **拒绝二手信息**：全部论断引用 Anthropic / OpenAI / Cognition 官方一手资料，课内附出处
- **学了就练**：案例课直接解剖真实在售产品，附对练题

## 本地阅读

所有课程是纯静态 HTML，克隆后浏览器直接打开 `index.html` 即可，无需任何依赖。

## 目录结构

```
├── index.html        # 课程首页（GitHub Pages 入口）
├── lessons/          # 7 节课程
├── reference/        # 3 张速查卡
└── assets/           # 共享样式与测验组件
```

## 参与共建

- 发现错误 → 提 Issue
- 想提名下一个被解剖的产品 → 提 Issue，标签 `产品提名`
- 补充一手资料 → 欢迎 PR

觉得有用请点 ⭐ Star，这是持续更新的最大动力。

## License

[MIT](LICENSE) · 课程内容基于公开一手资料整理，观点归作者所有。
