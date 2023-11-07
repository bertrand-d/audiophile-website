export default function PopupCheckout({ show, onClose }) {

    return (
        <div className={`popup-container ${show ? 'show' : 'hide'}`}>
            <div className="cart-box cart-box-centered cart-box-checkout ">
                <div>logo checkout</div>
                <span>THANK YOU FOR YOUR ORDER</span>
                <span>You will receive an email confirmation shorty</span>
                <div>Contenu du panier et total</div>
                <button className="button-primary" onClick={onClose}>Back to home</button>
            </div>
        </div>
    )
}