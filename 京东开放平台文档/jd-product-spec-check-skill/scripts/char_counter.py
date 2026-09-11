#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
京东字符计数器

京东平台字符计数规则：
  - 1 个汉字 / 全角符号 = 2 字符
  - 1 个英文字母 / 数字 / 半角符号 = 1 字符

用法：
  # 单条标题
  python3 char_counter.py "维达 超韧山茶花抽纸4层90抽20包"

  # 多条标题（空格分隔）
  python3 char_counter.py "标题一" "标题二" "标题三"

  # 从文件读取（一行一个标题）
  python3 char_counter.py -f titles.txt

  # 带品类阈值校验
  python3 char_counter.py -c tissue "维达 超韧山茶花抽纸4层90抽20包"
"""

import sys
import argparse

# 品类标题字数阈值（长标题 / 短标题）
CATEGORY_LIMITS = {
    "snack":  {"long_max": 60, "short_min": 16, "short_max": 30,  "name": "饼干膨化"},
    "nut":    {"long_max": 60, "short_min": 16, "short_max": 30,  "name": "坚果蜜饯"},
    "tissue": {"long_max": 60, "short_min": 16, "short_max": 30,  "name": "清洁纸品"},
    "meat":   {"long_max": 60, "short_min": 16, "short_max": 30,  "name": "熟肉制品"},
    "shoe":   {"long_max": 60, "short_min": 16, "short_max": 50,  "name": "鞋靴"},
    "tire":   {"long_max": 60, "short_min": 8,  "short_max": 30,  "name": "轮胎"},
    "toy":    {"long_max": 60, "short_min": 16, "short_max": 30,  "name": "儿童玩具"},
    "sofa":   {"long_max": 60, "short_min": 16, "short_max": 30,  "name": "功能沙发"},
    "washer": {"long_max": 90, "short_min": 16, "short_max": 30,  "name": "洗衣机"},
    "cooker": {"long_max": 90, "short_min": 16, "short_max": 30,  "name": "电饭煲"},
    "clean":  {"long_max": 90, "short_min": 16, "short_max": 30,  "name": "清洁电器"},
}


def count_jd_chars(text: str) -> int:
    """按京东字符计数规则计算字符数"""
    count = 0
    for ch in text:
        if '\u4e00' <= ch <= '\u9fff' or '\u3000' <= ch <= '\u303f' or '\uff00' <= ch <= '\uffef':
            count += 2
        else:
            count += 1
    return count


def check_limit(char_count: int, category: str, is_short: bool = False) -> str:
    """对照品类阈值返回判定结果"""
    limits = CATEGORY_LIMITS.get(category)
    if not limits:
        return ""

    if is_short:
        lo, hi = limits["short_min"], limits["short_max"]
        label = "短标题"
    else:
        lo, hi = 0, limits["long_max"]
        label = "长标题"

    if lo and char_count < lo:
        return f"  ❌ {limits['name']}{label}要求 {lo}-{hi}，当前 {char_count}，不足"
    elif char_count > hi:
        return f"  ❌ {limits['name']}{label}要求 ≤{hi}，当前 {char_count}，超出"
    else:
        return f"  ✅ {limits['name']}{label}要求 ≤{hi}，当前 {char_count}，合格"


def process(text: str, category: str = None, is_short: bool = False):
    """处理单条文本"""
    char_count = count_jd_chars(text)
    cn_count = sum(1 for ch in text if '\u4e00' <= ch <= '\u9fff')
    en_count = sum(1 for ch in text if ch.isascii() and ch.isalpha())
    num_count = sum(1 for ch in text if ch.isdigit())

    print(f"  「{text}」")
    print(f"  → {char_count} 字符（{cn_count} 汉字 / {en_count} 英文 / {num_count} 数字 / {len(text) - cn_count - en_count - num_count} 其他）")

    if category:
        result = check_limit(char_count, category, is_short)
        if result:
            print(result)

    print()
    return char_count


def main():
    parser = argparse.ArgumentParser(
        description="京东字符计数器（汉字=2，英文/数字=1）",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="支持品类: " + ", ".join(f"{k}({v['name']})" for k, v in CATEGORY_LIMITS.items())
    )
    parser.add_argument("texts", nargs="*", help="要计数的标题文本")
    parser.add_argument("-f", "--file", help="从文件读取（一行一个标题）")
    parser.add_argument("-c", "--category", help="品类 key，启用阈值校验")
    parser.add_argument("-s", "--short", action="store_true", help="按短标题阈值校验")

    args = parser.parse_args()

    texts = list(args.texts) if args.texts else []

    if args.file:
        with open(args.file, "r", encoding="utf-8") as f:
            texts.extend(line.strip() for line in f if line.strip())

    if not texts:
        parser.print_help()
        sys.exit(1)

    for text in texts:
        process(text, args.category, args.short)


if __name__ == "__main__":
    main()
