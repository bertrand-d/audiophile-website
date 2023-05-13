import './css/main.scss'
import Footer from './layouts/Footer';
import Header from './layouts/Header'
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}