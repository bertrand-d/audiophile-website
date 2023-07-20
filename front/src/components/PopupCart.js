import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from "react"
import { CartContext } from '../context/CartContext'
import InputNumber from './InputNumber'
import ParseToDecimal from "../utils/ParseToDecimal"

export default function PopupCart({ popupRef }) {

  //cart
  const { cart, removeAllFromCart, setCart } = useContext(CartContext)

  //total
  const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)

  //update cart - product quantity - when increase / dicrease quantity
  function handleCallback(index, quantity) {

    const updatedCart = [...cart]
    updatedCart[index].quantity = quantity

    if(updatedCart[index].quantity === 0) {
        updatedCart.splice(updatedCart[index], 1);
    }
    // Make any other adjustments to the cart if necessary.
    // For example, you might want to check for negative quantities.
    // Then, update the cart state:
    setCart(updatedCart)
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
                  React.Children.toArray(cart.map((product, index) => {

                    return (
                      <li className="popup-cart-box-content-list-item">
                        <img src={product.image} className="popup-cart-box-content-list-item-image" />
                        <div className="popup-cart-box-content-list-item-content">
                          <span className="popup-cart-box-content-list-item-name">{product.name}</span>
                          <span className="popup-cart-box-content-list-item-price">$ {ParseToDecimal(product.price)}</span>
                        </div>
                        <InputNumber initialQuantity={product.quantity} callback={(quantity) => handleCallback(index, quantity)}/>
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