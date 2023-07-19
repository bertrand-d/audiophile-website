// CartContext.js
import React, { createContext, useState, useEffect } from 'react';   

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    function addToCart(data) {
        // get data from children

        //create the product
        const product = {
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            quantity: data.quantity
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


    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId))
    }

    const removeAllFromCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, removeAllFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }