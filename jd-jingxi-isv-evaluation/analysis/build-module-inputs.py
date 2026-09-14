"""Build module-scoped API candidate inputs from the current Phase 2 indexes.

This script only filters and aggregates existing candidate records. It does not
infer API support, add requirement mappings, or alter the source indexes.
Run from the evaluation project directory:

    python analysis/build-module-inputs.py
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any, Iterable


ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "analysis" / "requirement-registry.json"
API_DIR = ROOT / "analysis" / "api-index"
OUTPUT_DIR = ROOT / "analysis" / "module-api-index"


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8-sig") as fh:
        return json.load(fh)


def entries_from(index: Any) -> Iterable[dict[str, Any]]:
    """Yield candidate records from the two supported index layouts."""
    if isinstance(index, dict):
        # commerce.json uses ``entries``; operations.json uses ``operations``.
        # Require one of these explicit top-level containers so a schema drift
        # cannot silently produce empty module inputs.
        if isinstance(index.get("entries"), list):
            entries = index["entries"]
        elif isinstance(index.get("operations"), list):
            entries = index["operations"]
        else:
            raise ValueError("API index must contain top-level entries or operations list")
    else:
        entries = index
    if not isinstance(entries, list):
        return
    for entry in entries:
        if isinstance(entry, dict):
            yield entry


def mapped_ids(entry: dict[str, Any]) -> set[str]:
    """Read only explicit requirement mapping fields already present in an entry."""
    values: list[Any] = []
    for key in ("可能需求ID", "requirement_id", "requirement_ids"):
        if key in entry:
            value = entry[key]
            values.extend(value if isinstance(value, list) else [value])
    result: set[str] = set()
    for value in values:
        if isinstance(value, str):
            result.update(part.strip() for part in value.split(",") if part.strip())
    return {value for value in result if re.fullmatch(r"R\d{3}", value)}


def main() -> None:
    registry = load_json(REGISTRY)
    if not isinstance(registry, list):
        raise ValueError("requirement-registry.json must be a top-level array")
    modules: dict[str, list[dict[str, Any]]] = {}
    for requirement in registry:
        rid = requirement.get("requirement_id")
        module = requirement.get("module")
        if not isinstance(rid, str) or not isinstance(module, str):
            raise ValueError("registry item missing requirement_id or module")
        modules.setdefault(module, []).append(requirement)

    indexed: list[tuple[str, dict[str, Any]]] = []
    for filename in ("commerce.json", "operations.json"):
        path = API_DIR / filename
        for entry in entries_from(load_json(path)):
            indexed.append((filename, entry))

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for module, requirements in modules.items():
        requirement_ids = [item["requirement_id"] for item in requirements]
        allowed = set(requirement_ids)
        candidates = []
        for source_name, entry in indexed:
            matched = sorted(allowed & mapped_ids(entry))
            if matched:
                candidates.append({"source_index": source_name, "matched_requirement_ids": matched, "entry": entry})
        output = {
            "module": module,
            "requirement_ids": requirement_ids,
            "candidate_count": len(candidates),
            "candidates": candidates,
        }
        with (OUTPUT_DIR / f"{module}.json").open("w", encoding="utf-8") as fh:
            json.dump(output, fh, ensure_ascii=False, indent=2)
            fh.write("\n")


if __name__ == "__main__":
    main()
