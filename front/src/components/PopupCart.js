import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from "react"
import { CartContext } from '../context/CartContext'
import InputNumber from './InputNumber'
import ParseToDecimal from "../utils/ParseToDecimal"

export default function PopupCart({ popupRef }) {

  //cart
  const { cart, removeAllFromCart } = useContext(CartContext)

  //total
  const total = cart.reduce((sum, i) => sum + (i.price * i.quantity),0)

  //get input quantity when user press add to cart
  const [quantity, setInputQuantity] = useState(null)
  function handleCallback(quantity) {
    setInputQuantity(quantity)
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className="popup-cart">
      <div className="popup-cart-container max-content">
        <div className="popup-cart-box" ref={popupRef}>
          <div className="popup-cart-box-top">
            <span className="popup-cart-box-top-title">
              Cart ({cart.length})
            </span>
            <button className="button-tertiary" onClick={removeAllFromCart}>Remove all</button>
          </div>
          <div className="popup-cart-box-content">
            {cart.length > 0 ?
              <ul className="popup-cart-box-content-list">
                {
                  React.Children.toArray(cart.map((product) => {

                    return (
                      <li className="popup-cart-box-content-list-item">
                        <img src={product.image} className="popup-cart-box-content-list-item-image" />
                        <div className="popup-cart-box-content-list-item-content">
                          <span className="popup-cart-box-content-list-item-name">{product.name}</span>
                          <span className="popup-cart-box-content-list-item-price">$ {ParseToDecimal(product.price)}</span>
                        </div>
                        <InputNumber quantity={product.quantity} callback={handleCallback} />
                      </li>
                    )
                  }))
                }
              </ul>
              : <span>Empty</span>
            }
            <div className="popup-cart-box-total">
              <span className="popup-cart-box-total-title">TOTAL</span>
              <span className="popup-cart-box-total-price">$ {ParseToDecimal(total)}</span>
            </div>
          </div>
          <Link to="/checkout/" className="button-primary">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}