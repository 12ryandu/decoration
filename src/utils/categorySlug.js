export function toCategorySlug(category) {
    return category
        .toLowerCase()
        .replace(/\s+/g, "-")       // 空格 → -
        .replace(/[^a-z0-9-]/g, ""); // 去掉特殊字符
}

// URL slug → category名称（反向查找）
export function fromCategorySlug(slug, products) {
    const found = products.find(
        (p) => toCategorySlug(p.category) === slug
    );
    return found ? found.category : null;
}
