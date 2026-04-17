import { useNavigate } from "react-router-dom";
import "./Collection.css";

export default function Collection() {
    const navigate = useNavigate();

    const collections = [
        {
            title: "Christmas Table Setup",
            image: "https://picsum.photos/600/400?1",
        },
        {
            title: "Chair Decoration",
            image: "https://picsum.photos/600/400?2",
        },
        {
            title: "Tree Decoration",
            image: "https://picsum.photos/600/400?3",
        },
        {
            title: "Party Setup",
            image: "https://picsum.photos/600/400?4",
        },
    ];

    return (
        <div className="collection">
            <h2>Collections</h2>

            <div className="collection-grid">
                {collections.map((item, index) => (
                    <div
                        key={index}
                        className="collection-card"
                        onClick={() => navigate("/gallery")}
                    >
                        <img src={item.image} alt={item.title} />

                        <div className="overlay">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}