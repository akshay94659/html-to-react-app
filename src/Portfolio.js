import React from "react"
import PortfolioCard from "./PortfolioGridItem"

const Portfolio = () => {
    return (
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <PortfolioCard  />
                    <PortfolioCard imageUrl="assets/img/portfolio/cake.png" />
                    <PortfolioCard imageUrl="assets/img/portfolio/circus.png" />
                    <PortfolioCard imageUrl="assets/img/portfolio/game.png" />
                    <PortfolioCard imageUrl="assets/img/portfolio/safe.png" />
                    <PortfolioCard imageUrl="assets/img/portfolio/submarine.png" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;