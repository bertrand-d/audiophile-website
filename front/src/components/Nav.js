import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { ReactComponent as Cart } from '../assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import { useState } from "react"
import PopupCart from './PopupCart'

export default function Nav(props) {
    let isHeader = props.isHeader
    const [isPopupVisible, setPopupVisible] = useState(false);

    function displayPopup() {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <>
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
                        <li className="nav-list-item cart" onClick={displayPopup}>
                            <Cart />
                        </li>
                    }
                </ul>
            </nav>
            <PopupCart show={isPopupVisible} onClose={displayPopup} />
        </>
    )
}

Nav.defaultProps = {
    isHeader: true
}