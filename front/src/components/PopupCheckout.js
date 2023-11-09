import { ReactComponent as CheckedLogo } from '../assets/icons/checked.svg'
import { Link } from 'react-router-dom'

export default function PopupCheckout({ show, onClose }) {

    return (
        <div className={`popup-container ${show ? 'show' : 'hide'}`}>
            <div className="cart-box cart-box-centered cart-box-checkout ">
                <CheckedLogo/>
                <span className="small-title">THANK YOU<br/> FOR YOUR ORDER</span>
                <span>You will receive an email confirmation shorty</span>
                <div>Contenu du panier et total</div>
                <Link to="/" className="button-primary">Back to home</Link>
            </div>
        </div>
    )
}