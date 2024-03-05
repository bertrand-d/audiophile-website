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
    const { updateCart } = useContext(CartContext)

    //get input quantity when user press add to cart
    const [inputQuantity, setInputQuantity] = useState<number>(1)

    //product informations
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

    //toast
    const [isToastVisible, setToastVisible] = useState(false)

    function handleToastVisibility() {
        setToastVisible(true)
        setTimeout(() => {
            setToastVisible(false)
          }, 3200)
          
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
                                <InputNumber quantity={inputQuantity} callback={setInputQuantity} />
                                <button className="button-primary" onClick={() => {
                                    updateCart(inputQuantity, props.productData)
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
                <ToastInfo show={isToastVisible} />
            }
        </>
    )
}
