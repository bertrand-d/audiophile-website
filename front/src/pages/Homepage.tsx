import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import Categories from "../components/Categories"
import PromoteOne from "../components/PromoteOne"
import PromoteTwo from "../components/PromoteTwo"
import PromoteThree from "../components/PromoteThree"
import Hero from "../components/Hero"
import Tagline from "../components/Tagline"
import { IData } from "../utils/Types"

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
        <motion.main
            className="homepage"
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}
        >
            <Hero />
            <Categories categoryData={data?.categories || []} />
            <section className="section-promote max-content">
                <PromoteOne />
                <PromoteTwo />
                <PromoteThree />
            </section>
            <Tagline />
        </motion.main>
    )
}