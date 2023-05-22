import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { ReactComponent as Cart } from '../assets/icons/cart.svg'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    let isHeader = props.isHeader

    return (
        <nav className="nav max-content">
            <ul className="nav-list">
                <li className="nav-list-item logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/product-list/Headphones">
                        Headphones
                    </Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/product-list/Speakers">
                        Speakers
                    </Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/product-list/Earphones">
                        Earphones
                    </Link>
                </li>
                {
                    isHeader &&
                    <li className="nav-list-item cart">
                        <Link to="/cart">
                            <Cart />
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}

Nav.defaultProps = {
    isHeader: true
}