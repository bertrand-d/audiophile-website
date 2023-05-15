import Headphones from '../assets/categories/headphones.png'
import Speakers from '../assets/categories/speakers.png'
import Earphones from '../assets/categories/earphones.png'
import { ReactComponent as Arrow } from '../assets/icons/icon-arrow-right.svg'

export default function Categories() {
    return (
        <section className="section-categories max-content">
            <a href="#" className="category">
                <div className="category-content">
                    <div className="category-picture-container">
                        <img className="category-picture" src={Headphones} alt='headphones' />
                        <span className="category-picture-shadow"></span>
                    </div>
                    <span className="category-title">Headphones</span>
                    <span className="category-shop">Shop<Arrow /></span>
                </div>
            </a>
            <a href="#" className="category">
                <div className="category-content">
                    <div className="category-picture-container">
                        <img className="category-picture" src={Speakers} alt='headphones' />
                        <span className="category-picture-shadow"></span>
                    </div>
                    <span className="category-title">Speakers</span>
                    <span className="category-shop">Shop<Arrow /></span>
                </div>
            </a>
            <a href="#" className="category">
                <div className="category-content">
                    <div className="category-picture-container">
                        <img className="category-picture" src={Earphones} alt='headphones' />
                        <span className="category-picture-shadow"></span>
                    </div>
                    <span className="category-title">Earphones</span>
                    <span className="category-shop">Shop<Arrow /></span>
                </div>
            </a>
        </section>
    )
}