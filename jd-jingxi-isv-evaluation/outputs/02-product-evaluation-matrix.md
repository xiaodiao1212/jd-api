# 京东京喜 ISV 产品评估矩阵

本表覆盖60项原文需求。等级是基于需求、现有能力与本地接口资料的技术评估，不代表已上线、已授权或已完成联调。

复用分类和技术等级定义见 [评估口径](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\analysis\00-evaluation-framework.md>)。SaaS产品化的低/中/高表示新增复杂度。现有能力“无”表示当前基线没有该专项能力证明；UNKNOWN保留未核实的基础设施状态。自动化等级表示目标形态，T4的无人值守条件需确认，单次一键执行仍可为T0。

A=可直接产品化，B=基于既有能力二开，C=专项研发，D=强依赖京东数据/接口，E=双方联合定义或研发协同。主要标签与辅助标签分别列出。权限只有UNKNOWN或NOT_REQUIRED；当前没有CONFIRMED证据。


## 商品经营能力

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R001 商机推荐 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | D | C |
| R002 一键发品 | PARTIAL_REUSE | 中 | 中 | 高 | B | D |
| R003 AI标题优化 | PARTIAL_REUSE | 中 | 低 | 低 | B | 无 |
| R004 短标题/卖点 | PARTIAL_REUSE | 中 | 低 | 低 | B | 无 |
| R005 商品属性补全 | PARTIAL_REUSE | 中 | 中 | 高 | B | D |
| R006 信息分优化 | DIRECT_REUSE | 高 | 中 | 高 | B | D |
| R007 商品搬运 | PARTIAL_REUSE | 低 | 中 | 高 | C | D |
| R008 潜力SKU识别 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C |
| R009 一品一策 | KNOWHOW_REUSE | 低 | 中 | 高 | C | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R001 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q04 |
| R002 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE | R1 | T0 | Q01,Q02 |
| R003 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q03 |
| R004 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q03 |
| R005 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q01,Q02,Q03 |
| R006 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q01,Q02,Q03 |
| R007 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R1 | T0 | Q01,Q02,Q06 |
| R008 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q04,Q05,Q07 |
| R009 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION | R2 | T0 | Q01,Q05,Q07,Q08,Q09 |

**R001 真正困难：京东数据。** 商机接口已有类目热度与供需候选，但机会版本、行业覆盖和可经营条件决定推荐质量。

产品边界：提供可解释机会清单，不把热度直接等同盈利机会。

