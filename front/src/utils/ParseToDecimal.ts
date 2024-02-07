interface param {
    toParse : number
}

const ParseToDecimal = (value: param) => {
    console.log(value)
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default ParseToDecimal
