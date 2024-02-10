import { Link } from 'react-router-dom'
import { ReactComponent as Circle } from "../assets/home/desktop/pattern-circles.svg"

export default function PromoteOne() {
    return (
        <div className="promote-one-content max-content">
            <div className="promote-one-picture-container">
                <Circle className="promote-one-icon" />
                <img className="promote-one-picture" src="\assets\home\desktop\image-speaker-zx9.png" alt="zx9" />
            </div>
            <div className="promote-one-content-text">
                <h2 className="promote-one-title big-title white">
                    <span>
                        ZX9
                    </span>
                    <span>
                        Speaker
                    </span>
                </h2>
                <p className="promote-one-description">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Link to={`/product/zx9-speaker`} className="button-primary button-primary-dark">
                    See Product
                </Link>
            </div>
        </div>
    )
}