import './css/main.scss'
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Footer from './layouts/Footer';
import Header from './layouts/Header'
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-list/:category" element={<ProductList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </CartProvider>
    </div>
  )
}