import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from "react"
import { CartContext } from '../context/CartContext'
import ParseToDecimal from "../utils/ParseToDecimal"

export default function Checkout() {

    //cart
    const { cart, removeAllFromCart, setCart } = useContext(CartContext)

    //total
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)

    //back to previous page
    const navigate = useNavigate();
    function goBack(e) {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <main className="checkout">
            <div className="max-content">
                <Link onClick={goBack} className="back-link">Go back</Link>
                <div className="section-container">
                    <section className="checkout-section">
                        <h1 className="checkout-main-title">Checkout</h1>
                        <form className="form" id="myform" method="get" action="something.php">
                            <h2 className="checkout-second-title">Billing details</h2>
                            <div className="form-container">
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                            </div>
                            <h2 className="checkout-second-title">Shipping info</h2>
                            <div className="form-container">
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                            </div>
                            <h2 className="checkout-second-title">Shipping info</h2>
                            <div className="form-container">
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" />
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="summary-section">
                        <h2 className="summary-second-title">Summary</h2>
                        {cart.length > 0 ?
                            <ul className="cart-box-content-list">
                                {
                                    React.Children.toArray(cart.map((product, index) => {
                                        return (
                                            <li className="cart-box-content-list-item">
                                                <img src={product.image} className="cart-box-content-list-item-image" />
                                                <div className="cart-box-content-list-item-content">
                                                    <span className="cart-box-content-list-item-name">{product.name}</span>
                                                    <span className="cart-box-content-list-item-price">$ {ParseToDecimal(product.price)}</span>
                                                </div>
                                                <div className="cart-box-content-list-item-quantity">
                                                    x {product.quantity}
                                                </div>
                                            </li>
                                        )
                                    }))
                                }
                            </ul>
                            : <span>Empty</span>
                        }
                        {total}
                        <input type="submit" form="myform" value="Update" />
                    </section>
                </div>
            </div>
        </main>
    )
}