证据：[R001需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:9>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R002 真正困难：京东接口。** 内容生成有基础，完整创建还取决于类目模板、申请字段与发布结果确认。

产品边界：商品创建申请不等于已上架；补齐校验、审核状态和失败处理。

证据：[R002需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:10>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002,API003,API004,API005,API038,API039,API040。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R003 真正困难：业务规则。** 可复用巡检优化基础，标题规范与真实商品事实决定推荐是否可用。

产品边界：以商家提供商品资料输出推荐标题；自动回写为另行确认的扩展。

证据：[R003需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:11>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API005,API006,API007,API038,API039,API040。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R004 真正困难：业务规则。** 短标题与卖点需适配京喜字段限制并避免虚构商品事实。

产品边界：生成文本；平台回写不在原文明确承诺内。

证据：[R004需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:12>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API006,API007。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R005 真正困难：业务规则。** 缺失属性能识别不代表能够推断真实值，需类目模板与可验证商品资料。

产品边界：未知属性交商家补充；实际补齐与写入范围需确认。

证据：[R005需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:13>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002,API003,API004,API005,API038,API039,API040。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R006 真正困难：京东接口。** 信息分优化方向已有基础，京喜扣分项、优化字段与生效后分数须逐项对应。

产品边界：诊断、修改与重新计分分开核验，不承诺每次改动必然涨分。

证据：[R006需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:14>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002,API003,API005,API006,API007,API038,API039,API040。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R007 真正困难：现有能力缺口。** 跨平台链接解析、素材使用依据和属性映射未被现有能力事实覆盖。

产品边界：京东创建仅覆盖目标端；来源平台获取与合规迁移需另行确定。

证据：[R007需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:15>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R008 真正困难：京东数据。** 行业商机不能替代本店SKU利润、库存和经营表现的联合评分。

产品边界：保留独立于流量潜力SKU的综合投入价值标准。

证据：[R008需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:16>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001,API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R009 真正困难：业务规则。** 完整经营方案需要跨价格、流量、活动和广告约束，不只是生成文字。

产品边界：输出有依据的经营建议；方案自动落地由自动执行模块承接。

证据：[R009需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:17>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## AI素材能力

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R010 AI主图生成 | DIRECT_REUSE | 高 | 低 | 低 | A | 无 |
| R011 商品套图 | PARTIAL_REUSE | 中 | 中 | 低 | B | 无 |
| R012 商详图生成 | DIRECT_REUSE | 高 | 低 | 低 | A | 无 |
| R013 主图视频 | NO_EXISTING_CAPABILITY | 无 | 中 | 低 | C | 无 |
| R014 批量素材处理 | PARTIAL_REUSE | 高 | 高 | 高 | B | D |
| R015 主图A/B测试 | PARTIAL_REUSE | 低 | 高 | 核心依赖 | C | D,E |
| R016 广告创意生成 | PARTIAL_REUSE | 中 | 中 | 高 | B | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R010 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q03 |
| R011 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T1 | Q03 |
| R012 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q03 |
| R013 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q03 |
| R014 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T1 | Q01,Q02,Q10 |
| R015 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R4 | T3 | Q01,Q05,Q10,Q18 |
| R016 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q09 |

**R010 真正困难：业务规则。** 核心生图已具备，京喜主图规范与商品事实约束决定可交付性。

产品边界：以商家输入商品信息生成主图；上传与替换单列。

证据：[R010需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:23>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API008,API009,API010。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R011 真正困难：业务规则。** 已有商品生图基础，四类套图各自的规格表达和验收标准仍需适配。

产品边界：生成白底、场景、规格、卖点图，不推定已有每种模板。

证据：[R011需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:24>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API008,API009,API010。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R012 真正困难：业务规则。** 已有一键详情页能力，可复用核心产物，需适配京喜结构与事实要求。

产品边界：生成详情图片与结构，写入线上详情另列接口范围。

证据：[R012需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:25>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API033,API035,API036,API037。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R013 真正困难：现有能力缺口。** 现有事实仅证明图片与详情页，视频生成、时序一致性和审核需新能力。

产品边界：生成视频；媒体上传接口不能代替视频生产能力。

证据：[R013需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:26>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API011,API012,API034。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R014 真正困难：SaaS工程。** 批量生成可复用，但替换需逐SKU绑定、部分失败处理及结果复核。

产品边界：批量生成与替换共同验收，不能仅交生成文件。

证据：[R014需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:27>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API008,API009,API010,API011,API012,API038,API039,API040。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R015 真正困难：算法。** 实验创建已有候选，可靠选优还需分流、效果口径、样本和发布规则。

产品边界：先验证素材实验边界，不能外推到所有经营策略实验。

证据：[R015需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:28>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API013,API014,API015。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R016 真正困难：京东数据。** 素材生成可复用，基于广告效果迭代需要创意与结果的可关联数据。

产品边界：按已知广告效果生成新创意；持续自主迭代不是原文必然要求。

证据：[R016需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:29>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API020,API022,API033,API034,API035,API036,API037。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## 比价与定价能力

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R017 同款识别 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C,E |
| R018 实时比价 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | D | E |
| R019 价格趋势 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C |
| R020 建议价格 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R021 毛利测算 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R022 ROI指导 | NO_EXISTING_CAPABILITY | 无 | 低 | 低 | C | 无 |
| R023 动态调价 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | C | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R017 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R2 | T0 | Q06 |
| R018 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R0 | T3 | Q06 |
| R019 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R0 | T0 | Q06 |
| R020 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q06,Q07,Q08 |
| R021 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q01,Q07 |
| R022 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q07 |
| R023 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T3 | Q01,Q06,Q07,Q08 |

**R017 真正困难：京东数据。** 站内外商品样本、访问授权与同款标识是识别的前提。

产品边界：同款与相似品需分开阈值；未发现接口不代表平台无内部能力。

证据：[R017需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:35>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R018 真正困难：京东数据。** 实时竞品到手价受地区、人群、促销和刷新时效影响，不能用建议价替代。

产品边界：先确认可合法获得的竞品数据范围与实时性。

证据：[R018需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:36>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R019 真正困难：京东数据。** 历史展示依赖可信历史价格序列，当前没有明确对应公开数据证据。

产品边界：历史回溯与今后持续采集是不同路径，不擅自承诺既往历史。

证据：[R019需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:37>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R020 真正困难：业务规则。** 平台建议价不能替代竞品、商家毛利底线和活动约束的联合判断。

产品边界：输出建议价及依据，不默认回写价格。

证据：[R020需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:38>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API016,API017。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R021 真正困难：业务规则。** 实际利润取决于采购、履约、广告、补贴和退款费用的统一归属口径。

产品边界：区分商家输入的情景测算与真实结算核算，不以估算冒充实际利润。

证据：[R021需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:39>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API086,API087。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R022 真正困难：业务规则。** ROI底线可按商家明确成本计算，但广告归因和利润口径必须一致。

产品边界：先提供透明成本模型；缺失成本不猜测。

证据：[R022需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:40>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R023 真正困难：京东数据。** 持续策略需要稳定竞品数据、成本底线与变化触发规则。

产品边界：原文仅持续给出调价策略，自动改价在授权执行中另行定义。

证据：[R023需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:41>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API016,API017。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## 流量增长能力

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R024 CTR诊断 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C |
| R025 CVR诊断 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C |
| R026 搜索优化 | PARTIAL_REUSE | 中 | 中 | 高 | B | D |
| R027 推荐流量机会 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C |
| R028 潜力SKU | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | C |
| R029 流量放大策略 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R024 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q05 |
| R025 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q05 |
| R026 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；BUSINESS_RULE_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q02,Q03,Q05 |
| R027 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q05 |
| R028 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q04,Q05 |
| R029 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；INTERNAL_API_CONFIRMATION；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q05,Q09 |

**R024 真正困难：京东数据。** 通用报表未证实SKU曝光点击及渠道口径，广告CTR不能代表全域商品CTR。

产品边界：输出可解释低点击诊断，先确认分母、时间窗口与样本阈值。

证据：[R024需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:49>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R025 真正困难：京东数据。** 点击与成交必须对齐SKU、渠道和归因窗口，才能判定转化不足。

产品边界：区分访问、点击、订单及支付转化口径。

证据：[R025需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:50>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R026 真正困难：京东数据。** 商品信息优化可复用，搜索词表现与首屏素材效果仍依赖平台数据。

产品边界：先优化商品信息，搜索增长结论需关键词与流量证据。

证据：[R026需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:51>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R027 真正困难：京东数据。** 商机热度不证明推荐曝光不足，需推荐渠道曝光与转化明细。

产品边界：按推荐流量缺口排序，不能用全域销量替代推荐效率。

证据：[R027需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:52>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001,API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R028 真正困难：京东数据。** 可放大SKU需要渠道边际表现与供给承接能力，不能只按当前销量排序。

产品边界：与商品经营潜力SKU共享事实但分开评价目标。

证据：[R028需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:53>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001,API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R029 真正困难：业务规则。** 跨搜索、推荐与广告的方案需要预算和目标约束及各渠道证据。

产品边界：输出组合建议，不承诺必然获得增量流量。

证据：[R029需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:54>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## 活动经营产品要求

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R030 活动资格识别 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | E |
| R031 最优活动推荐 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | C | D,E |
| R032 活动收益测算 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D,E |
| R033 活动冲突判断 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | E | D |
| R034 一键提报 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | D | E |
| R035 活动复盘 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | C | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R030 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q08 |
| R031 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q07,Q08 |
| R032 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION | R3 | T0 | Q01,Q05,Q07,Q08 |
| R033 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q08 |
| R034 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R0 | T0 | Q08 |
| R035 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION | R2 | T0 | Q01,Q05,Q07,Q08,Q18 |

**R030 真正困难：业务规则。** 十类活动的适用店铺、商品门槛和实时资格需官方规则及资格结果。

产品边界：CLI流程可供规则对接，但其实现与权限未获证实。

证据：[R030需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:60>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R031 真正困难：业务规则。** 最适合活动依赖资格、库存、利润与冲突规则，库存读取只覆盖一部分。

产品边界：明确排序目标与不可参加条件，再推荐活动。

证据：[R031需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:61>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API018。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R032 真正困难：算法。** 预期GMV属于预测，需要历史活动样本、费用规则和不确定性区间。

产品边界：区分假设情景计算与可验证预测，不能保证活动收益。

证据：[R032需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:62>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API018,API086,API087。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R033 真正困难：业务规则。** 事后价保单不能替代报名前的叠加、价保和补贴冲突判定。

产品边界：以官方可执行规则或校验结果为准，不能仅靠通用促销推断。

证据：[R033需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:63>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R034 真正困难：京东接口。** 线上报名动作与审核结果未获接口证实，底表路径仍需活动模板。

产品边界：可交付底表路径；直接报名路径单独待确认，不将两者混称成功报名。

证据：[R034需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:64>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R035 真正困难：京东数据。** 活动上报接口不返回复盘数据，需活动关联成交费用和对比基线。

产品边界：前后变化可描述，因果增量需合适对照与干扰控制。

证据：[R035需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:65>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API019,API020,API022,API048,API049,API050,API051。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## 广告经营产品要求

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R036 广告选品 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R037 投放方案 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R038 一键建计划 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R039 智能调优 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | C | D |
| R040 放量 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | C | D |
| R041 止损 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | C | D |
| R042 创意生成 | PARTIAL_REUSE | 中 | 低 | 低 | B | 无 |
| R043 关键词优化 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | D | C,E |
| R044 广告复盘 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R036 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION | R2 | T0 | Q01,Q05,Q07,Q09 |
| R037 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE | R2 | T0 | Q01,Q07,Q09 |
| R038 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R0 | T0 | Q01,Q09 |
| R039 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R3 | T4 | Q01,Q09,Q17 |
| R040 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T4 | Q01,Q09,Q17 |
| R041 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T4 | Q01,Q09,Q17 |
| R042 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q03 |
| R043 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q09 |
| R044 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q09 |

**R036 真正困难：京东数据。** 广告选品需SKU历史表现、毛利和库存，计划报表不能完整代表SKU潜力。

产品边界：输出选品依据与约束，不以历史高ROI保证未来表现。

证据：[R036需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:73>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API032。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R037 真正困难：业务规则。** 预算、出价和ROI目标必须与成本、投放场景及账户约束一致。

产品边界：方案先形成可审核参数，创建动作另行承接。

证据：[R037需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:74>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API021,API023,API024,API025,API031,API032。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R038 真正困难：京东接口。** 已有创建候选，但非标准接口合同、必填配置和京喜广告产品适用性需确认。

产品边界：创建结果与启投状态分开验证，不推断接口名即代表可直接调用。

证据：[R038需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:75>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API023,API027,API028。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R039 真正困难：算法。** 带延迟归因的实时反馈下调整预算、出价与ROI，需优化约束和稳定性控制。

产品边界：T4为授权自动模式目标；实时性与ROI可写参数尚待确认。

证据：[R039需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:76>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API021,API022,API024,API025,API029,API031。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R040 真正困难：授权 / 风控。** 高ROI不保证扩量后边际收益，必须限制预算增幅并监测回落。

产品边界：扩大预算是原文动作，是否无人值守由授权策略确认。

证据：[R040需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:77>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API025,API029。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R041 真正困难：授权 / 风控。** 止损需兼顾归因延迟与误停风险，并确认降预算或暂停的生效回执。

产品边界：以暂停/降预算为动作，不扩展为删除广告计划。

证据：[R041需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:78>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API021,API022,API025,API026,API029,API030。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R042 真正困难：业务规则。** 已有素材能力可扩展广告图片与卖点，广告规格和商品事实需适配。

产品边界：单次生成不强制依赖广告效果；区别于R016的效果驱动创意。

证据：[R042需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:79>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API027。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R043 真正困难：京东接口。** 出现关键词列表不证明支持既有关键词增删及词级效果读取。

产品边界：先确认词级数据与增删动作合同，再实施关键词优化。

证据：[R043需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:80>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API027,API029。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R044 真正困难：京东数据。** 计划曝光点击已有字段，GMV、ROI、消耗仍需明确类型、单位和归因规则。

产品边界：按统一广告口径复盘，不把广告成交等同全店成交。

证据：[R044需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:81>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## 店铺及服务能力要求

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R045 店铺升星助手 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | E |
| R046 客服诊断 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R047 AI客服回复 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R048 履约诊断 | NO_EXISTING_CAPABILITY | 无 | 中 | 高 | C | D |
| R049 售后诊断 | NO_EXISTING_CAPABILITY | 无 | 中 | 中 | C | D |
| R050 售后沟通话术 | NO_EXISTING_CAPABILITY | 无 | 低 | 低 | C | 无 |
| R051 店铺层级助手 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | D | E |
| R052 店铺装修优化 | NO_EXISTING_CAPABILITY | 无 | 中 | 核心依赖 | C | D |
| R053 会员运营 | NO_EXISTING_CAPABILITY | 无 | 高 | 高 | C | D,E |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R045 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q14 |
| R046 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION | R2 | T0 | Q01,Q11 |
| R047 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q12 |
| R048 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；BUSINESS_RULE_CONFIRMATION；INTERNAL_DATA_REQUIRED | R2 | T0 | Q01,Q13 |
| R049 | FULL | UNKNOWN | PERMISSION_CONFIRMATION；BUSINESS_RULE_CONFIRMATION；INTERNAL_DATA_REQUIRED | R1 | T0 | Q01,Q13 |
| R050 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q13 |
| R051 | NONE_FOUND | UNKNOWN | INTERNAL_API_CONFIRMATION；INTERNAL_DATA_REQUIRED；BUSINESS_RULE_CONFIRMATION | R1 | T0 | Q14 |
| R052 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；INTERNAL_API_CONFIRMATION | R2 | T0 | Q01,Q05,Q15 |
| R053 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R2 | T2 | Q01,Q16 |

**R045 真正困难：业务规则。** 下一星级差距与最短提升路径依赖星级模型、阈值和可改善项。

产品边界：先形成规则下的优先路径，不承诺未经定义的全局最短。

证据：[R045需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:87>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R046 真正困难：京东数据。** 聊天与绩效可用作诊断基础，但排班空档需计划班表与实际在线状态对照。

产品边界：分别验收超时、高频问题和排班，不以在线状态替代排班。

证据：[R046需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:88>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API063,API064,API065,API066,API067,API068,API069,API070,API071。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R047 真正困难：京东接口。** 生成回复是内容能力，配置到客服模板库需要专门写入合同。

产品边界：消息发送接口不能替代模板配置；人工复制可作缩小范围的路径。

证据：[R047需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:89>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R048 真正困难：业务规则。** 订单与轨迹可提供基础事实，揽收率及延迟发货需统一应履约集合和时限。

产品边界：将原始物流事实与平台考核指标分开，避免口径不一致。

证据：[R048需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:90>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API048,API049,API050,API051,API053,API054,API055,API056,API057。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R049 真正困难：业务规则。** 原因读取只是输入，解决方案仍要符合售后政策和商家可执行边界。

产品边界：提供诊断建议，不自动退款或审核售后。

证据：[R049需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:91>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API058,API059,API060,API061,API062。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R050 真正困难：业务规则。** 沟通内容需真实售后情境与政策依据，避免虚构赔付承诺。

产品边界：用户提供场景后生成话术，发送消息不属于原文明确要求。

证据：[R050需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:92>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API066,API067,API068,API072,API073。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R051 真正困难：业务规则。** 经营层级指标及升级阈值未明确开放，不能从店铺资料推导等级差距。

产品边界：与星级体系分别确认，不能共用未经证实的规则。

证据：[R051需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:93>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R052 真正困难：京东数据。** 页面优化需要页面结构、流量路径和转化数据，仅店铺总指标不足以定位页面问题。

产品边界：先交结构建议；若要求直接发布装修需新增动作确认。

证据：[R052需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:94>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R053 真正困难：京东接口。** 会员与人群数据有基础，招募、权益配置和触达结果尚未形成完整运营链。

产品边界：T2是周期运营建议形态；自动招募及触达须明确授权与规则。

证据：[R053需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:95>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API041,API042,API043,API044,API045,API046,API047,API074,API075,API076,API077,API078,API079,API080,API081,API082,API083,API084,API085。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

## 经营自动化能力要求

| ID / 产品 | 复用分类 | 复用程度 | SaaS产品化 | 京东数据依赖 | 主标签 | 辅助标签 |
|---|---|---|---|---|---|---|
| R054 AI任务编排 | UNKNOWN | 无 | 高 | 低 | C | 无 |
| R055 AI自动执行 | UNKNOWN | 无 | 高 | 核心依赖 | C | D,E |
| R056 自动复检 | UNKNOWN | 无 | 高 | 核心依赖 | C | D |
| R057 AI经营复盘 | UNKNOWN | 无 | 中 | 高 | C | D |
| R058 策略A/B实验 | NO_EXISTING_CAPABILITY | 无 | 高 | 核心依赖 | E | C,D |
| R059 策略学习 | UNKNOWN | 无 | 高 | 核心依赖 | C | D,E |
| R060 异常预警 | UNKNOWN | 无 | 高 | 核心依赖 | C | D |

| ID | Public API Coverage | Permission Status | JD Collaboration Requirement | 研发 | 自动化 | 协同问题 |
|---|---|---|---|---|---|---|
| R054 | NOT_REQUIRED | NOT_REQUIRED | BUSINESS_RULE_CONFIRMATION | R1 | T3 | Q17 |
| R055 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_ACTION_API_POSSIBLE；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION | R0 | T4 | Q01,Q02,Q08,Q09,Q17 |
| R056 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；INTERNAL_API_CONFIRMATION；BUSINESS_RULE_CONFIRMATION | R2 | T3 | Q01,Q05,Q09,Q17,Q18 |
| R057 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION；INTERNAL_API_CONFIRMATION | R2 | T2 | Q01,Q05,Q07,Q09 |
| R058 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_API_CONFIRMATION；NEW_READ_API_POSSIBLE；NEW_ACTION_API_POSSIBLE；BUSINESS_RULE_CONFIRMATION；INTERNAL_DATA_REQUIRED | R4 | T3 | Q01,Q10,Q18 |
| R059 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；INTERNAL_API_CONFIRMATION；BUSINESS_RULE_CONFIRMATION | R4 | T5 | Q01,Q05,Q17,Q18 |
| R060 | PARTIAL | UNKNOWN | PERMISSION_CONFIRMATION；INTERNAL_DATA_REQUIRED；NEW_READ_API_POSSIBLE；INTERNAL_API_CONFIRMATION；BUSINESS_RULE_CONFIRMATION | R2 | T3 | Q01,Q05,Q17 |

**R054 真正困难：自动化基础设施。** 成熟SaaS基座不证明已有冲突仲裁、优先队列和任务生命周期管理。

产品边界：编排可在我方实现；京麦任务同步只是可选集成，非执行引擎证据。

证据：[R054需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:101>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API088,API089,API090,API091,API092,API093。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R055 真正困难：授权 / 风控。** 跨商品价格活动广告的自动动作需逐工具授权、生效核验和异常控制。

产品边界：仅在明确授权内执行；缺少某一动作接口就不能承诺全域闭环。

证据：[R055需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:102>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API002,API003,API008,API010,API012,API023,API024,API025,API026,API027,API028,API029,API030,API088,API089,API090,API091,API092,API093。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R056 真正困难：京东数据。** 任务成功记录不证明经营改善，需动作关联指标及可观察结果窗口。

产品边界：复检区分状态生效和指标变化，不擅自追加自动执行下一步。

证据：[R056需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:103>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API088,API089,API090,API091,API092,API093。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R057 真正困难：京东数据。** 周期报告需要跨域指标口径、刷新时间与完整性，生成文字本身不是主要限制。

产品边界：输出缺失数据及口径说明；日报周报不等于要求实时采集。

证据：[R057需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:104>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051,API052,API086,API087。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R058 真正困难：算法。** 经营策略实验涉及跨工具分组、干扰和归因，素材实验接口不能覆盖全部场景。

产品边界：先联合定义可控实验单元、对照和停止条件。

证据：[R058需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:105>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R059 真正困难：算法。** 历史动作结果可能有选择偏差，持续学习需要可靠反馈及策略版本评价。

产品边界：T5表示动作结果策略的目标反馈链，不证明已有学习系统或自动发布能力。

证据：[R059需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:106>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。

**R060 真正困难：自动化基础设施。** 异常检测需持续可靠数据、去重触发和任务冲突处理，不能只增加通知规则。

产品边界：自动触发任务与自动改变京东状态分开授权。

证据：[R060需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:107>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API088,API089,API090,API091,API092,API093。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。
