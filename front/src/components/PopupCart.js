import { Link } from 'react-router-dom'
import React, { useEffect, useContext } from "react"
import { CartContext } from '../context/CartContext'
import ParseToDecimal from "../utils/ParseToDecimal"

export default function PopupCart({ popupRef }) {

  //cart
  const {cart, removeAllFromCart, setCart } = useContext(CartContext)

  //total
  const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)

  //increase
  //create a newCart to manipulate if necessary
  let newCart = cart.slice()

  function increase(product) {
    //loop on the newCart
    for (let i = 0; i < newCart.length; i++) {

      //if product already exist in the cart, just increase quantity and send the cart
      if (newCart[i].id === product.id) {
        newCart[i].quantity += 1
        setCart(newCart)
      }
    }
  }

  function decrease(product) {
    //loop on the newCart
    for (let i = 0; i < newCart.length; i++) {

      //if product already exist in the cart, just increase quantity and send the cart
      if (newCart[i].id === product.id) {
        newCart[i].quantity -= 1

        if (newCart[i].quantity === 0) {
          newCart.splice(newCart[i], 1)
        } 
        setCart(newCart)
      }
    }
  }

  //update cart - product quantity - when increase / dicrease quantity
  function handleChange(product) {

    for (let i = 0; i < newCart.length; i++) {

        if (newCart[i].quantity === 0) {
          newCart.splice(newCart[i], 1)
        } 
        setCart(newCart)
      
    }
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className="popup-cart">
      <div className="popup-cart-container max-content">
        <div className="cart-box" ref={popupRef}>
          <div className="cart-box-top">
            <span className="cart-box-top-title">
              Cart ({cart.length})
            </span>
            <button className="button-tertiary" onClick={removeAllFromCart}>Remove all</button>
          </div>
          <div className="cart-box-content">
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
                        <div className="input-number">
                          <button className="input-number-button" onClick={() => decrease(product)}>-</button>
                          <input type="number" className="input-number-input" min="0" placeholder='1' value={product.quantity} onChange={handleChange} />
                          <button className="input-number-button" onClick={() => increase(product)}>+</button>
                        </div>
                      </li>
                    )
                  }))
                }
              </ul>
              : <span>Empty</span>
            }
            <div className="cart-box-total">
              <span className="cart-box-total-title">TOTAL</span>
              <span className="cart-box-total-price">$ {ParseToDecimal(total)}</span>
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