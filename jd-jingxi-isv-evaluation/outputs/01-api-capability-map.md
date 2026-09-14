# 京东京喜需求与公开接口能力映射

覆盖17类、243个接口定义，筛出93个相关候选。候选匹配与最终需求覆盖分开；不把API存在推断为当前ISV已获权限。本地资料存在字段未展开、非标准方法和部分描述乱码，未作线上调用测试。

逐接口字段、原始method、分类、置信度和来源见本文附录；定点核验见 [商品广告核验](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\analysis\api-evidence\commerce-verification.md>)、[运营核验](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\analysis\api-evidence\operations-verification.md>)、[关键证据裁决](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\analysis\api-evidence\principal-verification.md>)。

| 覆盖分类 | 数量 |
|---|---|
| PARTIAL | 40 |
| NOT_REQUIRED | 10 |
| NONE_FOUND | 9 |
| FULL | 1 |

FULL只表示原文需要的平台交互有完整公开合同，不表示我方产品完成；NOT_REQUIRED仅用于明确的商家输入/本地交付边界。NONE_FOUND统一表示OPEN_API_NOT_FOUND。

## R001 商机推荐

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API001 `listProductOpportunities`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 商机名称/编码、类目、热度、供需比、saleSkuNum/saleShopNum、价格区间；非本店SKU口径未证实 |
| 需要WRITE / ACTION | 无候选写入接口；推荐结果需我方算法/页面产出 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 商机接口已有类目热度与供需候选，但机会版本、行业覆盖和可经营条件决定推荐质量。 |
| 交付边界 | 提供可解释机会清单，不把热度直接等同盈利机会。 |
| 京东确认问题 | Q01,Q04 |

