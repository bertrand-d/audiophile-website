import { Link } from 'react-router-dom'
import React, { useEffect, useContext } from "react"
import { CartContext } from '../context/CartContext'
import ParseToDecimal from "../utils/ParseToDecimal"
import { TProduct } from '../utils/Types'
import InputNumber from './InputNumber'
import { IMG_BASE_URL } from '../utils/env'

type TProps = {
  show: boolean,
  onClose: React.MouseEventHandler
}

export default function PopupCart(props: TProps) {

  //cart
  const { cart: cart, increaseFromCart, decreaseFromCart, removeAllFromCart } = useContext(CartContext)

  //total
  const total = cart.reduce((sum: number, i: { price: number, quantity: number }) => sum + (i.price * i.quantity), 0)

  function stopPropagation(e: any) {
    e.stopPropagation()
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className={`popup-container ${props.show ? 'show' : 'hide'}`} onClick={props.onClose}>
      <div className="popup-cart max-content" onClick={stopPropagation}>
        <div className="cart-box">
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
                  React.Children.toArray(cart.map((product: TProduct) => {

                    const handleChange = (quantity: number) => {
                      if (quantity < product.quantity) {
                        decreaseFromCart(product)
                      } else if (quantity > product.quantity) {
                        increaseFromCart(product)
                      }
                    }
                    return (
                      <li className="cart-box-content-list-item">
                        <img src={IMG_BASE_URL + product.image.desktop} className="cart-box-content-list-item-image" />
                        <div className="cart-box-content-list-item-content">
                          <span className="cart-box-content-list-item-name">{product.name}</span>
                          <span className="cart-box-content-list-item-price">$ {ParseToDecimal(product.price)}</span>
                        </div>
                        <InputNumber 
                          quantity={product.quantity} 
                          isInCart={true} 
                          callback={handleChange} 
                        />
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
          <Link to="/checkout/" className="button-primary" onClick={props.onClose}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}