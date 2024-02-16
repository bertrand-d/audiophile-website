// CartContext.js
import { createContext, useState, useEffect } from 'react'
import { TProduct } from '../pages/Homepage'
import { IData } from '../pages/Homepage'

type TCartContext = {
    cart: Array<any>, 
    setCart: React.Dispatch<any>, 
    addToCart: (data: TProduct) => void, 
    increaseFromCart: (product : TProduct) => void, 
    decreaseFromCart: (product : TProduct) => void, 
    removeAllFromCart : () => void
}

const defaultValue: TCartContext = {
    cart: [], 
    setCart: () => {}, 
    addToCart: () => {}, 
    increaseFromCart: () => {}, 
    decreaseFromCart: () => {}, 
    removeAllFromCart: () => {}
}

const CartContext = createContext<TCartContext>(defaultValue)


const defaultCartItem = localStorage.getItem('cart') || JSON.stringify([])


const CartProvider = (props:any) => {
    const [cart, setCart] = useState<Array<any>>(JSON.parse(defaultCartItem))

    function addToCart(data : TProduct) {

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
            let productExist = newCart.find(productId => productId.id === product.id)

            //if product already exist in the cart, just increase quantity and send the cart
            if (productExist) {
                productExist.quantity += product.quantity
                setCart(newCart)
                
            } else {
                //if not, so add the product to the existing cart
                setCart([...cart, product])
            }

        } else {
            //if not, just add the product
            setCart([product])
        }
    }

    const increaseFromCart = (product : TProduct) => {
        let newCart = cart.slice()
        const isProductId = newCart.some(item => product.id === item.id)

        if (isProductId) {
            product.quantity += 1
            setCart(newCart)
        }
    }

    const decreaseFromCart = (product : TProduct) => {
        let newCart = cart.slice()
        const isProductId = newCart.some(item => product.id === item.id)

        if (isProductId) {
            product.quantity -= 1

            if (product.quantity === 0) {
                newCart = newCart.filter((item) => item.id !== product.id)
            }
        }
        setCart(newCart)
    }

    const removeAllFromCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart: cart, setCart, addToCart, increaseFromCart, decreaseFromCart, removeAllFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }