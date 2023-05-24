export default function ProductSheet(props) {
    const {image, name, category, description} = props.productData
    const isNew = props.productData.new

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
                <a className="button-primary">See product</a>
            </div>
        </article>
    )
}