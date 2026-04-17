import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <article className="product-card">
            <Link to={`/product/${product.slug}`} className="product-card__image-wrap">
                <img src={product.image} alt={product.name} className="product-card__image" />
                {product.isNew && <span className="product-card__badge">New</span>}
            </Link>

            <div className="product-card__content">
                <p className="product-card__category">{product.category}</p>
                <h3 className="product-card__title">
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="product-card__desc">{product.description}</p>

                <ul className="product-card__meta">
                    <li><strong>Material:</strong> {product.material}</li>
                    <li><strong>MOQ:</strong> {product.moq} pcs</li>
                </ul>

                <div className="product-card__actions">
                    <Link to={`/product/${product.slug}`} className="btn btn-outline">
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