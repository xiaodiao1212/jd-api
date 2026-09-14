# 需求与API候选映射（已完成范围审核）

只使用本模块需求、已有能力事实与相关API索引。平台接口覆盖不包括我方生成/算法能力，也不默认扩展为自动回写。核心无需京东接口时，“直接支持”仅表示不需要新增平台接口；产品能力以最终矩阵为准。

## R054

| 字段 | 结果 |
|---|---|
| candidate_apis | postJmAiTask；getJmAiTask；patchJmAiTask；postJmAiTaskRecord；getJmAiTaskRecord；patchJmAiTaskRecord |
| support | 直接支持 |
| read_data | 京麦任务/记录的 scheduled、state、deadline、taskId 等状态字段；本地读取规则命中与优先级所需业务输入需自建。 |
| write_action | 创建或更新任务记录；优先级判断、排序和触发可由本地编排器完成。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | 不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。 |
| gaps | 成熟SaaS基座不证明已有冲突仲裁、优先队列和任务生命周期管理。 编排可在我方实现；京麦任务同步只是可选集成，非执行引擎证据。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L101；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API088 postJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L7；API089 getJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L41；API090 patchJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L80；API091 postJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L111；API092 getJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L147；API093 patchJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L188；INFERENCE_TECHNICAL: 主审产品边界；问题Q17 |

审核边界：编排可在我方实现；京麦任务同步只是可选集成，非执行引擎证据。

## R055

| 字段 | 结果 |
|---|---|
| candidate_apis | postProductApply；patchProductApply；batchCreateSkuMaterial；postMediaZoneImage；postMediaZoneVideo；postAdsCampaign；patchAdsCampaign；batchPatchAdsCampaign；batchPutAdsCampaignState；postAdsGroup；batchPostAdsGroup；batchPatchAdsGroup；batchPutAdsGroupState；postJmAiTask；getJmAiTask；patchJmAiTask；postJmAiTaskRecord；getJmAiTaskRecord；patchJmAiTaskRecord |
| support | 部分支持 |
| read_data | 商品申请、SKU素材、广告计划/单元及投放标识与指标；价格、活动全域数据和写入范围未完整证实。 |
| write_action | 写商品申请/素材，创建或调整广告计划/单元，批量启停；需商家授权。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 跨商品价格活动广告的自动动作需逐工具授权、生效核验和异常控制。 仅在明确授权内执行；缺少某一动作接口就不能承诺全域闭环。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L102；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API002 postProductApply references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1304-L1338；API003 patchProductApply references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L1094-L1144；API008 batchCreateSkuMaterial references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2089-L2201；API010 postMediaZoneImage references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2481-L2517；API012 postMediaZoneVideo references\jd-api\京东开放平台文档\jd-api-文档\商品API\jd-apis.d.ts:L2722-L2758；API023 postAdsCampaign references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L269-L384；API024 patchAdsCampaign references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L232-L268；API025 batchPatchAdsCampaign references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L385-L477；API026 batchPutAdsCampaignState references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L42-L76；API027 postAdsGroup references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L694-L794；API028 batchPostAdsGroup references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L194-L231；API029 batchPatchAdsGroup references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L826-L878；API030 batchPutAdsGroupState references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L7-L41；API088 postJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L7；API089 getJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L41；API090 patchJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L80；API091 postJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L111；API092 getJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L147；API093 patchJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L188；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q02,Q08,Q09,Q17 |

审核边界：仅在明确授权内执行；缺少某一动作接口就不能承诺全域闭环。

## R056

| 字段 | 结果 |
|---|---|
| candidate_apis | listAdsCampaigns；listAdsGroups；getReportSchema；postReport；postJmAiTask；getJmAiTask；patchJmAiTask；postJmAiTaskRecord；getJmAiTaskRecord；patchJmAiTaskRecord |
| support | 部分支持 |
| read_data | 广告预算、ROI/GMV、CTR、曝光、点击、成本、订单/加购及动态报表数据；任务状态。 |
| write_action | 业务指标无写入；可更新京麦任务/记录状态作为同步。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 任务成功记录不证明经营改善，需动作关联指标及可观察结果窗口。 复检区分状态生效和指标变化，不擅自追加自动执行下一步。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L103；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；API088 postJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L7；API089 getJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L41；API090 patchJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L80；API091 postJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L111；API092 getJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L147；API093 patchJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L188；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q09,Q17,Q18 |

