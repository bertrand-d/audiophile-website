import InputNumber from './InputNumber'
import { useLocation, Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import ParseToDecimal from "../utils/ParseToDecimal"

export default function ProductSheet(props) {

    //get input quantity when user press add to cart
    const [inputQuantity, setInputQuantity] = useState(1)
    function handleCallback(quantity) {
        setInputQuantity(quantity)
    }

    //cart
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    function addToCart() {

        //create the product
        const product = {
            id: id,
            name: name,
            price: price,
            image: image.desktop,
            quantity: inputQuantity
        }

        //check if cart already has a product inside
        if (cart.length > 0) {

            //create a newCart to manipulate if necessary
            let newCart = cart.slice()

            //loop on the newCart
            for (let i = 0; i < newCart.length; i++) {

                //if product already exist in the cart, just increase quantity and send the cart
                if (newCart[i].id === product.id) {
                    newCart[i].quantity += product.quantity
                    setCart(newCart)
                } else {
                    //if not, so add the product to the existing cart
                    setCart([...cart, product])
                }
            }
        } else {
            //if not, just add the product
            setCart([product])
        }
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    //product informations
    const {
        id,
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
                        <span className="product-sheet-price">$ {ParseToDecimal(price)}</span>
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