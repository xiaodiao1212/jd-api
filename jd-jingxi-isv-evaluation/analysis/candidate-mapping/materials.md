# 需求与API候选映射（已完成范围审核）

只使用本模块需求、已有能力事实与相关API索引。平台接口覆盖不包括我方生成/算法能力，也不默认扩展为自动回写。核心无需京东接口时，“直接支持”仅表示不需要新增平台接口；产品能力以最终矩阵为准。

## R010

| 字段 | 结果 |
|---|---|
| candidate_apis | batchCreateSkuMaterial；listSkuMaterials；postMediaZoneImage |
| support | 直接支持 |
| read_data | 可读取商品详情/属性（listProducts、getProduct）及既有 SKU 素材（listSkuMaterials）。单次生成可使用用户提供的商品资料，不依赖已发现的京东 API。 |
| write_action | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | 不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。 |
| gaps | 核心生图已具备，京喜主图规范与商品事实约束决定可交付性。 以商家输入商品信息生成主图；上传与替换单列。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L23；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01,EC02；API008 batchCreateSkuMaterial references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2089-L2201；API009 listSkuMaterials references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2203-L2288；API010 postMediaZoneImage references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2481-L2517；INFERENCE_TECHNICAL: 主审产品边界；问题Q03 |

审核边界：以商家输入商品信息生成主图；上传与替换单列。

## R011

| 字段 | 结果 |
|---|---|
| candidate_apis | batchCreateSkuMaterial；listSkuMaterials；postMediaZoneImage |
| support | 直接支持 |
| read_data | 可读取既有 SKU 素材用于套图审计/替换准备（listSkuMaterials）；商品资料可由用户提供。 |
| write_action | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | 不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。 |
| gaps | 已有商品生图基础，四类套图各自的规格表达和验收标准仍需适配。 生成白底、场景、规格、卖点图，不推定已有每种模板。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L24；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01,EC02；API008 batchCreateSkuMaterial references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2089-L2201；API009 listSkuMaterials references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2203-L2288；API010 postMediaZoneImage references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2481-L2517；INFERENCE_TECHNICAL: 主审产品边界；问题Q03 |

审核边界：生成白底、场景、规格、卖点图，不推定已有每种模板。

## R012

| 字段 | 结果 |
|---|---|
| candidate_apis | postContentImages；postContents；putContents；listContents |
| support | 直接支持 |
| read_data | listContents 可查询公域内容；候选内容接口未证实读取商品详情页结构或商品详情字段。 |
| write_action | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | 不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。 |
| gaps | 已有一键详情页能力，可复用核心产物，需适配京喜结构与事实要求。 生成详情图片与结构，写入线上详情另列接口范围。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L25；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01,EC02；API033 postContentImages references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L7-L32；API035 postContents references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L63-L163；API036 putContents references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L164-L265；API037 listContents references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L266-L292；INFERENCE_TECHNICAL: 主审产品边界；问题Q03 |

审核边界：生成详情图片与结构，写入线上详情另列接口范围。

## R013

| 字段 | 结果 |
|---|---|
| candidate_apis | getMediaZoneVideoUploadUrl；postMediaZoneVideo；postContentVideos |
| support | 直接支持 |
| read_data | getMediaZoneVideoUploadUrl 可取得视频上传地址；postContentVideos 提供公域视频上传底座。 |
| write_action | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | 不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。 |
| gaps | 现有事实仅证明图片与详情页，视频生成、时序一致性和审核需新能力。 生成视频；媒体上传接口不能代替视频生产能力。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L26；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API011 getMediaZoneVideoUploadUrl references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2683-L2721；API012 postMediaZoneVideo references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2722-L2758；API034 postContentVideos references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L33-L61；INFERENCE_TECHNICAL: 主审产品边界；问题Q03 |

审核边界：生成视频；媒体上传接口不能代替视频生产能力。

## R014

| 字段 | 结果 |
|---|---|
| candidate_apis | batchCreateSkuMaterial；listSkuMaterials；postMediaZoneImage；getMediaZoneVideoUploadUrl；postMediaZoneVideo；listSkus；listProducts；getProduct |
| support | 部分支持 |
| read_data | listSkus/listProducts/getProduct 可读取多 SKU、商品资料和状态；listSkuMaterials 可读取现有素材，用于批量替换前的筛选与审计。 |
| write_action | batchCreateSkuMaterial 可批量提交 SKU 素材，覆盖批量生成/替换链路中的素材写入；具体替换语义与失败重试规则待确认。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 批量生成可复用，但替换需逐SKU绑定、部分失败处理及结果复核。 批量生成与替换共同验收，不能仅交生成文件。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L27；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01,EC02；API008 batchCreateSkuMaterial references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2089-L2201；API009 listSkuMaterials references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2203-L2288；API010 postMediaZoneImage references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2481-L2517；API011 getMediaZoneVideoUploadUrl references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2683-L2721；API012 postMediaZoneVideo references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2722-L2758；API038 listSkus references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L7-L117；API039 listProducts references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L118-L315；API040 getProduct references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L316-L995；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q02,Q10 |

审核边界：批量生成与替换共同验收，不能仅交生成文件。

## R015

| 字段 | 结果 |
|---|---|
| candidate_apis | postMaterialExperiment；patchMaterialExperiment；listMaterialExperiments |
| support | 部分支持 |
| read_data | listMaterialExperiments 可读取实验状态、周期、版本和审计时间；效果指标字段尚未证实。 |
| write_action | postMaterialExperiment 可创建素材 AB 实验并配置版本/分流比例；patchMaterialExperiment 可更新实验配置或状态。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 实验创建已有候选，可靠选优还需分流、效果口径、样本和发布规则。 先验证素材实验边界，不能外推到所有经营策略实验。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L28；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01,EC02；API013 postMaterialExperiment references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3926-L4135；API014 patchMaterialExperiment references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L4136-L4348；API015 listMaterialExperiments references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L4349-L4617；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q10,Q18 |

审核边界：先验证素材实验边界，不能外推到所有经营策略实验。

## R016

| 字段 | 结果 |
|---|---|
| candidate_apis | listAdsCampaigns；listAdsGroups；postContentImages；postContentVideos；postContents；putContents；listContents |
| support | 部分支持 |
| read_data | listAdsCampaigns/listAdsGroups是广告效果的部分输入候选；需补充创意关联、指标对象类型、单位和归因口径，不能宣称完全没有广告数据候选。 |
| write_action | 核心为依据广告效果生成新创意；投放绑定或发布不是原文明确要求。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 素材生成可复用，基于广告效果迭代需要创意与结果的可关联数据。 按已知广告效果生成新创意；持续自主迭代不是原文必然要求。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L29；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01,EC02；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API033 postContentImages references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L7-L32；API034 postContentVideos references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L33-L61；API035 postContents references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L63-L163；API036 putContents references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L164-L265；API037 listContents references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L266-L292；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q09 |

审核边界：按已知广告效果生成新创意；持续自主迭代不是原文必然要求。
