import Categories from "../components/Categories"
import ProductSheet from "../components/ProductSheet"
import Tagline from "../components/Tagline"
import { IData } from "../utils/Types"
import { Navigate, useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { DYNAMIC_URL } from "../utils/env"

export default function ProductList() {

    //category in url
    const { category } = useParams()

    //data from fetch
    const [data, setData] = useState<IData>()

    const fetchJson = () => {
        fetch(DYNAMIC_URL + 'data.json')
            .then(response => {
                return response.json()
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
                <motion.main
                    className="product-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
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
                                        <ProductSheet productData={product} />
                                    )
                                } else {
                                    return null
                                }
                            }))
                        }
                    </div>
                    <Categories categoryData={data?.categories || []} />
                    <Tagline />
                </motion.main>
            )
        } else {
            return <Navigate to="/*" />
        }
    }

}