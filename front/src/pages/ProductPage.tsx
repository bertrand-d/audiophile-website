
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Categories from "../components/Categories"
import Tagline from "../components/Tagline"
import ProductSheet from "../components/ProductSheet"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TProduct } from "../utils/Types"
import { IData } from "../utils/Types"
import { DYNAMIC_URL, IMG_BASE_URL } from "../utils/env"

export default function ProductPage() {
    //slug in url
    const { slug } = useParams()

    //data from fetch
    const [data, setData] = useState<IData>()
    const [product, setProduct] = useState<TProduct>()

    const fetchJson = () => {
        fetch(DYNAMIC_URL + 'data.json')
            .then(response => {
                return response.json()
            }).then(response => {
                setData(response)

                //set product
                for (let i = 0; i < response.products.length; i++) {
                    if (slug === response.products[i].slug) {
                        setProduct(response.products[i])
                    }
                }
            }).catch((error) => {
                console.log(error)
            });
    }
    useEffect(() => {
        fetchJson()
        //when slug change in url, remount component
    }, [slug])

    //back to previous page
    const navigate = useNavigate()
    const goBack: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    //back to previous page -> scroll to top when come from navigate(-1)
    window.scrollTo(0, 0)

    if (product) {
        return (
            <motion.main
                className="product-page max-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <button onClick={goBack} className="back-link">Go back</button>
                <section className="product-page-sheet-container">
                    {
                        <ProductSheet productData={product} />
                    }
                </section>
                <section className="product-page-features-container">
                    <div className="product-page-features-container-left">
                        <h2 className="medium-title">Features</h2>
                        <p>
                            {product.features}
                        </p>
                    </div>
                    <div className="product-page-features-container-right">
                        <h2 className="medium-title">In the box</h2>
                        <ul className="product-page-features-items">
                            {
                                React.Children.toArray(product.includes.map((includeItem: { quantity: number, item: string }) => {
                                    return (
                                        <li className="product-page-features-items-list">
                                            <span className="product-page-features-items-list-quantity">{includeItem.quantity}x</span>
                                            <span className="product-page-features-items-list-name">{includeItem.item}</span>
                                        </li>
                                    )
                                }))
                            }
                        </ul>
                    </div>
                </section>
                <section className="product-page-mosaic">
                    <div className="product-page-mosaic-left">
                        <img src={IMG_BASE_URL + product.gallery.first.desktop} />
                        <img src={IMG_BASE_URL + product.gallery.second.desktop} />
                    </div>
                    <div className="product-page-mosaic-right">
                        <img src={IMG_BASE_URL + product.gallery.third.desktop} />
                    </div>
                </section>
                <section className="product-page-related">
                    <h2 className="medium-title">You may also like</h2>
                    <div className="product-page-related-content">
                        {
                            React.Children.toArray(product.others.map((other) => {
                                return (
                                    <div className="product-page-related-item">
                                        <div className="product-page-related-item-image">
                                            <img src={IMG_BASE_URL + other.image.desktop} />
                                        </div>
                                        <span className="product-page-related-item-name">
                                            {other.name}
                                        </span>
                                        <Link to={`/product/${other.slug}`} onClick={fetchJson} className="button-primary">
                                            See Product
                                        </Link>
                                    </div>
                                )
                            }))
                        }
                    </div>
                </section>
                <Categories categoryData={data?.categories || []} />
                <Tagline />
            </motion.main>
        )
    }

}