import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

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
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">LOGO</div>

            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Product</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/test">Test</Link>
            </nav>
        </header>
    );
}