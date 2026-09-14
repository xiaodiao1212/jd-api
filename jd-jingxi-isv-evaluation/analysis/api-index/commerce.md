# Commerce API index (Phase 2)

扫描范围：`商品API`、`营销API`、`推广API`、`内容API`、`C2M API` 的 `jd-apis.d.ts`；需求 ID 按《京东京喜-ISV-需求清单.md》原文顺序 R001–R053。接口存在只证明 `PUBLIC_API_FOUND`，权限统一 `unknown`，不等同 `PERMISSION_CONFIRMED`。没有把模型生成、推荐算法或策略编排能力从接口名称中推断出来。

## 清点

|分类|文件声明总数|候选数|扫描结论|
|---|---:|---:|---|
|商品API|94|21|发品、商品信息/健康分、商机、素材、素材实验、价格星级/建议价、库存；未发现标题/卖点 AI 生成或跨平台链接导入|
|营销API|15|8|活动信息上报及人群策略/标签/人群包；会员权益与复购仍未证实|
|推广API|15|13|广告计划/单元创建、更新、启停、指标读取；删除动作已排除；关键词/创意生成未由字段证实|
|内容API|5|5|公域图片/视频上传及内容保存/查询；是否能作为商品素材需定点验证|
|C2M API|11|0|礼品定制业务，与 R001–R053 未发现直接关联|

## 候选接口

