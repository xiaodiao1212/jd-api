# Phase2 API operation index

- 范围：103 个接口定义，保留 46 个候选。仅扫描 jd-apis.d.ts，未读取 openapi.json。
- READ/WRITE/ACTION/CALLBACK 按业务语义初步分类；权限均为 unknown，不构成 PERMISSION_CONFIRMED。
- 需求 ID 已按 `analysis\requirement-registry.json` 使用 R001-R060；候选接口只挂接有直接证据的需求。

## 分类扫描统计

|分类|扫描接口数|候选数|排除数|
|---|---:|---:|---:|
|数据API|5|5|0|
|订单API|27|5|22|
|售后API|10|5|5|
|客服API|12|11|1|
|商家API|7|0|7|
|会员API|13|12|1|
|门店API|5|0|5|
|财务API|6|2|4|
|京麦API|6|6|0|
|通用API|8|0|8|
|虎符|4|0|4|
|变更说明|0|0|0|

## 候选接口

|分类|接口/标题|HTTP|类型|输入字段（顶层）|输出字段（顶层）|关键证据字段/缺项|需求ID/名称|理由|精确来源|置信度|
|---|---|---|---|---|---|---|---|---|---|---|
|数据API|`getReportSchema` / 报表定义查询|GET|READ|reportSchemaId, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R024,R025,R035,R044,R048,R057（指标语义待确认） / AI经营复盘、CTR/CVR/活动/广告诊断（指标语义待确认）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:7`|medium|
|数据API|`postReport` / 数据报表查询|POST|READ|request|data, success, errorList|请求 reportSchemaId、筛选条件与时间范围；返回报表数据或下载任务（指标语义待定点确认）|R024,R025,R035,R044,R048,R057（指标语义待确认） / AI经营复盘、CTR/CVR/活动/广告诊断（指标语义待确认）|请求 reportSchemaId、筛选条件与时间范围；返回报表数据或下载任务（指标语义待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:81`|medium|
|数据API|`getSensitiveReportSchema` / 报表定义查询|GET|READ|reportSchemaId, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R024,R025,R035,R044,R048,R057（敏感数据范围待确认） / AI经营复盘、CTR/CVR/活动/广告诊断（指标语义待确认）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:141`|medium|
|数据API|`postSensitiveReport` / 数据报表查询|POST|READ|postReportRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R024,R025,R035,R044,R048,R057（敏感数据范围待确认） / AI经营复盘、CTR/CVR/活动/广告诊断（指标语义待确认）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:215`|medium|
|数据API|`getReportDownloadTask` / 查询报表下载任务|GET|READ|reportDownloadTaskId, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R057（报表下载语义待确认） / AI经营复盘、CTR/CVR/活动/广告诊断（指标语义待确认）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:267`|medium|
|订单API|`getOrder` / 订单详情查询|GET|READ|orderId, getOrderRequest|data|请求 orderId、venderId、scopeSet.fieldName；返回 orderId/orderStatus/createdTime/modifiedTime 等订单详情（其余嵌套字段待定点确认）|R048 / 履约诊断、售后诊断、AI自动执行（订单工具）|请求 orderId、venderId、scopeSet.fieldName；返回 orderId/orderStatus/createdTime/modifiedTime 等订单详情（其余嵌套字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:103`|high|
|订单API|`listOrders` / 订单列表查询|GET|READ|listOrdersRequest|paginationData, data|请求 venderId、查询时间/状态/分页与 scopeSet；返回订单列表及分页状态（完整字段待定点确认）|R048 / 履约诊断、售后诊断、AI自动执行（订单工具）|请求 venderId、查询时间/状态/分页与 scopeSet；返回订单列表及分页状态（完整字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:422`|high|
|订单API|`listWaybillTraces` / 物流轨迹查询|GET|READ|param1|data, success, errorList|请求运单号/订单标识；返回轨迹节点与时间（字段待定点确认）|R048 / 履约诊断、售后诊断、AI自动执行（订单工具）|请求运单号/订单标识；返回轨迹节点与时间（字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:1447`|high|
|订单API|`listBasicOrders` / 订单列表查询|GET|READ|listOrdersRequest|paginationData, data|完整嵌套输入/输出字段待 Phase4 定点确认。|R048 / 履约诊断、售后诊断、AI自动执行（订单工具）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:1832`|high|
|订单API|`getBasicOrder` / 订单详情查询|GET|READ|orderId, getOrderRequest|data|完整嵌套输入/输出字段待 Phase4 定点确认。|R048 / 履约诊断、售后诊断、AI自动执行（订单工具）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:2007`|high|
|售后API|`listAfsOrderLogs` / 查询服务单日志列表|GET|READ|afsOrderId, listAfsOrderLogsRequest|paginationData, data, success, errorList|请求 afsOrderId；返回服务单操作日志（字段待定点确认）|R049 / 售后诊断、售后沟通话术、AI自动执行（售后工具）|请求 afsOrderId；返回服务单操作日志（字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:108`|high|
|售后API|`listAfsOrders` / 分页查询售后服务单列表|GET|READ|request|paginationData, data|请求商家、时间、状态和分页；返回售后单列表（完整字段待定点确认）|R049 / 售后诊断、售后沟通话术、AI自动执行（售后工具）|请求商家、时间、状态和分页；返回售后单列表（完整字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:396`|high|
|售后API|`getAfsOrder` / 查询售后服务单详情|GET|READ|afsOrderId, getAfsOrderRequest|data|请求 afsOrderId；返回售后原因、状态、金额及商品信息（字段待定点确认）|R049 / 售后诊断、售后沟通话术、AI自动执行（售后工具）|请求 afsOrderId；返回售后原因、状态、金额及商品信息（字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:571`|high|
|售后API|`listPriceProtectOrders` / 分页查询价保服务单列表|GET|READ|listPriceProtectOrdersRequest|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R049 / 售后诊断、售后沟通话术、AI自动执行（售后工具）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:973`|high|
|售后API|`getPriceProtectOrder` / 查询价保详情|GET|READ|priceProtectOrderId, getPriceProtectOrderRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R049 / 售后诊断、售后沟通话术、AI自动执行（售后工具）|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:1039`|high|
|客服API|`queryWaiterStatus` / 查询客服在线状态|GET|READ|queryWaiterStatusRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:7`|high|
|客服API|`listChatbotEvaluations` / 查询机器人评价明细|GET|READ|robotCode, listChatbotEvaluationsRequest|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:36`|high|
|客服API|`getChatbotPerformance` / 获取聊天机器人绩效数据|GET|READ|robotCode, getChatbotPerformanceRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:85`|high|
|客服API|`listDongdongSessionChatLogs` / 查询会话下的聊天记录|GET|READ|sid, listChatLogsRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046,R050 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:121`|high|
|客服API|`listDongdongSessions` / 获取咚咚会话列表|GET|READ|listDongdongSessionsRequest|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046,R050 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:159`|high|
|客服API|`listDongdongChatDetails` / 获取咚咚会话详情|GET|READ|listDongdongChatDetailsRequest|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046,R050 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:241`|high|
|客服API|`listDongdongWaiters` / 查询商家客服列表|GET|READ|listDongdongWaitersRequest|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:340`|high|
|客服API|`listDongdongWaiterPerformance` / 查询客服绩效列表|GET|READ|listWaiterPerformanceRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:376`|high|
|客服API|`listDongdongWaiterEvaluations` / 查询客服评价列表|GET|READ|listWaiterEvaluationsRequest|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R046 / 客服诊断、AI客服回复、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:414`|high|
|客服API|`postDongdongMessage` / 发送京东客服消息|POST|WRITE|postDongdongMessageRequest|data, success, errorList|请求会话/接收方与消息内容；返回发送结果（字段待定点确认）|R050 / 客服诊断、AI客服回复、异常预警|请求会话/接收方与消息内容；返回发送结果（字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:464`|high|
|客服API|`postDongdongMessageV1` / 发送场景化消息|POST|WRITE|postDongdongMessageRequest|data, success, errorList|请求会话/接收方与消息内容；返回发送结果（字段待定点确认）|R050 / 客服诊断、AI客服回复、异常预警|请求会话/接收方与消息内容；返回发送结果（字段待定点确认）|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:541`|high|
|会员API|`getMemberSystem` / 获取会员体系详情|GET|READ|memberSystemId, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:7`|high|
|会员API|`listMemberSystems` / 查询会员体系列表|GET|READ|request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:53`|high|
|会员API|`listVenderMemberRights` / 查询商家会员权益列表|GET|READ|request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:98`|high|
|会员API|`postMemberPoint` / 变更会员积分|POST|WRITE|memberId, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:129`|high|
|会员API|`listMemberPoints` / 查询会员积分变更列表|GET|READ|omid, request|data, paginationData, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:161`|high|
|会员API|`getMemberAggStatistic` / 查询会员详情及统计信息|GET|READ|omid, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:207`|high|
|会员API|`getMember` / 查询会员详情|GET|READ|omid, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:281`|high|
|会员API|`listOmids` / XID和会员ID批量互转接口|GET|READ|request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:325`|high|
|会员API|`patchMember` / 更新会员信息|PATCH|WRITE|omid, request|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:353`|high|
|会员API|`listMemberAggStatistics` / 查询会员详情及统计数据列表|GET|READ|request|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:387`|high|
|会员API|`listMembers` / 查询会员列表|GET|READ|request|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:462`|high|
|会员API|`listOuids` / omid和ouid互转|PUT|READ|request|success, errorList, data|完整嵌套输入/输出字段待 Phase4 定点确认。|R053 / 会员运营、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:530`|high|
|财务API|`listAccountRecords` / 查询钱包流水明细|GET|READ|memberId, request|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R021,R032,R057 / 毛利测算、活动收益测算、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:7`|high|
|财务API|`listBills` / 查询商家账单明细|GET|READ|request|paginationData, data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R021,R032,R057 / 毛利测算、活动收益测算、AI经营复盘|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:57`|high|
|京麦API|`postJmAiTask` / 创建京麦AI空间任务|POST|WRITE|postJmAiTaskRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R054,R055,R056,R060 / AI任务编排、AI自动执行、自动复检、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:7`|high|
|京麦API|`getJmAiTask` / 获取京麦AI空间任务|GET|READ|jmAiTaskId, getJmAiTaskRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R054,R055,R056,R060 / AI任务编排、AI自动执行、自动复检、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:41`|high|
|京麦API|`patchJmAiTask` / 更新京麦AI空间任务|PATCH|WRITE|jmAiTaskId, patchJmAiTaskRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R054,R055,R056,R060 / AI任务编排、AI自动执行、自动复检、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:80`|high|
|京麦API|`postJmAiTaskRecord` / 创建京麦AI空间定时任务执行记录|POST|WRITE|jmAiTaskId, postJmAiTaskRecordRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R054,R055,R056,R060 / AI任务编排、AI自动执行、自动复检、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:111`|high|
|京麦API|`getJmAiTaskRecord` / 获取京麦AI空间定时任务执行记录|GET|READ|jmAiTaskId, jmAiTaskRecordId, getJmAiTaskRecordRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R054,R055,R056,R060 / AI任务编排、AI自动执行、自动复检、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:147`|high|
|京麦API|`patchJmAiTaskRecord` / 更新京麦AI空间定时任务执行记录|PATCH|WRITE|jmAiTaskId, jmAiTaskRecordId, patchJmAiTaskRecordRequest|data, success, errorList|完整嵌套输入/输出字段待 Phase4 定点确认。|R054,R055,R056,R060 / AI任务编排、AI自动执行、自动复检、异常预警|接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。|`C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:188`|high|

## 场景资料补充证据

- `POP模式对接方案.md:12,31,37,55-82,116-129,153-189,225-232,278-282`：POP包含SOP、门店发货/自提/到店；订单、售后、财务、会员、客服列为开放场景。仅证明场景范围和模式适用性。
- `客服场景文档/客服开放场景概述.md:12-18,40-46`：客服域覆盖机器人、会话聊天、绩效、质检；适用POP与厂直。
- `售后场景文档/退换补修场景方案.md:157-205`：售后列表/详情支持历史同步与增量获取；PATCH用于服务单操作，消息推送存在定向开通限制。

## 排除与证据边界

- 商品API、营销API、推广API、内容API、C2M API不在 Phase2；未扫描。
- 订单中 SN 序列号、OAID 解密、合单条件、核销码系列与当前需求目标无直接证据，排除；其余订单履约/订单查询候选保留。
- 变更说明/jd-apis.d.ts 无接口定义，仅作为变更资料入口。
- d.ts 只证明文档中存在公开接口候选（PUBLIC_API_FOUND）；不能证明 ISV 权限、京喜可用性或字段业务语义。

## Phase4 定点验证清单

- 逐接口确认 request/response 完整字段、枚举、分页与错误码
- 核实数据API报表的商品/店铺/渠道/广告/时间粒度指标语义，避免由 report 名称推断
- 核实通用订单接口对京喜店铺/订单类型的适用范围
- 核实每个候选接口的 ISV 应用权限、商家授权、数据脱敏和写操作前置条件
- 京麦任务 API：确认任务状态机、回调/轮询、幂等及自动执行边界
- 虎符/通用安全 API：确认接入场景、路由权限与秘钥生命周期
