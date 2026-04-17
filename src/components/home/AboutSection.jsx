import "./AboutSection.css";

export default function AboutSection() {
    const features = [
        {
            icon: "🏭",
            title: "10+ Years Experience",
            desc: "Professional manufacturer in Christmas decorations",
        },
        {
            icon: "⚙️",
            title: "OEM & ODM Supported",
            desc: "Flexible customization based on your needs",
        },
        {
            icon: "📦",
            title: "Custom Packaging",
            desc: "Packaging solutions tailored for your brand",
        },
        {
            icon: "🚚",
            title: "Stable Production",
            desc: "Reliable supply and fast delivery",
        },
    ];

    return (
        <div className="about">
            <h2>About Our Factory</h2>

            <div className="about-grid">
                {features.map((item, index) => (
                    <div key={index} className="about-card">
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}