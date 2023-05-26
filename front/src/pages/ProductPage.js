
import Categories from "../components/Categories"
import Tagline from "../components/Tagline"
import ProductSheet from "../components/ProductSheet"
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"

export default function ProductPage() {

    //data from fetch
    const [data, setData] = useState([])
    const [product, setProduct] = useState()

    const fetchJson = () => {
        fetch('http://localhost:3000/data.json')
            .then(response => {
                return response.json();
            }).then(response => {
                setData(response);

                //set product
                for (let i = 0; i < response.products.length; i++) {
                    if (slug === response.products[i].slug) {
                        setProduct(response.products[i])
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchJson()
    }, [])

    //slug in url
    const { slug } = useParams()

    //back to previous page
    const navigate = useNavigate();
    function goBack(e) {
        e.preventDefault();
        navigate(-1);
    }

    if (product) {
        return (
            <main className="product-page max-content">
                <Link onClick={goBack} className="back-link">Go back</Link>
                <div className="product-page-sheet-container">
                    {
                        <ProductSheet productData={product} />
                    }
                </div>
                <div className="product-page-features-container">
                    <div className="product-page-features-container-left">
                        <h2 className="medium-title">Features</h2>
                        <p>
                            {
                                product.features
                            }
                        </p>
                    </div>
                    <div className="product-page-features-container-right">
                        <h2 className="medium-title">In the box</h2>
                        <ul className="product-page-features-items">
                            {
                                React.Children.toArray(product.includes.map((includeItem) => {
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
                </div>
                <div className="product-page-mosaic">

                </div>
                <div className="product-page-related">

                </div>
                <Categories categoryData={data.categories || []} />
                <Tagline />
            </main>
        )
    }

}