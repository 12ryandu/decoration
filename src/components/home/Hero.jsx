import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
    const banners = [
        {
            id: 1,
            title: "Christmas Decorations Supplier",
            subtitle: "Professional B2B Manufacturer & Exporter",
            image: "https://picsum.photos/1200/500?1",
        },
        {
            id: 2,
            title: "Custom Christmas Solutions",
            subtitle: "OEM & ODM Supported",
            image: "https://picsum.photos/1200/500?2",
        },
        {
            id: 3,
            title: "High Quality Factory",
            subtitle: "10+ Years Experience",
            image: "https://picsum.photos/1200/500?3",
        },
    ];

    const [current, setCurrent] = useState(0);

    // 自动轮播
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero">
            {banners.map((item, index) => (
                <div
                    key={item.id}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <div className="hero-content">
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <button>Contact Us</button>
                    </div>
                </div>
            ))}
        </div>
    );
}