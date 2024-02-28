import InputNumber from './InputNumber'
import { useLocation, Link } from 'react-router-dom'
import { useState, useContext } from "react"
import { TProduct } from '../utils/Types'
import { CartContext } from '../context/CartContext'
import ToastInfo from './ToastInfo'
import ParseToDecimal from "../utils/ParseToDecimal"

type TProps = {
    productData: TProduct
}

export default function ProductSheet(props: TProps) {

    //use cart
    const { addToCart } = useContext(CartContext)

    //get input quantity when user press add to cart
    const [inputQuantity, setInputQuantity] = useState<number>(0)

    function handleCallback(quantity: number) {
        setInputQuantity(quantity)
    }

    function handleUpdateCart() {
        const data: TProduct = {
            ...props.productData,
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: inputQuantity
        }
        addToCart(data)
    }

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


    //toast

    const [isToastVisible, setToastVisible] = useState(false)

    function handleToastVisibility() {
        setToastVisible(true)
        setTimeout(() => {
            setToastVisible(false)
          }, 3200)
          
    }

    function closeToast() {
        setToastVisible(false)
    }

    return (
        <>
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
                                <button className="button-primary" onClick={() => {
                                    handleUpdateCart();
                                    handleToastVisibility()
                                }}>
                                    add to cart
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </article>
            {
                isToastVisible &&
                <ToastInfo show={isToastVisible} onClose={closeToast} />
            }
        </>
    )
}
