import { useNavigate } from "react-router-dom";
import "./BlogPreview.css";

export default function BlogPreview() {
    const navigate = useNavigate();

    const blogs = [
        {
            title: "How to Decorate Christmas Table",
            date: "March 10, 2026",
            image: "https://picsum.photos/400/250?1",
        },
        {
            title: "Christmas Chair Cover Ideas",
            date: "March 8, 2026",
            image: "https://picsum.photos/400/250?2",
        },
        {
            title: "Top Christmas Decoration Trends",
            date: "March 5, 2026",
            image: "https://picsum.photos/400/250?3",
        },
    ];

    return (
        <div className="blog">
            <h2>Latest Articles</h2>

            <div className="blog-grid">
                {blogs.map((item, index) => (
                    <div key={index} className="blog-card">
                        <img src={item.image} alt={item.title} />

                        <div className="blog-content">
                            <p className="date">{item.date}</p>
                            <h3>{item.title}</h3>

                            <button onClick={() => navigate("/blog")}>
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="view-all" onClick={() => navigate("/blog")}>
                View All Articles
            </button>
        </div>
    );
}