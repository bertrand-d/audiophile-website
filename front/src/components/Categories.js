import { ReactComponent as Arrow } from '../assets/icons/icon-arrow-right.svg'
import { Link } from 'react-router-dom';

export default function Categories(props) {

    return (
        <section className="section-categories max-content">
            {
                props.categoryData.map((category, index) => {
                    return (
                        <Link to={"/product-list"} key={index} className="category">
                            <div className="category-content">
                                <div className="category-picture-container">
                                    <img className="category-picture" src={category.image} alt={category.name} />
                                    <span className="category-picture-shadow"></span>
                                </div>
                                <span className="category-title">{category.name}</span>
                                <span className="category-shop">Shop <Arrow /></span>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
    )
}