import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/mock/products";
import ProductToolbar from "../components/product/ProductToolbar";
import ProductCard from "../components/product/ProductCard";
import Pagination from "../components/product/Pagination";
import "./List.css";

const ITEMS_PER_PAGE = 12; // 每页显示12个产品

export default function List() {
    const { category } = useParams(); // 从URL获取分类
    const [currentPage, setCurrentPage] = useState(1);
    const [sortValue, setSortValue] = useState("default");

    // ===== 1️⃣ 根据分类过滤产品 =====
    const filteredProducts = useMemo(() => {
        if (!category) return products;
        return products.filter((p) => p.category === category);
    }, [category]);

    // ===== 2️⃣ 根据排序方式排序 =====
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        switch (sortValue) {
            case "newest":
                // 新品优先，然后按ID倒序
                return sorted.sort((a, b) => {
                    if (a.isNew !== b.isNew) return b.isNew ? 1 : -1;
                    return b.id - a.id;
                });
            case "name-asc":
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case "name-desc":
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case "default":
            default:
                return sorted; // 按原始顺序
        }
    }, [filteredProducts, sortValue]);

    // ===== 3️⃣ 分页逻辑 =====
    const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    // ===== 4️⃣ 页码改变时重置到第一页 =====
    const handleSortChange = (value) => {
        setSortValue(value);
        setCurrentPage(1); // 重要：切换排序时回到第1页
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // 可选：滚动到顶部
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="list-page">
            {/* Hero Banner */}
            <section className="hero-banner">
                <h1>{category || "All Products"}</h1>
                <p>Browse our collection of {sortedProducts.length} products</p>
            </section>

            {/* Toolbar */}
            <ProductToolbar
                title={category || "All Products"}
                total={sortedProducts.length}
                sortValue={sortValue}
                onSortChange={handleSortChange}
            />

            {/* 产品网格 */}
            <div className="product-grid">
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="no-products">No products found</p>
                )}
            </div>

            {/* 分页器 */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {/* SEO 内容区 */}
            <section className="seo-content">
                <h2>About {category || "Our Products"}</h2>
                <p>Premium quality products for your needs...</p>
            </section>
        </div>
    );
}