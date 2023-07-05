import { Link } from 'react-router-dom'

export default function PopupCart({ popupRef }) {
  return (
    <div className="popup-cart">
      <div className="popup-cart-container max-content">
        <div className="popup-cart-box" ref={popupRef}>
          <div className="popup-cart-box-top">
            <span className="popup-cart-box-top-title">
              Cart (1)
            </span>
            <button className="button-tertiary">Remove all</button>
          </div>
          <div className="popup-cart-box-content">
            <ul>
              <li className="popup-cart-box-item">

              </li>
            </ul>
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