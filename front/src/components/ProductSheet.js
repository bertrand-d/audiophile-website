import { useLocation, Link } from 'react-router-dom';

export default function ProductSheet(props) {
    const {
        image,
        name,
        category,
        description,
        price,
        slug
    } = props.productData
    const isNew = props.productData.new
    const locationArray = useLocation().pathname.split('/')
    const isProductPage = locationArray.includes('product')

    return (
        <article className="product-sheet">
            <div className="product-sheet-image">
                <img src={image.desktop} />
            </div>
            <div className="product-sheet-informations">
                {
                    isNew &&
                    <span className="new-title">New product</span>
                }
                <h2 className="medium-title">
                    <span className="product-sheet-product-name">{name}</span>
                    <span>{category}</span>
                </h2>
                <p>
                    {description}
                </p>
                {
                    !isProductPage &&
                    <Link to={`/product/${slug}`} className="button-primary">
                        See Product
                    </Link>
                }
                {
                    isProductPage &&
                    <div className="product-sheet-add-container">
                        <span className="product-sheet-price">$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        <div className="product-sheet-button-container">
                            <div className="input-number">
                                <button className="input-number-button">-</button>
                                <input type="number" className="input-number-input" min="1" placeholder="1" />
                                <button className="input-number-button">+</button>
                            </div>
                            <button className="button-primary">add to cart</button>
                        </div>
                    </div>
                }
            </div>
        </article>
    )
}