type TProps = {
    quantity: number,
    isInCart?: boolean,
    callback: (quantity: number) => void
}

export default function InputNumber(props: TProps) {

    function decrease() {
        props.callback(props.quantity - 1)
    } 

    const inputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        props.callback(parseInt(evt.target.value, 10))
    }

    function increase() {
        props.callback(props.quantity + 1)
    } 

    return (
        <div className="input-number">
            <button className="input-number-button" onClick={decrease}>-</button>
            <input type="number" className="input-number-input" min="0" placeholder='1' value={props.quantity} readOnly={props.isInCart} onChange={inputChange} />
            <button className="input-number-button" onClick={increase} >+</button>
        </div>
    )
}