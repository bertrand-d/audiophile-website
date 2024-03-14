import { ReactComponent as Arrow } from '../assets/icons/icon-arrow-right.svg'
import { TCategory } from '../utils/Types'
import { Link } from 'react-router-dom'

type TProps = {
    categoryData: Array<TCategory>
}

export default function Categories(props: TProps) {
    return (
        <section className="section-categories max-content">
            {
                props.categoryData.map((category, index) => {
                    return (
                        //todo react children for key
                        <Link to={`/product-list/${category.name}`} key={index} className="category">
                            <div className="category-content">
                                <div className="category-picture-container">
                                    <img className="category-picture" src={"audiophile-website" + category.image} alt={category.name} />
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