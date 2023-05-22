import Categories from "../components/Categories"
import Tagline from "../components/Tagline";
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
export default function ProductList() {

    const { category } = useParams()
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

    return (
        <main className="product-list">
            <div className="product-list-title-container">
                <div className="product-list-title max-content">
                    <h1 className="medium-title white">{category}</h1>
                </div>
            </div>
            <div className="product-list-container max-content">
                {
                    React.Children.toArray(data.products?.map((product) => {
                        if(category === product.category){
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
                    }
                    })) 
                }
            </div>
            <Categories categoryData={data.categories || []} />
            <Tagline />
        </main>
    )
}