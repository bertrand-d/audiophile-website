import Categories from "../components/Categories"
import ProductSheet from "../components/ProductSheet"
import Tagline from "../components/Tagline"
import { IData } from "../pages/Homepage"
import { Navigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"

export default function ProductList() {

    //category in url
    const { category } = useParams()

    //data from fetch
    const [data, setData] = useState<IData>()

    const fetchJson = () => {
        fetch('http://localhost:3000/data.json')
            .then(response => {
                return response.json();
            }).then(response => {
                setData(response)
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchJson()
    }, [])
    
    if (data?.categories) {
        //sort all element with "new" as true first
        const sortTrueFirst = data?.products.sort((a) => a.new ? -1 : 1)

        //know if category name in url exist in data. if true, display the page, else redirect
        const isFound = data?.categories.some(element => {
            if (element.name === category) {
                return true
            }
            return false
        })

        if (isFound) {
            return (
                <main className="product-list">
                    <div className="product-list-title-container">
                        <div className="product-list-title max-content">
                            <h1 className="medium-title white">{category}</h1>
                        </div>
                    </div>
                    <div className="product-list-container max-content">
                        {
                            React.Children.toArray(sortTrueFirst.map((product) => {
                                if (category === product.category) {
                                    return (
                                        <ProductSheet productData = {product} />
                                    )
                                }
                            }))
                        }
                    </div>
                    <Categories categoryData={data?.categories || []} />
                    <Tagline />
                </main>
            )
        } else {
            return <Navigate to="/*" />
        }
    }

}