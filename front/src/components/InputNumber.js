import React, { useEffect, useState } from "react"

export default function InputNumber() {

    let [inputNumber, setInputNumber] = useState(1)


    function increase() {
        setInputNumber(inputNumber + 1)
        console.log('coucou')
    }

    function decrease() {
        console.log('coucou')
        setInputNumber(inputNumber - 1)
    }

    return (
        <div className="input-number">
            <button className="input-number-button" onChange={decrease}>-</button>
            <input type="number" className="input-number-input" min="1" placeholder='1' value={inputNumber}/>
            <button className="input-number-button" onChange={increase} >+</button>
        </div>
    )
}