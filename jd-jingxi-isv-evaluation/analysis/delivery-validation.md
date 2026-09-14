# 输出交付机械验收

验收范围：`outputs\01-api-capability-map.md`、`outputs\02-product-evaluation-matrix.md`、`outputs\03-jd-interface-questions.md`、`outputs\04-初步产品评估报告.md`；基准为 `analysis\requirement-registry.json`、`analysis\principal-questions.json`、`analysis\principal-evaluation.json`。本次只读检查，未重新扫描 API，未改动四份输出。

| 检查项 | 检查方法 | 结果 | 证据/精确位置 |
|---|---|---|---|
| R001–R060 覆盖 | 读取 registry 与 principal 的 ID 集合，并扫描四份输出中的需求 ID 集合 | PASS | registry 60 项、principal 60 项，集合均精确为 R001–R060；矩阵标题位于 `outputs\02-product-evaluation-matrix.md:3`，报告覆盖说明位于 `outputs\04-初步产品评估报告.md:19`、`:46`。 |
| required 维度 | 对 principal 每条记录检查字段存在且结构有效：`reuse`、`existing`、`saas`、`dependency`、`coverage`、`research`、`automation`、`primary`、`secondary`、`difficulty`、`explanation`、`boundary`、`ec`、`questions`、`permission`、`collaboration`、`api_evidence_ids` | PASS | 60/60 条均包含全部字段；NONE_FOUND/NOT_REQUIRED 项的 `api_evidence_ids: []` 是允许的空证据集合，不视为缺字段。基准文件：`analysis\principal-evaluation.json`。 |
| 18Q 问题及关联 | 检查 Q01–Q18 是否全部存在；校验 principal 的需求关联问题 ID、问题清单关联的需求 ID 是否都在合法集合内 | PASS | 18 条问题；无非法 Q ID 或 R ID。总表位于 `outputs\03-jd-interface-questions.md:7`–`:24`，关联字段来源为 `analysis\principal-questions.json`。 |
| 统计与 principal 一致 | 从 principal 重新计数并与输出摘要逐项比对 | PASS | API 覆盖：PARTIAL 40、NOT_REQUIRED 10、NONE_FOUND 9、FULL 1，与 `outputs\01-api-capability-map.md:9`–`:12` 及 `outputs\04-初步产品评估报告.md:154`–`:157` 一致；主标签：A 2、B 10、C 32、D 14、E 2，与报告 `outputs\04-初步产品评估报告.md:21`–`:27` 一致。 |
| 本地 Markdown 链接 | 提取四份输出全部 Markdown 链接，移除可选行号后按 Windows 路径逐一 `Path.exists()` | PASS | 共检查 289 个链接，损坏 0 个；链接示例和证据路径位于 `outputs\01-api-capability-map.md:6`、`outputs\02-product-evaluation-matrix.md:3`。 |
| 工期/人日数值 | 扫描工期、人日、人天、工作日等词及其相邻数值；复核数字上下文 | PASS | 未发现工期或人日数值。报告明确写作边界但未给出数值：`outputs\04-初步产品评估报告.md:3`。 |
| 报告 04 过程/Agent/模型名/Token | 对报告 04 扫描 `Agent`、模型厂商/模型名、`Token`、过程类代理描述；区分普通业务语境的“模型” | PASS | 未发现 Agent、模型名或 Token 词；`outputs\04-初步产品评估报告.md:82` 的“成本模型”、`:133` 的“周期运营建议形态”、`:167` 的“考核口径”均为业务语境，不是模型名称或 Agent 过程。 |
| 未经证实 CONFIRMED 值 | 扫描四份输出与 principal 的结构化权限/状态字段；排除仅说明“没有 CONFIRMED 证据”的定义句 | PASS | 未发现 `permission` 或状态字段取值为 CONFIRMED。矩阵 `outputs\02-product-evaluation-matrix.md:7` 与报告 `outputs\04-初步产品评估报告.md:171` 仅为禁止误读的定义说明。 |
| JD_HAS_NO_API 断言 | 全文检索四份输出及 principal | PASS | 未发现 `JD_HAS_NO_API`。相关缺口均使用 `OPEN_API_NOT_FOUND` 或待确认表述。 |

## 需主审

机械验收未发现 FAIL。以下内容属于语义/产品判断，机械检查不替代主审：报告中的 A–E 主标签是否符合最终策略；`NONE_FOUND` 是否应继续保留为 `OPEN_API_NOT_FOUND`；四类验收结果与业务边界是否足以支撑招标方阅读。相关主判断见 `analysis\principal-evaluation.json` 及四份输出。
