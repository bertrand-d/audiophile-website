import { useEffect, useState } from "react"
import Categories from "../components/Categories"
import PromoteOne from "../components/PromoteOne"
import PromoteTwo from "../components/PromoteTwo"
import PromoteThree from "../components/PromoteThree"
import Hero from "../components/Hero"
import Tagline from "../components/Tagline"


export type TCategory = {
    name: string,
    image: string
}

export type TProduct = {
    id: number,
    image : any,
    name: string,
    category : string,
    description: string,
    price: number,
    slug: string,
    new : boolean;
}

export interface IData {
    categories: Array<TCategory>,
    // products: Array<{id: number, slug: string, image: any, category: string, categoryImage: any}>
    products: Array<TProduct>
}

//todo change response to only category


export default function Homepage() {

    const [data, setData] = useState<IData>()
    const fetchJson = () => {
        fetch('./data.json')
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

    return (
        <main className="homepage">
            <Hero />
            <Categories categoryData={data?.categories || []} />
            <section className="section-promote">
                <PromoteOne />
                <PromoteTwo />
                <PromoteThree />
            </section>
            <Tagline />
        </main>
    )
}