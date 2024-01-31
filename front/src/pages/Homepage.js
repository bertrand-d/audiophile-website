import Categories from "../components/Categories"
import PromoteOne from "../components/PromoteOne"
import PromoteTwo from "../components/PromoteTwo"
import PromoteThree from "../components/PromoteThree"
import Hero from "../components/Hero"
import Tagline from "../components/Tagline"


import { useEffect, useState } from "react"
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
            <Categories categoryData={data.categories || []} />
            <section className="section-promote">
                <PromoteOne />
                <PromoteTwo />
                <PromoteThree />
            </section>
            <Tagline />
        </main>
    )
}