# 需求与API候选映射（已完成范围审核）

只使用本模块需求、已有能力事实与相关API索引。平台接口覆盖不包括我方生成/算法能力，也不默认扩展为自动回写。核心无需京东接口时，“直接支持”仅表示不需要新增平台接口；产品能力以最终矩阵为准。

## R045

| 字段 | 结果 |
|---|---|
| candidate_apis |  |
| support | 不支持 |
| read_data | 未发现店铺星级、下一星级或升星指标读取接口。 |
| write_action | 无；缺少生成提升路径所需数据。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | OPEN_API_NOT_FOUND：下一星级差距与最短提升路径依赖星级模型、阈值和可改善项。 先形成规则下的优先路径，不承诺未经定义的全局最短。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L87；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；INFERENCE_TECHNICAL: 主审产品边界；问题Q14 |

审核边界：先形成规则下的优先路径，不承诺未经定义的全局最短。

## R046

| 字段 | 结果 |
|---|---|
| candidate_apis | queryWaiterStatus；listChatbotEvaluations；getChatbotPerformance；listDongdongSessionChatLogs；listDongdongSessions；listDongdongChatDetails；listDongdongWaiters；listDongdongWaiterPerformance；listDongdongWaiterEvaluations |
| support | 部分支持 |
| read_data | 可候选读取会话/聊天、客服状态、绩效和评价。 |
| write_action | 未发现排班配置写入。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 聊天与绩效可用作诊断基础，但排班空档需计划班表与实际在线状态对照。 分别验收超时、高频问题和排班，不以在线状态替代排班。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L88；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API063 queryWaiterStatus C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L7；API064 listChatbotEvaluations C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L36；API065 getChatbotPerformance C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L85；API066 listDongdongSessionChatLogs C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L121；API067 listDongdongSessions C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L159；API068 listDongdongChatDetails C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L241；API069 listDongdongWaiters C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L340；API070 listDongdongWaiterPerformance C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L376；API071 listDongdongWaiterEvaluations C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L414；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q11 |

审核边界：分别验收超时、高频问题和排班，不以在线状态替代排班。

## R047

| 字段 | 结果 |
|---|---|
| candidate_apis |  |
| support | 不支持 |
| read_data | 未发现回复模板配置读取接口。 |
| write_action | 未发现回复模板配置写入接口；客服发送接口不能替代模板配置。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | OPEN_API_NOT_FOUND：生成回复是内容能力，配置到客服模板库需要专门写入合同。 消息发送接口不能替代模板配置；人工复制可作缩小范围的路径。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L89；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；INFERENCE_TECHNICAL: 主审产品边界；问题Q12 |

审核边界：消息发送接口不能替代模板配置；人工复制可作缩小范围的路径。

## R048

| 字段 | 结果 |
|---|---|
| candidate_apis | getReportSchema；postReport；getSensitiveReportSchema；postSensitiveReport；getOrder；listOrders；listWaybillTraces；listBasicOrders；getBasicOrder |
| support | 部分支持 |
| read_data | 可候选读取动态报表、订单集合/详情和运单轨迹。 |
| write_action | 未发现履约整改或订单/物流配置写入。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 订单与轨迹可提供基础事实，揽收率及延迟发货需统一应履约集合和时限。 将原始物流事实与平台考核指标分开，避免口径不一致。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L90；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；API050 getSensitiveReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L141；API051 postSensitiveReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L215；API053 getOrder C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L103；API054 listOrders C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L422；API055 listWaybillTraces C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L1447；API056 listBasicOrders C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L1832；API057 getBasicOrder C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\订单API\jd-apis.d.ts:L2007；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q13 |

审核边界：将原始物流事实与平台考核指标分开，避免口径不一致。

## R049

| 字段 | 结果 |
|---|---|
| candidate_apis | listAfsOrderLogs；listAfsOrders；getAfsOrder；listPriceProtectOrders；getPriceProtectOrder |
| support | 直接支持 |
| read_data | getAfsOrder.customerApplyInfo提供applyReasonFirstCid/Desc及applyReasonSecondCid/Desc；需要afsOrderId与商家身份，具体权限及枚举待确认。 |
| write_action | 自动读取原因并由我方形成解决方案；不要求退款、审核等售后处置动作。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | 平台读取合同可覆盖；实际权限未验证，方案生成由我方实现。 |
| gaps | 原因读取只是输入，解决方案仍要符合售后政策和商家可执行边界。 提供诊断建议，不自动退款或审核售后。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L91；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API058 listAfsOrderLogs C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L108；API059 listAfsOrders C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L396；API060 getAfsOrder C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L571；API061 listPriceProtectOrders C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L973；API062 getPriceProtectOrder C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\售后API\jd-apis.d.ts:L1039；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q13 |

