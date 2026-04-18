// src/pages/Featured.jsx
import { useNavigate } from "react-router-dom";
import { products } from "../../data/mock/products";
import { featuredSlugs } from "../../data/mock/featuredProducts";
import { toCategorySlug } from "../../utils/categorySlug";
import "./Featured.css";

export default function Featured() {
    const navigate = useNavigate();

    // 根据 featuredSlugs 顺序提取产品
    const featuredProducts = featuredSlugs
        .map((slug) => products.find((p) => p.slug === slug))
        .filter(Boolean); // 过滤掉找不到的

    return (
        <div className="featured">
            <h2>🎄 Latest & Featured Products</h2>

            <div className="featured-grid">
                {featuredProducts.map((product) => {
                    const categorySlug = toCategorySlug(product.category);
                    const detailPath = `/products/${categorySlug}/${product.slug}`;

                    return (
                        <div
                            key={product.id}
                            className="featured-card"
                            onClick={() => navigate(detailPath)}
                        >
                            <div className="featured-card__image">
                                <img src={product.image} alt={product.name} />
                                {product.isNew && (
                                    <span className="featured-card__badge">New</span>
                                )}
                            </div>
                            <div className="featured-card__content">
                                <p className="featured-card__name">{product.name}</p>
                                <p className="featured-card__price">
                                    ${product.price.toFixed(2)}
                                </p>
                                <div className="featured-card__rating">
                                    ⭐ {product.rating}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}