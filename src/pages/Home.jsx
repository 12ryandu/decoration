import { pageHomeMock } from "../data/mock/pageHomeMock";
import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import Featured from "../components/home/Featured";
import Collection from "../components/home/Collection";
import AboutSection from "../components/home/AboutSection";
import BlogPreview from "../components/home/BlogPreview";

export default function Home() {
    const themeVars = {
        "--page-home-hero-text": pageHomeMock.colors.heroText,
        "--page-home-hero-button-bg": pageHomeMock.colors.heroButtonBg,
        "--page-home-hero-button-text": pageHomeMock.colors.heroButtonText,

        "--page-home-featured-card-shadow": pageHomeMock.colors.featuredCardShadow,

        "--page-home-about-bg": pageHomeMock.colors.aboutBg,
        "--page-home-about-card-bg": pageHomeMock.colors.aboutCardBg,
        "--page-home-about-card-shadow": pageHomeMock.colors.aboutCardShadow,
        "--page-home-about-text-secondary": pageHomeMock.colors.aboutTextSecondary,

        "--page-home-blog-card-bg": pageHomeMock.colors.blogCardBg,
        "--page-home-blog-card-shadow": pageHomeMock.colors.blogCardShadow,
        "--page-home-blog-date-text": pageHomeMock.colors.blogDateText,
        "--page-home-blog-button-text": pageHomeMock.colors.blogButtonText,
        "--page-home-blog-view-all-border": pageHomeMock.colors.blogViewAllBorder,
        "--page-home-blog-view-all-hover-bg": pageHomeMock.colors.blogViewAllHoverBg,
        "--page-home-blog-view-all-hover-text": pageHomeMock.colors.blogViewAllHoverText,

        "--page-home-category-overlay-bg": pageHomeMock.colors.categoryOverlayBg,
        "--page-home-category-overlay-text": pageHomeMock.colors.categoryOverlayText,

        "--page-home-collection-overlay-text":
        pageHomeMock.colors.collectionOverlayText,
        "--page-home-collection-overlay-gradient-start":
        pageHomeMock.colors.collectionOverlayGradientStart,
        "--page-home-collection-overlay-gradient-end":
        pageHomeMock.colors.collectionOverlayGradientEnd,
    };

    return (
        <main style={themeVars}>
            <Hero />
            <Category />
            <Featured />
            <Collection />
            <AboutSection />
            <BlogPreview />
        </main>
    );
}