import { Link } from 'react-router-dom'
import { ReactComponent as Circle } from "../assets/home/desktop/pattern-circles.svg"

export default function PromoteOne() {
    return (
        <section className="section-promote">
            <div className="section-promote-content max-content">
                <div className="section-promote-picture-container">
                    <Circle className="section-promote-icon" />
                    <img className="section-promote-picture" src="\assets\home\desktop\image-speaker-zx9.png" alt="zx9" />
                </div>
                <div className="section-promote-content-text">
                    <h1 className="section-promote-title big-title white">
                        <span>
                            ZX9
                        </span>
                        <span className="section-promote-category-name">
                            Speaker
                        </span>
                    </h1>
                    <p className="section-promote-description">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                    <Link to={`/product/zx9-speaker`} className="button-primary button-primary-dark">
                        See Product
                    </Link>
                </div>
            </div>
        </section>
    )
}