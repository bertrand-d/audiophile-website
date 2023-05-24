import './css/main.scss'
import { Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header'
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export default function App() {
  //todo data ici en contexte
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-list/:category" element={<ProductList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}