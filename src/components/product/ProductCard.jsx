// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { toCategorySlug } from "../../utils/categorySlug";
import "./ProductCard.css";

export default function ProductCard({ product }) {
    const categorySlug = toCategorySlug(product.category);
    const detailPath = `/products/${categorySlug}/${product.slug}`;

    return (
        <article className="product-card">
            <Link to={detailPath} className="product-card__image-wrap">
                <img src={product.image} alt={product.name} className="product-card__image" />
                {product.isNew && <span className="product-card__badge">New</span>}
            </Link>

            <div className="product-card__content">
                {/* 分类标签也可以点击 → 进入分类页 */}
                <Link to={`/products/${categorySlug}`} className="product-card__category">
                    {product.category}
                </Link>

                <h3 className="product-card__title">
                    <Link to={detailPath}>{product.name}</Link>
                </h3>
                <p className="product-card__desc">{product.description}</p>

                <ul className="product-card__meta">
                    <li><strong>Material:</strong> {product.material}</li>
                    <li><strong>MOQ:</strong> {product.moq} pcs</li>
                </ul>

                <div className="product-card__actions">
                    <Link to={detailPath} className="btn btn-outline">
                        View Details
                    </Link>
                    <a href="/contact" className="btn btn-solid">
                        Inquiry
                    </a>
                </div>
            </div>
        </article>
    );
}