import { Link } from 'react-router-dom'
import promoteImg from '../assets/home/desktop/image-earphones-yx1.jpg'

export default function PromoteThree() {
    return (
        <div className="promote-three-content">
            <div className="promote-three-picture-container">
                <img className="promote-three-picture" src={promoteImg} alt="yx1" />
            </div>
            <div className="promote-three-content-text">
                <h2 className="promote-three-title small-title">
                    YX1 Earphones
                </h2>
                <Link to={`/product/yx1-earphones`} className="button-secondary">
                    See Product
                </Link>
            </div>
        </div>
    )
}