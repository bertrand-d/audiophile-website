import { Link } from 'react-router-dom'

export default function PromoteTwo() {
    return (
        <div className="promote-two-content">
            <div className="promote-two-content-text">
                <h2 className="promote-two-title small-title">
                    ZX7 Speaker
                </h2>
                <Link to={`/product/zx7-speaker`} className="button-secondary">
                    See Product
                </Link>
            </div>
        </div>
    )
}