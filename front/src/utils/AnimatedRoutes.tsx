import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ProductPage from '../pages/ProductPage'
import ProductList from '../pages/ProductList'
import Checkout from '../pages/Checkout'
import NotFound from '../pages/NotFound'

export default function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product-list/:category" element={<ProductList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )

}