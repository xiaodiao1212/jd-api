# Commerce API Phase 4 verification

本文件只记录对候选接口对应 `openapi.json` 的定点读取，不代表读取整个 OpenAPI 文档。证据范围限定商品、营销、推广、内容、C2M 五类。

|证据ID|接口|确认的合同/输入输出|缺项与边界|source位置|
|---|---|---|---|---|
|CV-001|postProductApply|POST `POST.sp-product.v0.product-applies`；外层 required `request`；request 内含 schema、productApplyDTO、pin、venderId、scene、recommendId；productApplyDTO 展开确认 productId、spuSkuApplyGray、saveActionType、limitInfoSubmitMethod、categoryDTO.lastCategoryId|定点 schema 的 productApplyDTO 是引用/对象边界，当前命中未确认 title、shortTitle、sellingPoint、detail、image 的具体 required/可写属性；不能宣称一键自动生成字段已被 API 支持|商品API\openapi.json:L557-L583,L11073-L11172|
|CV-002|batchCreateSkuMaterial|POST `POST.sp-product.v0.sku-materials.batch`；body required `batchCreateSkuMaterialRequest`；展开确认 pin、skuMaterials[]、每项 productId、skuId、materials[]，materials item 含 skuId、textMaterial、imageMaterial、videoMaterial、materialType、order|素材类型枚举、字段必填性及逐项响应语义仍未确认；接口证明批量绑定结构，不证明素材生成|商品API\openapi.json:L707-L733,L14897-L15191|
|CV-003|postMaterialExperiment / patchMaterialExperiment / listMaterialExperiments|分别 POST/PATCH/GET `sp-product.v0.material-experiments`；实验版本确认 code、routeRatio、materialType、orderNum、mainImageList、mainLongImageList、experimentMaterialList；响应含版本 id/code/routeRatio/素材内容、cycle、expectedEndTime、success|定点版本/响应没有 CTR/CVR/GMV/ROI 等效果字段，也没有优胜版本选择或发布动作；OpenAPI说明推荐新版本参数|商品API\openapi.json:L2916-L3088,L22648-L23390|
|CV-004|listSuggestedPrices|GET `GET.sp-order.v0.suggested-prices`；request 外层 required `request`，含 appkey、pin、venderId、skuIdList|建议价对象的业务来源、竞品/毛利/规则依据未确认；不能扩展为实时竞品价|商品API\openapi.json:L3896-L3920及对应 ListSuggestedPricesRequest schema|
|CV-005|listAdsCampaigns|OpenAPI operationId 为 `listAdsCampaigns`，路径 `/listAdsCampaigns`，原始 `x-jd-method` 为 `listAdsCampaigns`，HTTP operation key 为 `listadscampaigns`；输入含时间/状态/分页、`dataMetricsFilter`，请求必含 listAdsCampaignsRequest|响应字段确有 roi、totalOrderSumDeal、ctr、impressions、clicks、cost 等，但它们在 schema 中多为对象/扩展类型；定点证据不足以证明数值单位或 GMV/ROI 口径。必须保留非标准 method，不能改写成 GET|推广API\openapi.json:L618-L644,L3809-L3967,L4113-L4242|
|CV-006|postAdsCampaign|OpenAPI operationId/path 为 postAdsCampaign，原始 `x-jd-method` 为 `postAdsCampaign`，HTTP operation key `postadscampaign`；输入含 campaign type/name/time、campaignBudgetDTO、bidding/targeting、uniformSpeed|非标准合同与 KA/门店场景权限需京东确认|推广API\openapi.json:L432-L458,L2170-L2665|
|CV-007|广告调优与关键词动作|batchPatchAdsCampaign 输入含 adsCampaignDTOList；batchPutAdsCampaignState 含 operateType/campaignIdList；batchPatchAdsGroup 含 adsGroupDTOList、adGroupBudgetDTO/status；postAdsGroup schema 含 keywordAutomatedStatus、keywordAutomatedCoef、keywordList、adList|定点 schema 只确认 keywordList/adList 数据结构，未发现明确“增词/删词” operation 字段；operateType 枚举、指标单位和权限仍缺；删除计划/单元不作为 R041 止损证据|推广API\openapi.json:L3964-L4640|
|CV-008|营销人群|postStrategy request 含 appId、venderId、name、strategy、strategyParam、applicationDomain、partition；listTags 含 appId/venderId/begroup/version/applicationScenario；listUserPackage 含 appId/venderId/pin/page；postUserPackage 含 strategyId、mktActivityId、mktActivityInstId、taskId、taskInstId、strategyParam、instancePackType、strategyOperateType|可证明人群策略、标签、人群包的公开合同；不能据此证明会员权益、复购自动化或当前账号权限|营销API\openapi.json:L113-L141,L389-L415,L485-L527,L623-L667,L1018-L1095,L1742-L1835|

## 结论边界

这些定点结果只能增强接口合同证据，不能把公开 API 推断为已授权，也不能把规则校验、媒体上传、实验配置或广告指标读取扩展为 AI 生成、自动策略学习、优胜方案自动发布或活动业务规则。

