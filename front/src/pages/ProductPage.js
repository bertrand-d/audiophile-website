
import Categories from "../components/Categories"
import Tagline from "../components/Tagline"
import ProductSheet from "../components/ProductSheet"
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"

export default function ProductPage() {

    //data from fetch
    const [data, setData] = useState([])

    const fetchJson = () => {
        fetch('http://localhost:3000/data.json')
            .then(response => {
                return response.json();
            }).then(response => {
                setData(response);
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

    if (data.products) {
        return (
            <main className="product-page max-content">

                <Link onClick={goBack} className="back-link">Go back</Link>
                <div className="product-page-sheet-container">
                    {
                        React.Children.toArray(data.products.map((product) => {
                            if (slug === product.slug) {
                                return (
                                    <ProductSheet productData={product} />
                                )
                            }
                        }))
                    }
                </div>
                <Categories categoryData={data.categories || []} />
                <Tagline />
            </main>
        )
    }

}