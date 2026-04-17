import { useNavigate } from "react-router-dom";
import "./Category.css";

export default function Category() {
    const navigate = useNavigate();

    const categories = [
        { name: "Christmas Hats", path: "/products" },
        { name: "Santa Costumes", path: "/products" },
        { name: "Tree Skirts", path: "/products" },
        { name: "Table Decoration", path: "/products" },
        { name: "Chair Covers", path: "/products" },
        { name: "Gift Packaging", path: "/products" },
    ];

    return (
        <div className="category">
            <h2>Product Categories</h2>

            <div className="category-grid">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="category-card"
                        onClick={() => navigate(item.path)}
                    >
                        <img src={`https://picsum.photos/300/300?${index}`} />
                        <div className="overlay">
                            <span>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}