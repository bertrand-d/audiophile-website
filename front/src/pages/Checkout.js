import { Link, useNavigate } from 'react-router-dom'
import React, { useContext, useState } from "react"
import { CartContext } from '../context/CartContext'
import ParseToDecimal from "../utils/ParseToDecimal"
import PopupCheckout from '../components/PopupCheckout'

export default function Checkout() {

    //cart
    const { cart } = useContext(CartContext)

    //total
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)

    //checkout popup
    const [isPopupVisible, setPopupVisible] = useState(false)

    function openPopup(e) {
        e.preventDefault()
        setPopupVisible(true);
    };

    function closePopup() {
        setPopupVisible(false);
    };

    //back to previous page
    const navigate = useNavigate();
    function goBack(e) {
        e.preventDefault()
        navigate(-1)
    }

    //form data
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
        paymentMethod: '',
        eMoneyNumber: '',
        eMoneyPin: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <main className="checkout">
            <div className="max-content">
                <Link onClick={goBack} className="back-link">Go back</Link>
                <div className="section-container">
                    <section className="checkout-section">
                        <h1 className="checkout-main-title">Checkout</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <h2 className="checkout-second-title">Billing details</h2>
                            <div className="form-container">
                                <div className="form-item">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input className="form-input" type="text" name="name" value={userData.name} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="mail">Email Address</label>
                                    <input className="form-input" type="email" name="mail" value={userData.email} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="phone">Phone Number</label>
                                    <input className="form-input" type="number" name="phone" value={userData.phoneNumber} onChange={handleChange} />
                                </div>
                            </div>
                            <h2 className="checkout-second-title">Shipping info</h2>
                            <div className="form-container">
                                <div className="form-item full">
                                    <label className="form-label" htmlFor="address">Address</label>
                                    <input className="form-input" type="text" name="address" value={userData.address} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="zipcode">ZIP Code</label>
                                    <input className="form-input" type="number" name="zipcode" value={userData.postalCode} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="city">City</label>
                                    <input className="form-input" type="text" name="city" value={userData.city} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="country">Country</label>
                                    <input className="form-input" type="text" name="country" value={userData.country} onChange={handleChange} />
                                </div>
                            </div>
                            <h2 className="checkout-second-title">Payement Details</h2>
                            <div className="form-container">
                                <span className="form-label">Payment Method</span>
                                <div className="form-item-radio">
                                    <label className="form-label" htmlFor="emoney">e-Money</label>
                                    <input type="radio" name="money" value={userData.paymentMethod = "e-Money"} checked onChange={handleChange} />
                                </div>
                                <div className="form-item-radio">
                                    <label className="form-label" htmlFor="cash">Cash on Delivery</label>
                                    <input type="radio" name="money"  value={userData.paymentMethod = "cash"} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="emoneynb">e-Money Number</label>
                                    <input className="form-input" type="text" name="emoneynb" value={userData.eMoneyNumber} onChange={handleChange} />
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="emoneypin">e-Money PIN</label>
                                    <input className="form-input" type="text" name="emoneypin" value={userData.eMoneyPin} onChange={handleChange} />
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
                                                    x{product.quantity}
                                                </div>
                                            </li>
                                        )
                                    }))
                                }
                            </ul>
                            : <span>Empty</span>
                        }

                        <div className="summary-bottom">
                            <span className="summary-bottom-text">
                                TOTAL
                                <span className="summary-bottom-price">$ {ParseToDecimal(total)}</span>
                            </span>
                            <span className="summary-bottom-text">
                                SHIPPING
                                <span className="summary-bottom-price">
                                    $ 50
                                </span>
                            </span>
                            <span className="summary-bottom-text grand-total">
                                GRAND TOTAL
                                <span className="summary-bottom-price">
                                    $ {ParseToDecimal(total + 50)}
                                </span>
                            </span>
                        </div>
                        <input type="submit" form="myform" value="Continue & pay" className="button-primary" onClick={handleSubmit} />
                    </section>
                    <PopupCheckout show={isPopupVisible} onClose={closePopup} />
                </div>
            </div>
        </main>
    )
}