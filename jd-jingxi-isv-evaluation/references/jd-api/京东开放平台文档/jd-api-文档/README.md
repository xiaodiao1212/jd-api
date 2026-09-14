# 京东开放平台 API 描述（按分类）

- **生成日期**：2026-07-08
- **数据来源**：`open.jd.com` 概览页网络抓包（`listApi4Overview`），覆盖京东开放平台**全部 17 个 API 分类**
- **总量**：16 个分类含 API 接口，合计 **243 个接口**；`变更说明`(200436) 为变更日志分类，无 API 方法（已保留原始抓包 `raw/200436.json`，但不生成接口规格）

## 每个分类一个文件夹
```
apis_by_category/
├── 商品API/      (94)   ├── openapi.json   └── jd-apis.d.ts
├── 订单API/      (27)   ├── openapi.json   └── jd-apis.d.ts
├── 售后API/      (10)   ├── openapi.json   └── jd-apis.d.ts
├── 财务API/      (6)    ├── openapi.json   └── jd-apis.d.ts
├── 会员API/      (13)   ├── openapi.json   └── jd-apis.d.ts
├── 营销API/      (15)   ├── openapi.json   └── jd-apis.d.ts
├── 客服API/      (12)   ├── openapi.json   └── jd-apis.d.ts
├── 内容API/      (5)    ├── openapi.json   └── jd-apis.d.ts
├── 商家API/      (7)    ├── openapi.json   └── jd-apis.d.ts
├── 推广API/      (15)   ├── openapi.json   └── jd-apis.d.ts
├── C2M API/      (11)   ├── openapi.json   └── jd-apis.d.ts
├── 门店API/      (5)    ├── openapi.json   └── jd-apis.d.ts
├── 京麦API/      (6)    ├── openapi.json   └── jd-apis.d.ts
├── 数据API/      (5)    ├── openapi.json   └── jd-apis.d.ts
├── 通用API/      (8)    ├── openapi.json   └── jd-apis.d.ts
├── 虎符/         (4)    ├── openapi.json   └── jd-apis.d.ts
└── 变更说明/     (0)    └── (无接口，仅保留 raw 抓包)
```

## 给 AI 用（最重要）
- **`jd-apis.d.ts`** —— TypeScript 类型定义。直接贴给 AI 让其**照着写**调用代码、做类型对齐。每个接口一对 `XxxRequest` / `XxxResponse`，层级正确缩进，必填/可选一目了然。比 Markdown 缩进不易读错。
- **`openapi.json`** —— OpenAPI 3.1 完整契约（`paths` + `components/schemas` + 错误码）。可用来：
  - 拿真实请求/响应报文跑 `ajv` 做结构校验（自动揪出字段缺失/类型错）
  - 用 `openapi-typescript` / `openapi-generator` 直接生成客户端或 TS 类型

> 不要把这些文件当 Markdown 喂给 AI；`.md` 才适合人读。`apis/*.md` 是早期的人类阅读版，已非必要。

## 分类清单（id → 接口数）
| 分类 | apiCateId | 接口数 |
|---|---|---|
| 商品API | 200375 | 94 |
| 订单API | 200356 | 27 |
| 售后API | 200379 | 10 |
| 财务API | 200371 | 6 |
| 会员API | 200358 | 13 |
| 营销API | 201407 | 15 |
| 客服API | 200373 | 12 |
| 内容API | 200701 | 5 |
| 商家API | 200377 | 7 |
| 推广API | 200466 | 15 |
| C2M API | 200752 | 11 |
| 门店API | 201046 | 5 |
| 京麦API | 201381 | 6 |
| 数据API | 200491 | 5 |
| 通用API | 200473 | 8 |
| 虎符 | 201501 | 4 |
| 变更说明 | 200436 | 0（变更日志，无接口） |

## 类型映射（京东 XML 的 `type` 是 Java 类型签名，已正确解析）
- `java.lang.Long / Integer / Short / Byte` → `number`
- `java.lang.Double / Float / BigDecimal` → `number`
- `java.lang.String` → `string`；`java.lang.Boolean` → `boolean`
- `java.util.Date / Timestamp / LocalDateTime` → `string`（`format: date-time`）
- `java.util.List<X>` → `X[]`（item 类型取签名里的 `X`，忽略子元素单数包装名）
- `com.jd.*` 自定义类 → `object`（子 `<element>` 即其字段）

## 生成与校验流水线（可复现）
- `fetch_categories.js`：用 CDP Chrome（复用登录态）逐分类抓取 `listApi4Overview` 响应 → `raw/<id>.json`
- `gen_category.js`：把每个 `raw/<id>.json` 解析为 `openapi.json` + `jd-apis.d.ts` → `apis_by_category/<分类名>/`
- 校验结果：17/17 文件夹通过（ops == 源 leaf 数、dts 接口数 == 2×ops、schema 数 == 2×ops、无悬空 `$ref`）
