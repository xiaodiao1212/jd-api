#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
京东商品规范校验脚本
用于校验商品信息是否符合京东平台运营规范
支持车模车衣、安全座椅、奶粉、家庭服务机器人、家居搜推主图等品类
"""

import re
import json
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass
from enum import Enum


class CheckResult(Enum):
    PASS = "✅"
    WARNING = "⚠️"
    FAIL = "❌"


@dataclass
class CheckItem:
    name: str
    result: CheckResult
    message: str
    requirement_type: str = "要求性"  # 要求性/建议性/优化性
    suggestion: Optional[str] = None


@dataclass
class CheckReport:
    product_id: str
    category: str
    total_items: int = 0
    pass_items: int = 0
    warning_items: int = 0
    fail_items: int = 0
    items: List[CheckItem] = None
    
    def __post_init__(self):
        if self.items is None:
            self.items = []
    
    @property
    def compliance_rate(self) -> float:
        if self.total_items == 0:
            return 0.0
        return (self.pass_items / self.total_items) * 100


class ProductSpecChecker:
    """商品规范校验器"""
    
    # 禁用词库（广告法 + 平台规则通用）
    FORBIDDEN_WORDS = [
        "第一", "顶级", "最强", "极致", "最安全", "最智能",
        "100%", "零死角", "完全无需", "万能",
        "特供", "专供", "内部", "医院推荐", "专家推荐",
        "零伤亡", "绝对保护",
        # 营销类
        "买一送一", "TOP1", "销量第一", "全网最低", "全网最便宜",
        "企业团购",
        # 婴幼儿食品类
        "母乳化", "母乳替代", "人乳化", "可替代母乳",
    ]
    
    # 主图尺寸要求
    MIN_IMAGE_SIZE = 800
    
    # 标题字数要求
    TITLE_MIN_LENGTH = 30
    TITLE_MAX_LENGTH = 60
    
    # 短标题字数要求（安全座椅）
    SHORT_TITLE_MIN = 16
    SHORT_TITLE_MAX = 30
    
    # 品类维度标题字数覆盖（京东字符计数：汉字=2，英文/数字/符号=1）
    TITLE_LENGTH_OVERRIDES = {
        "snack":  {"long_max": 60},
        "tissue": {"long_max": 60, "short_min": 16, "short_max": 30},
        "meat":   {"long_max": 60, "short_min": 16, "short_max": 30},
        "shoe":   {"short_min": 16, "short_max": 50, "long_max": 60},
        "tire":   {"short_min": 8, "short_max": 30},
    }
    
    def __init__(self, category: str = "general"):
        self.category = category
        self.report = None
    
    def check_title(self, title: str, is_short: bool = False) -> List[CheckItem]:
        """校验商品标题"""
        items = []
        
        # 检查字数
        title_len = len(title)
        min_len = self.SHORT_TITLE_MIN if is_short else self.TITLE_MIN_LENGTH
        max_len = self.SHORT_TITLE_MAX if is_short else self.TITLE_MAX_LENGTH
        
        if title_len < min_len:
            items.append(CheckItem(
                name="标题字数",
                result=CheckResult.FAIL,
                message=f"标题字数{title_len}，少于最低要求{min_len}字符",
                requirement_type="要求性",
                suggestion=f"建议补充至{min_len}-{max_len}字符"
            ))
        elif title_len > max_len:
            items.append(CheckItem(
                name="标题字数",
                result=CheckResult.FAIL,
                message=f"标题字数{title_len}，超过最大限制{max_len}字符",
                requirement_type="要求性",
                suggestion=f"建议精简至{min_len}-{max_len}字符"
            ))
        else:
            items.append(CheckItem(
                name="标题字数",
                result=CheckResult.PASS,
                message=f"标题字数{title_len}，符合要求（{min_len}-{max_len}字符）",
                requirement_type="要求性"
            ))
        
        # 检查禁用词
        found_forbidden = []
        for word in self.FORBIDDEN_WORDS:
            if word in title:
                found_forbidden.append(word)
        
        if found_forbidden:
            items.append(CheckItem(
                name="禁用词检查",
                result=CheckResult.FAIL,
                message=f"标题包含禁用词：{', '.join(found_forbidden)}",
                requirement_type="要求性",
                suggestion="请移除所有禁用词"
            ))
        else:
            items.append(CheckItem(
                name="禁用词检查",
                result=CheckResult.PASS,
                message="未发现禁用词",
                requirement_type="要求性"
            ))
        
        # 检查品牌名
        if not self._has_brand(title):
            items.append(CheckItem(
                name="品牌名检查",
                result=CheckResult.FAIL,
                message="标题缺少品牌名",
                requirement_type="要求性",
                suggestion="建议在标题开头添加品牌名"
            ))
        else:
            items.append(CheckItem(
                name="品牌名检查",
                result=CheckResult.PASS,
                message="标题包含品牌名",
                requirement_type="要求性"
            ))
        
        return items
    
    def check_home_search_recommend_image(self, width: int, height: int, tolerance: float = 0.02) -> List[CheckItem]:
        """
        家居类目「搜索推荐图」建议宽高比 3:4（宽/高 ≈ 0.75）。
        数值阈值来自 家居类目主图规范/references/home-spec.md（以 README 与图为据）。
        """
        items: List[CheckItem] = []
        if width <= 0 or height <= 0:
            items.append(CheckItem(
                name="搜索推荐图尺寸",
                result=CheckResult.FAIL,
                message="搜索推荐图宽高无效，无法校验比例",
                requirement_type="要求性",
                suggestion="请提供有效的宽、高像素值",
            ))
            return items
        ratio = width / height
        target = 3 / 4
        if abs(ratio - target) <= tolerance:
            items.append(CheckItem(
                name="搜索推荐图宽高比",
                result=CheckResult.PASS,
                message=f"宽高{width}x{height}，比例{width/height:.4f}接近 3:4",
                requirement_type="建议性",
            ))
        else:
            items.append(CheckItem(
                name="搜索推荐图宽高比",
                result=CheckResult.WARNING,
                message=f"宽高{width}x{height}，比例{width/height:.4f}与建议 3:4 偏差较大",
                requirement_type="建议性",
                suggestion="家居搜推素材建议按 3:4 长图上传（参见 家居类目主图规范/references/home-spec.md）",
            ))
        return items

    def check_main_images(self, images: List[Dict]) -> List[CheckItem]:
        """校验商品主图"""
        items = []
        
        # 检查图片数量
        if len(images) < 5:
            items.append(CheckItem(
                name="主图数量",
                result=CheckResult.FAIL,
                message=f"主图数量{len(images)}，少于要求 5 张",
                requirement_type="要求性",
                suggestion="请上传至少 5 张主图"
            ))
        elif len(images) == 5:
            items.append(CheckItem(
                name="主图数量",
                result=CheckResult.PASS,
                message="主图数量符合要求（5 张）",
                requirement_type="要求性"
            ))
        else:
            items.append(CheckItem(
                name="主图数量",
                result=CheckResult.PASS,
                message=f"主图数量{len(images)}，超过最低要求",
                requirement_type="建议性"
            ))
        
        # 检查图片尺寸
        for i, img in enumerate(images[:5], 1):
            width = img.get('width', 0)
            height = img.get('height', 0)
            
            if width < self.MIN_IMAGE_SIZE or height < self.MIN_IMAGE_SIZE:
                items.append(CheckItem(
                    name=f"第{i}张主图尺寸",
                    result=CheckResult.FAIL,
                    message=f"尺寸{width}x{height}，低于最低要求{self.MIN_IMAGE_SIZE}x{self.MIN_IMAGE_SIZE}",
                    requirement_type="要求性",
                    suggestion="请上传 800x800px 及以上的图片"
                ))
            else:
                items.append(CheckItem(
                    name=f"第{i}张主图尺寸",
                    result=CheckResult.PASS,
                    message=f"尺寸{width}x{height}，符合要求",
                    requirement_type="要求性"
                ))
        
        return items
    
    def check_attributes(self, attributes: Dict, required_attrs: List[str] = None) -> List[CheckItem]:
        """校验商品属性"""
        items = []
        
        if required_attrs is None:
            required_attrs = self._get_required_attributes()
        
        # 检查必填属性
        missing_attrs = []
        for attr in required_attrs:
            if attr not in attributes or not attributes[attr]:
                missing_attrs.append(attr)
        
        if missing_attrs:
            items.append(CheckItem(
                name="必填属性",
                result=CheckResult.FAIL,
                message=f"缺少必填属性：{', '.join(missing_attrs)}",
                requirement_type="要求性",
                suggestion="请补充所有必填属性"
            ))
        else:
            items.append(CheckItem(
                name="必填属性",
                result=CheckResult.PASS,
                message="所有必填属性已填写",
                requirement_type="要求性"
            ))
        
        return items
    
    def _has_brand(self, title: str) -> bool:
        """检查标题是否包含品牌名（简化版）"""
        brand_patterns = [r'^[A-Z]{2,}', r'^[\u4e00-\u9fa5]{2,}品牌']
        for pattern in brand_patterns:
            if re.search(pattern, title):
                return True
        return len(title) > 0 and title[0].isupper()
    
    @staticmethod
    def _count_chars(text: str) -> int:
        """按京东字符计数规则：1 汉字/全角符号 = 2 字符，1 英文/半角/数字 = 1 字符"""
        count = 0
        for ch in text:
            if '\u4e00' <= ch <= '\u9fff' or '\u3000' <= ch <= '\u303f' or '\uff00' <= ch <= '\uffef':
                count += 2
            else:
                count += 1
        return count
    
    def check_selling_points(self, selling_points: 'List[str]',
                             expected_count: int = 3,
                             min_chars: int = 2, max_chars: int = 8,
                             short_title: str = "") -> 'List[CheckItem]':
        """校验通用卖点（条数 / 字数 / 与短标重复）
        
        默认值按熟肉制品规范（3 条 / 2-8 字符）。
        饼干膨化可传 min_chars=4, max_chars=8。
        """
        items = []
        if len(selling_points) != expected_count:
            items.append(CheckItem(
                name="卖点条数",
                result=CheckResult.WARNING,
                message=f"卖点 {len(selling_points)} 条，建议 {expected_count} 条",
                requirement_type="建议性",
                suggestion=f"每 SKU 建议配置 {expected_count} 条卖点"
            ))
        else:
            items.append(CheckItem(
                name="卖点条数",
                result=CheckResult.PASS,
                message=f"卖点 {len(selling_points)} 条，符合建议",
                requirement_type="建议性"
            ))
        for i, sp in enumerate(selling_points, 1):
            char_count = self._count_chars(sp)
            if char_count < min_chars or char_count > max_chars:
                items.append(CheckItem(
                    name=f"第{i}条卖点字数",
                    result=CheckResult.WARNING,
                    message=f"「{sp}」为 {char_count} 字符，建议 {min_chars}-{max_chars}",
                    requirement_type="建议性",
                    suggestion=f"精简或扩展至 {min_chars}-{max_chars} 字符"
                ))
        if short_title:
            for i, sp in enumerate(selling_points, 1):
                if sp in short_title:
                    items.append(CheckItem(
                        name=f"第{i}条卖点重复",
                        result=CheckResult.WARNING,
                        message=f"卖点「{sp}」与短标题重复",
                        requirement_type="建议性",
                        suggestion="卖点应与短标题差异化表述"
                    ))
        return items
    
    def check_food_forbidden_words(self, text: str) -> 'List[CheckItem]':
        """校验禁用词（标题或卖点均可传入，使用统一禁用词库）"""
        items = []
        found = [w for w in self.FORBIDDEN_WORDS if w in text]
        if found:
            items.append(CheckItem(
                name="食品类禁用词",
                result=CheckResult.FAIL,
                message=f"包含食品类禁用词：{', '.join(found)}",
                requirement_type="要求性",
                suggestion="请移除违规营销用语"
            ))
        else:
            items.append(CheckItem(
                name="食品类禁用词",
                result=CheckResult.PASS,
                message="未发现食品类禁用词",
                requirement_type="要求性"
            ))
        return items
    
    def _get_required_attributes(self) -> List[str]:
        """获取当前品类的必填属性"""
        attr_map = {
            "car_film": ["品牌", "材质", "适用车型", "颜色"],
            "car_seat": ["品牌", "适用年龄", "适用体重", "固定方式", "3C 证书编号", "颜色", "检测标准", "人体固定方式", "调节方式", "安装方式"],
            "formula": ["品牌", "产品词", "规格", "段位或适用年龄", "包装形式"],
            "robot": ["品牌", "产品类型", "续航时间", "适用面积", "导航方式", "颜色"],
            "snack": ["品牌", "口味", "包装形态", "保质期", "规格"],
            "tissue": ["品牌", "原料成分", "类别", "包装形式", "适用场景", "是否压花", "功能"],
            "meat": ["品牌", "口味", "包装形式", "加工工艺", "保质期"],
            "shoe": ["品牌", "鞋面材质", "鞋底材质", "闭合方式", "鞋帮高度", "鞋跟底形状"],
            "tire": ["品牌", "轮胎规格", "适用车型", "花纹类型"],
            # 家居：仓库材料仅为搜推主图规范，无全量属性清单；校验以主图/搜索推荐图为主
            "home": ["品牌", "颜色"],
            "general": ["品牌", "颜色"]
        }
        return attr_map.get(self.category, attr_map["general"])
    
    def generate_report(self, product_id: str, title: str = "",
                       images: List[Dict] = None, attributes: Dict = None,
                       is_short_title: bool = False,
                       search_recommend_image: Optional[Dict] = None) -> CheckReport:
        """生成校验报告"""
        if images is None:
            images = []
        if attributes is None:
            attributes = {}
        
        self.report = CheckReport(
            product_id=product_id,
            category=self.category
        )
        
        # 执行各项检查
        if title:
            self.report.items.extend(self.check_title(title, is_short_title))
        
        if images:
            self.report.items.extend(self.check_main_images(images))
        
        if attributes:
            self.report.items.extend(self.check_attributes(attributes))

        if self.category == "home" and search_recommend_image:
            w = int(search_recommend_image.get("width", 0))
            h = int(search_recommend_image.get("height", 0))
            self.report.items.extend(self.check_home_search_recommend_image(w, h))
        
        # 统计结果
        self.report.total_items = len(self.report.items)
        self.report.pass_items = sum(1 for item in self.report.items if item.result == CheckResult.PASS)
        self.report.warning_items = sum(1 for item in self.report.items if item.result == CheckResult.WARNING)
        self.report.fail_items = sum(1 for item in self.report.items if item.result == CheckResult.FAIL)
        
        return self.report
    
    def format_report(self, report: CheckReport = None) -> str:
        """格式化输出校验报告"""
        if report is None:
            report = self.report
        
        if report is None:
            return "请先生成校验报告"
        
        lines = [
            "## 商品规范校验报告",
            "",
            f"**商品 ID：** {report.product_id}",
            f"**品类：** {report.category}",
            f"**整体合规率：** {report.compliance_rate:.0f}%",
            "",
            f"总计：{report.total_items}项 | "
            f"通过：{report.pass_items}项 | "
            f"待优化：{report.warning_items}项 | "
            f"不合规：{report.fail_items}项",
            "",
        ]
        
        # 通过项
        pass_items = [item for item in report.items if item.result == CheckResult.PASS]
        if pass_items:
            lines.append("### ✅ 通过项")
            for item in pass_items:
                lines.append(f"- {item.name}：{item.message} [{item.requirement_type}]")
            lines.append("")
        
        # 待优化项
        warning_items = [item for item in report.items if item.result == CheckResult.WARNING]
        if warning_items:
            lines.append("### ⚠️ 待优化项")
            for item in warning_items:
                lines.append(f"- {item.name}：{item.message} [{item.requirement_type}]")
                if item.suggestion:
                    lines.append(f"  - 建议：{item.suggestion}")
            lines.append("")
        
        # 不合规项
        fail_items = [item for item in report.items if item.result == CheckResult.FAIL]
        if fail_items:
            lines.append("### ❌ 不合规项")
            for item in fail_items:
                lines.append(f"- {item.name}：{item.message} [{item.requirement_type}]")
                if item.suggestion:
                    lines.append(f"  - 建议：{item.suggestion}")
            lines.append("")
        
        # 优化建议汇总
        suggestions = [item.suggestion for item in report.items if item.suggestion and item.result != CheckResult.PASS]
        if suggestions:
            lines.append("### 📋 优化建议")
            for i, sug in enumerate(suggestions, 1):
                lines.append(f"{i}. {sug}")
            lines.append("")
        
        return "\n".join(lines)


def main():
    """示例用法"""
    # 创建校验器（安全座椅品类）
    checker = ProductSpecChecker(category="car_seat")
    
    # 示例数据
    product_id = "100012345678"
    title = "XX 品牌儿童安全座椅 9 个月 -12 岁 ISOFIX 接口"
    images = [
        {"width": 800, "height": 800},
        {"width": 800, "height": 800},
        {"width": 800, "height": 800},
        {"width": 800, "height": 800},
        {"width": 800, "height": 800},
    ]
    attributes = {
        "品牌": "XX 品牌",
        "适用年龄": "9 个月 -12 岁",
        "适用体重": "9-36kg",
        "固定方式": "ISOFIX",
        "3C 证书编号": "2026010101010101",
        "颜色": "黑色",
        "检测标准": "中国 3C 认证",
        "人体固定方式": "五点式安全带",
        "调节方式": "360 度旋转",
        "安装方式": "ISOFIX"
    }
    
    # 生成报告
    report = checker.generate_report(product_id, title, images, attributes)
    
    # 输出报告
    print(checker.format_report(report))


if __name__ == "__main__":
    main()
