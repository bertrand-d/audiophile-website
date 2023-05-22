import Categories from "../components/Categories"
import Tagline from "../components/Tagline";

import { useEffect, useState } from "react";
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

    return (
        <main className="product-list">
            <div className="product-list-title-container">
                <div className="product-list-title max-content">
                    <h1 className="medium-title white">Headphones</h1>
                </div>
            </div>
            <div className="product-list-container max-content">
                <article className="product-list-item">
                    <div className="product-list-item-image">
                        <img src ="../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"/>
                    </div>
                    <div className="product-list-item-informations">
                        <span>New product</span>
                        <h2 className="medium-title">XX99 Mark II</h2>
                        <p>The new XX99 Mark II headphones is the pinnacle of
                            pristine audio. It redefines your premium headphone
                            experience by reproducing the balanced depth and
                            precision of studio-quality sound.
                        </p>
                        <a className="button-primary">See product</a>
                    </div>
                </article>
                <article className="product-list-item">
                    <div className="product-list-item-image">
                        <img src ="../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"/>
                    </div>
                    <div className="product-list-item-informations">
                        <span>New product</span>
                        <h2 className="medium-title">XX99 Mark II</h2>
                        <p>The new XX99 Mark II headphones is the pinnacle of
                            pristine audio. It redefines your premium headphone
                            experience by reproducing the balanced depth and
                            precision of studio-quality sound.
                        </p>
                        <a className="button-primary">See product</a>
                    </div>
                </article>
                <article className="product-list-item">
                    <div className="product-list-item-image">
                        <img src ="../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"/>
                    </div>
                    <div className="product-list-item-informations">
                        <span>New product</span>
                        <h2 className="medium-title">XX99 Mark II</h2>
                        <p>The new XX99 Mark II headphones is the pinnacle of
                            pristine audio. It redefines your premium headphone
                            experience by reproducing the balanced depth and
                            precision of studio-quality sound.
                        </p>
                        <a className="button-primary">See product</a>
                    </div>
                </article>
            </div>
            <Categories categoryData={data.categories || []} />
            <Tagline />
        </main>
    )
}