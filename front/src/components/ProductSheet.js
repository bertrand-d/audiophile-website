import InputNumber from './InputNumber';
import { useLocation, Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"

export default function ProductSheet(props) {
    const [cart, setCart] = useState([])
    const [inputQuantity, setInputQuantity] = useState(1)

    function handleCallback(quantity){
        setInputQuantity(quantity)
    }

    function addToCart(){
        console.log('cart', inputQuantity)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const {
        image,
        name,
        category,
        description,
        price,
        slug
    } = props.productData
    const isNew = props.productData.new
    const locationArray = useLocation().pathname.split('/')
    const isProductPage = locationArray.includes('product')

    function parseToDecimal(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <article className="product-sheet">
            <div className="product-sheet-image">
                <img src={image.desktop} />
            </div>
            <div className="product-sheet-informations">
                {
                    isNew &&
                    <span className="new-title">New product</span>
                }
                <h2 className="medium-title">
                    <span className="product-sheet-product-name">{name}</span>
                    <span>{category}</span>
                </h2>
                <p>
                    {description}
                </p>
                {
                    !isProductPage &&
                    <Link to={`/product/${slug}`} className="button-primary">
                        See Product
                    </Link>
                }
                {
                    isProductPage &&
                    <div className="product-sheet-add-container">
                        <span className="product-sheet-price">$ {parseToDecimal(price)}</span>
                        <div className="product-sheet-button-container">
                            <InputNumber callback={handleCallback} />
                            <button className="button-primary" onClick={addToCart}>add to cart</button>
                        </div>
                    </div>
                }
            </div>
        </article>
    )
}