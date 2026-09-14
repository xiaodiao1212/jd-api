"""Aggregate finalized Phase 2 API candidates and verification evidence.

The script is deliberately mechanical: it preserves explicit candidate mappings
and adds verification fields by api name. It does not create new mappings or
make support/feasibility decisions.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
ANALYSIS = ROOT / "analysis"
API_INDEX = ANALYSIS / "api-index"
API_EVIDENCE = ANALYSIS / "api-evidence"
OUT = ANALYSIS / "module-api-index"
RID = re.compile(r"R\d{3}")

# Cross-module candidate links supplied by the principal review. These are
# candidate associations only; they must remain visibly separate from source
# mappings and must not be interpreted as coverage or support decisions.
SUPPLEMENTAL: dict[str, set[str]] = {
    "listAdsCampaigns": {"R016", "R024", "R025", "R029", "R035", "R056", "R057", "R058", "R059", "R060"},
    "listAdsGroups": {"R016", "R024", "R025", "R029", "R035", "R056", "R057", "R058", "R059", "R060"},
    "getReportSchema": {"R008", "R009", "R026", "R027", "R028", "R029", "R052", "R056", "R058", "R059", "R060"},
    "postReport": {"R008", "R009", "R026", "R027", "R028", "R029", "R052", "R056", "R058", "R059", "R060"},
    "listSuggestedPrices": {"R023"},
    "listPriceStars": {"R023"},
    "postProductApply": {"R055"}, "patchProductApply": {"R055"},
    "batchCreateSkuMaterial": {"R055"}, "postMediaZoneImage": {"R055"},
    "postMediaZoneVideo": {"R055"}, "postAdsCampaign": {"R055"},
    "patchAdsCampaign": {"R055"}, "batchPatchAdsCampaign": {"R055"},
    "batchPutAdsCampaignState": {"R055"}, "postAdsGroup": {"R055"},
    "batchPostAdsGroup": {"R055"}, "batchPatchAdsGroup": {"R055"},
    "batchPutAdsGroupState": {"R055"},
}


def load(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8-sig"))


def ids(value: Any) -> list[str]:
    text = value if isinstance(value, str) else ",".join(value) if isinstance(value, list) else ""
    return sorted(set(RID.findall(text)))


def source_entries(doc: Any, primary: str) -> list[dict[str, Any]]:
    entries = doc.get(primary) if isinstance(doc, dict) else doc
    if not isinstance(entries, list):
        raise ValueError(f"expected top-level {primary} list")
    return [x for x in entries if isinstance(x, dict)]


def verification_maps() -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    for path, key, name_key in ((API_EVIDENCE / "commerce-verification.json", "evidence", "api"),
                                (API_EVIDENCE / "operations-verification.json", "records", "api_name")):
        for record in source_entries(load(path), key):
            name = record.get(name_key)
            if isinstance(name, str):
                for part in name.split(';'):
                    result[part.strip()] = record
    return result


def normalized(entry: dict[str, Any], source: str, verified: dict[str, Any] | None) -> dict[str, Any]:
    raw_io = str(entry.get("主要输入输出", ""))
    inputs, outputs = (raw_io.split("->", 1) + [""])[:2] if "->" in raw_io else (raw_io, "")
    req = entry.get("可能需求ID", entry.get("requirement_id", []))
    item = {
        "category": entry.get("api_category", entry.get("category", "")),
        "api_name": entry.get("api_name", entry.get("name", "")),
        "method": entry.get("method", ""),
        "operation_type": entry.get("operation_type", ""),
        "inputs": entry.get("request_fields", inputs),
        "outputs": entry.get("response_fields", outputs),
        "requirement_ids": ids(req),
        "reason": entry.get("匹配原因", entry.get("reason", "")),
        "source_file": entry.get("source_file", ""),
        "confidence": entry.get("confidence", ""),
    }
    if verified:
        item["verification_source"] = verified.get("source_file", verified.get("source", ""))
        item["verification_source_line"] = verified.get("source_line", "")
        item["confirmed_input_fields"] = verified.get("confirmed_input_fields", verified.get("confirmed", []))
        item["confirmed_output_fields"] = verified.get("confirmed_output_fields", [])
        item["verification_limits"] = verified.get("missing_or_limits", verified.get("missing", []))
        item['deep_evidence'] = verified.get('deep_evidence', [])
        if source == 'operations.json':
            item['inputs'] = item['confirmed_input_fields']
            item['outputs'] = item['confirmed_output_fields']
            item['outputs'] = list(dict.fromkeys(item['outputs'] + [x[0]+' ('+x[2]+')' for x in item['deep_evidence']]))
    if source == 'operations.json':
        item['source_file'] += ':L'+str(entry['line'])
        item['method'] = str(entry['method'])+'.'+str(entry['endpoint'])+'   HTTP: '+str(entry['method'])
    if item['api_name'] == 'postProductValidation': item['operation_type']='ACTION'
    if item['api_name'] == 'postProductApply':
        item['inputs']='request.schema、productApplyDTO（仅productId/spuSkuApplyGray/saveActionType/limitInfoSubmitMethod/categoryDTO已展开）、身份及scene'
        item['reason']='创建/整版编辑申请候选；当前完整内容可写合同不足（P01）'
    return item


def principal_refs(requirement_ids: list[str]) -> list[dict[str, str]]:
    """Attach only scoped factual excerpts from principal-verification.md."""
    refs: list[dict[str, str]] = []
    groups = {
        "P01": (set(("R002", "R005", "R006", "R007")), "商品创建 DTO 字段：productId、spuSkuApplyGray、saveActionType、limitInfoSubmitMethod、categoryDTO。", "L3-L5"),
        "P02": (set(("R049",)), "customerApplyInfo 含 applyReasonFirstCid/Desc、applyReasonSecondCid/Desc。", "L7-L10"),
        "P03": (set((f"R{i:03d}" for i in range(36, 45))), "listAdsCampaigns 原始 method 与 impressions/clicks、roi/ctr/cost 字段类型事实。", "L12-L14"),
        "P04": (set(("R001",)), "listProductOpportunities 的 method、输入及商机属性字段事实。", "L16-L18"),
    }
    for ref_id, (allowed, note, lines) in groups.items():
        if set(requirement_ids) & allowed:
            refs.append({"id": ref_id, "source_file": "analysis\\api-evidence\\principal-verification.md", "source_lines": lines, "fact_excerpt": note})
    return refs


def main() -> None:
    registry = load(ANALYSIS / "requirement-registry.json")
    modules: dict[str, list[str]] = {}
    for item in registry:
        modules.setdefault(item["module"], []).append(item["requirement_id"])
    verify = verification_maps()
    all_items: list[dict[str, Any]] = []
    for filename, key in (("commerce.json", "entries"), ("operations.json", "operations")):
        for entry in source_entries(load(API_INDEX / filename), key):
            item = normalized(entry, filename, verify.get(entry.get("api_name", entry.get("name", ""))))
            extra = sorted(SUPPLEMENTAL.get(item["api_name"], set()) - set(item["requirement_ids"]))
            if extra:
                item["requirement_ids"].extend(extra)
                item["requirement_ids"].sort()
                item["supplemental_mapping"] = {"origin": "主评审候选", "requirement_ids": extra, "coverage_claim": False}
            item["principal_verification_refs"] = principal_refs(item["requirement_ids"])
            all_items.append(item)
    if len(all_items) != 93:
        raise ValueError(f"expected 93 finalized candidates, found {len(all_items)}")
    index = {"count": len(all_items), "sources": ["commerce.json", "operations.json"], "entries": all_items}
    (ANALYSIS / "01-jd-api-capability-index.json").write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = ["# 京东京喜 API 能力候选索引", "", "本文件为 47 条 commerce + 46 条 operations 的机械聚合，共 93 条。字段与候选索引原值一致；operations 的 verified 字段仅补充 operations-verification 中的真实输入/输出字段与来源，不构成最终能力判断。", "", "| # | category | api_name | method | operation_type | inputs | outputs | requirement_ids | reason | source_file | confidence |", "|---:|---|---|---|---|---|---|---|---|---|---|"]
    for n, item in enumerate(all_items, 1):
        def cell(value: Any) -> str:
            return str(value).replace("|", "\\|").replace("\n", " ")
        lines.append("| " + " | ".join([str(n), cell(item["category"]), cell(item["api_name"]), cell(item["method"]), cell(item["operation_type"]), cell(item["inputs"]), cell(item["outputs"]), cell(",".join(item["requirement_ids"])), cell(item["reason"]), cell(item["source_file"]), cell(item["confidence"])]) + " |")
    (ANALYSIS / "01-jd-api-capability-index.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    OUT.mkdir(exist_ok=True)
    for module, requirement_ids in modules.items():
        allowed = set(requirement_ids)
        selected = [item for item in all_items if allowed.intersection(item["requirement_ids"])]
        payload = {"module": module, "requirement_ids": requirement_ids, "candidate_count": len(selected), "candidates": selected}
        (OUT / f"{module}.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
