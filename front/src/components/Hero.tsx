import { Link } from 'react-router-dom'
export default function Hero() {
    return (
        <section className="section-hero">
            <div className="section-hero-content max-content">
                <span className="section-hero-new">New product</span>
                <h1 className="section-hero-title big-title white">
                    <span className="section-hero-product-name">
                        XX99 mark II
                    </span>
                    <span className="section-hero-category-name">
                        Headphones
                    </span>
                </h1>
                <p className="section-hero-description">
                    Experience natural, lifelike audio and exceptional
                    build quality made for the passionate music
                    enthusiast.
                </p>
                <Link to={`/product/xx99-mark-two-headphones`} className="button-primary">
                    See Product
                </Link>
            </div>
        </section>
    )
}