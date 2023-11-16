import { ReactComponent as CheckedLogo } from '../assets/icons/checked.svg'
import { Link } from 'react-router-dom'
import React, { useContext } from "react"
import { CartContext } from '../context/CartContext'
import ParseToDecimal from "../utils/ParseToDecimal"

export default function PopupCheckout({ show, onClose }) {

    //cart
    const { cart } = useContext(CartContext)

    //total
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)

    return (
        <div className={`popup-container ${show ? 'show' : 'hide'}`}>
            <div className="cart-box cart-box-centered cart-box-checkout ">
                <CheckedLogo />
                <span className="small-title">THANK YOU<br /> FOR YOUR ORDER</span>
                <span>You will receive an email confirmation shortly</span>
                <div className="cart-box-checkout-total">
                    {
                        cart.length > 0 ?
                            React.Children.toArray(cart.map((product, index) => {
                                return (
                                    index === 0 &&
                                    <div className="cart-box-checkout-total-left">
                                        <div className="cart-box-content-list-item">
                                            <img src={product.image} className="cart-box-content-list-item-image" />
                                            <div className="cart-box-content-list-item-content">
                                                <span className="cart-box-content-list-item-name">{product.name}</span>
                                                <span className="cart-box-content-list-item-price">$ {ParseToDecimal(product.price)}</span>
                                            </div>
                                            <div className="cart-box-content-list-item-quantity">
                                                x{product.quantity}
                                            </div>
                                        </div>
                                        <div className="cart-box-checkout-total-left__bottom"> and {cart.length - 1} other item(s)</div>
                                    </div>
                                )
                            }))
                            : <span> Empty </span>
                    }
                    <div className="cart-box-checkout-total-right">
                        <span>GRAND TOTAL</span>
                        <span>$ {ParseToDecimal(total + 50)}</span>
                    </div>
                </div>
                <Link to="/" className="button-primary">Back to home</Link>
            </div>
        </div>
    )
}