import { Link } from 'react-router-dom'
import { ReactComponent as Circle } from "../assets/home/desktop/pattern-circles.svg"
import promoteImg from '../assets/home/desktop/image-speaker-zx9.png'

export default function PromoteOne() {
    return (
        <div className="promote-one-content">
            <div className="promote-one-picture-container">
                <Circle className="promote-one-icon" />
                <img className="promote-one-picture" src={promoteImg} alt="zx9 product" />
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