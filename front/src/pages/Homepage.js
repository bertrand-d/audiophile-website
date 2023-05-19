import Categories from "../components/Categories"
import Hero from "../components/Hero"

import { useEffect, useState } from "react";
export default function Homepage() {

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
        <main className="homepage">
            <Hero />
            <Categories categoryData = {data.categories || []} />
        </main>
    )
}