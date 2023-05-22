import Categories from "../components/Categories"
import Tagline from "../components/Tagline";

import React, { useEffect, useState } from "react";
export default function ProductList() {

    const [data, setData] = useState([])
    const fetchJson = () => {
        fetch('./data.json')
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

    console.log(data)

    return (
        <main className="product-list">
            <div className="product-list-title-container">
                <div className="product-list-title max-content">
                    <h1 className="medium-title white">Headphones</h1>
                </div>
            </div>
            <div className="product-list-container max-content">
                {
                    React.Children.toArray(data.products?.map((product) => {
                        return (
                            <article className="product-list-item">
                                <div className="product-list-item-image">
                                    <img src={product.image.desktop} />
                                </div>
                                <div className="product-list-item-informations">
                                    {
                                        product.new &&
                                        <span className="new-title">New product</span>
                                    }
                                    <h2 className="medium-title">
                                        <span className="product-list-item-product-name">{product.name}</span>
                                        <span>{product.category}</span>
                                    </h2>
                                    <p>
                                        {product.description}
                                    </p>
                                    <a className="button-primary">See product</a>
                                </div>
                            </article>
                        )
                    })) 
                }
            </div>
            <Categories categoryData={data.categories || []} />
            <Tagline />
        </main>
    )
}