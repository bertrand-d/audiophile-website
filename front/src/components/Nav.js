import {ReactComponent as Logo} from '../assets/icons/logo.svg'
import {ReactComponent as Cart} from '../assets/icons/cart.svg'

export default function Nav(props) {
    let isHeader = props.isHeader

    return (
        <nav className="nav max-content">
            <ul className="nav-list">
                <li className="nav-list-item logo">
                    <Logo />
                </li>
                <li className="nav-list-item">Home</li>
                <li className="nav-list-item">Headphones</li>
                <li className="nav-list-item">Speakers</li>
                <li className="nav-list-item">Earphones</li>
                {
                    isHeader &&
                    <li className="nav-list-item cart"><Cart /></li>
                }        
            </ul>
        </nav>
    )
}

Nav.defaultProps = {
    isHeader: true
}