证据：[R001需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:9>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001。

## R002 一键发品

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API002 `postProductApply`；API003 `patchProductApply`；API004 `listProductPublishTemplates`；API005 `postProductValidation`；API038 `listSkus`；API039 `listProducts`；API040 `getProduct`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 类目schema、商品详情、SKU、标题/属性等字段及合规检测结果 |
| 需要WRITE / ACTION | 可提交productApplyDTO创建申请，可能按applyId部分更新；有限字段不证明标题/属性/卖点/图片/详情全写 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 内容生成有基础，完整创建还取决于类目模板、申请字段与发布结果确认。 |
| 交付边界 | 商品创建申请不等于已上架；补齐校验、审核状态和失败处理。 |
| 京东确认问题 | Q01,Q02 |

证据：[R002需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:10>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002,API003,API004,API005,API038,API039,API040。

## R003 AI标题优化

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API005 `postProductValidation`；API006 `getHealthScore`；API007 `listHealthScores`；API038 `listSkus`；API039 `listProducts`；API040 `getProduct`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 商品标题/属性/状态、违规字段/原因、健康分改进项 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 可复用巡检优化基础，标题规范与真实商品事实决定推荐是否可用。 |
| 交付边界 | 以商家提供商品资料输出推荐标题；自动回写为另行确认的扩展。 |
| 京东确认问题 | Q03 |

证据：[R003需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:11>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API005,API006,API007,API038,API039,API040。

## R004 短标题/卖点

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API006 `getHealthScore`；API007 `listHealthScores`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 商品内容、健康分及改进项 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 短标题与卖点需适配京喜字段限制并避免虚构商品事实。 |
| 交付边界 | 生成文本；平台回写不在原文明确承诺内。 |
| 京东确认问题 | Q03 |

证据：[R004需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:12>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API006,API007。

## R005 商品属性补全

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API002 `postProductApply`；API003 `patchProductApply`；API004 `listProductPublishTemplates`；API005 `postProductValidation`；API038 `listSkus`；API039 `listProducts`；API040 `getProduct`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 类目属性模板、商品属性、校验缺陷 |
| 需要WRITE / ACTION | 可候选创建或部分更新；有限productApplyDTO不证明所有属性可写或自动补全 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 缺失属性能识别不代表能够推断真实值，需类目模板与可验证商品资料。 |
| 交付边界 | 未知属性交商家补充；实际补齐与写入范围需确认。 |
| 京东确认问题 | Q01,Q02,Q03 |

证据：[R005需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:13>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002,API003,API004,API005,API038,API039,API040。

## R006 信息分优化

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API002 `postProductApply`；API003 `patchProductApply`；API005 `postProductValidation`；API006 `getHealthScore`；API007 `listHealthScores`；API038 `listSkus`；API039 `listProducts`；API040 `getProduct`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 信息分、扣分/改进项、商品详情、合规检测结果 |
| 需要WRITE / ACTION | 可候选提交部分application更新；未证实标题/图片/属性/详情四类完整写回 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 信息分优化方向已有基础，京喜扣分项、优化字段与生效后分数须逐项对应。 |
| 交付边界 | 诊断、修改与重新计分分开核验，不承诺每次改动必然涨分。 |
| 京东确认问题 | Q01,Q02,Q03 |

证据：[R006需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:14>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002,API003,API005,API006,API007,API038,API039,API040。

## R007 商品搬运

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API002 `postProductApply`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可读取京喜类目模板；无多平台链接解析或外部平台读取候选接口 |
| 需要WRITE / ACTION | 可候选创建商品申请；跨平台导入、映射及素材写入未证实 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 跨平台链接解析、素材使用依据和属性映射未被现有能力事实覆盖。 |
| 交付边界 | 京东创建仅覆盖目标端；来源平台获取与合规迁移需另行确定。 |
| 京东确认问题 | Q01,Q02,Q06 |

证据：[R007需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:15>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API002。

## R008 潜力SKU识别

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API001 `listProductOpportunities`；API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 商机热度/供需/销售规模及本店SKU/商品列表；商机销售规模是市场维度，不能直接视为本店SKU表现 |
| 需要WRITE / ACTION | 无候选写入接口；潜力评分/重点清单需我方算法产出 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 行业商机不能替代本店SKU利润、库存和经营表现的联合评分。 |
| 交付边界 | 保留独立于流量潜力SKU的综合投入价值标准。 |
| 京东确认问题 | Q01,Q04,Q05,Q07 |

证据：[R008需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:16>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001,API048,API049。

## R009 一品一策

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 仅可候选读取商品详情、健康分/改进项；未发现完整经营方案所需经营数据组合 |
| 需要WRITE / ACTION | 生成完整经营方案不要求平台策略写入或自动执行；需要的是经营事实、约束及方案生成能力。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 完整经营方案需要跨价格、流量、活动和广告约束，不只是生成文字。 |
| 交付边界 | 输出有依据的经营建议；方案自动落地由自动执行模块承接。 |
| 京东确认问题 | Q01,Q05,Q07,Q08,Q09 |

证据：[R009需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:17>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API048,API049。

## R010 AI主图生成

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API008 `batchCreateSkuMaterial`；API009 `listSkuMaterials`；API010 `postMediaZoneImage`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可读取商品详情/属性（listProducts、getProduct）及既有 SKU 素材（listSkuMaterials）。单次生成可使用用户提供的商品资料，不依赖已发现的京东 API。 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 核心生图已具备，京喜主图规范与商品事实约束决定可交付性。 |
| 交付边界 | 以商家输入商品信息生成主图；上传与替换单列。 |
| 京东确认问题 | Q03 |

证据：[R010需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:23>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API008,API009,API010。

## R011 商品套图

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API008 `batchCreateSkuMaterial`；API009 `listSkuMaterials`；API010 `postMediaZoneImage`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可读取既有 SKU 素材用于套图审计/替换准备（listSkuMaterials）；商品资料可由用户提供。 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 已有商品生图基础，四类套图各自的规格表达和验收标准仍需适配。 |
| 交付边界 | 生成白底、场景、规格、卖点图，不推定已有每种模板。 |
| 京东确认问题 | Q03 |

证据：[R011需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:24>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API008,API009,API010。

## R012 商详图生成

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API033 `postContentImages`；API035 `postContents`；API036 `putContents`；API037 `listContents`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listContents 可查询公域内容；候选内容接口未证实读取商品详情页结构或商品详情字段。 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 已有一键详情页能力，可复用核心产物，需适配京喜结构与事实要求。 |
| 交付边界 | 生成详情图片与结构，写入线上详情另列接口范围。 |
| 京东确认问题 | Q03 |

证据：[R012需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:25>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API033,API035,API036,API037。

## R013 主图视频

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API011 `getMediaZoneVideoUploadUrl`；API012 `postMediaZoneVideo`；API034 `postContentVideos`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | getMediaZoneVideoUploadUrl 可取得视频上传地址；postContentVideos 提供公域视频上传底座。 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 现有事实仅证明图片与详情页，视频生成、时序一致性和审核需新能力。 |
| 交付边界 | 生成视频；媒体上传接口不能代替视频生产能力。 |
| 京东确认问题 | Q03 |

证据：[R013需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:26>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API011,API012,API034。

## R014 批量素材处理

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API008 `batchCreateSkuMaterial`；API009 `listSkuMaterials`；API010 `postMediaZoneImage`；API011 `getMediaZoneVideoUploadUrl`；API012 `postMediaZoneVideo`；API038 `listSkus`；API039 `listProducts`；API040 `getProduct`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listSkus/listProducts/getProduct 可读取多 SKU、商品资料和状态；listSkuMaterials 可读取现有素材，用于批量替换前的筛选与审计。 |
| 需要WRITE / ACTION | batchCreateSkuMaterial 可批量提交 SKU 素材，覆盖批量生成/替换链路中的素材写入；具体替换语义与失败重试规则待确认。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 批量生成可复用，但替换需逐SKU绑定、部分失败处理及结果复核。 |
| 交付边界 | 批量生成与替换共同验收，不能仅交生成文件。 |
| 京东确认问题 | Q01,Q02,Q10 |

证据：[R014需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:27>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API008,API009,API010,API011,API012,API038,API039,API040。

## R015 主图A/B测试

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API013 `postMaterialExperiment`；API014 `patchMaterialExperiment`；API015 `listMaterialExperiments`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listMaterialExperiments 可读取实验状态、周期、版本和审计时间；效果指标字段尚未证实。 |
| 需要WRITE / ACTION | postMaterialExperiment 可创建素材 AB 实验并配置版本/分流比例；patchMaterialExperiment 可更新实验配置或状态。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 实验创建已有候选，可靠选优还需分流、效果口径、样本和发布规则。 |
| 交付边界 | 先验证素材实验边界，不能外推到所有经营策略实验。 |
| 京东确认问题 | Q01,Q05,Q10,Q18 |

证据：[R015需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:28>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API013,API014,API015。

## R016 广告创意生成

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API033 `postContentImages`；API034 `postContentVideos`；API035 `postContents`；API036 `putContents`；API037 `listContents`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listAdsCampaigns/listAdsGroups是广告效果的部分输入候选；需补充创意关联、指标对象类型、单位和归因口径，不能宣称完全没有广告数据候选。 |
| 需要WRITE / ACTION | 核心为依据广告效果生成新创意；投放绑定或发布不是原文明确要求。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 素材生成可复用，基于广告效果迭代需要创意与结果的可关联数据。 |
| 交付边界 | 按已知广告效果生成新创意；持续自主迭代不是原文必然要求。 |
| 京东确认问题 | Q01,Q09 |

证据：[R016需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:29>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；API证据 API020,API022,API033,API034,API035,API036,API037。

## R017 同款识别

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 站内外商品特征、图片/文本和匹配结果来源未在限定资料中提供。 |
| 需要WRITE / ACTION | 需新增相似度检索、人工复核和结果存储；无现成京东写回证据。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 站内外商品样本、访问授权与同款标识是识别的前提。 |
| 交付边界 | 同款与相似品需分开阈值；未发现接口不代表平台无内部能力。 |
| 京东确认问题 | Q06 |

证据：[R017需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:35>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R018 实时比价

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 竞品 SKU、实时价、促销价和时间戳字段未发现。 |
| 需要WRITE / ACTION | 需保存采价快照并展示；无价格写回动作证据。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 实时竞品到手价受地区、人群、促销和刷新时效影响，不能用建议价替代。 |
| 交付边界 | 先确认可合法获得的竞品数据范围与实时性。 |
| 京东确认问题 | Q06 |

证据：[R018需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:36>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R019 价格趋势

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 历史价格序列、促销状态和时间粒度字段未发现。 |
| 需要WRITE / ACTION | 需自建历史快照、趋势计算和图表存储；无京东写回动作。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 历史展示依赖可信历史价格序列，当前没有明确对应公开数据证据。 |
| 交付边界 | 历史回溯与今后持续采集是不同路径，不擅自承诺既往历史。 |
| 京东确认问题 | Q06 |

证据：[R019需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:37>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R020 建议价格

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API016 `listSuggestedPrices`；API017 `listPriceStars`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可候选读取 SKU/SPU、建议价/目标价/利益点及竞争力辅助字段；竞品、成本/毛利和完整平台规则未证实。 |
| 需要WRITE / ACTION | 生成并展示建议价，未发现自动改价写接口。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 平台建议价不能替代竞品、商家毛利底线和活动约束的联合判断。 |
| 交付边界 | 输出建议价及依据，不默认回写价格。 |
| 京东确认问题 | Q01,Q06,Q07,Q08 |

证据：[R020需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:38>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API016,API017。

## R021 毛利测算

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API086 `listAccountRecords`；API087 `listBills`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 候选读取钱包流水和订单结算账单；商品成本、活动费用、广告费、补贴、税费等完整口径未证实。 |
| 需要WRITE / ACTION | 本地计算并保存毛利结果；未发现财务结果写回接口。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 实际利润取决于采购、履约、广告、补贴和退款费用的统一归属口径。 |
| 交付边界 | 区分商家输入的情景测算与真实结算核算，不以估算冒充实际利润。 |
| 京东确认问题 | Q01,Q07 |

证据：[R021需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:39>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API086,API087。

## R022 ROI指导

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：核心无需接口；可选集成按扩展范围评估。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 商家成本结构是明确前提；广告消耗、转化、收入等平台数据未发现候选字段。 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | ROI底线可按商家明确成本计算，但广告归因和利润口径必须一致。 |
| 交付边界 | 先提供透明成本模型；缺失成本不猜测。 |
| 京东确认问题 | Q07 |

证据：[R022需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:40>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R023 动态调价

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API016 `listSuggestedPrices`；API017 `listPriceStars`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 持续竞争环境与成本约束；listSuggestedPrices/listPriceStars可作策略辅助，但不替代竞品实时价及历史序列。 |
| 需要WRITE / ACTION | 仅持续给出调价策略，不自动修改价格；实际改价由R055另行授权。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 持续策略需要稳定竞品数据、成本底线与变化触发规则。 |
| 交付边界 | 原文仅持续给出调价策略，自动改价在授权执行中另行定义。 |
| 京东确认问题 | Q01,Q06,Q07,Q08 |

证据：[R023需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:41>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API016,API017。

## R024 CTR诊断

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API050 `getSensitiveReportSchema`；API051 `postSensitiveReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 广告计划/单元可读 impressions、clicks、CTR 等；通用报表可按 schema 查询，但未证明商品粒度、曝光/点击指标及时间粒度 |
| 需要WRITE / ACTION | 未发现 CTR 诊断结果或商品策略回写 API |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 通用报表未证实SKU曝光点击及渠道口径，广告CTR不能代表全域商品CTR。 |
| 交付边界 | 输出可解释低点击诊断，先确认分母、时间窗口与样本阈值。 |
| 京东确认问题 | Q01,Q05 |

证据：[R024需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:49>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051。

## R025 CVR诊断

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API050 `getSensitiveReportSchema`；API051 `postSensitiveReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 广告域可读 clicks、orders/carts、CTR、ROI 等；通用报表可提交筛选和字段列表，但未证明商品 CVR 所需完整口径 |
| 需要WRITE / ACTION | 未发现转化诊断结果或商品优化动作回写 API |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 点击与成交必须对齐SKU、渠道和归因窗口，才能判定转化不足。 |
| 交付边界 | 区分访问、点击、订单及支付转化口径。 |
| 京东确认问题 | Q01,Q05 |

证据：[R025需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:50>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051。

## R026 搜索优化

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可发现报表 schema、指标/属性/条件并读取报表行；未证明搜索词、标题、首屏素材字段 |
| 需要WRITE / ACTION | 未发现关键词、标题或搜索素材写入 API；生成优化内容不等于京东回写接口 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 商品信息优化可复用，搜索词表现与首屏素材效果仍依赖平台数据。 |
| 交付边界 | 先优化商品信息，搜索增长结论需关键词与流量证据。 |
| 京东确认问题 | Q01,Q02,Q03,Q05 |

证据：[R026需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:51>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API048,API049。

## R027 推荐流量机会

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API001 `listProductOpportunities`；API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listProductOpportunities 可读商机名称/编码、类目、热度、供需比、销售 SKU/店铺数及价格区间；通用报表可读动态 schema 数据 |
| 需要WRITE / ACTION | 未发现推荐曝光配置或推荐流量写入 API |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 商机热度不证明推荐曝光不足，需推荐渠道曝光与转化明细。 |
| 交付边界 | 按推荐流量缺口排序，不能用全域销量替代推荐效率。 |
| 京东确认问题 | Q01,Q05 |

证据：[R027需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:52>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001,API048,API049。

## R028 潜力SKU

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API001 `listProductOpportunities`；API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listProductOpportunities 提供商机/热度/供需等输入；通用报表可读动态字段和商品候选数据，但未证明完整 SKU 经营指标 |
| 需要WRITE / ACTION | 未发现流量放大或商品流量配置写入 API；输出潜力 SKU 清单本身无需京东回写 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 可放大SKU需要渠道边际表现与供给承接能力，不能只按当前销量排序。 |
| 交付边界 | 与商品经营潜力SKU共享事实但分开评价目标。 |
| 京东确认问题 | Q01,Q04,Q05 |

证据：[R028需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:53>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API001,API048,API049。

## R029 流量放大策略

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可读取广告计划/单元预算、ROI、GMV、CTR、曝光、点击、成本、订单/购物车；通用报表可查询动态数据，但搜索/推荐指标未具体证明 |
| 需要WRITE / ACTION | 生成组合增量方案不要求京东提供 AI 算法或自动写入；未发现广告/搜索/推荐策略自动执行写入 API |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 跨搜索、推荐与广告的方案需要预算和目标约束及各渠道证据。 |
| 交付边界 | 输出组合建议，不承诺必然获得增量流量。 |
| 京东确认问题 | Q01,Q05,Q09 |

证据：[R029需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:54>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049。

## R030 活动资格识别

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 需要商品/SKU、库存、价格及官方直降、首购礼金、秒杀、特价、便宜包邮、百补、顺手买、买赠、换购、焕新补贴共10类活动的资格规则与当前资格结果；输入资料未证明来源。 |
| 需要WRITE / ACTION | 无 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 十类活动的适用店铺、商品门槛和实时资格需官方规则及资格结果。 |
| 交付边界 | CLI流程可供规则对接，但其实现与权限未获证实。 |
| 京东确认问题 | Q08 |

证据：[R030需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:60>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R031 最优活动推荐

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API018 `listSkuStocks`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listSkuStocks（GET.sp-product.v0.sku-stocks）读取SKU列表的stockNum及reserved/transfer/not-for-sale stock；未证明活动价格、利润、补贴、活动门槛或活动规则。 |
| 需要WRITE / ACTION | 无 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 最适合活动依赖资格、库存、利润与冲突规则，库存读取只覆盖一部分。 |
| 交付边界 | 明确排序目标与不可参加条件，再推荐活动。 |
| 京东确认问题 | Q01,Q07,Q08 |

证据：[R031需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:61>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API018。

## R032 活动收益测算

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API018 `listSkuStocks`；API086 `listAccountRecords`；API087 `listBills`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | listSkuStocks提供库存；listAccountRecords提供账户流水、收入支出、余额及交易描述；listBills提供订单/SKU/费用/结算等账单字段；报表接口提供动态schema与报表行数据，但未证明活动GMV、补贴、利润或时间粒度。 |
| 需要WRITE / ACTION | 无业务写入；postReport/postSensitiveReport为READ型报表查询，可返回数据或下载任务，不能视作报名或收益回写。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 预期GMV属于预测，需要历史活动样本、费用规则和不确定性区间。 |
| 交付边界 | 区分假设情景计算与可验证预测，不能保证活动收益。 |
| 京东确认问题 | Q01,Q05,Q07,Q08 |

证据：[R032需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:62>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API018,API086,API087。

## R033 活动冲突判断

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 需要价保、价格保护、10类活动叠加/互斥规则、当前生效活动和商品价格；候选索引没有冲突校验、价保状态或活动规则接口。 |
| 需要WRITE / ACTION | 无 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 事后价保单不能替代报名前的叠加、价保和补贴冲突判定。 |
| 交付边界 | 以官方可执行规则或校验结果为准，不能仅靠通用促销推断。 |
| 京东确认问题 | Q08 |

证据：[R033需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:63>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R034 一键提报

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 需按活动类型读取活动要求、商品/SKU、价格、库存及报名字段；候选接口未证明这些字段及10类活动适用性。 |
| 需要WRITE / ACTION | 可基于已有SaaS页面能力与招标方CLI Skill生成/交付提报底表；未证明可写入京东活动系统或返回报名成功。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 线上报名动作与审核结果未获接口证实，底表路径仍需活动模板。 |
| 交付边界 | 可交付底表路径；直接报名路径单独待确认，不将两者混称成功报名。 |
| 京东确认问题 | Q08 |

证据：[R034需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:64>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R035 活动复盘

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API019 `postActivityReport`；API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API050 `getSensitiveReportSchema`；API051 `postSensitiveReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 报表schema可返回指标、属性、筛选条件和响应字段；报表查询可返回行数据、列头、分页或下载任务；postActivityReport输入activity id/type/name/time、PV、historical PV、member count、filing status，但未提供效果查询或利润输出。 |
| 需要WRITE / ACTION | postActivityReport可提交活动报告字段，属于活动数据上报；不能当作效果查询、报名或收益回写。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 活动上报接口不返回复盘数据，需活动关联成交费用和对比基线。 |
| 交付边界 | 前后变化可描述，因果增量需合适对照与干扰控制。 |
| 京东确认问题 | Q01,Q05,Q07,Q08,Q18 |

证据：[R035需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:65>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API019,API020,API022,API048,API049,API050,API051。

## R036 广告选品

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API032 `getAdsAccount`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 计划/单元投放指标、状态、时间筛选及广告账户信息；SKU商品池、商品成本/毛利和商品级资格未证明 |
| 需要WRITE / ACTION | 无 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 广告选品需SKU历史表现、毛利和库存，计划报表不能完整代表SKU潜力。 |
| 交付边界 | 输出选品依据与约束，不以历史高ROI保证未来表现。 |
| 京东确认问题 | Q01,Q05,Q07,Q09 |

证据：[R036需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:73>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API032。

## R037 投放方案

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API021 `getAdsCampaign`；API023 `postAdsCampaign`；API024 `patchAdsCampaign`；API025 `batchPatchAdsCampaign`；API031 `getAccountBalance`；API032 `getAdsAccount`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 既有计划配置/状态、预算、出价、定向、账户余额及历史指标候选 |
| 需要WRITE / ACTION | 创建计划；更新计划出价/溢价/名称；预算与ROI目标写入语义待确认 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 预算、出价和ROI目标必须与成本、投放场景及账户约束一致。 |
| 交付边界 | 方案先形成可审核参数，创建动作另行承接。 |
| 京东确认问题 | Q01,Q07,Q09 |

证据：[R037需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:74>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API021,API023,API024,API025,API031,API032。

## R038 一键建计划

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API023 `postAdsCampaign`；API027 `postAdsGroup`；API028 `batchPostAdsGroup`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 创建所需计划、单元及配置由流程收集；完整SKU/素材输入读取未证明 |
| 需要WRITE / ACTION | 创建计划、单元及批量单元 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 已有创建候选，但非标准接口合同、必填配置和京喜广告产品适用性需确认。 |
| 交付边界 | 创建结果与启投状态分开验证，不推断接口名即代表可直接调用。 |
| 京东确认问题 | Q01,Q09 |

证据：[R038需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:75>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API023,API027,API028。

## R039 智能调优

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API021 `getAdsCampaign`；API022 `listAdsGroups`；API024 `patchAdsCampaign`；API025 `batchPatchAdsCampaign`；API029 `batchPatchAdsGroup`；API031 `getAccountBalance`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 计划/单元指标、状态、预算、出价、定向、账户余额 |
| 需要WRITE / ACTION | 单个/批量调整计划预算策略和单元预算费用出价定向 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 带延迟归因的实时反馈下调整预算、出价与ROI，需优化约束和稳定性控制。 |
| 交付边界 | T4为授权自动模式目标；实时性与ROI可写参数尚待确认。 |
| 京东确认问题 | Q01,Q09,Q17 |

证据：[R039需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:76>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API021,API022,API024,API025,API029,API031。

## R040 放量

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API025 `batchPatchAdsCampaign`；API029 `batchPatchAdsGroup`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 计划/单元ROI、GMV、CTR、曝光、点击、成本、订单等候选字段及状态/时间 |
| 需要WRITE / ACTION | 批量更新计划预算/策略及单元预算费用出价定向 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 高ROI不保证扩量后边际收益，必须限制预算增幅并监测回落。 |
| 交付边界 | 扩大预算是原文动作，是否无人值守由授权策略确认。 |
| 京东确认问题 | Q01,Q09,Q17 |

证据：[R040需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:77>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API025,API029。

## R041 止损

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API021 `getAdsCampaign`；API022 `listAdsGroups`；API025 `batchPatchAdsCampaign`；API026 `batchPutAdsCampaignState`；API029 `batchPatchAdsGroup`；API030 `batchPutAdsGroupState`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 计划/单元状态、预算、投放指标及时间/状态筛选 |
| 需要WRITE / ACTION | 降预算/调参数；按operateType批量启停计划或单元；停止是状态动作，不是删除 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 止损需兼顾归因延迟与误停风险，并确认降预算或暂停的生效回执。 |
| 交付边界 | 以暂停/降预算为动作，不扩展为删除广告计划。 |
| 京东确认问题 | Q01,Q09,Q17 |

证据：[R041需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:78>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API021,API022,API025,API026,API029,API030。

## R042 创意生成

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API027 `postAdsGroup`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 用户单次输入资料即可启动创意生成，不依赖广告效果数据；创意关联读取字段待确认 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 已有素材能力可扩展广告图片与卖点，广告规格和商品事实需适配。 |
| 交付边界 | 单次生成不强制依赖广告效果；区别于R016的效果驱动创意。 |
| 京东确认问题 | Q03 |

证据：[R042需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:79>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；[EC02](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:37>)；[EC03](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:73>)；API证据 API027。

## R043 关键词优化

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API027 `postAdsGroup`；API029 `batchPatchAdsGroup`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 单元及投放指标候选；关键词清单/匹配/质量字段未明确 |
| 需要WRITE / ACTION | 创建单元及批量更新预算/费用/出价/定向；keywordList不等于增词/删词语义 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 出现关键词列表不证明支持既有关键词增删及词级效果读取。 |
| 交付边界 | 先确认词级数据与增删动作合同，再实施关键词优化。 |
| 京东确认问题 | Q01,Q09 |

证据：[R043需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:80>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API027,API029。

## R044 广告复盘

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API050 `getSensitiveReportSchema`；API051 `postSensitiveReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 计划/单元指标；schema字段；报表行列头分页或异步下载任务 |
| 需要WRITE / ACTION | 无业务写入；postReport/postSensitiveReport为报表读取查询 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 计划曝光点击已有字段，GMV、ROI、消耗仍需明确类型、单位和归因规则。 |
| 交付边界 | 按统一广告口径复盘，不把广告成交等同全店成交。 |
| 京东确认问题 | Q01,Q09 |

证据：[R044需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:81>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051。

## R045 店铺升星助手

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 未发现店铺星级、下一星级或升星指标读取接口。 |
| 需要WRITE / ACTION | 无；缺少生成提升路径所需数据。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 下一星级差距与最短提升路径依赖星级模型、阈值和可改善项。 |
| 交付边界 | 先形成规则下的优先路径，不承诺未经定义的全局最短。 |
| 京东确认问题 | Q14 |

证据：[R045需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:87>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R046 客服诊断

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API063 `queryWaiterStatus`；API064 `listChatbotEvaluations`；API065 `getChatbotPerformance`；API066 `listDongdongSessionChatLogs`；API067 `listDongdongSessions`；API068 `listDongdongChatDetails`；API069 `listDongdongWaiters`；API070 `listDongdongWaiterPerformance`；API071 `listDongdongWaiterEvaluations`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可候选读取会话/聊天、客服状态、绩效和评价。 |
| 需要WRITE / ACTION | 未发现排班配置写入。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 聊天与绩效可用作诊断基础，但排班空档需计划班表与实际在线状态对照。 |
| 交付边界 | 分别验收超时、高频问题和排班，不以在线状态替代排班。 |
| 京东确认问题 | Q01,Q11 |

证据：[R046需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:88>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API063,API064,API065,API066,API067,API068,API069,API070,API071。

## R047 AI客服回复

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 未发现回复模板配置读取接口。 |
| 需要WRITE / ACTION | 未发现回复模板配置写入接口；客服发送接口不能替代模板配置。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 生成回复是内容能力，配置到客服模板库需要专门写入合同。 |
| 交付边界 | 消息发送接口不能替代模板配置；人工复制可作缩小范围的路径。 |
| 京东确认问题 | Q12 |

证据：[R047需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:89>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R048 履约诊断

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API048 `getReportSchema`；API049 `postReport`；API050 `getSensitiveReportSchema`；API051 `postSensitiveReport`；API053 `getOrder`；API054 `listOrders`；API055 `listWaybillTraces`；API056 `listBasicOrders`；API057 `getBasicOrder`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可候选读取动态报表、订单集合/详情和运单轨迹。 |
| 需要WRITE / ACTION | 未发现履约整改或订单/物流配置写入。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 订单与轨迹可提供基础事实，揽收率及延迟发货需统一应履约集合和时限。 |
| 交付边界 | 将原始物流事实与平台考核指标分开，避免口径不一致。 |
| 京东确认问题 | Q01,Q13 |

证据：[R048需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:90>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API048,API049,API050,API051,API053,API054,API055,API056,API057。

## R049 售后诊断

**覆盖：FULL；权限：UNKNOWN。** 平台交互合同覆盖：是；实际权限与运行效果未验证。

候选：API058 `listAfsOrderLogs`；API059 `listAfsOrders`；API060 `getAfsOrder`；API061 `listPriceProtectOrders`；API062 `getPriceProtectOrder`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | getAfsOrder.customerApplyInfo提供applyReasonFirstCid/Desc及applyReasonSecondCid/Desc；需要afsOrderId与商家身份，具体权限及枚举待确认。 |
| 需要WRITE / ACTION | 自动读取原因并由我方形成解决方案；不要求退款、审核等售后处置动作。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 原因读取只是输入，解决方案仍要符合售后政策和商家可执行边界。 |
| 交付边界 | 提供诊断建议，不自动退款或审核售后。 |
| 京东确认问题 | Q01,Q13 |

证据：[R049需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:91>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API058,API059,API060,API061,API062。

## R050 售后沟通话术

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API066 `listDongdongSessionChatLogs`；API067 `listDongdongSessions`；API068 `listDongdongChatDetails`；API072 `postDongdongMessage`；API073 `postDongdongMessageV1`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可候选读取会话、聊天详情和日志作为生成上下文。 |
| 需要WRITE / ACTION | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 沟通内容需真实售后情境与政策依据，避免虚构赔付承诺。 |
| 交付边界 | 用户提供场景后生成话术，发送消息不属于原文明确要求。 |
| 京东确认问题 | Q13 |

证据：[R050需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:92>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API066,API067,API068,API072,API073。

## R051 店铺层级助手

**覆盖：NONE_FOUND；权限：UNKNOWN。** 否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。

候选：OPEN_API_NOT_FOUND。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 未发现店铺经营层级、下一层级或层级规则读取接口。 |
| 需要WRITE / ACTION | 无；差距拆解所需层级规则和指标不可得。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 经营层级指标及升级阈值未明确开放，不能从店铺资料推导等级差距。 |
| 交付边界 | 与星级体系分别确认，不能共用未经证实的规则。 |
| 京东确认问题 | Q14 |

证据：[R051需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:93>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)。

## R052 店铺装修优化

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可候选读取动态报表数据，可能作为流量/CVR分析输入，但当前未证明具体指标存在。 |
| 需要WRITE / ACTION | 未发现店铺页面结构、装修配置或发布写入接口。 |
| Callback / Event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| 缺口及产品判断 | 页面优化需要页面结构、流量路径和转化数据，仅店铺总指标不足以定位页面问题。 |
| 交付边界 | 先交结构建议；若要求直接发布装修需新增动作确认。 |
| 京东确认问题 | Q01,Q05,Q15 |

证据：[R052需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:94>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API048,API049。

## R053 会员运营

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API041 `postStrategy`；API042 `getStrategy`；API043 `listStrategies`；API044 `patchStrategy`；API045 `listTags`；API046 `listUserPackage`；API047 `postUserPackage`；API074 `getMemberSystem`；API075 `listMemberSystems`；API076 `listVenderMemberRights`；API077 `postMemberPoint`；API078 `listMemberPoints`；API079 `getMemberAggStatistic`；API080 `getMember`；API081 `listOmids`；API082 `patchMember`；API083 `listMemberAggStatistics`；API084 `listMembers`；API085 `listOuids`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 可候选读取会员资料、等级、权益、积分、订单聚合、标签、策略和人群包。 |
| 需要WRITE / ACTION | 可候选写策略、人群包、会员和积分；未发现明确招募、消费者触达或复购营销动作。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 会员与人群数据有基础，招募、权益配置和触达结果尚未形成完整运营链。 |
| 交付边界 | T2是周期运营建议形态；自动招募及触达须明确授权与规则。 |
| 京东确认问题 | Q01,Q16 |

证据：[R053需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:95>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API041,API042,API043,API044,API045,API046,API047,API074,API075,API076,API077,API078,API079,API080,API081,API082,API083,API084,API085。

## R054 AI任务编排

**覆盖：NOT_REQUIRED；权限：NOT_REQUIRED。** 核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。

候选：API088 `postJmAiTask`；API089 `getJmAiTask`；API090 `patchJmAiTask`；API091 `postJmAiTaskRecord`；API092 `getJmAiTaskRecord`；API093 `patchJmAiTaskRecord`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 京麦任务/记录的 scheduled、state、deadline、taskId 等状态字段；本地读取规则命中与优先级所需业务输入需自建。 |
| 需要WRITE / ACTION | 创建或更新任务记录；优先级判断、排序和触发可由本地编排器完成。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 成熟SaaS基座不证明已有冲突仲裁、优先队列和任务生命周期管理。 |
| 交付边界 | 编排可在我方实现；京麦任务同步只是可选集成，非执行引擎证据。 |
| 京东确认问题 | Q17 |

证据：[R054需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:101>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API088,API089,API090,API091,API092,API093。

## R055 AI自动执行

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API002 `postProductApply`；API003 `patchProductApply`；API008 `batchCreateSkuMaterial`；API010 `postMediaZoneImage`；API012 `postMediaZoneVideo`；API023 `postAdsCampaign`；API024 `patchAdsCampaign`；API025 `batchPatchAdsCampaign`；API026 `batchPutAdsCampaignState`；API027 `postAdsGroup`；API028 `batchPostAdsGroup`；API029 `batchPatchAdsGroup`；API030 `batchPutAdsGroupState`；API088 `postJmAiTask`；API089 `getJmAiTask`；API090 `patchJmAiTask`；API091 `postJmAiTaskRecord`；API092 `getJmAiTaskRecord`；API093 `patchJmAiTaskRecord`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 商品申请、SKU素材、广告计划/单元及投放标识与指标；价格、活动全域数据和写入范围未完整证实。 |
| 需要WRITE / ACTION | 写商品申请/素材，创建或调整广告计划/单元，批量启停；需商家授权。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 跨商品价格活动广告的自动动作需逐工具授权、生效核验和异常控制。 |
| 交付边界 | 仅在明确授权内执行；缺少某一动作接口就不能承诺全域闭环。 |
| 京东确认问题 | Q01,Q02,Q08,Q09,Q17 |

证据：[R055需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:102>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API002,API003,API008,API010,API012,API023,API024,API025,API026,API027,API028,API029,API030,API088,API089,API090,API091,API092,API093。

## R056 自动复检

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API088 `postJmAiTask`；API089 `getJmAiTask`；API090 `patchJmAiTask`；API091 `postJmAiTaskRecord`；API092 `getJmAiTaskRecord`；API093 `patchJmAiTaskRecord`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 广告预算、ROI/GMV、CTR、曝光、点击、成本、订单/加购及动态报表数据；任务状态。 |
| 需要WRITE / ACTION | 业务指标无写入；可更新京麦任务/记录状态作为同步。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 任务成功记录不证明经营改善，需动作关联指标及可观察结果窗口。 |
| 交付边界 | 复检区分状态生效和指标变化，不擅自追加自动执行下一步。 |
| 京东确认问题 | Q01,Q05,Q09,Q17,Q18 |

证据：[R056需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:103>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API088,API089,API090,API091,API092,API093。

## R057 AI经营复盘

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API050 `getSensitiveReportSchema`；API051 `postSensitiveReport`；API052 `getReportDownloadTask`；API086 `listAccountRecords`；API087 `listBills`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 投放指标、动态报表行数据、账户流水和账单字段。 |
| 需要WRITE / ACTION | 本地聚合并生成日报/周报；候选API未证明外部经营报告写回。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 周期报告需要跨域指标口径、刷新时间与完整性，生成文字本身不是主要限制。 |
| 交付边界 | 输出缺失数据及口径说明；日报周报不等于要求实时采集。 |
| 京东确认问题 | Q01,Q05,Q07,Q09 |

证据：[R057需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:104>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API050,API051,API052,API086,API087。

## R058 策略A/B实验

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 实验组/对照组投放计划与 ROI、GMV、CTR、曝光、点击、成本、订单等结果候选数据。 |
| 需要WRITE / ACTION | 创建/修改广告计划与单元，形成投放策略变体。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 经营策略实验涉及跨工具分组、干扰和归因，素材实验接口不能覆盖全部场景。 |
| 交付边界 | 先联合定义可控实验单元、对照和停止条件。 |
| 京东确认问题 | Q01,Q10,Q18 |

证据：[R058需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:105>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049。

## R059 策略学习

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 历史投放配置与时间序列指标、订单/账单数据可作为 Action→Result 候选输入；关联完整性未证实。 |
| 需要WRITE / ACTION | 可更新广告计划/单元或启停状态。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 历史动作结果可能有选择偏差，持续学习需要可靠反馈及策略版本评价。 |
| 交付边界 | T5表示动作结果策略的目标反馈链，不证明已有学习系统或自动发布能力。 |
| 京东确认问题 | Q01,Q05,Q17,Q18 |

证据：[R059需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:106>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049。

## R060 异常预警

**覆盖：PARTIAL；权限：UNKNOWN。** 否：仅覆盖部分平台数据或动作，不能承诺完整闭环。

候选：API020 `listAdsCampaigns`；API022 `listAdsGroups`；API048 `getReportSchema`；API049 `postReport`；API088 `postJmAiTask`；API089 `getJmAiTask`；API090 `patchJmAiTask`；API091 `postJmAiTaskRecord`；API092 `getJmAiTaskRecord`；API093 `patchJmAiTaskRecord`。

| 项 | 需求与接口边界 |
|---|---|
| 需要READ数据 | 投放指标、动态报表数据和任务状态，可作为异常检测输入。 |
| 需要WRITE / ACTION | 本地规则/模型触发后可创建京麦任务记录；具体业务动作需 R055 的写接口。 |
| Callback / Event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| 缺口及产品判断 | 异常检测需持续可靠数据、去重触发和任务冲突处理，不能只增加通知规则。 |
| 交付边界 | 自动触发任务与自动改变京东状态分开授权。 |
| 京东确认问题 | Q01,Q05,Q17 |

证据：[R060需求](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\京东京喜-ISV-需求清单.md:107>)；[EC01](<C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\inputs\existing-capabilities.md:17>)；API证据 API020,API022,API048,API049,API088,API089,API090,API091,API092,API093。

## API字段证据附录

以下保留原始method，异常方法不擅自改写为HTTP标准动词；ACTION含业务校验/状态动作，不等于全部会修改商品。下列候选置信度仅衡量匹配与字段清晰度。

### API001 商品API · listProductOpportunities

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.product-opportunities   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | opportunityType/opportunityVersion, page/pageSize/scrollId  |
| 主要输出 |  opportunity name/code, categories, popularity, supplyDemandRatio, saleSkuNum/saleShopNum, price range |
| 相关需求 | R001；R008；R027；R028 |
| 匹配原因 | 商机与热度/供需数据明确；潜力定义需业务映射 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5839-L5902 |

### API002 商品API · postProductApply

| 项 | 证据 |
|---|---|
| method | POST.sp-product.v0.product-applies   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | request.schema、productApplyDTO（仅productId/spuSkuApplyGray/saveActionType/limitInfoSubmitMethod/categoryDTO等已展开）、身份与scene |
| 主要输出 |  apply result/applyId |
| 相关需求 | R002；R005；R006；R007；R055 |
| 匹配原因 | 创建/整版编辑申请候选；完整内容可写字段未被当前schema证明（P01） |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1304-L1338 |

定点限制：title/shortTitle/sellingPoint/detail/image requiredness and writable scope。

### API003 商品API · patchProductApply

| 项 | 证据 |
|---|---|
| method | PATCH.sp-product.v0.product-applies._applyId   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | applyId and partial product application fields  |
| 主要输出 |  update result |
| 相关需求 | R002；R005；R006；R055 |
| 匹配原因 | 承接生成后的商品字段写回；可修改范围待确认 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1094-L1144 |

### API004 商品API · listProductPublishTemplates

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.product-schemas   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | category  |
| 主要输出 |  product schema template |
| 相关需求 | R002；R005 |
| 匹配原因 | 为发品和属性补全提供类目模板 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1023-L1050 |

### API005 商品API · postProductValidation

| 项 | 证据 |
|---|---|
| method | POST.sp-product.v0.product-schemas.validations   HTTP: POST |
| 操作类型 | ACTION |
| 主要输入 | schema/productApplyDTO including title/category/brand/main image/attributes  |
| 主要输出 |  violation fields/reasons |
| 相关需求 | R002；R003；R005；R006 |
| 匹配原因 | 明确商品信息合规检测；规则检测不等于 AI 优化 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2937-L2974 |

### API006 商品API · getHealthScore

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.health-infos._healthInfoId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | healthScoreId/detectFactor  |
| 主要输出 |  healthScore, level, improvement troubleCode/name/desc |
| 相关需求 | R003；R004；R006 |
| 匹配原因 | 直接提供健康分和改进项 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5745-L5787 |

### API007 商品API · listHealthScores

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.health-infos   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | product/SKU, score range, pagination  |
| 主要输出 |  health scores and improvement list |
| 相关需求 | R003；R004；R006 |
| 匹配原因 | 批量发现信息分问题 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5788-L5838 |

### API008 商品API · batchCreateSkuMaterial

| 项 | 证据 |
|---|---|
| method | POST.sp-product.v0.sku-materials.batch   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | batch SKU materials (透图/白底图/场景图/卖点图/定时主图)  |
| 主要输出 |  item results |
| 相关需求 | R010；R011；R014；R055 |
| 匹配原因 | 明确多类 SKU 素材绑定 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2089-L2201 |

定点限制：material type enum, field requiredness, per-item response semantics。

### API009 商品API · listSkuMaterials

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.sku-materials   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | SKU/material filters  |
| 主要输出 |  SKU material information |
| 相关需求 | R010；R011；R014 |
| 匹配原因 | 读取现有素材用于替换/审计 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2203-L2288 |

### API010 商品API · postMediaZoneImage

| 项 | 证据 |
|---|---|
| method | POST.sp-product.v0.media-zones._zoneId.images   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | zoneId, imgBase64 or fileUrl, metadata  |
| 主要输出 |  imageId/URL |
| 相关需求 | R010；R011；R014；R055 |
| 匹配原因 | 上传图片到商品图片空间；SKU绑定待确认 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2481-L2517 |

### API011 商品API · getMediaZoneVideoUploadUrl

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.media-zones._zoneId.upload-urls   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | zoneId/video info  |
| 主要输出 |  upload URL |
| 相关需求 | R013；R014 |
| 匹配原因 | 提供视频上传地址，不证明视频生成 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2683-L2721 |

### API012 商品API · postMediaZoneVideo

| 项 | 证据 |
|---|---|
| method | POST.sp-product.v0.media-zones._zoneId.videos   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | zoneId, video metadata, jdVideoId  |
| 主要输出 |  videoId |
| 相关需求 | R013；R014；R055 |
| 匹配原因 | 明确保存商家主图视频 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2722-L2758 |

### API013 商品API · postMaterialExperiment

| 项 | 证据 |
|---|---|
| method | POST.sp-product.v0.material-experiments   HTTP: POST |
| 操作类型 | ACTION |
| 主要输入 | SKU/product, experiment period/type, material versions, routeRatio  |
| 主要输出 |  experimentId/status |
| 相关需求 | R015 |
| 匹配原因 | 明确创建素材 AB 实验 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3926-L4135 |

定点限制：CTR/CVR/GMV/ROI effect metrics, winner selection, publish action。

### API014 商品API · patchMaterialExperiment

| 项 | 证据 |
|---|---|
| method | PATCH.sp-product.v0.material-experiments._experimentId   HTTP: PATCH |
| 操作类型 | ACTION |
| 主要输入 | experimentId, experiment DTO, updateType  |
| 主要输出 |  update status |
| 相关需求 | R015 |
| 匹配原因 | 更新实验配置/状态；优胜版本未证实 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L4136-L4348 |

定点限制：CTR/CVR/GMV/ROI effect metrics, winner selection, publish action。

### API015 商品API · listMaterialExperiments

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.material-experiments   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | SKU/product/status/scene/page  |
| 主要输出 |  experiment status, period, versions, audit time |
| 相关需求 | R015 |
| 匹配原因 | 读取实验状态；效果指标待验证 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L4349-L4617 |

定点限制：CTR/CVR/GMV/ROI effect metrics, winner selection, publish action。

### API016 商品API · listSuggestedPrices

| 项 | 证据 |
|---|---|
| method | GET.sp-order.v0.suggested-prices   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | SKU list  |
| 主要输出 |  targetPrice/advicePrice/benefitPoint |
| 相关需求 | R020；R023 |
| 匹配原因 | 直接提供建议价格；竞品/毛利来源未证实 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5141-L5190 |

定点限制：competitor, margin, and rule provenance; real-time/history semantics。

### API017 商品API · listPriceStars

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.price-stars   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | SKU/SPU, competitiveness filters  |
| 主要输出 |  priceStar/competitivePower/handPrice |
| 相关需求 | R020；R023 |
| 匹配原因 | 价格竞争力辅助字段；不是实时竞品历史 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5660-L5744 |

### API018 商品API · listSkuStocks

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.sku-stocks   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | SKU list  |
| 主要输出 |  stockNum and reserved/transfer/not-for-sale stock |
| 相关需求 | R031；R032 |
| 匹配原因 | 活动推荐/测算库存事实；不含活动利润 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3278-L3312 |

### API019 营销API · postActivityReport

| 项 | 证据 |
|---|---|
| method | POST.sp-marketing.v0.marketingactivities   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | activity id/type/name/time, PV, historical PV, member count, filing status  |
| 主要输出 |  success |
| 相关需求 | R035 |
| 匹配原因 | 可能用于活动复盘上报；无效果查询/利润输出 |
| 置信度 | low |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L7-L44 |

### API020 推广API · listAdsCampaigns

| 项 | 证据 |
|---|---|
| method | listAdsCampaigns   HTTP: LISTADSCAMPAIGNS |
| 操作类型 | READ |
| 主要输入 | campaign/time/status/pagination/metrics filters  |
| 主要输出 |  budget, ROI, GMV, CTR, impressions, clicks, cost, orders/carts |
| 相关需求 | R016；R024；R025；R029；R035；R036；R037；R039；R040；R041；R044；R056；R057；R058；R059；R060 |
| 匹配原因 | 计划与指标读取最直接 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693 |

定点限制：many metrics are object/extension types; numeric unit and GMV/ROI definitions。

### API021 推广API · getAdsCampaign

| 项 | 证据 |
|---|---|
| method | GET.ads-bidding.v0.ads-campaigns._adsCampaignId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | campaignId  |
| 主要输出 |  status, budget, time, bidding, premium, targeting, groups |
| 相关需求 | R037；R039；R041 |
| 匹配原因 | 读取单计划配置状态 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L478-L597 |

### API022 推广API · listAdsGroups

| 项 | 证据 |
|---|---|
| method | GET.ads-bidding.v0.ads-groups   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | campaign/group/status filters  |
| 主要输出 |  groups and ROI/CTR/impressions/clicks/cost/orders |
| 相关需求 | R016；R024；R025；R029；R035；R036；R039；R040；R041；R044；R056；R057；R058；R059；R060 |
| 匹配原因 | 按单元读取投放表现 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193 |

### API023 推广API · postAdsCampaign

| 项 | 证据 |
|---|---|
| method | postAdsCampaign   HTTP: POSTADSCAMPAIGN |
| 操作类型 | WRITE |
| 主要输入 | campaign type/name/time/budget/bidding/targeting  |
| 主要输出 |  campaignId |
| 相关需求 | R037；R038；R055 |
| 匹配原因 | 明确新建广告计划 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L269-L384 |

定点限制：KA/store scope and permission。

### API024 推广API · patchAdsCampaign

| 项 | 证据 |
|---|---|
| method | PATCH.ads-bidding.v0.ads-campaigns._adsCampaignId   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | campaignId, bidding control, premium, name  |
| 主要输出 |  update result |
| 相关需求 | R037；R039；R055 |
| 匹配原因 | 支持单计划出价/溢价调整 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L232-L268 |

### API025 推广API · batchPatchAdsCampaign

| 项 | 证据 |
|---|---|
| method | PATCH.ads-bidding.v0.ads-campaigns.batch   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | campaign list, time/budget/strategy/targeting  |
| 主要输出 |  item results |
| 相关需求 | R037；R039；R040；R041；R055 |
| 匹配原因 | 支持批量预算/策略调整 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L385-L477 |

定点限制：no explicit keyword add/delete operation field found; operateType enum, metric units and permission。

### API026 推广API · batchPutAdsCampaignState

| 项 | 证据 |
|---|---|
| method | PUT.ads-bidding.v0.ads-campaign-states.batch   HTTP: PUT |
| 操作类型 | ACTION |
| 主要输入 | campaignId list, operateType  |
| 主要输出 |  per-item success/error |
| 相关需求 | R041；R055 |
| 匹配原因 | 支持批量启停计划 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L42-L76 |

定点限制：no explicit keyword add/delete operation field found; operateType enum, metric units and permission。

### API027 推广API · postAdsGroup

| 项 | 证据 |
|---|---|
| method | POST.ads-bidding.v0.ads-groups   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | campaignId, group name/target/bidding, keyword automation/ad list  |
| 主要输出 |  group result |
| 相关需求 | R038；R042；R043；R055 |
| 匹配原因 | 可创建广告单元；关键词/创意语义待验证 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L694-L794 |

定点限制：no explicit keyword add/delete operation field found; operateType enum, metric units and permission。

### API028 推广API · batchPostAdsGroup

| 项 | 证据 |
|---|---|
| method | POST.ads-bidding.v0.ads-groups.batch   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | campaignId, group list, budget/fee  |
| 主要输出 |  per-item results |
| 相关需求 | R038；R055 |
| 匹配原因 | 批量建单元 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L194-L231 |

### API029 推广API · batchPatchAdsGroup

| 项 | 证据 |
|---|---|
| method | PATCH.ads-bidding.v0.ads-groups.batch   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | group list, budget/fee/bidding/targeting  |
| 主要输出 |  per-item results |
| 相关需求 | R039；R040；R041；R043；R055 |
| 匹配原因 | 批量调整单元投放参数 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L826-L878 |

定点限制：no explicit keyword add/delete operation field found; operateType enum, metric units and permission。

### API030 推广API · batchPutAdsGroupState

| 项 | 证据 |
|---|---|
| method | PUT.ads-group-states.batch   HTTP: PUT |
| 操作类型 | ACTION |
| 主要输入 | adGroupId list, operateType  |
| 主要输出 |  per-item success/error |
| 相关需求 | R041；R055 |
| 匹配原因 | 支持批量启停单元 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L7-L41 |

### API031 推广API · getAccountBalance

| 项 | 证据 |
|---|---|
| method | GET.ads-billing.v0.ads-accounts.self.ads-balances   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | account/site identity  |
| 主要输出 |  cash/red packet/commission balances |
| 相关需求 | R037；R039 |
| 匹配原因 | 提供广告预算约束事实 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L879-L917 |

### API032 推广API · getAdsAccount

| 项 | 证据 |
|---|---|
| method | GET.ads-billing.v0.ads-accounts.self   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | login/site identity  |
| 主要输出 |  advertising account information/id |
| 相关需求 | R036；R037 |
| 匹配原因 | 发现投放账户并作为其他 API 入参 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L918-L946 |

### API033 内容API · postContentImages

| 项 | 证据 |
|---|---|
| method | POST.sp-content.v0.public-domain-content-images   HTTP: POST |
| 操作类型 | READ |
| 主要输入 | image upload params  |
| 主要输出 |  asset result |
| 相关需求 | R012；R016 |
| 匹配原因 | 公域内容图片上传底座；商品/广告绑定未证实 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L7-L32 |

### API034 内容API · postContentVideos

| 项 | 证据 |
|---|---|
| method | POST.sp-content.v0.public-domain-content-videos   HTTP: POST |
| 操作类型 | READ |
| 主要输入 | video upload params  |
| 主要输出 |  upload URL/asset |
| 相关需求 | R013；R016 |
| 匹配原因 | 公域视频上传底座；不证明自动生成 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L33-L61 |

### API035 内容API · postContents

| 项 | 证据 |
|---|---|
| method | POST.sp-content.v0.public-domain-contents   HTTP: POST |
| 操作类型 | READ |
| 主要输入 | public content object with text/images/videos  |
| 主要输出 |  contentId/result |
| 相关需求 | R012；R016 |
| 匹配原因 | 保存发布内容；目标场景待确认 |
| 置信度 | low |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L63-L163 |

### API036 内容API · putContents

| 项 | 证据 |
|---|---|
| method | PUT.sp-content.v0.public-domain-contents._contentId   HTTP: PUT |
| 操作类型 | READ |
| 主要输入 | contentId and content fields  |
| 主要输出 |  update result |
| 相关需求 | R012；R016 |
| 匹配原因 | 支持内容修改；商品详情关联未证实 |
| 置信度 | low |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L164-L265 |

### API037 内容API · listContents

| 项 | 证据 |
|---|---|
| method | GET.sp-content.v0.public-domain-contents   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | pagination/filters  |
| 主要输出 |  content list |
| 相关需求 | R012；R016 |
| 匹配原因 | 查询已发布公域内容 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L266-L292 |

### API038 商品API · listSkus

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.skus   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | 分页/状态/商品筛选  |
| 主要输出 |  skuId、skuName、sku状态/商品关联 |
| 相关需求 | R002；R003；R005；R006；R014 |
| 匹配原因 | 读取 SKU 是发品、素材批处理和写后验证输入链 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L7-L117 |

### API039 商品API · listProducts

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.products   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | 分页/状态/类目筛选  |
| 主要输出 |  productId、商品名称、SKU/状态等列表字段 |
| 相关需求 | R002；R003；R005；R006；R014 |
| 匹配原因 | 读取商品标题/属性/状态作为优化和写后验证输入链 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L118-L315 |

### API040 商品API · getProduct

| 项 | 证据 |
|---|---|
| method | GET.sp-product.v0.products._productId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | productId  |
| 主要输出 |  商品详情、SKU、属性/详情字段 |
| 相关需求 | R002；R003；R005；R006；R014 |
| 匹配原因 | 读取单商品详情用于字段补全、优化、素材关联和写后核验 |
| 置信度 | high |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L316-L995 |

### API041 营销API · postStrategy

| 项 | 证据 |
|---|---|
| method | POST.sp-marketing.v0.strategies   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | 策略定义/人群条件  |
| 主要输出 |  strategyId/结果 |
| 相关需求 | R053 |
| 匹配原因 | 创建人群策略，可作会员分层规则底座 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L77-L106 |

定点限制：membership benefits, repurchase automation, account authorization。

### API042 营销API · getStrategy

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.strategies._strategyId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | strategyId  |
| 主要输出 |  策略详情 |
| 相关需求 | R053 |
| 匹配原因 | 读取人群分层策略 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L107-L138 |

### API043 营销API · listStrategies

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.strategies   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | 分页/筛选  |
| 主要输出 |  策略列表 |
| 相关需求 | R053 |
| 匹配原因 | 读取会员分层策略集合 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L187-L233 |

### API044 营销API · patchStrategy

| 项 | 证据 |
|---|---|
| method | PATCH.sp-marketing.v0.strategies._strategyId   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | strategyId/策略字段  |
| 主要输出 |  更新结果 |
| 相关需求 | R053 |
| 匹配原因 | 更新会员分层策略 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L234-L264 |

### API045 营销API · listTags

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.tags   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | 标签查询条件  |
| 主要输出 |  标签列表 |
| 相关需求 | R053 |
| 匹配原因 | 标签列表可作为会员分层输入；会员权益/复购未证实 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L265-L305 |

定点限制：membership benefits, repurchase automation, account authorization。

### API046 营销API · listUserPackage

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.userpackages   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | 分页/筛选  |
| 主要输出 |  人群包列表 |
| 相关需求 | R053 |
| 匹配原因 | 读取人群包用于会员运营分层 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L331-L363 |

定点限制：membership benefits, repurchase automation, account authorization。

### API047 营销API · postUserPackage

| 项 | 证据 |
|---|---|
| method | POST.sp-marketing.v0.userpackages   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | 人群包定义  |
| 主要输出 |  instanceId/结果 |
| 相关需求 | R053 |
| 匹配原因 | 创建人群包是会员招募/分层的部分底座；权益和复购未证实 |
| 置信度 | medium |
| source_file | references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L420-L452 |

定点限制：membership benefits, repurchase automation, account authorization。

### API048 数据API · getReportSchema

| 项 | 证据 |
|---|---|
| method | GET.sp-data.v0.report-schemas._reportSchemaId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | reportSchemaId:string；request:object；request.subjectInfo:string；request.pin:string |
| 主要输出 | data:object；data.reportSchemaId:string；data.reportSchemaName:string；data.description:string；data.availableIndicators:array；data.availableIndicators[].id:string；data.availableIndicators[].name:string；data.availableIndicators[].description:string；data.availableIndicators[].dataType:string；data.availableIndicators[].sortable:boolean；data.availableAttributes:array；data.availableAttributes[].id:string；data.availableAttributes[].name:string；data.availableAttributes[].description:string；data.availableAttributes[].dataType:string；data.availableAttributes[].sortable:boolean；data.availableCriteria:array；data.availableCriteria[].property:string；data.availableCriteria[].name:string；data.availableCriteria[].required:boolean；data.availableCriteria[].supportedOperators:array；data.availableCriteria[].allowedValues:array；data.availableCriteria[].description:string；data.availableCriteria[].dataType:string；data.responseFields:array；data.responseFields[].id:string；data.responseFields[].name:string；data.responseFields[].description:string；data.responseFields[].dataType:string；data.responseFields[].sortable:boolean |
| 相关需求 | R008；R009；R024；R025；R026；R027；R028；R029；R035；R044；R048；R052；R056；R057；R058；R059；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | medium |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7 |

定点限制：报表字段由 schema/查询条件动态决定，未证明商品/店铺/渠道/广告指标及时间粒度。

### API049 数据API · postReport

| 项 | 证据 |
|---|---|
| method | POST.sp-data.v0.reports   HTTP: POST |
| 操作类型 | READ |
| 主要输入 | request:object；request.reportSchemaId:string；request.reportDTO:object；request.reportDTO.criterionList:array；request.reportDTO.fieldList:array；request.page:integer；request.pageSize:integer；request.pin:string；request.subjectInfo:string；request.sortBy:array；request.sortBy[].propertyName:string；request.sortBy[].direction:string；request.isAsync:boolean；request.requestUUID:string |
| 主要输出 | data:object；data.dataRowList:array；data.dataRowList[].row:array；data.columnHeaderList:array；data.paginationData:object；data.paginationData.currentPage:integer；data.paginationData.nextCursor:string；data.paginationData.pageSize:integer；data.paginationData.totalItems:integer；data.paginationData.hasNextPage:boolean；data.paginationData.totalPages:integer；data.isAsync:boolean；data.reportDownloadTask:object；data.reportDownloadTask.reportDownloadTaskId:string；data.reportDownloadTask.reportSchemaId:string；data.reportDownloadTask.extraInfo:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R008；R009；R024；R025；R026；R027；R028；R029；R035；R044；R048；R052；R056；R057；R058；R059；R060 |
| 匹配原因 | 请求 reportSchemaId、筛选条件与时间范围；返回报表数据或下载任务（指标语义待定点确认） |
| 置信度 | medium |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81 |

定点限制：报表字段由 schema/查询条件动态决定，未证明商品/店铺/渠道/广告指标及时间粒度。

### API050 数据API · getSensitiveReportSchema

| 项 | 证据 |
|---|---|
| method | GET.sp-data.v0.yd-report-schemas._reportSchemaId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | reportSchemaId:string；request:object；request.subjectInfo:string；request.pin:string |
| 主要输出 | data:object；data.reportSchemaId:string；data.reportSchemaName:string；data.description:string；data.availableIndicators:array；data.availableIndicators[].id:string；data.availableIndicators[].name:string；data.availableIndicators[].description:string；data.availableIndicators[].dataType:string；data.availableIndicators[].sortable:boolean；data.availableAttributes:array；data.availableAttributes[].id:string；data.availableAttributes[].name:string；data.availableAttributes[].description:string；data.availableAttributes[].dataType:string；data.availableAttributes[].sortable:boolean；data.availableCriteria:array；data.availableCriteria[].property:string；data.availableCriteria[].name:string；data.availableCriteria[].required:boolean；data.availableCriteria[].supportedOperators:array；data.availableCriteria[].allowedValues:array；data.availableCriteria[].description:string；data.availableCriteria[].dataType:string；data.responseFields:array；data.responseFields[].id:string；data.responseFields[].name:string；data.responseFields[].description:string；data.responseFields[].dataType:string；data.responseFields[].sortable:boolean |
| 相关需求 | R024；R025；R035；R044；R048；R057 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | medium |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L141 |

定点限制：报表字段由 schema/查询条件动态决定，未证明商品/店铺/渠道/广告指标及时间粒度。

### API051 数据API · postSensitiveReport

| 项 | 证据 |
|---|---|
| method | POST.sp-data.v0.yd-reports   HTTP: POST |
| 操作类型 | READ |
| 主要输入 | postReportRequest:object；postReportRequest.reportSchemaId:string；postReportRequest.reportDTO:object；postReportRequest.reportDTO.criterionList:array；postReportRequest.reportDTO.fieldList:array；postReportRequest.page:integer；postReportRequest.pageSize:integer；postReportRequest.pin:string；postReportRequest.subjectInfo:string；postReportRequest.sortBy:array；postReportRequest.sortBy[].propertyName:string；postReportRequest.sortBy[].direction:string |
| 主要输出 | data:object；data.dataRowList:array；data.dataRowList[].row:array；data.columnHeaderList:array；data.paginationData:object；data.paginationData.currentPage:integer；data.paginationData.pageSize:integer；data.paginationData.nextCursor:string；data.paginationData.totalItems:integer；data.paginationData.hasNextPage:boolean；data.paginationData.totalPages:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R024；R025；R035；R044；R048；R057 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | medium |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L215 |

定点限制：报表字段由 schema/查询条件动态决定，未证明商品/店铺/渠道/广告指标及时间粒度。

### API052 数据API · getReportDownloadTask

| 项 | 证据 |
|---|---|
| method | GET.sp-data.v0.report-download-tasks._reportDownloadTaskId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | reportDownloadTaskId:string；request:object；request.reportSchemaId:string；request.reportDownloadTaskId:string；request.subjectInfo:string；request.venderId:string |
| 主要输出 | data:object；data.status:string；data.downloadFileInfoList:array；data.downloadFileInfoList[].downloadUrl:string；data.downloadFileInfoList[].fileType:string；data.downloadFileInfoList[].fileSize:integer；data.extraInfo:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R057 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | medium |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L267 |

定点限制：报表字段由 schema/查询条件动态决定，未证明商品/店铺/渠道/广告指标及时间粒度。

### API053 订单API · getOrder

| 项 | 证据 |
|---|---|
| method | GET.sp-order.v0.orders._orderId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | orderId:integer；getOrderRequest:object；getOrderRequest.venderId:integer；getOrderRequest.scopeSet:object；getOrderRequest.scopeSet.fieldName:string |
| 主要输出 | data:object；data.venderId:integer；data.orderId:integer；data.parentOrderId:integer；data.rootOrderId:integer；data.orderSource:string；data.orderSourceDesc:string；data.orderType:integer；data.orderTypeDesc:string；data.orderStatus:string；data.orderStatusDesc:string；data.createdTime:integer；data.modifiedTime:integer；data.outboundTime:integer；data.finishedTime:integer；data.buyerPin:string；data.xidBuyer:string；data.orderExt:string；data.appointmentCalendar:object；data.appointmentCalendar.opPickTime:integer；data.appointmentCalendar.opDeliveredTime:integer；data.buyerRemark:object；data.buyerRemark.remark:string；data.consigneeInfo:object；data.consigneeInfo.fullName:string；data.consigneeInfo.telephone:string；data.consigneeInfo.mobile:string；data.consigneeInfo.fullAddress:string；data.consigneeInfo.provinceName:string；data.consigneeInfo.cityName:string；data.orderStatus (订单状态枚举字段)；data.createdTime (下单时间，时间戳)；data.outboundTime (出库时间，时间戳)；data.finishedTime (完成时间，时间戳)；data.appointmentCalendar.opDeliveredTime (预约送达时间，时间戳)；data.paymentDetailList (支付明细列表节点) |
| 相关需求 | R048 |
| 匹配原因 | 请求 orderId、venderId、scopeSet.fieldName；返回 orderId/orderStatus/createdTime/modifiedTime 等订单详情（其余嵌套字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L103 |

定点限制：揽收率/延迟发货率需订单集合聚合；全量渠道和京喜订单类型待确认。

### API054 订单API · listOrders

| 项 | 证据 |
|---|---|
| method | GET.sp-order.v0.orders   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listOrdersRequest:object；listOrdersRequest.orderType:integer；listOrdersRequest.bizType:integer；listOrdersRequest.startTime:integer；listOrdersRequest.endTime:integer；listOrdersRequest.orderStatus:string；listOrdersRequest.buyerPin:string；listOrdersRequest.xidBuyer:string；listOrdersRequest.venderId:integer；listOrdersRequest.page:integer；listOrdersRequest.pageSize:integer；listOrdersRequest.sortBy:string；listOrdersRequest.sortOrder:string；listOrdersRequest.scopeSet:object；listOrdersRequest.scopeSet.fieldName:string |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.venderId:integer；data.orderId:integer；data.parentOrderId:integer；data.rootOrderId:integer；data.orderSource:string；data.orderSourceDesc:string；data.orderType:integer；data.orderTypeDesc:string；data.orderStatus:string；data.orderStatusDesc:string；data.createdTime:integer；data.modifiedTime:integer；data.outboundTime:integer；data.finishedTime:integer；data.buyerPin:string；data.xidBuyer:string；data.orderExt:string；data.appointmentCalendar:object；data.appointmentCalendar.opPickTime:integer；data.appointmentCalendar.opDeliveredTime:integer；data.buyerRemark:object；data.buyerRemark.remark:string；data.consigneeInfo:object |
| 相关需求 | R048 |
| 匹配原因 | 请求 venderId、查询时间/状态/分页与 scopeSet；返回订单列表及分页状态（完整字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L422 |

定点限制：揽收率/延迟发货率需订单集合聚合；全量渠道和京喜订单类型待确认。

### API055 订单API · listWaybillTraces

| 项 | 证据 |
|---|---|
| method | GET.sp-order.v0.waybill-traces   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | param1:object；param1.pin:string；param1.venderId:integer；param1.providerCode:string；param1.orderId:integer；param1.waybillCode:string |
| 主要输出 | data:array；data[].providerId:integer；data[].providerName:string；data[].waybillCode:string；data[].traceDataList:array；data[].traceDataList[].groupType:string；data[].traceDataList[].content:string；data[].traceDataList[].msgTime:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string；data[].traceDataList[].groupType (轨迹阶段标识，枚举含发货/揽收/派送/签收等节点)；data[].traceDataList[].msgTime (轨迹消息时间，毫秒)；data[].traceDataList[].content (节点内容说明) |
| 相关需求 | R048 |
| 匹配原因 | 请求运单号/订单标识；返回轨迹节点与时间（字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L1447 |

定点限制：轨迹节点不能单独证明店铺揽收率；揽收/签收枚举待确认。

### API056 订单API · listBasicOrders

| 项 | 证据 |
|---|---|
| method | GET.sp-order.v0.crm-orders   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listOrdersRequest:object；listOrdersRequest.orderType:integer；listOrdersRequest.bizType:integer；listOrdersRequest.startTime:integer；listOrdersRequest.endTime:integer；listOrdersRequest.orderStatus:string；listOrdersRequest.venderId:integer；listOrdersRequest.page:integer；listOrdersRequest.pageSize:integer；listOrdersRequest.sortBy:string；listOrdersRequest.sortOrder:string；listOrdersRequest.scopeSet:object；listOrdersRequest.scopeSet.fieldName:string；listOrdersRequest.buyerPin:string；listOrdersRequest.ouid:string |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.venderId:integer；data.orderId:integer；data.parentOrderId:integer；data.rootOrderId:integer；data.orderSource:string；data.orderSourceDesc:string；data.orderType:integer；data.orderTypeDesc:string；data.orderStatus:string；data.orderStatusDesc:string；data.createdTime:integer；data.modifiedTime:integer；data.outboundTime:integer；data.finishedTime:integer；data.orderExt:string；data.paymentInfo:object；data.paymentInfo.paymentType:integer；data.paymentInfo.paymentTypeDesc:string；data.paymentInfo.paymentConfirmTime:integer；data.paymentInfo.shouldPayAmount:object；data.paymentInfo.actualPayAmount:object；data.paymentInfo.payDiscountAmount:object；data.paymentInfo.freightFee:object |
| 相关需求 | R048 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L1832 |

定点限制：揽收率/延迟发货率需订单集合聚合；全量渠道和京喜订单类型待确认。

### API057 订单API · getBasicOrder

| 项 | 证据 |
|---|---|
| method | GET.sp-order.v0.crm-orders._orderId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | orderId:integer；getOrderRequest:object；getOrderRequest.venderId:integer；getOrderRequest.scopeSet:object；getOrderRequest.scopeSet.fieldName:string |
| 主要输出 | data:object；data.venderId:integer；data.orderId:integer；data.parentOrderId:integer；data.rootOrderId:integer；data.orderSource:string；data.orderSourceDesc:string；data.orderType:integer；data.orderTypeDesc:string；data.orderStatus:string；data.orderStatusDesc:string；data.createdTime:integer；data.modifiedTime:integer；data.outboundTime:integer；data.finishedTime:integer；data.orderExt:string；data.paymentDetailList:object；data.paymentDetailList.paymentDetailListItem:object；data.paymentInfo:object；data.paymentInfo.paymentType:integer；data.paymentInfo.paymentTypeDesc:string；data.paymentInfo.paymentConfirmTime:integer；data.paymentInfo.shouldPayAmount:object；data.paymentInfo.actualPayAmount:object；data.paymentInfo.payDiscountAmount:object；data.paymentInfo.freightFee:object；data.paymentInfo.serviceFeeInfo:object；data.paymentInfo.taxInfo:object；data.sellerTradePriceInfo:object；data.sellerTradePriceInfo.totalOriginalPriceAmount:object |
| 相关需求 | R048 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L2007 |

定点限制：揽收率/延迟发货率需订单集合聚合；全量渠道和京喜订单类型待确认。

### API058 售后API · listAfsOrderLogs

| 项 | 证据 |
|---|---|
| method | GET.sp-aftercare.v0.afs-orders._afsOrderId.logs   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | afsOrderId:integer；listAfsOrderLogsRequest:object；listAfsOrderLogsRequest.pin:string；listAfsOrderLogsRequest.venderId:integer；listAfsOrderLogsRequest.page:integer；listAfsOrderLogsRequest.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:array；data[].operateTime:integer；data[].operateName:string；data[].operatePin:string；data[].xidSeller:string；data[].relationTypeDesc:string；data[].relationType:integer；data[].afsOrderLogId:integer；data[].afsOrderId:integer；data[].operateRemark:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R049 |
| 匹配原因 | 请求 afsOrderId；返回服务单操作日志（字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L108 |

定点限制：getAfsOrder 已有一级/二级原因 ID 与描述；原因枚举完整说明及解决方案规则不在 schema。

### API059 售后API · listAfsOrders

| 项 | 证据 |
|---|---|
| method | GET.sp-aftercare.v0.afs-orders   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.venderId:integer；request.afsOrderId:integer；request.orderType:integer；request.applyStartTime:integer；request.applyEndTime:integer；request.afsOrderTag:object；request.afsOrderTag.element:string；request.timeoutFlag:integer；request.resolvedFlag:boolean；request.upgradeFlag:boolean；request.skuId:integer；request.refundStatus:integer；request.overStartTime:integer；request.overEndTime:integer；request.processResult:integer；request.approveStartTime:integer；request.approveEndTime:integer；request.customerExpect:integer；request.customerName:string；request.mainStatus:integer；request.subStatus:integer；request.updateStartTime:integer；request.updateEndTime:integer；request.customerPin:string；request.xidBuyer:string；request.ouid:string；request.waybillCode:string；request.customerTel:string；request.transferFeedbackReasonIdList:object |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.orderId:integer；data.afsOrderId:integer；data.orderInfo:object；data.orderInfo.orderId:integer；data.orderInfo.orderType:integer；data.orderInfo.orderTypeName:string；data.orderInfo.orderWarehouseStatus:integer；data.orderInfo.orderWarehouseStatusDesc:string；data.skuInfoList:object；data.skuInfoList.skuInfoListItem:object；data.afsOrderBaseInfo:object；data.afsOrderBaseInfo.buId:string；data.afsOrderBaseInfo.applyPin:string；data.afsOrderBaseInfo.xidBuyer:string；data.afsOrderBaseInfo.ouid:string；data.afsOrderBaseInfo.applyTime:integer；data.afsOrderBaseInfo.applyName:string；data.afsOrderBaseInfo.createTime:integer；data.afsOrderBaseInfo.modifiedTime:integer；data.afsOrderBaseInfo.afsOrderFinishTime:integer；data.afsOrderStatusInfo:object；data.afsOrderStatusInfo.mainStatus:integer；data.afsOrderStatusInfo.mainStatusDesc:string；data.afsOrderStatusInfo.subStatus:integer；data.afsOrderStatusInfo.subStatusDesc:string |
| 相关需求 | R049 |
| 匹配原因 | 请求商家、时间、状态和分页；返回售后单列表（完整字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L396 |

定点限制：getAfsOrder 已有一级/二级原因 ID 与描述；原因枚举完整说明及解决方案规则不在 schema。

### API060 售后API · getAfsOrder

| 项 | 证据 |
|---|---|
| method | GET.sp-aftercare.v0.afs-orders._afsOrderId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | afsOrderId:integer；getAfsOrderRequest:object；getAfsOrderRequest.pin:string；getAfsOrderRequest.venderId:integer；getAfsOrderRequest.scopeSet:object；getAfsOrderRequest.scopeSet.fieldName:string |
| 主要输出 | 售后详情；customerApplyInfo.applyReasonFirstCid/Desc、applyReasonSecondCid/Desc（P02） |
| 相关需求 | R049 |
| 匹配原因 | 请求 afsOrderId；返回售后原因、状态、金额及商品信息（字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L571 |

定点限制：getAfsOrder 已有一级/二级原因 ID 与描述；原因枚举完整说明及解决方案规则不在 schema。

### API061 售后API · listPriceProtectOrders

| 项 | 证据 |
|---|---|
| method | GET.sp-aftercare.v0.price-protect-orders   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listPriceProtectOrdersRequest:object；listPriceProtectOrdersRequest.applyStartTime:integer；listPriceProtectOrdersRequest.applyEndTime:integer；listPriceProtectOrdersRequest.orderId:integer；listPriceProtectOrdersRequest.pageSize:integer；listPriceProtectOrdersRequest.priceProtectType:integer；listPriceProtectOrdersRequest.customerPin:string；listPriceProtectOrdersRequest.xidBuyer:string；listPriceProtectOrdersRequest.page:integer；listPriceProtectOrdersRequest.applyStatus:integer；listPriceProtectOrdersRequest.scopeSet:object；listPriceProtectOrdersRequest.scopeSet.element:string；listPriceProtectOrdersRequest.skuId:integer；listPriceProtectOrdersRequest.venderId:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.priceProtectApplyId:integer；data.priceProtectRealChildApplyId:integer；data.uuid:string；data.customerPin:string；data.xidBuyer:string；data.venderId:integer；data.purchasePrice:object；data.applyPrice:object；data.applySuccessPrice:object；data.venderUndertakeAmount:object；data.subsidyRateAmount:object；data.platformCouponRateAmount:object；data.plusDiscountRateAmount:object；data.applyTime:integer；data.priceProtectTypeDesc:string；data.priceProtectStatusDesc:string；data.skuInfo:object；data.skuInfo.skuId:integer；data.skuInfo.skuName:string；data.skuInfo.skuNum:integer；data.skuInfo.skuPhotoUrl:string；data.orderInfo:object；data.orderInfo.orderId:integer；success:boolean |
| 相关需求 | R049 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L973 |

定点限制：getAfsOrder 已有一级/二级原因 ID 与描述；原因枚举完整说明及解决方案规则不在 schema。

### API062 售后API · getPriceProtectOrder

| 项 | 证据 |
|---|---|
| method | GET.sp-aftercare.v0.price-protect-orders._priceProtectOrderId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | priceProtectOrderId:integer；getPriceProtectOrderRequest:object；getPriceProtectOrderRequest.priceProtectType:integer；getPriceProtectOrderRequest.venderId:integer |
| 主要输出 | data:object；data.realApplyId:integer；data.purchaseTaxPrice:object；data.purchasePromotionPrice:object；data.purchaseOriginalPrice:object；data.purchasePrice:object；data.applyJdPrice:object；data.applyTaxPrice:object；data.applyPromotionPrice:object；success:boolean；errorList:object；errorList.code:string；errorList.details:string；errorList.message:string |
| 相关需求 | R049 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L1039 |

定点限制：getAfsOrder 已有一级/二级原因 ID 与描述；原因枚举完整说明及解决方案规则不在 schema。

### API063 客服API · queryWaiterStatus

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-waiter-status   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | queryWaiterStatusRequest:object；queryWaiterStatusRequest.app:string；queryWaiterStatusRequest.waiters:object；queryWaiterStatusRequest.waiters.item:string；queryWaiterStatusRequest.venderId:string |
| 主要输出 | data:object；data.presences:object；data.workingSts:object；data.waiter:string；success:boolean；errorList:object；errorList.code:string；errorList.message:string；errorList.details:string |
| 相关需求 | R046 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L7 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API064 客服API · listChatbotEvaluations

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.chatbots._robotCode.evaluations   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | robotCode:string；listChatbotEvaluationsRequest:object；listChatbotEvaluationsRequest.sortOrder:string；listChatbotEvaluationsRequest.venderId:integer；listChatbotEvaluationsRequest.startTime:integer；listChatbotEvaluationsRequest.endTime:integer；listChatbotEvaluationsRequest.page:integer；listChatbotEvaluationsRequest.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.robotCode:string；data.waiter:string；data.customer:string；data.xidBuyer:string；data.ouid:string；data.sessionTime:integer；data.evaluationTime:integer；data.degree:integer；data.solveOption:string；data.evaluationLabel:string；data.evaluation:string；data.sid:string；data.inviteTime:integer；data.inviteType:string；success:boolean；errorList:object；errorList.code:string；errorList.details:string；errorList.message:string |
| 相关需求 | R046 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L36 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API065 客服API · getChatbotPerformance

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.chatbot-performance._robotCode   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | robotCode:string；getChatbotPerformanceRequest:object；getChatbotPerformanceRequest.venderId:integer；getChatbotPerformanceRequest.startTime:integer；getChatbotPerformanceRequest.endTime:integer |
| 主要输出 | data:object；data.consultCount:integer；data.replyCount:integer；data.unReplyCount:integer；data.evaluationCount:integer；data.verySatisfiedCount:integer；data.satisfiedCount:integer；data.middleSatisfiedCount:integer；data.unsatisfiedCount:integer；data.veryUnsatisfiedCount:integer；data.solvedCount:integer；data.unSolvedCount:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string；data.consultCount (咨询数)；data.replyCount (回复数)；data.unReplyCount (未回复数) |
| 相关需求 | R046 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L85 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API066 客服API · listDongdongSessionChatLogs

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-sessions._sid.chat-logs   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | sid:string；listChatLogsRequest:object；listChatLogsRequest.venderId:integer |
| 主要输出 | data:object；data.waiter:string；data.customer:string；data.xidBuyer:string；data.waiterSend:integer；data.createdTime:integer；data.content:string；data.msgType:integer；data.imgUrl:string；data.contentType:string；data.sid:string；data.uuid:string；data.revokeFlag:integer；data.revokeTime:integer；data.skuId:integer；data.msgAssistFlag:integer；success:boolean；errorList:object；errorList.code:string；errorList.details:string；errorList.message:string；data.createdTime (消息时间)；data.waiterSend (发送方标识)；data.content (消息内容) |
| 相关需求 | R046；R050 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L121 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API067 客服API · listDongdongSessions

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-sessions   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listDongdongSessionsRequest:object；listDongdongSessionsRequest.venderId:integer；listDongdongSessionsRequest.startTime:integer；listDongdongSessionsRequest.endTime:integer；listDongdongSessionsRequest.sortBy:string；listDongdongSessionsRequest.sortOrder:string；listDongdongSessionsRequest.sessionType:integer；listDongdongSessionsRequest.entryList:object；listDongdongSessionsRequest.entryList.element:string；listDongdongSessionsRequest.waiterList:object；listDongdongSessionsRequest.waiterList.element:string；listDongdongSessionsRequest.customerList:object；listDongdongSessionsRequest.customerList.element:string；listDongdongSessionsRequest.page:integer；listDongdongSessionsRequest.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.appId:string；data.cAppId:string；data.customer:string；data.xidBuyer:string；data.waiter:string；data.createdTime:integer；data.replyTime:integer；data.closeTime:integer；data.closeReason:string；data.sessionType:integer；data.transfer:boolean；data.sid:string；data.skuId:integer；data.orderId:integer；data.groupId:integer；data.lastCustomerMsgTime:integer；data.lastWaiterMsgTime:integer；data.customerMsgNum:integer；data.waiterMsgNum:integer；data.responseAvgSpeed:number；data.entry:string；data.inviteTime:integer；data.inviteType:string；data.responseAvgSpeed (会话平均响应速度)；data.lastCustomerMsgTime (客户最后消息时间)；data.lastWaiterMsgTime (客服最后消息时间)；data.createdTime (会话创建时间)；data.closeTime (会话关闭时间) |
| 相关需求 | R046；R050 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L159 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API068 客服API · listDongdongChatDetails

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-chat-details   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listDongdongChatDetailsRequest:object；listDongdongChatDetailsRequest.venderId:integer；listDongdongChatDetailsRequest.startTime:integer；listDongdongChatDetailsRequest.endTime:integer；listDongdongChatDetailsRequest.sortBy:string；listDongdongChatDetailsRequest.sortOrder:string；listDongdongChatDetailsRequest.sessionType:integer；listDongdongChatDetailsRequest.entryList:object；listDongdongChatDetailsRequest.entryList.element:string；listDongdongChatDetailsRequest.waiterList:object；listDongdongChatDetailsRequest.waiterList.element:string；listDongdongChatDetailsRequest.customerList:object；listDongdongChatDetailsRequest.customerList.element:string；listDongdongChatDetailsRequest.page:integer；listDongdongChatDetailsRequest.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:array；data[].dongdongSession:object；data[].dongdongSession.appId:string；data[].dongdongSession.cAppId:string；data[].dongdongSession.customer:string；data[].dongdongSession.waiter:string；data[].dongdongSession.createdTime:integer；data[].dongdongSession.replyTime:integer；data[].dongdongSession.closeTime:integer；data[].dongdongSession.closeReason:string；data[].dongdongSession.sessionType:integer；data[].dongdongSession.transfer:boolean；data[].dongdongSession.sid:string；data[].dongdongSession.skuId:integer；data[].dongdongSession.orderId:integer；data[].dongdongSession.groupId:integer；data[].dongdongSession.lastCustomerMsgTime:integer；data[].dongdongSession.lastWaiterMsgTime:integer；data[].dongdongSession.customerMsgNum:integer；data[].dongdongSession.waiterMsgNum:integer；data[].dongdongSession.responseAvgSpeed:number；data[].dongdongSession.entry:string；data[].dongdongSession.inviteTime:integer；data[].dongdongSession.inviteType:string |
| 相关需求 | R046；R050 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L241 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API069 客服API · listDongdongWaiters

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-waiters   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listDongdongWaitersRequest:object；listDongdongWaitersRequest.venderId:integer；listDongdongWaitersRequest.pageSize:integer；listDongdongWaitersRequest.page:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.shopName:string；data.waiter:string；data.yn:integer；data.leader:boolean；data.level:string；success:boolean；errorList:object；errorList.code:string；errorList.message:string；errorList.details:string |
| 相关需求 | R046 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L340 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API070 客服API · listDongdongWaiterPerformance

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-waiter-performance   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listWaiterPerformanceRequest:object；listWaiterPerformanceRequest.waiterList:array；listWaiterPerformanceRequest.venderId:integer；listWaiterPerformanceRequest.startTime:integer；listWaiterPerformanceRequest.endTime:integer |
| 主要输出 | data:array；data[].waiter:string；data[].avgWaitTime:number；data[].onlineTotalTime:number；data[].serviceTotalTime:number；data[].consultCount:integer；data[].replyCount:integer；data[].unReplyCount:integer；data[].evaluationCount:integer；data[].verySatisfiedCount:integer；data[].satisfiedCount:integer；data[].middleSatisfiedCount:integer；data[].unsatisfiedCount:integer；data[].veryUnSatisfiedCount:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].message:string；errorList[].details:string；data[].avgWaitTime (平均等待时间)；data[].onlineTotalTime (在线总时长)；data[].serviceTotalTime (服务总时长) |
| 相关需求 | R046 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L376 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API071 客服API · listDongdongWaiterEvaluations

| 项 | 证据 |
|---|---|
| method | GET.sp-support.v0.dongdong-waiter-evaluations   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | listWaiterEvaluationsRequest:object；listWaiterEvaluationsRequest.waiterList:object；listWaiterEvaluationsRequest.waiterList.element:string；listWaiterEvaluationsRequest.sortOrder:string；listWaiterEvaluationsRequest.venderId:integer；listWaiterEvaluationsRequest.startTime:integer；listWaiterEvaluationsRequest.endTime:integer；listWaiterEvaluationsRequest.page:integer；listWaiterEvaluationsRequest.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.hasNextPage:boolean；paginationData.totalPages:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.waiter:string；data.customer:string；data.xidBuyer:string；data.ouid:string；data.sessionTime:integer；data.evaluationTime:integer；data.degree:integer；data.solveOption:string；data.evaluationLabel:string；data.evaluation:string；data.sid:string；data.inviteType:string；data.inviteTime:integer；success:boolean；errorList:object；errorList.code:string；errorList.message:string；errorList.details:string |
| 相关需求 | R046 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L414 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API072 客服API · postDongdongMessage

| 项 | 证据 |
|---|---|
| method | POST.sp-support.v0.dongdong-messages   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | postDongdongMessageRequest:object；postDongdongMessageRequest.dongdongMessage:object；postDongdongMessageRequest.dongdongMessage.accessSignature:object；postDongdongMessageRequest.dongdongMessage.upId:string；postDongdongMessageRequest.dongdongMessage.ver:string；postDongdongMessageRequest.dongdongMessage.fromApp:string；postDongdongMessageRequest.dongdongMessage.fromPin:string；postDongdongMessageRequest.dongdongMessage.toApp:string；postDongdongMessageRequest.dongdongMessage.toPinPlainText:string；postDongdongMessageRequest.dongdongMessage.xidBuyer:string；postDongdongMessageRequest.dongdongMessage.body:string |
| 主要输出 | data:object；data.accessId:string；data.msgId:string；data.sendTime:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R050 |
| 匹配原因 | 请求会话/接收方与消息内容；返回发送结果（字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L464 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API073 客服API · postDongdongMessageV1

| 项 | 证据 |
|---|---|
| method | POST.sp-support.v1.dongdong-messages   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | postDongdongMessageRequest:object；postDongdongMessageRequest.dongdongSceneMessage:object；postDongdongMessageRequest.dongdongSceneMessage.access:object；postDongdongMessageRequest.dongdongSceneMessage.sender:object；postDongdongMessageRequest.dongdongSceneMessage.receiver:object；postDongdongMessageRequest.dongdongSceneMessage.bizParam:object；postDongdongMessageRequest.dongdongSceneMessage.bizScene:string；postDongdongMessageRequest.dongdongSceneMessage.isReceiver:boolean；postDongdongMessageRequest.dongdongSceneMessage.isSender:boolean；postDongdongMessageRequest.dongdongSceneMessage.isCtrl:boolean；postDongdongMessageRequest.dongdongSceneMessage.venderId:string |
| 主要输出 | data:object；data.msgId:string；data.accessId:string；data.sendTime:integer；success:boolean；errorList:object；errorList.code:string；errorList.message:string；errorList.details:string |
| 相关需求 | R050 |
| 匹配原因 | 请求会话/接收方与消息内容；返回发送结果（字段待定点确认） |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L541 |

定点限制：未发现明确排班空档/模板配置写入；响应时长字段定义待核实。

### API074 会员API · getMemberSystem

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.member-systems._memberSystemId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | memberSystemId:integer；request:object；request.scopeSet:object；request.scopeSet.element:string；request.venderId:integer |
| 主要输出 | data:object；data.memberSystemId:integer；data.memberSystemState:integer；data.memberSystemType:integer；data.memberSystemTypeDesc:string；data.memberSystemPointsFlag:boolean；data.memberSystemPointsRuleList:array；data.memberSystemPointsRuleList[].ruleId:string；data.memberSystemPointsRuleList[].type:integer；data.memberSystemPointsRuleList[].typeDesc:string；data.memberSystemPointsRuleList[].exchangeMultiplier:object；data.memberSystemPointsRuleList[].points:integer；data.memberSystemLevelRuleList:array；data.memberSystemLevelRuleList[].memberLevel:integer；data.memberSystemLevelRuleList[].memberLevelName:string；data.memberSystemLevelRuleList[].minOrderAmount:object；data.memberSystemLevelRuleList[].maxOrderAmount:object；data.memberSystemLevelRuleList[].minOrderCount:integer；data.memberSystemLevelRuleList[].maxOrderCount:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L7 |

定点限制：未发现新增会员招募/触达动作。

### API075 会员API · listMemberSystems

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.member-systems   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.venderId:integer；request.scopeSet:object；request.scopeSet.element:string |
| 主要输出 | data:array；data[].memberSystemId:integer；data[].memberSystemState:integer；data[].memberSystemType:integer；data[].memberSystemTypeDesc:string；data[].memberSystemPointsFlag:boolean；data[].memberSystemPointsRuleList:array；data[].memberSystemPointsRuleList[].ruleId:string；data[].memberSystemPointsRuleList[].type:integer；data[].memberSystemPointsRuleList[].typeDesc:string；data[].memberSystemPointsRuleList[].exchangeMultiplier:object；data[].memberSystemPointsRuleList[].points:integer；data[].memberSystemLevelRuleList:array；data[].memberSystemLevelRuleList[].memberLevel:integer；data[].memberSystemLevelRuleList[].memberLevelName:string；data[].memberSystemLevelRuleList[].minOrderAmount:object；data[].memberSystemLevelRuleList[].maxOrderAmount:object；data[].memberSystemLevelRuleList[].minOrderCount:integer；data[].memberSystemLevelRuleList[].maxOrderCount:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L53 |

定点限制：未发现新增会员招募/触达动作。

### API076 会员API · listVenderMemberRights

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.vender-member-rights   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.scopeSet:object；request.scopeSet.element:string；request.venderId:integer |
| 主要输出 | data:array；data[].memberDiscountList:array；data[].memberDiscountList[].discount:string；data[].memberDiscountList[].venderMemberGradeName:string；data[].memberDiscountList[].venderMemberGrade:string；data[].memberDiscountList[].memberSystemId:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string；data[].memberDiscountList[].discount (会员折扣)；data[].memberDiscountList[].venderMemberGradeName (会员等级名称) |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L98 |

定点限制：未发现新增会员招募/触达动作。

### API077 会员API · postMemberPoint

| 项 | 证据 |
|---|---|
| method | POST.sp-marketing.v0.members._omid.points   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | memberId:string；request:object；request.memberPointDTO:object；request.memberPointDTO.pointsOperationType:integer；request.memberPointDTO.businessId:string；request.memberPointDTO.comment:string；request.memberPointDTO.points:integer；request.memberPointDTO.venderId:integer |
| 主要输出 | data:object；data.memberSystemId:integer；data.points:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L129 |

定点限制：未发现新增会员招募/触达动作。

### API078 会员API · listMemberPoints

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.members._omid.points   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | omid:string；request:object；request.venderId:integer；request.scopeSet:object；request.scopeSet.field:string；request.startTime:integer；request.endTime:integer；request.cursor:string；request.pageSize:integer |
| 主要输出 | data:array；data[].businessId:string；data[].orderId:string；data[].memberSystemId:integer；data[].customerPin:string；data[].xidBuyer:string；data[].occurTime:integer；data[].points:integer；data[].pointsChangeRemark:string；data[].currentRemainPoints:integer；data[].pointsOperationType:integer；data[].pointsOperationTypeDesc:string；paginationData:object；paginationData.pageSize:integer；paginationData.currentPage:integer；paginationData.nextCursor:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L161 |

定点限制：未发现新增会员招募/触达动作。

### API079 会员API · getMemberAggStatistic

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.member-agg-statistics._omid   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | omid:string；request:object；request.scopeSet:object；request.scopeSet.field:string；request.venderId:integer |
| 主要输出 | data:object；data.member:object；data.member.omid:string；data.member.customerPin:string；data.member.xidBuyer:string；data.member.memberSystemId:integer；data.member.memberLevel:integer；data.member.offlineMemberCardNo:string；data.member.gender:string；data.member.birthday:string；data.member.openCardChannelId:integer；data.member.bindTime:integer；data.member.phoneFlag:boolean；data.member.wechatFlag:boolean；data.member.pcFlag:boolean；data.member.joinOrigin:integer；data.member.paidUpMember:integer；data.member.points:integer；data.member.originVenderId:integer；data.member.latestJoinTime:integer；data.totalOrderAmount:object；data.totalOrderCount:integer；data.avgOrderPrice:object；data.lastOrderTime:integer；data.firstOrderTime:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L207 |

定点限制：未发现新增会员招募/触达动作。

### API080 会员API · getMember

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.members._omid   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | omid:string；request:object；request.scopeSet:object；request.scopeSet.field:string；request.venderId:integer |
| 主要输出 | data:object；data.omid:string；data.memberSystemId:integer；data.customerPin:string；data.xidBuyer:string；data.gender:string；data.birthday:string；data.openCardChannelId:integer；data.offlineMemberCardNo:string；data.memberLevel:integer；data.bindTime:integer；data.phoneFlag:boolean；data.wechatFlag:boolean；data.pcFlag:boolean；data.joinOrigin:integer；data.paidUpMember:integer；data.points:integer；data.originVenderId:integer；data.latestJoinTime:integer；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L281 |

定点限制：未发现新增会员招募/触达动作。

### API081 会员API · listOmids

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.omids   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.venderId:integer；request.xidList:array；request.omidList:array；request.sceneType:integer |
| 主要输出 | data:array；data[].omid:string；data[].xid:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L325 |

定点限制：未发现新增会员招募/触达动作。

### API082 会员API · patchMember

| 项 | 证据 |
|---|---|
| method | PATCH.sp-marketing.v0.members._omid   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | omid:string；request:object；request.version:string；request.operationList:array；request.operationList[].key:string；request.operationList[].value:string；request.operationList[].operation:string；request.venderId:integer；request.operationType:integer |
| 主要输出 | data:object；data.omid:string；data.memberSystemId:integer；data.memberLevel:integer；data.memberCode:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L353 |

定点限制：未发现新增会员招募/触达动作。

### API083 会员API · listMemberAggStatistics

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.member-agg-statistics   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.venderId:integer；request.memberLevel:string；request.memberLevels:object；request.memberLevels.memberLevel:string；request.mobile:string；request.customerPin:string；request.xidBuyer:string；request.ouid:string；request.orderStartTime:integer；request.orderEndTime:integer；request.bindingStartTime:integer；request.bindingEndTime:integer；request.latestOrderStartTime:integer；request.latestOrderEndTime:integer；request.minOrderAmount:object；request.maxOrderAmount:object；request.minOrderCount:integer；request.maxOrderCount:integer；request.minAvgOrderPrice:object；request.maxAvgOrderPrice:object；request.scopeSet:object；request.scopeSet.element:string；request.page:integer；request.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.member:object；data.member.omid:string；data.member.customerPin:string；data.member.xidBuyer:string；data.member.ouid:string；data.member.memberSystemId:integer；data.member.memberLevel:integer；data.member.offlineMemberCardNo:string；data.member.bindTime:integer；data.member.phoneFlag:boolean；data.member.wechatFlag:boolean；data.member.pcFlag:boolean；data.member.joinOrigin:integer；data.member.paidUpMember:integer；data.member.points:integer；data.member.originVenderId:integer；data.member.latestJoinTime:integer；data.totalOrderAmount:object；data.totalOrderCount:integer；data.avgOrderPrice:object；data.lastOrderTime:integer；data.firstOrderTime:integer；success:boolean；errorList:object；errorList.code:string；data.member.memberLevel (会员等级)；data.member.points (积分)；data.totalOrderAmount (累计订单金额)；data.totalOrderCount (累计订单数)；data.avgOrderPrice (客单价)；data.latestJoinTime (最新加入时间) |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L387 |

定点限制：未发现新增会员招募/触达动作。

### API084 会员API · listMembers

| 项 | 证据 |
|---|---|
| method | GET.sp-marketing.v0.members   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.venderId:integer；request.customerPin:string；request.xidBuyer:string；request.ouid:string；request.memberLevel:string；request.memberLevels:object；request.memberLevels.memberLevel:string；request.mobile:string；request.orderStartTime:integer；request.orderEndTime:integer；request.bindingStartTime:integer；request.bindingEndTime:integer；request.latestOrderStartTime:integer；request.latestOrderEndTime:integer；request.minOrderCount:integer；request.maxOrderCount:integer；request.minOrderAmount:object；request.maxOrderAmount:object；request.minAvgOrderPrice:object；request.maxAvgOrderPrice:object；request.scopeSet:object；request.scopeSet.element:string；request.page:integer；request.pageSize:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:object；data.omid:string；data.customerPin:string；data.xidBuyer:string；data.ouid:string；data.memberSystemId:integer；data.memberLevel:integer；data.offlineMemberCardNo:string；data.bindTime:integer；data.phoneFlag:boolean；data.wechatFlag:boolean；data.pcFlag:boolean；data.joinOrigin:integer；data.paidUpMember:integer；data.points:integer；data.originVenderId:integer；data.latestJoinTime:integer；success:boolean；errorList:object；errorList.code:string；errorList.details:string；errorList.message:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L462 |

定点限制：未发现新增会员招募/触达动作。

### API085 会员API · listOuids

| 项 | 证据 |
|---|---|
| method | PUT.sp-marketing.v0.omid-ouids.batch   HTTP: PUT |
| 操作类型 | READ |
| 主要输入 | request:object；request.sceneType:integer；request.pin:string；request.ouidList:object；request.ouidList.ouidDTO:object；request.omidList:object；request.omidList.omid:string |
| 主要输出 | success:boolean；errorList:object；errorList.code:string；errorList.message:string；errorList.details:string；data:object；data.ouidDTO:object；data.ouidDTO.ouid:string；data.ouidDTO.omid:string |
| 相关需求 | R053 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L530 |

定点限制：未发现新增会员招募/触达动作。

### API086 财务API · listAccountRecords

| 项 | 证据 |
|---|---|
| method | GET.sp-finance.v0.accounts._memberId.records   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | memberId:integer；request:object；request.venderId:integer；request.type:integer；request.pageNum:integer；request.startTime:integer；request.endTime:integer |
| 主要输出 | paginationData:object；paginationData.totalItems:integer；paginationData.pageSize:integer；paginationData.currentPage:integer；data:array；data[].detailCreateTime:integer；data[].billDate:string；data[].sourceId:string；data[].memberId:integer；data[].accountName:string；data[].currency:string；data[].balanceType:string；data[].incomeAmount:object；data[].expendAmount:object；data[].accountBalance:object；data[].detailDesc:string；data[].outTradeNo:string；data[].originalOutTradeNo:string；data[].tradeDesc:string；data[].accountReqCode:string；data[].tradeNo:string；data[].bizTradeNo:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R021；R032；R057 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:L7 |

定点限制：未证明活动/广告/补贴与 SKU 毛利关联字段。

### API087 财务API · listBills

| 项 | 证据 |
|---|---|
| method | GET.sp-finance.v0.bills   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | request:object；request.type:integer；request.secondMerchantNo:string；request.venderId:integer；request.startTime:integer；request.endTime:integer；request.detailType:integer；request.billStatus:integer；request.statementIdList:object；request.statementIdList.statementId:string；request.pageSize:integer；request.cursor:string |
| 主要输出 | paginationData:object；paginationData.nextCursor:string；paginationData.totalItems:integer；paginationData.pageSize:integer；data:object；data.secondMerchantNo:string；data.venderId:integer；data.outTradeNo:string；data.rfBusiId:string；data.rfBusiType:integer；data.rfBusiTypeDesc:string；data.detailNo:string；data.orderId:string；data.skuId:string；data.skuName:string；data.skuNum:integer；data.billDate:string；data.feeCode:integer；data.feeName:string；data.direction:integer；data.billStatus:integer；data.billStatusDesc:string；data.settlementStatus:integer；data.settlementStatusDesc:string；data.happenTime:integer；data.deliveredTime:integer；data.finishTime:integer；data.updateTime:integer；data.bal:object；data.remark:string；data.orderId (账单关联订单 ID)；data.skuId (账单关联 SKU ID)；data.skuName (SKU 名称)；data.feeName (费用名称)；data.bal (费用金额对象)；data.remark (账单备注) |
| 相关需求 | R021；R032；R057 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:L57 |

定点限制：未证明活动/广告/补贴与 SKU 毛利关联字段。

### API088 京麦API · postJmAiTask

| 项 | 证据 |
|---|---|
| method | POST.sp-jm.v0.jm-ai-tasks   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | postJmAiTaskRequest:object；postJmAiTaskRequest.bizCode:string；postJmAiTaskRequest.scheduled:integer；postJmAiTaskRequest.created:integer；postJmAiTaskRequest.result:string；postJmAiTaskRequest.editUrl:string；postJmAiTaskRequest.name:string；postJmAiTaskRequest.modified:integer；postJmAiTaskRequest.state:integer；postJmAiTaskRequest.detailUrl:string；postJmAiTaskRequest.deadline:integer；postJmAiTaskRequest.taskId:string；postJmAiTaskRequest.pin:string |
| 主要输出 | data:object；data.jmAiTaskId:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R054；R055；R056；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L7 |

定点限制：仅见任务/记录同步与状态字段，未证明调度、事件触发或代 ISV 执行业务工具。

### API089 京麦API · getJmAiTask

| 项 | 证据 |
|---|---|
| method | GET.sp-jm.v0.jm-ai-tasks._jmAiTaskId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | jmAiTaskId:string；getJmAiTaskRequest:object；getJmAiTaskRequest.pin:string |
| 主要输出 | data:object；data.jmAiTaskId:string；data.bizCode:string；data.taskId:string；data.name:string；data.scheduled:integer；data.scheduleExecutionNum:integer；data.state:integer；data.stateName:string；data.creator:string；data.created:integer；data.modifier:string；data.modified:integer；data.deadline:integer；data.detailUrl:string；data.editUrl:string；data.result:string；success:boolean；errorList:object；errorList.code:string；errorList.details:string；errorList.message:string；data.scheduled (是否/类型调度字段)；data.scheduleExecutionNum (调度执行次数)；data.state (任务状态)；data.result (任务结果) |
| 相关需求 | R054；R055；R056；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L41 |

定点限制：仅见任务/记录同步与状态字段，未证明调度、事件触发或代 ISV 执行业务工具。

### API090 京麦API · patchJmAiTask

| 项 | 证据 |
|---|---|
| method | PATCH.sp-jm.v0.jm-ai-tasks._jmAiTaskId   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | jmAiTaskId:string；patchJmAiTaskRequest:object；patchJmAiTaskRequest.result:string；patchJmAiTaskRequest.editUrl:string；patchJmAiTaskRequest.pin:string；patchJmAiTaskRequest.name:string；patchJmAiTaskRequest.modified:integer；patchJmAiTaskRequest.state:integer；patchJmAiTaskRequest.detailUrl:string；patchJmAiTaskRequest.deadline:integer |
| 主要输出 | data:object；data.jmAiTaskId:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R054；R055；R056；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L80 |

定点限制：仅见任务/记录同步与状态字段，未证明调度、事件触发或代 ISV 执行业务工具。

### API091 京麦API · postJmAiTaskRecord

| 项 | 证据 |
|---|---|
| method | POST.sp-jm.v0.jm-ai-tasks._jmAiTaskId.jm-ai-task-records   HTTP: POST |
| 操作类型 | WRITE |
| 主要输入 | jmAiTaskId:string；postJmAiTaskRecordRequest:object；postJmAiTaskRecordRequest.taskRecordId:string；postJmAiTaskRecordRequest.taskRecordName:string；postJmAiTaskRecordRequest.bizCode:string；postJmAiTaskRecordRequest.created:integer；postJmAiTaskRecordRequest.result:string；postJmAiTaskRecordRequest.pin:string；postJmAiTaskRecordRequest.name:string；postJmAiTaskRecordRequest.modified:integer；postJmAiTaskRecordRequest.state:integer；postJmAiTaskRecordRequest.detailUrl:string；postJmAiTaskRecordRequest.deadline:integer；postJmAiTaskRecordRequest.taskId:string |
| 主要输出 | data:object；data.jmAiTaskId:string；data.jmAiTaskRecordId:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R054；R055；R056；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L111 |

定点限制：仅见任务/记录同步与状态字段，未证明调度、事件触发或代 ISV 执行业务工具。

### API092 京麦API · getJmAiTaskRecord

| 项 | 证据 |
|---|---|
| method | GET.sp-jm.v0.jm-ai-tasks._jmAiTaskId.jm-ai-task-records._jmAiTaskRecordId   HTTP: GET |
| 操作类型 | READ |
| 主要输入 | jmAiTaskId:string；jmAiTaskRecordId:string；getJmAiTaskRecordRequest:object；getJmAiTaskRecordRequest.pin:string |
| 主要输出 | data:object；data.jmAiTaskId:string；data.jmAiTaskRecordId:string；data.bizCode:string；data.taskId:string；data.name:string；data.scheduled:string；data.state:string；data.stateName:string；data.creator:string；data.created:string；data.modifier:string；data.modified:string；data.deadline:string；data.detailUrl:string；data.result:string；data.taskRecordId:string；data.taskRecordName:string；success:boolean；errorList:object；errorList.code:string；errorList.details:string；errorList.message:string |
| 相关需求 | R054；R055；R056；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L147 |

定点限制：仅见任务/记录同步与状态字段，未证明调度、事件触发或代 ISV 执行业务工具。

### API093 京麦API · patchJmAiTaskRecord

| 项 | 证据 |
|---|---|
| method | PATCH.sp-jm.v0.jm-ai-tasks._jmAiTaskId.jm-ai-task-records._jmAiTaskRecordId   HTTP: PATCH |
| 操作类型 | WRITE |
| 主要输入 | jmAiTaskId:string；jmAiTaskRecordId:string；patchJmAiTaskRecordRequest:object；patchJmAiTaskRecordRequest.result:string；patchJmAiTaskRecordRequest.pin:string；patchJmAiTaskRecordRequest.taskRecordName:string；patchJmAiTaskRecordRequest.modified:integer；patchJmAiTaskRecordRequest.state:integer；patchJmAiTaskRecordRequest.detailUrl:string；patchJmAiTaskRecordRequest.deadline:integer |
| 主要输出 | data:object；data.jmAiTaskId:string；data.jmAiTaskRecordId:string；success:boolean；errorList:array；errorList[].code:string；errorList[].details:string；errorList[].message:string |
| 相关需求 | R054；R055；R056；R060 |
| 匹配原因 | 接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。 |
| 置信度 | high |
| source_file | C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L188 |

定点限制：仅见任务/记录同步与状态字段，未证明调度、事件触发或代 ISV 执行业务工具。