|api_category|api_name|method|operation_type|主要输入 / 输出|可能需求ID|匹配原因|source_file|confidence|
|---|---|---|---|---|---|---|---|---|
|商品API|listProductOpportunities|GET.sp-product.v0.product-opportunities   HTTP: GET|READ|opportunityType/opportunityVersion, page/pageSize/scrollId -> opportunity name/code, categories, popularity, supplyDemandRatio, saleSkuNum/saleShopNum, price range|R001,R008,R027,R028|商机与热度/供需数据明确；潜力定义需业务映射|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5839-L5902|high|
|商品API|postProductApply|POST.sp-product.v0.product-applies   HTTP: POST|WRITE|productApplyDTO (product/category/attributes etc.) -> apply result/applyId|R002,R005,R006,R007|创建或整版编辑申请；自动生成与跨平台导入未证实|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1304-L1338|high|
|商品API|patchProductApply|PATCH.sp-product.v0.product-applies._applyId   HTTP: PATCH|WRITE|applyId and partial product application fields -> update result|R002,R005,R006|承接生成后的商品字段写回；可修改范围待确认|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1094-L1144|medium|
|商品API|listProductPublishTemplates|GET.sp-product.v0.product-schemas   HTTP: GET|READ|category -> product schema template|R002,R005|为发品和属性补全提供类目模板|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1023-L1050|high|
|商品API|postProductValidation|POST.sp-product.v0.product-schemas.validations   HTTP: POST|WRITE|schema/productApplyDTO including title/category/brand/main image/attributes -> violation fields/reasons|R002,R003,R005,R006|明确商品信息合规检测；规则检测不等于 AI 优化|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2937-L2974|high|
|商品API|getHealthScore|GET.sp-product.v0.health-infos._healthInfoId   HTTP: GET|READ|healthScoreId/detectFactor -> healthScore, level, improvement troubleCode/name/desc|R003,R004,R006|直接提供健康分和改进项|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5745-L5787|high|
|商品API|listHealthScores|GET.sp-product.v0.health-infos   HTTP: GET|READ|product/SKU, score range, pagination -> health scores and improvement list|R003,R004,R006|批量发现信息分问题|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5788-L5838|high|
|商品API|batchCreateSkuMaterial|POST.sp-product.v0.sku-materials.batch   HTTP: POST|WRITE|batch SKU materials (透图/白底图/场景图/卖点图/定时主图) -> item results|R010,R011,R014|明确多类 SKU 素材绑定|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2089-L2201|high|
|商品API|listSkuMaterials|GET.sp-product.v0.sku-materials   HTTP: GET|READ|SKU/material filters -> SKU material information|R010,R011,R014|读取现有素材用于替换/审计|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2203-L2288|high|
|商品API|postMediaZoneImage|POST.sp-product.v0.media-zones._zoneId.images   HTTP: POST|WRITE|zoneId, imgBase64 or fileUrl, metadata -> imageId/URL|R010,R011,R014|上传图片到商品图片空间；SKU绑定待确认|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2481-L2517|medium|
|商品API|getMediaZoneVideoUploadUrl|GET.sp-product.v0.media-zones._zoneId.upload-urls   HTTP: GET|READ|zoneId/video info -> upload URL|R013,R014|提供视频上传地址，不证明视频生成|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2683-L2721|high|
|商品API|postMediaZoneVideo|POST.sp-product.v0.media-zones._zoneId.videos   HTTP: POST|WRITE|zoneId, video metadata, jdVideoId -> videoId|R013,R014|明确保存商家主图视频|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2722-L2758|high|
|商品API|postMaterialExperiment|POST.sp-product.v0.material-experiments   HTTP: POST|ACTION|SKU/product, experiment period/type, material versions, routeRatio -> experimentId/status|R015|明确创建素材 AB 实验|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3926-L4135|high|
|商品API|patchMaterialExperiment|PATCH.sp-product.v0.material-experiments._experimentId   HTTP: PATCH|ACTION|experimentId, experiment DTO, updateType -> update status|R015|更新实验配置/状态；优胜版本未证实|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L4136-L4348|medium|
|商品API|listMaterialExperiments|GET.sp-product.v0.material-experiments   HTTP: GET|READ|SKU/product/status/scene/page -> experiment status, period, versions, audit time|R015|读取实验状态；效果指标待验证|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L4349-L4617|medium|
|商品API|listSuggestedPrices|GET.sp-order.v0.suggested-prices   HTTP: GET|READ|SKU list -> targetPrice/advicePrice/benefitPoint|R020|直接提供建议价格；竞品/毛利来源未证实|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5141-L5190|medium|
|商品API|listPriceStars|GET.sp-product.v0.price-stars   HTTP: GET|READ|SKU/SPU, competitiveness filters -> priceStar/competitivePower/handPrice|R020|价格竞争力辅助字段；不是实时竞品历史|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L5660-L5744|medium|
|商品API|listSkuStocks|GET.sp-product.v0.sku-stocks   HTTP: GET|READ|SKU list -> stockNum and reserved/transfer/not-for-sale stock|R031,R032|活动推荐/测算库存事实；不含活动利润|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3278-L3312|medium|
|营销API|postActivityReport|POST.sp-marketing.v0.marketingactivities   HTTP: POST|WRITE|activity id/type/name/time, PV, historical PV, member count, filing status -> success|R035|可能用于活动复盘上报；无效果查询/利润输出|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L7-L44|low|
|推广API|listAdsCampaigns|listAdsCampaigns   HTTP: LISTADSCAMPAIGNS|READ|campaign/time/status/pagination/metrics filters -> budget, ROI, GMV, CTR, impressions, clicks, cost, orders/carts|R036,R037,R039,R040,R041,R044|计划与指标读取最直接|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693|high|
|推广API|getAdsCampaign|GET.ads-bidding.v0.ads-campaigns._adsCampaignId   HTTP: GET|READ|campaignId -> status, budget, time, bidding, premium, targeting, groups|R037,R039,R041|读取单计划配置状态|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L478-L597|high|
|推广API|listAdsGroups|GET.ads-bidding.v0.ads-groups   HTTP: GET|READ|campaign/group/status filters -> groups and ROI/CTR/impressions/clicks/cost/orders|R036,R039,R040,R041,R044|按单元读取投放表现|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193|high|
|推广API|postAdsCampaign|postAdsCampaign   HTTP: POSTADSCAMPAIGN|WRITE|campaign type/name/time/budget/bidding/targeting -> campaignId|R037,R038|明确新建广告计划|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L269-L384|high|
|推广API|patchAdsCampaign|PATCH.ads-bidding.v0.ads-campaigns._adsCampaignId   HTTP: PATCH|WRITE|campaignId, bidding control, premium, name -> update result|R037,R039|支持单计划出价/溢价调整|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L232-L268|high|
|推广API|batchPatchAdsCampaign|PATCH.ads-bidding.v0.ads-campaigns.batch   HTTP: PATCH|WRITE|campaign list, time/budget/strategy/targeting -> item results|R037,R039,R040,R041|支持批量预算/策略调整|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L385-L477|high|
|推广API|batchPutAdsCampaignState|PUT.ads-bidding.v0.ads-campaign-states.batch   HTTP: PUT|ACTION|campaignId list, operateType -> per-item success/error|R041|支持批量启停计划|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L42-L76|high|
|推广API|postAdsGroup|POST.ads-bidding.v0.ads-groups   HTTP: POST|WRITE|campaignId, group name/target/bidding, keyword automation/ad list -> group result|R038,R042,R043|可创建广告单元；关键词/创意语义待验证|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L694-L794|medium|
|推广API|batchPostAdsGroup|POST.ads-bidding.v0.ads-groups.batch   HTTP: POST|WRITE|campaignId, group list, budget/fee -> per-item results|R038|批量建单元|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L194-L231|high|
|推广API|batchPatchAdsGroup|PATCH.ads-bidding.v0.ads-groups.batch   HTTP: PATCH|WRITE|group list, budget/fee/bidding/targeting -> per-item results|R039,R040,R041,R043|批量调整单元投放参数|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L826-L878|medium|
|推广API|batchPutAdsGroupState|PUT.ads-group-states.batch   HTTP: PUT|ACTION|adGroupId list, operateType -> per-item success/error|R041|支持批量启停单元|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L7-L41|high|
|推广API|getAccountBalance|GET.ads-billing.v0.ads-accounts.self.ads-balances   HTTP: GET|READ|account/site identity -> cash/red packet/commission balances|R037,R039|提供广告预算约束事实|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L879-L917|high|
|推广API|getAdsAccount|GET.ads-billing.v0.ads-accounts.self   HTTP: GET|READ|login/site identity -> advertising account information/id|R036,R037|发现投放账户并作为其他 API 入参|references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L918-L946|high|
|内容API|postContentImages|POST.sp-content.v0.public-domain-content-images   HTTP: POST|READ|image upload params -> asset result|R012,R016|公域内容图片上传底座；商品/广告绑定未证实|references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L7-L32|medium|
|内容API|postContentVideos|POST.sp-content.v0.public-domain-content-videos   HTTP: POST|READ|video upload params -> upload URL/asset|R013,R016|公域视频上传底座；不证明自动生成|references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L33-L61|medium|
|内容API|postContents|POST.sp-content.v0.public-domain-contents   HTTP: POST|READ|public content object with text/images/videos -> contentId/result|R012,R016|保存发布内容；目标场景待确认|references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L63-L163|low|
|内容API|putContents|PUT.sp-content.v0.public-domain-contents._contentId   HTTP: PUT|READ|contentId and content fields -> update result|R012,R016|支持内容修改；商品详情关联未证实|references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L164-L265|low|
|内容API|listContents|GET.sp-content.v0.public-domain-contents   HTTP: GET|READ|pagination/filters -> content list|R012,R016|查询已发布公域内容|references\jd-api\京东开放平台文档\jd-api-文档\内容API\jd-apis.d.ts:L266-L292|medium|
|商品API|listSkus|GET.sp-product.v0.skus   HTTP: GET|READ|分页/状态/商品筛选 -> skuId、skuName、sku状态/商品关联|R002,R003,R005,R006,R014|读取 SKU 是发品、素材批处理和写后验证输入链|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L7-L117|high|
|商品API|listProducts|GET.sp-product.v0.products   HTTP: GET|READ|分页/状态/类目筛选 -> productId、商品名称、SKU/状态等列表字段|R002,R003,R005,R006,R014|读取商品标题/属性/状态作为优化和写后验证输入链|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L118-L315|high|
|商品API|getProduct|GET.sp-product.v0.products._productId   HTTP: GET|READ|productId -> 商品详情、SKU、属性/详情字段|R002,R003,R005,R006,R014|读取单商品详情用于字段补全、优化、素材关联和写后核验|references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L316-L995|high|
|营销API|postStrategy|POST.sp-marketing.v0.strategies   HTTP: POST|WRITE|策略定义/人群条件 -> strategyId/结果|R053|创建人群策略，可作会员分层规则底座|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L77-L106|medium|
|营销API|getStrategy|GET.sp-marketing.v0.strategies._strategyId   HTTP: GET|READ|strategyId -> 策略详情|R053|读取人群分层策略|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L107-L138|medium|
|营销API|listStrategies|GET.sp-marketing.v0.strategies   HTTP: GET|READ|分页/筛选 -> 策略列表|R053|读取会员分层策略集合|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L187-L233|medium|
|营销API|patchStrategy|PATCH.sp-marketing.v0.strategies._strategyId   HTTP: PATCH|WRITE|strategyId/策略字段 -> 更新结果|R053|更新会员分层策略|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L234-L264|medium|
|营销API|listTags|GET.sp-marketing.v0.tags   HTTP: GET|READ|标签查询条件 -> 标签列表|R053|标签列表可作为会员分层输入；会员权益/复购未证实|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L265-L305|medium|
|营销API|listUserPackage|GET.sp-marketing.v0.userpackages   HTTP: GET|READ|分页/筛选 -> 人群包列表|R053|读取人群包用于会员运营分层|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L331-L363|medium|
|营销API|postUserPackage|POST.sp-marketing.v0.userpackages   HTTP: POST|WRITE|人群包定义 -> instanceId/结果|R053|创建人群包是会员招募/分层的部分底座；权益和复购未证实|references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L420-L452|medium|

