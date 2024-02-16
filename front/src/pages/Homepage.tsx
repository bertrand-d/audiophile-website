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
//todo change response to only category
// maybe create another file for types
//TODO fix all any
export type TProduct = {
    id: number,
    image : any, //object
    name: string,
    category : string,
    description: string,
    features : string,
    gallery: any, //object
    price: number,
    slug: string,
    new : boolean,
    others: any, //array with objects
    includes: any, //array with objects
    quantity : number;
}
export interface IData {
    categories: Array<TCategory>,
    // products: Array<{id: number, slug: string, image: any, category: string, categoryImage: any}>
    products: Array<TProduct>
}
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