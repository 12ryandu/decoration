import { useNavigate } from "react-router-dom";
import "./Featured.css";

export default function Featured() {
    const navigate = useNavigate();

    const products = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        image: `https://picsum.photos/300/300?product=${i}`,
    }));

    return (
        <div className="featured">
            <h2>Latest Products</h2>

            <div className="featured-grid">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="product-card"
                        onClick={() => navigate("/detail")}
                    >
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}