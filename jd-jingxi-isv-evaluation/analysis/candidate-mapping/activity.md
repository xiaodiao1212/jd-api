# 需求与API候选映射（已完成范围审核）

只使用本模块需求、已有能力事实与相关API索引。平台接口覆盖不包括我方生成/算法能力，也不默认扩展为自动回写。核心无需京东接口时，“直接支持”仅表示不需要新增平台接口；产品能力以最终矩阵为准。

## R030

| 字段 | 结果 |
|---|---|
| candidate_apis |  |
| support | 不支持 |
| read_data | 需要商品/SKU、库存、价格及官方直降、首购礼金、秒杀、特价、便宜包邮、百补、顺手买、买赠、换购、焕新补贴共10类活动的资格规则与当前资格结果；输入资料未证明来源。 |
| write_action | 无 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | OPEN_API_NOT_FOUND：十类活动的适用店铺、商品门槛和实时资格需官方规则及资格结果。 CLI流程可供规则对接，但其实现与权限未获证实。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L60；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；INFERENCE_TECHNICAL: 主审产品边界；问题Q08 |

审核边界：CLI流程可供规则对接，但其实现与权限未获证实。

## R031

| 字段 | 结果 |
|---|---|
| candidate_apis | listSkuStocks |
| support | 部分支持 |
| read_data | listSkuStocks（GET.sp-product.v0.sku-stocks）读取SKU列表的stockNum及reserved/transfer/not-for-sale stock；未证明活动价格、利润、补贴、活动门槛或活动规则。 |
| write_action | 无 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 最适合活动依赖资格、库存、利润与冲突规则，库存读取只覆盖一部分。 明确排序目标与不可参加条件，再推荐活动。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L61；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API018 listSkuStocks references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3278-L3312；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q07,Q08 |

审核边界：明确排序目标与不可参加条件，再推荐活动。

## R032

| 字段 | 结果 |
|---|---|
| candidate_apis | listSkuStocks；listAccountRecords；listBills |
| support | 部分支持 |
| read_data | listSkuStocks提供库存；listAccountRecords提供账户流水、收入支出、余额及交易描述；listBills提供订单/SKU/费用/结算等账单字段；报表接口提供动态schema与报表行数据，但未证明活动GMV、补贴、利润或时间粒度。 |
| write_action | 无业务写入；postReport/postSensitiveReport为READ型报表查询，可返回数据或下载任务，不能视作报名或收益回写。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 预期GMV属于预测，需要历史活动样本、费用规则和不确定性区间。 区分假设情景计算与可验证预测，不能保证活动收益。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L62；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API018 listSkuStocks references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L3278-L3312；API086 listAccountRecords C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:L7；API087 listBills C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:L57；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q07,Q08 |

审核边界：区分假设情景计算与可验证预测，不能保证活动收益。

## R033

| 字段 | 结果 |
|---|---|
| candidate_apis |  |
| support | 不支持 |
| read_data | 需要价保、价格保护、10类活动叠加/互斥规则、当前生效活动和商品价格；候选索引没有冲突校验、价保状态或活动规则接口。 |
| write_action | 无 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | OPEN_API_NOT_FOUND：事后价保单不能替代报名前的叠加、价保和补贴冲突判定。 以官方可执行规则或校验结果为准，不能仅靠通用促销推断。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L63；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；INFERENCE_TECHNICAL: 主审产品边界；问题Q08 |

审核边界：以官方可执行规则或校验结果为准，不能仅靠通用促销推断。

## R034

| 字段 | 结果 |
|---|---|
| candidate_apis |  |
| support | 不支持 |
| read_data | 需按活动类型读取活动要求、商品/SKU、价格、库存及报名字段；候选接口未证明这些字段及10类活动适用性。 |
| write_action | 可基于已有SaaS页面能力与招标方CLI Skill生成/交付提报底表；未证明可写入京东活动系统或返回报名成功。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | OPEN_API_NOT_FOUND：线上报名动作与审核结果未获接口证实，底表路径仍需活动模板。 可交付底表路径；直接报名路径单独待确认，不将两者混称成功报名。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L64；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；INFERENCE_TECHNICAL: 主审产品边界；问题Q08 |

审核边界：可交付底表路径；直接报名路径单独待确认，不将两者混称成功报名。

## R035

| 字段 | 结果 |
|---|---|
| candidate_apis | postActivityReport；listAdsCampaigns；listAdsGroups；getReportSchema；postReport；getSensitiveReportSchema；postSensitiveReport |
| support | 部分支持 |
| read_data | 报表schema可返回指标、属性、筛选条件和响应字段；报表查询可返回行数据、列头、分页或下载任务；postActivityReport输入activity id/type/name/time、PV、historical PV、member count、filing status，但未提供效果查询或利润输出。 |
| write_action | postActivityReport可提交活动报告字段，属于活动数据上报；不能当作效果查询、报名或收益回写。 |
| callback_event | 原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。 |
| public_api_closed_loop | False |
| gaps | 活动上报接口不返回复盘数据，需活动关联成交费用和对比基线。 前后变化可描述，因果增量需合适对照与干扰控制。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L65；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API019 postActivityReport references\jd-api\京东开放平台文档\jd-api-文档\营销API\jd-apis.d.ts:L7-L44；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；API050 getSensitiveReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L141；API051 postSensitiveReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L215；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q07,Q08,Q18 |

审核边界：前后变化可描述，因果增量需合适对照与干扰控制。