审核边界：复检区分状态生效和指标变化，不擅自追加自动执行下一步。

## R057

| 字段 | 结果 |
|---|---|
| candidate_apis | listAdsCampaigns；listAdsGroups；getReportSchema；postReport；getSensitiveReportSchema；postSensitiveReport；getReportDownloadTask；listAccountRecords；listBills |
| support | 部分支持 |
| read_data | 投放指标、动态报表行数据、账户流水和账单字段。 |
| write_action | 本地聚合并生成日报/周报；候选API未证明外部经营报告写回。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 周期报告需要跨域指标口径、刷新时间与完整性，生成文字本身不是主要限制。 输出缺失数据及口径说明；日报周报不等于要求实时采集。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L104；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；API050 getSensitiveReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L141；API051 postSensitiveReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L215；API052 getReportDownloadTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L267；API086 listAccountRecords C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:L7；API087 listBills C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\财务API\jd-apis.d.ts:L57；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q07,Q09 |

审核边界：输出缺失数据及口径说明；日报周报不等于要求实时采集。

## R058

| 字段 | 结果 |
|---|---|
| candidate_apis | listAdsCampaigns；listAdsGroups；getReportSchema；postReport |
| support | 部分支持 |
| read_data | 实验组/对照组投放计划与 ROI、GMV、CTR、曝光、点击、成本、订单等结果候选数据。 |
| write_action | 创建/修改广告计划与单元，形成投放策略变体。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 经营策略实验涉及跨工具分组、干扰和归因，素材实验接口不能覆盖全部场景。 先联合定义可控实验单元、对照和停止条件。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L105；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q10,Q18 |

审核边界：先联合定义可控实验单元、对照和停止条件。

## R059

| 字段 | 结果 |
|---|---|
| candidate_apis | listAdsCampaigns；listAdsGroups；getReportSchema；postReport |
| support | 部分支持 |
| read_data | 历史投放配置与时间序列指标、订单/账单数据可作为 Action→Result 候选输入；关联完整性未证实。 |
| write_action | 可更新广告计划/单元或启停状态。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 历史动作结果可能有选择偏差，持续学习需要可靠反馈及策略版本评价。 T5表示动作结果策略的目标反馈链，不证明已有学习系统或自动发布能力。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L106；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q17,Q18 |

审核边界：T5表示动作结果策略的目标反馈链，不证明已有学习系统或自动发布能力。

## R060

| 字段 | 结果 |
|---|---|
| candidate_apis | listAdsCampaigns；listAdsGroups；getReportSchema；postReport；postJmAiTask；getJmAiTask；patchJmAiTask；postJmAiTaskRecord；getJmAiTaskRecord；patchJmAiTaskRecord |
| support | 部分支持 |
| read_data | 投放指标、动态报表数据和任务状态，可作为异常检测输入。 |
| write_action | 本地规则/模型触发后可创建京麦任务记录；具体业务动作需 R055 的写接口。 |
| callback_event | 需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。 |
| public_api_closed_loop | False |
| gaps | 异常检测需持续可靠数据、去重触发和任务冲突处理，不能只增加通知规则。 自动触发任务与自动改变京东状态分开授权。 |
| evidence | FACT_REQUIREMENT: inputs\京东京喜-ISV-需求清单.md:L107；FACT_EXISTING_PRODUCT: inputs\existing-capabilities.md；EC01；API020 listAdsCampaigns references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L598-L693；API022 listAdsGroups references\jd-api\京东开放平台文档\jd-api-文档\推广API\jd-apis.d.ts:L108-L193；API048 getReportSchema C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L7；API049 postReport C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\数据API\jd-apis.d.ts:L81；API088 postJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L7；API089 getJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L41；API090 patchJmAiTask C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L80；API091 postJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L111；API092 getJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L147；API093 patchJmAiTaskRecord C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation\references\jd-api\京东开放平台文档\jd-api-文档\京麦API\jd-apis.d.ts:L188；INFERENCE_TECHNICAL: 主审产品边界；问题Q01,Q05,Q17 |

审核边界：自动触发任务与自动改变京东状态分开授权。
