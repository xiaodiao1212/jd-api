# 关键证据复核与裁决

## P01 商品创建字段边界

FACT_JD_API：`references\jd-api\京东开放平台文档\jd-api-文档\商品API\openapi.json`，JSON Pointer `/components/schemas/PostProductApplyRequest/properties/request/properties/productApplyDTO/properties` 实际仅含 `productId`、`spuSkuApplyGray`、`saveActionType`、`limitInfoSubmitMethod`、`categoryDTO`。这是已经检查后的字段缺口，不是尚未展开的引用。接口说明支持创建/整版编辑申请，但当前定义不足以证明标题、短标题、卖点、完整属性、详情与图片的写入合同。R002/R005/R006/R007的平台链路维持 PARTIAL。

## P02 售后原因读取

FACT_JD_API：`references\jd-api\京东开放平台文档\jd-api-文档\售后API\openapi.json`，JSON Pointer `/components/schemas/GetAfsOrderResponse/properties/data/properties/customerApplyInfo/properties` 确实含 `applyReasonFirstCid`（integer）、`applyReasonFirstCidDesc`（string）、`applyReasonSecondCid`（integer）、`applyReasonSecondCidDesc`（string）。修正 O13 摘要中“原因节点未展开”的遗漏。该节点已经提供原因ID及描述合同；业务原因枚举、京喜适用性、实际返回值和应用权限仍需确认。

INFERENCE_TECHNICAL：R049 原文平台需求为自动读取售后原因，解决方案由我方业务能力形成。就原因读取这一平台交互，公开文档可标 FULL；这不表示售后诊断产品已实现、权限已确认或能自动处置售后。

## P03 广告方法与指标类型

FACT_JD_API：`references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts` 第598–690行，原始 JD method 为 `listAdsCampaigns`，HTTP标记为 `LISTADSCAMPAIGNS`。`impressions`、`clicks`为 number；`roi`、`ctr`、`cost`及多种成交金额字段为 `Record<string, unknown>`。CV-005 的对应 OpenAPI 核验也保留非标准 operation key。不得静默修成GET或把对象字段当成已明确单位的数值指标；R036–R044涉及广告合同的部分仍需Q09确认。

## P04 商机与本店潜力不同

FACT_JD_API：`references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts` 第5839–5902行，`listProductOpportunities` 的 method 为 `GET.sp-product.v0.product-opportunities`；必填 `opportunityType`、`opportunityVersion`、`pageSize`、`page`。返回类目、popularity、supplyDemandRatio、saleSkuNum、saleShopNum等商机属性。没有因此证明本店SKU流量、毛利或推荐曝光。R001可使用商机数据，R008/R027/R028仍需专门经营事实。

## P05 文档质量限制

在P02的原始JSON中，部分中文描述和示例出现乱码；P01存在字段展开不足；P03存在非标准方法标记和对象数值。上述属于资料合同质量问题，应请求规范接口定义及样例响应，不据此推断真实线上接口缺失或失效。当前评估基于本地快照，未进行线上权限或调用测试。