审核边界：提供诊断建议，不自动退款或审核售后。

## R050

| 字段 | 结果 |
|---|---|
| candidate_apis | listDongdongSessionChatLogs；listDongdongSessions；listDongdongChatDetails；postDongdongMessage；postDongdongMessageV1 |
| support | 直接支持 |
| read_data | 可候选读取会话、聊天详情和日志作为生成上下文。 |
| write_action | 原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | 不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。 |
| gaps | 沟通内容需真实售后情境与政策依据，避免虚构赔付承诺。 用户提供场景后生成话术，发送消息不属于原文明确要求。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L92；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API066 listDongdongSessionChatLogs C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L121；API067 listDongdongSessions C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L159；API068 listDongdongChatDetails C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L241；API072 postDongdongMessage C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L464；API073 postDongdongMessageV1 C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\客服API\jd-apis.d.ts:L541；INFERENCE_TECHNICAL: 主审产品边界；问题Q13 |

审核边界：用户提供场景后生成话术，发送消息不属于原文明确要求。

## R051

| 字段 | 结果 |
|---|---|
| candidate_apis |  |
| support | 不支持 |
| read_data | 未发现店铺经营层级、下一层级或层级规则读取接口。 |
| write_action | 无；差距拆解所需层级规则和指标不可得。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | OPEN_API_NOT_FOUND：经营层级指标及升级阈值未明确开放，不能从店铺资料推导等级差距。 与星级体系分别确认，不能共用未经证实的规则。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L93；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；INFERENCE_TECHNICAL: 主审产品边界；问题Q14 |

审核边界：与星级体系分别确认，不能共用未经证实的规则。

## R052

| 字段 | 结果 |
|---|---|
| candidate_apis | getReportSchema；postReport |
| support | 部分支持 |
| read_data | 可候选读取动态报表数据，可能作为流量/CVR分析输入，但当前未证明具体指标存在。 |
| write_action | 未发现店铺页面结构、装修配置或发布写入接口。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 页面优化需要页面结构、流量路径和转化数据，仅店铺总指标不足以定位页面问题。 先交结构建议；若要求直接发布装修需新增动作确认。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L94；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q15 |

审核边界：先交结构建议；若要求直接发布装修需新增动作确认。

## R053

| 字段 | 结果 |
|---|---|
| candidate_apis | postStrategy；getStrategy；listStrategies；patchStrategy；listTags；listUserPackage；postUserPackage；getMemberSystem；listMemberSystems；listVenderMemberRights；postMemberPoint；listMemberPoints；getMemberAggStatistic；getMember；listOmids；patchMember；listMemberAggStatistics；listMembers；listOuids |
| support | 部分支持 |
| read_data | 可候选读取会员资料、等级、权益、积分、订单聚合、标签、策略和人群包。 |
| write_action | 可候选写策略、人群包、会员和积分；未发现明确招募、消费者触达或复购营销动作。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 会员与人群数据有基础，招募、权益配置和触达结果尚未形成完整运营链。 T2是周期运营建议形态；自动招募及触达须明确授权与规则。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L95；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API041 postStrategy references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L77-L106；API042 getStrategy references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L107-L138；API043 listStrategies references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L187-L233；API044 patchStrategy references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L234-L264；API045 listTags references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L265-L305；API046 listUserPackage references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L331-L363；API047 postUserPackage references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L420-L452；API074 getMemberSystem C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L7；API075 listMemberSystems C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L53；API076 listVenderMemberRights C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L98；API077 postMemberPoint C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L129；API078 listMemberPoints C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L161；API079 getMemberAggStatistic C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L207；API080 getMember C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L281；API081 listOmids C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L325；API082 patchMember C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L353；API083 listMemberAggStatistics C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L387；API084 listMembers C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L462；API085 listOuids C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\会员API\jd-apis.d.ts:L530；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q16 |

审核边界：T2是周期运营建议形态；自动招募及触达须明确授权与规则。
