import './css/main.scss'
import { CartProvider } from './context/CartContext'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import ScrollToTop from "./utils/ScrollToTop"
import AnimatedRoutes from './utils/AnimatedRoutes'

export default function App() {

  return (
    <div className="App">
      <CartProvider>
        <Header />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </CartProvider>
    </div>
  )
}