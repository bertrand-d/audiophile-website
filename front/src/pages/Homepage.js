import Categories from "../components/Categories"
import PromoteOne from "../components/PromoteOne"
import Hero from "../components/Hero"
import Tagline from "../components/Tagline"


import { useEffect, useState } from "react"
export default function Homepage() {

    const [data, setData] = useState([])
    console.log(data)
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
            <Categories categoryData={data.categories || []} />
            <PromoteOne/>
            <Tagline />
        </main>
    )
}