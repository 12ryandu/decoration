import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import LoginModal from "../auth/LoginModal";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false); // 2. 添加控制状态

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <div className="logo">LOGO</div>

                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/products">Product</Link>
                    <Link to="/gallery">Gallery</Link>
                </nav>

                {/* 3. 点击按钮打开 Modal，不再跳转页面 */}
                <button
                    className="login-btn"
                    onClick={() => setIsLoginOpen(true)}
                >
                    Login
                </button>
            </header>

            {/* 4. 渲染 Modal，传入状态和关闭方法 */}
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </>
    );
}