# API 索引独立证据校验

校验对象：`analysis\01-jd-api-capability-index.json`（声明 93 条，实际 `entries` 93 条）。

校验方式：只按索引中的 `source_file`、API 名和 method 定点读取对应 `jd-apis.d.ts` 片段；没有通读 OpenAPI，也没有全库重扫。判定“命中”要求索引给出的行段同时包含 `api_name` 和对应 HTTP 方法（索引 method 中为非 HTTP 动词的广告接口，按其索引 method 文本与 API 名核对）。

## 汇总

| 项目 | 数量 | 结论 |
|---|---:|---|
| 索引条目 | 93 | 与 `count` 一致 |
| 带行号的条目 | 93 | 47 条原有范围 + 46 条新增单行定位；93/93 PASS |
| `source_file` 缺行号 | 0 | 聚合器修复完成 |
| `source_file` 指向不存在文件 | 0 | 未发现 |
| 索引 operation_type（修复后） | READ 65 / WRITE 23 / ACTION 5 | `postProductValidation` 已改为 ACTION |

## 带行号证据

条目 1–47 全部 PASS。代表性及本轮重点证据如下：

- `postProductApply`：`references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1304-L1338`，包含 `POST.sp-product.v0.product-applies`、`PostProductApplyRequest` 和 `applyId` 响应。
- `postProductValidation`：同文件 `L2937-L2974`，包含 `POST.sp-product.v0.product-schemas.validations` 与合规检测响应。
- `getHealthScore`：同文件 `L5745-L5787`，包含 `GET.sp-product.v0.health-infos._healthInfoId`、`healthScoreId` 和健康分响应。
- `listSuggestedPrices`：同文件 `L5141-L5190`，为 GET 查询，响应含 `targetPrice`/`advicePrice`。
- `listPriceStars`：同文件 `L5660-L5744`，为 GET 查询，响应含 `priceStar`/`competitivePower`/`handPrice`。

## 原缺行号条目的复核（已解决）

聚合器已为条目 48–93 补入 `:L原line`，并将 method 补为原始 `HTTP endpoint` 同时保留 `HTTP: VERB`。逐条复核时，单行定位行包含 API 名，紧随下一行包含对应 HTTP method；46/46 PASS：

- 数据 API：`getReportSchema` L7、`postReport` L81、`getSensitiveReportSchema` L141、`postSensitiveReport` L215、`getReportDownloadTask` L267。
- 订单 API：`getOrder` L103、`listOrders` L422、`listWaybillTraces` L1447、`listBasicOrders` L1832、`getBasicOrder` L2007。
- 售后 API：`listAfsOrderLogs` L108、`listAfsOrders` L396、`getAfsOrder` L571、`listPriceProtectOrders` L973、`getPriceProtectOrder` L1039。
- 客服 API：`queryWaiterStatus` L7、`listChatbotEvaluations` L36、`getChatbotPerformance` L85、`listDongdongSessionChatLogs` L121、`listDongdongSessions` L159、`listDongdongChatDetails` L241、`listDongdongWaiters` L340、`listDongdongWaiterPerformance` L376、`listDongdongWaiterEvaluations` L414、`postDongdongMessage` L464、`postDongdongMessageV1` L541。
- 会员 API：`getMemberSystem` L7、`listMemberSystems` L53、`listVenderMemberRights` L98、`postMemberPoint` L129、`listMemberPoints` L161、`getMemberAggStatistic` L207、`getMember` L281、`listOmids` L325、`patchMember` L353、`listMemberAggStatistics` L387、`listMembers` L462、`listOuids` L530。
- 财务 API：`listAccountRecords` L7、`listBills` L57。
- 京麦 API：`postJmAiTask` L7、`getJmAiTask` L41、`patchJmAiTask` L80、`postJmAiTaskRecord` L111、`getJmAiTaskRecord` L147、`patchJmAiTaskRecord` L188。

这些条目现已可按索引直接复核；此前的 source_file 可追溯性问题已解决。

## 必须纠正的证据口径

### `postProductValidation` 是 ACTION

`商品信息合规检测` 是对提交的商品信息执行检测并返回违规结果，接口虽使用 HTTP POST，但语义是校验动作，不是持久化写入。索引条目 5 的 `operation_type` 已由 `WRITE` 改为 `ACTION`。证据：`商品API\jd-apis.d.ts:L2937-L2974`，其中 method 为 `POST.sp-product.v0.product-schemas.validations`，请求含 `schema`、`productApplyDTO`、`scene`，响应为检测结果。

### `getHealthScore` 的实际入参名

路径参数是 `healthScoreId`，请求对象另有可选 `getHealthScoreRequest.detectFactor`、`pin`、`venderId` 等。索引当前把输入写成 `healthScoreId/detectFactor`，可保留为简写，但若报告列出“实际入参名”，必须明确 `healthScoreId` 是路径参数，`detectFactor` 是嵌套请求对象字段。证据：`商品API\jd-apis.d.ts:L5745-L5787` 的 `GetHealthScoreRequest`。

### 商品申请字段不能由“有 API”推断完整

`postProductApply` 的 d.ts 片段只明确展示 `schema`、`productApplyDTO.productId`、`spuSkuApplyGray`、`saveActionType`、`limitInfoSubmitMethod`、`categoryDTO.lastCategoryId`、`pin`、`venderId`、`scene`、`recommendId`，响应为 `applyId`/`productId`。索引中“product/category/attributes etc.” 将未在该证据片段确认的完整商品字段混入摘要；应改为“已确认字段见 d.ts，其他商品字段及必填/业务规则待确认”，不能据此声称完整商品申请字段已具备。证据：`商品API\jd-apis.d.ts:L1304-L1338`。

## R055 价格写动作候选补充检索

仅在商品 API d.ts 按 `price`、`价格`、`调价` 定点检索：

- `listSuggestedPrices`（`商品API\jd-apis.d.ts:L5141-L5190`）是 GET 查询建议价格，含 `targetPrice`/`advicePrice`。
- `listPriceStars`（`商品API\jd-apis.d.ts:L5660-L5744`）是 GET 查询价格星级/竞争力，含 `priceStar`、`competitivePower`、`handPrice`。
- `listComponents` 附近 L1054 的注释仅说明类目规则模板支持价格组件查询，未出现价格写入动作。
- 其余命中为响应/DTO 中的价格字段（如 `jdPrice`、`costPrice`、`marketPrice`），字段出现不能证明存在写接口。

因此，在商品 d.ts 范围内未发现可补入 R055 的价格写动作候选；现有初筛没有因“价格字段”而漏掉已确认的写 API。`postProductApply` 仍只能作为商品申请 POST 能力，不能从其公开片段推断调价动作或完整调价字段。
