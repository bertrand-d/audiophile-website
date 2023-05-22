import './css/main.scss'
import { Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header'
import Homepage from './pages/Homepage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

export default function App() {
  //todo data ici en contexte
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}