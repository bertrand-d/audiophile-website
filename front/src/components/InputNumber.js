import React, { useEffect, useState } from "react"

export default function InputNumber(props) {
    //use initial quantity from props or 1
    const [inputNumber, setInputNumber] = useState(props.initialQuantity || 1)

    function increase() {
        setInputNumber(inputNumber + 1)
    }

    function decrease() {
        setInputNumber(inputNumber - 1)
    }

    function handleChange(evt) {
        setInputNumber(parseInt(evt.target.value))
    }

    useEffect(() => {
        props.callback(inputNumber)
    }, [inputNumber])

    return (
        <div className="input-number">
            <button className="input-number-button" onClick={decrease}>-</button>
            <input type="number" className="input-number-input" min="0" placeholder='1' value={inputNumber} onChange={handleChange} />
            <button className="input-number-button" onClick={increase} >+</button>
        </div>
    )
}