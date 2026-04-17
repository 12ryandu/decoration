import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__top">
                    <div className="site-footer__brand">
                        <h2 className="site-footer__logo">Christmas Decorations</h2>
                        <p className="site-footer__desc">
                            OEM & ODM Christmas decoration manufacturer for wholesalers,
                            retailers, event planners and seasonal projects.
                        </p>
                    </div>

                    <div className="site-footer__newsletter">
                        <h3>Subscribe to our newsletter</h3>
                        <p>Get product updates, holiday trends and new release ideas.</p>
                        <form className="site-footer__form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email address"
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="site-footer__grid">
                    <div className="site-footer__col">
                        <h4>Catalog</h4>
                        <ul>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/solutions">Solutions</Link></li>
                            <li><Link to="/custom">Custom</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="site-footer__col">
                        <h4>Policies</h4>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link to="/refund-policy">Refund Policy</Link></li>
                            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                        </ul>
                    </div>

                    <div className="site-footer__col">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
                        </ul>
                    </div>

                    <div className="site-footer__col">
                        <h4>Contact</h4>
                        <ul className="site-footer__contact">
                            <li>Email: info@example.com</li>
                            <li>WhatsApp: +86 138 0000 0000</li>
                            <li>Location: Zhejiang, China</li>
                            <li>Working Hours: Mon–Sat 9:00–18:00</li>
                        </ul>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <p>© 2026 Christmas Decorations. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}