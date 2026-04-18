import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/mock/products";

export default function Detail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.slug === slug);

    // ===== 404 Not Found =====
    if (!product) {
        return (
            <div style={{
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Georgia', serif",
                color: "#555",
                gap: "16px"
            }}>
                <div style={{ fontSize: "64px", color: "#ddd" }}>404</div>
                <h2 style={{ fontSize: "22px", margin: 0 }}>Product Not Found</h2>
                <p style={{ color: "#999", margin: 0 }}>The product you are looking for does not exist.</p>
                <button
                    onClick={() => navigate("/products")}
                    style={{
                        marginTop: "12px",
                        padding: "10px 28px",
                        background: "#c0392b",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "15px"
                    }}
                >
                    Back to Products
                </button>
            </div>
        );
    }

    // ===== 相关产品（同分类，排除自身）=====
    const related = products
        .filter((p) => p.category === product.category && p.slug !== product.slug)
        .slice(0, 4);

    // ===== 星级渲染 =====
    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < full) {
                stars.push(
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e8a020">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            } else if (i === full && half) {
                stars.push(
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="half">
                                <stop offset="50%" stopColor="#e8a020" />
                                <stop offset="50%" stopColor="#ddd" />
                            </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ddd">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "32px 24px 80px",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            color: "#1a1a1a"
        }}>

            {/* ===== 面包屑导航 ===== */}
            <nav style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "#999",
                marginBottom: "32px"
            }}>
                <span
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer", color: "#c0392b" }}
                >
                    Home
                </span>
                <span>/</span>
                <span
                    onClick={() => navigate("/products")}
                    style={{ cursor: "pointer", color: "#c0392b" }}
                >
                    Products
                </span>
                <span>/</span>
                <span
                    onClick={() => navigate(`/products/${product.category}`)}
                    style={{ cursor: "pointer", color: "#c0392b" }}
                >
                    {product.category}
                </span>
                <span>/</span>
                <span style={{ color: "#555" }}>{product.name}</span>
            </nav>

            {/* ===== 主内容区：图片 + 信息 ===== */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "start",
                marginBottom: "64px"
            }}>

                {/* --- 左侧：图片 --- */}
                <div>
                    <div style={{
                        position: "relative",
                        borderRadius: "16px",
                        overflow: "hidden",
                        background: "#f8f8f8",
                        aspectRatio: "1 / 1",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.10)"
                    }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block"
                            }}
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentNode.style.background = "#f0f0f0";
                            }}
                        />
                        {product.isNew && (
                            <div style={{
                                position: "absolute",
                                top: "16px",
                                left: "16px",
                                background: "#2ecc71",
                                color: "#fff",
                                fontSize: "12px",
                                fontWeight: "700",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase"
                            }}>
                                NEW
                            </div>
                        )}
                    </div>
                </div>

                {/* --- 右侧：产品信息 --- */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* 分类标签 */}
                    <div style={{
                        display: "inline-block",
                        background: "#fff0f0",
                        color: "#c0392b",
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        width: "fit-content"
                    }}>
                        {product.category}
                    </div>

                    {/* 产品名称 */}
                    <h1 style={{
                        fontSize: "32px",
                        fontWeight: "800",
                        lineHeight: "1.2",
                        margin: 0,
                        color: "#111"
                    }}>
                        {product.name}
                    </h1>

                    {/* 评分 */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ display: "flex", gap: "2px" }}>
                            {renderStars(product.rating)}
                        </div>
                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#333" }}>
                            {product.rating}
                        </span>
                        <span style={{ fontSize: "14px", color: "#999" }}>
                            ({product.reviewCount} reviews)
                        </span>
                    </div>

                    {/* 价格 */}
                    <div style={{
                        fontSize: "42px",
                        fontWeight: "900",
                        color: "#c0392b",
                        letterSpacing: "-0.02em"
                    }}>
                        ${product.price.toFixed(2)}
                        <span style={{
                            fontSize: "16px",
                            color: "#999",
                            fontWeight: "400",
                            marginLeft: "8px"
                        }}>
                            / unit
                        </span>
                    </div>

                    {/* 描述 */}
                    <p style={{
                        fontSize: "15px",
                        lineHeight: "1.75",
                        color: "#555",
                        margin: 0,
                        padding: "16px 0",
                        borderTop: "1px solid #f0f0f0",
                        borderBottom: "1px solid #f0f0f0"
                    }}>
                        {product.description}
                    </p>

                    {/* MOQ + Stock */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "12px"
                    }}>
                        <div style={{
                            background: "#fafafa",
                            border: "1px solid #eee",
                            borderRadius: "10px",
                            padding: "14px 18px"
                        }}>
                            <div style={{ fontSize: "11px", color: "#aaa", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Min. Order (MOQ)
                            </div>
                            <div style={{ fontSize: "22px", fontWeight: "800", color: "#111", marginTop: "4px" }}>
                                {product.moq.toLocaleString()} pcs
                            </div>
                        </div>
                        <div style={{
                            background: "#fafafa",
                            border: "1px solid #eee",
                            borderRadius: "10px",
                            padding: "14px 18px"
                        }}>
                            <div style={{ fontSize: "11px", color: "#aaa", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Stock Available
                            </div>
                            <div style={{ fontSize: "22px", fontWeight: "800", color: "#2ecc71", marginTop: "4px" }}>
                                {product.stock.toLocaleString()} pcs
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {product.tags.map((tag) => (
                            <span key={tag} style={{
                                background: "#f4f4f4",
                                color: "#666",
                                fontSize: "12px",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                border: "1px solid #e8e8e8"
                            }}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* 操作按钮 */}
                    <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                        <button style={{
                            flex: 1,
                            padding: "16px 24px",
                            background: "#c0392b",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "700",
                            cursor: "pointer",
                            letterSpacing: "0.03em",
                            transition: "background 0.2s"
                        }}
                                onMouseOver={(e) => e.target.style.background = "#a93226"}
                                onMouseOut={(e) => e.target.style.background = "#c0392b"}
                        >
                            Request a Quote
                        </button>
                        <button style={{
                            padding: "16px 20px",
                            background: "#fff",
                            color: "#c0392b",
                            border: "2px solid #c0392b",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "700",
                            cursor: "pointer",
                            transition: "all 0.2s"
                        }}
                                onMouseOver={(e) => {
                                    e.target.style.background = "#c0392b";
                                    e.target.style.color = "#fff";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = "#fff";
                                    e.target.style.color = "#c0392b";
                                }}
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* 返回列表 */}
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#999",
                            fontSize: "13px",
                            cursor: "pointer",
                            textAlign: "left",
                            padding: 0,
                            textDecoration: "underline"
                        }}
                    >
                        Back to previous page
                    </button>
                </div>
            </div>

            {/* ===== 相关产品 ===== */}
            {related.length > 0 && (
                <section>
                    <h2 style={{
                        fontSize: "22px",
                        fontWeight: "800",
                        color: "#111",
                        marginBottom: "24px",
                        paddingBottom: "12px",
                        borderBottom: "2px solid #f0f0f0"
                    }}>
                        Related Products
                    </h2>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px"
                    }}>
                        {related.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/product/${item.slug}`)}
                                style={{
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    border: "1px solid #eee",
                                    cursor: "pointer",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    background: "#fff"
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div style={{
                                    aspectRatio: "1/1",
                                    background: "#f8f8f8",
                                    overflow: "hidden"
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                        onError={(e) => e.target.style.display = "none"}
                                    />
                                </div>
                                <div style={{ padding: "12px 14px" }}>
                                    <div style={{
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        color: "#111",
                                        lineHeight: "1.4",
                                        marginBottom: "6px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}>
                                        {item.name}
                                    </div>
                                    <div style={{
                                        fontSize: "15px",
                                        fontWeight: "800",
                                        color: "#c0392b"
                                    }}>
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}