import React, { useEffect, useState } from "react"

export default function InputNumber() {

    let [inputNumber, setInputNumber] = useState(1)

    function increase() {
        setInputNumber(inputNumber + 1)
    }

    function decrease() {
        setInputNumber(inputNumber - 1)
    }

    function handleChange(evt) {
        setInputNumber(parseInt(evt.target.value))
    }

    return (
        <div className="input-number">
            <button className="input-number-button" onClick={decrease}>-</button>
            <input type="number" className="input-number-input" min="1" placeholder='1' value={inputNumber} onChange={handleChange} />
            <button className="input-number-button" onClick={increase} >+</button>
        </div>
    )
}