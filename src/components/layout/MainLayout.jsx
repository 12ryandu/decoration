// src/layout/MainLayout.jsx

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; // ← 新增
import { layoutThemeMock } from "../../data/mock/layoutThemeMock";

export default function MainLayout() {
    const layoutVars = {
        "--page-home-header-bg": layoutThemeMock.colors.headerBg,
        "--page-home-header-scrolled-bg": layoutThemeMock.colors.headerScrolledBg,
        "--page-home-header-shadow": layoutThemeMock.colors.headerShadow,
        "--page-home-header-logo": layoutThemeMock.colors.headerLogo,
        "--page-home-header-link": layoutThemeMock.colors.headerLink,
        "--page-home-header-link-hover": layoutThemeMock.colors.headerLinkHover,

        "--page-home-footer-bg": layoutThemeMock.colors.footerBg,
        "--page-home-footer-text": layoutThemeMock.colors.footerText,
        "--page-home-footer-heading": layoutThemeMock.colors.footerHeading,
        "--page-home-footer-text-muted": layoutThemeMock.colors.footerTextMuted,
        "--page-home-footer-text-soft": layoutThemeMock.colors.footerTextSoft,
        "--page-home-footer-divider": layoutThemeMock.colors.footerDivider,
        "--page-home-footer-input-bg": layoutThemeMock.colors.footerInputBg,
        "--page-home-footer-input-text": layoutThemeMock.colors.footerInputText,
        "--page-home-footer-input-border": layoutThemeMock.colors.footerInputBorder,
        "--page-home-footer-input-placeholder": layoutThemeMock.colors.footerInputPlaceholder,
        "--page-home-footer-button-bg": layoutThemeMock.colors.footerButtonBg,
        "--page-home-footer-button-text": layoutThemeMock.colors.footerButtonText,
        "--page-home-footer-link": layoutThemeMock.colors.footerLink,
        "--page-home-footer-link-hover": layoutThemeMock.colors.footerLinkHover,
        "--page-home-footer-copyright": layoutThemeMock.colors.footerCopyright,
    };

    return (
        <div style={layoutVars}>
            <ScrollToTop /> {/* ← 新增，放在最顶部 */}
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}