## 排除与待定点

- 商品API排除项：状态、限购/区域限制、电子说明书、尺码模板、铺货关系等在本五类扫描中未与 R001–R053 形成直接证据；商品/ SKU 列表详情已作为读取输入链补入候选；`listProductDistributions` 等仅描述货源/铺货，不等于跨平台链接搬运（R007）。
- 营销API排除项：本五类扫描中仅未匹配活动报名/活动资格的其余接口；人群策略、标签、人群包已作为 R053 候选补入；`postActivityReport` 仅保留为低置信度 R035 候选。
- C2M 全部排除：11 个接口均为礼品定制项目、定制 SKU、定制购物车/订单或服务审核，需求清单没有礼品定制项。
- 在本次五类扫描范围内未发现：站内外同款识别、竞品实时/历史价格（R017–R019）、毛利测算/活动利润（R021、R032）、活动资格/冲突/提报管理（R030–R034）、CTR/CVR/搜索推荐流量数据（R024–R029）、广告创意生成（R042）。应写“当前开放平台接口资料中未发现”，不能写“京东没有接口”。

## Phase 4 定点验证

1. 对 `postProductApply`、`patchProductApply`、`postProductValidation` 定点读取 openapi，确认标题/短标题/卖点/属性/详情/图片字段的可写性、必填条件和返回结构。
2. 对商品媒体接口确认上传资源如何绑定 SKU/商品、主图视频类型及权限；对内容 API 确认“公域内容”是否能进入商品详情或广告创意。
3. 对素材 AB 实验确认效果指标、优胜版本返回字段及实验终止/发布动作；d.ts 只证实实验配置和状态。
4. 对推广 API 确认非标准 JD method（`postAdsCampaign`、`listAdsCampaigns`）、`operateType` 枚举、关键词/创意 DTO、预算与 ROI 指标单位，以及 KA/门店场景权限。
5. 对 `postActivityReport` 确认它是活动信息上报还是可查询活动效果；当前响应仅 `success/data`，不足以支持 R035 复盘结论。
6. 权限与商家/店铺/站点适用范围全部待京东或实测确认；不得从文档存在推断 ISV 已获授权。









