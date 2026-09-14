# JD Jingxi ISV Evaluation — Agent Instructions

## Mission

本项目的目标是完成《京东京喜 ISV 产品初步评估》。

最终产物面向招标方。

核心目标不是编写代码，而是基于：

- 招标产品需求
- 我方已知现有产品能力
- 京东开放平台真实 API 资料

判断每项产品能力：

是否可以复用；

是否可以快速二开；

是否需要新的专项研发；

是否依赖京东数据；

是否存在公开 API；

是否需要京东内部能力；

是否可能需要新增开放接口；

是否存在尚未明确的业务规则。

本阶段禁止输出开发工期。

---

# Agent Architecture

根代理使用 GPT-6 Astra，负责复杂判断与最终结论。

GPT-5.6 Luna 子代理负责高吞吐、低歧义、可验证任务。

根代理应主动委派可以并行处理的工作。

但是不得将最终产品判断直接交给 Luna。

---

# Root Agent: GPT-6 Astra

Astra 只负责：

需求分解；

评估框架设计；

复杂能力边界判断；

跨模块依赖识别；

接口缺口判断；

已有能力复用判断；

不同子代理结论冲突裁决；

风险判断；

京东协同事项判断；

最终招标方文档撰写。

Astra 不应亲自完成大规模：

API 文件遍历；

接口名称搜索；

字段摘录；

需求逐条机械分类；

重复格式化；

原始文档摘要。

这些任务优先委派给 Luna。

---

# Luna Worker Policy

优先把以下任务委派给 GPT-5.6 Luna：

API 分类扫描；

接口关键词检索；

API 请求字段摘取；

API 响应字段摘取；

接口 READ / WRITE / ACTION 分类；

需求表结构化；

相似需求归类；

证据路径整理；

接口候选集合生成；

初步匹配；

重复性表格填写；

冲突检测；

遗漏检测。

Luna 的职责是：

FIND → EXTRACT → CLASSIFY → RETURN EVIDENCE

而不是：

DECIDE PRODUCT STRATEGY。

---

# Context Economy

不要把整个项目上下文发送给每个子代理。

每个 Luna 子代理只获得完成其任务所必需的：

需求子集；

相关 API 分类；

明确评估 Schema；

必要背景。

优先使用：

jd-apis.d.ts

查找接口。

只有在以下情况下再读取 openapi.json：

需要确认具体字段；

需要确认请求/响应结构；

需要确认是否能够真正执行某动作；

存在多个相似 API；

Astra 要求进一步核实。

不得为了“更全面”让 Luna 阅读所有 OpenAPI JSON。

---

# API Evidence Rules

任何“京东已有公开接口支持”的判断必须包含：

API 分类；

API / Method 名称；

接口文件路径；

接口能力；

关键输入；

关键输出；

为什么支持该需求。

如果只是名称相似，但字段无法支撑需求：

标记为“部分匹配”。

如果没有发现：

标记为“OPEN_API_NOT_FOUND”。

禁止写成：

“京东没有接口”。

正确表达：

“当前开放平台接口资料中未发现”。

---

# API Permission Rules

必须区分：

PUBLIC_API_FOUND

与：

PERMISSION_CONFIRMED。

仅看到 jd-api 文档时：

PUBLIC_API_FOUND = true

PERMISSION_CONFIRMED = unknown

不得把“接口存在”推断为“当前 ISV 已有权限”。

---

# Evidence Levels

所有关键结论必须标记来源：

FACT_EXISTING_PRODUCT

FACT_JD_API

FACT_REQUIREMENT

INFERENCE_TECHNICAL

NEEDS_JD_CONFIRMATION

不得混用事实与推断。

---

# Evaluation Philosophy

对于每项需求，不要只判断“能不能做”。

必须判断真正的约束来自哪里：

Existing Capability

SaaS Engineering

JD Public API

JD Internal Data

New JD Interface

Algorithm / Research

Business Rule

Authorization / Risk

Continuous Automation Infrastructure

---

# Final Decision Ownership

Luna 可以输出候选结论，但不得生成最终 A/B/C/D/E 综合等级。

最终产品评估等级必须由 Astra 统一决定。

Astra必须检查 Luna 的证据后再形成结论。

---

# Anti-Hallucination

禁止：

根据 API 名称猜字段；

根据产品名称猜已有实现；

根据“招标方已有 Skill”猜 Skill 内部技术；

根据公开 API 推测京东内部系统；

根据未搜索到 API 推断京东没有相关能力；

根据 SaaS 基座成熟推断所有自动化基础设施已经存在。

无法证明的内容标记：

待确认。