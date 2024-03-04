import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { ReactComponent as Cart } from '../assets/icons/cart.svg'
import { ReactComponent as MenuHamburger } from '../assets/icons/icon-hamburger.svg'
import { Link } from 'react-router-dom'
import { useState } from "react"
import PopupCart from './PopupCart'

type TProps = {
    isInHeader: boolean,
    isInFooter: boolean
}
export default function Nav(props: TProps) {

    //footer don't have cart on all devices, but keep text link in the mobile
    let isInHeader = props.isInHeader
    let isInFooter = props.isInFooter

    const [isPopupVisible, setPopupVisible] = useState(false)
    const [isDropdownVisible, setIsDropDownVisible] = useState(false)

    function displayPopup() {
        setPopupVisible(!isPopupVisible)
    }

    function displayDropdown() {
        setIsDropDownVisible(!isDropdownVisible)
    }

    return (
        <>
            <nav className="nav max-content">
                <ul className={isInFooter ? "nav-list footer" : "nav-list"}>
                    {isInHeader &&
                        <li className="nav-list-item menu-hamburger" onClick={displayDropdown}>
                            <MenuHamburger />
                        </li>
                    }
                    <li className="nav-list-item logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                    <li className="nav-list-item text-link">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-list-item text-link">
                        <Link to="/product-list/Headphones">
                            Headphones
                        </Link>
                    </li>
                    <li className="nav-list-item text-link">
                        <Link to="/product-list/Speakers">
                            Speakers
                        </Link>
                    </li>
                    <li className="nav-list-item text-link">
                        <Link to="/product-list/Earphones">
                            Earphones
                        </Link>
                    </li>
                    {
                        isInHeader &&
                        <li className="nav-list-item cart" onClick={displayPopup}>
                            <Cart />
                        </li>
                    }
                </ul>
            </nav>
            <div className={`nav-dropdown-container`}>
                <ul className={`nav nav-dropdown ${isDropdownVisible ? "show": "hide"}`}>
                    <li className="nav-list-item text-link" onClick={displayDropdown}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-list-item text-link" onClick={displayDropdown}>
                        <Link to="/product-list/Headphones">
                            Headphones
                        </Link>
                    </li>
                    <li className="nav-list-item text-link" onClick={displayDropdown}>
                        <Link to="/product-list/Speakers">
                            Speakers
                        </Link>
                    </li>
                    <li className="nav-list-item text-link" onClick={displayDropdown}>
                        <Link to="/product-list/Earphones">
                            Earphones
                        </Link>
                    </li>
                </ul>
            </div>
            <PopupCart show={isPopupVisible} onClose={displayPopup} />
        </>
    )
}

Nav.defaultProps = {
    isInHeader: true
}