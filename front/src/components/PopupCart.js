import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"

export default function PopupCart({ popupRef }) {

  //cart
  const cart = JSON.parse(localStorage.getItem('cart') || [])
  console.log(cart)


  return (
    <div className="popup-cart">
      <div className="popup-cart-container max-content">
        <div className="popup-cart-box" ref={popupRef}>
          <div className="popup-cart-box-top">
            <span className="popup-cart-box-top-title">
              Cart ({cart.length})
            </span>
            <button className="button-tertiary">Remove all</button>
          </div>
          <div className="popup-cart-box-content">
            {cart.length > 0 &&
              <ul className="popup-cart-box-content-list">
                {
                  React.Children.toArray(cart.map((product) => {
                    
                     return(

                       <li className="popup-cart-box-content-list-item"> coucou </li>
                     )
                  }))
                }
              </ul>
            }
            <div className="popup-cart-box-total">
              <span className="popup-cart-box-total-title">TOTAL</span>
              <span className="popup-cart-box-total-price">$ 1,258</span>
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