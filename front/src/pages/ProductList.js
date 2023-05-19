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
            <Categories categoryData = {data.categories || []} />
            <Tagline/>
        </main>
    )
}