
const temps = []

const celcius = (fah) => {
    return `${(fah).toFixed(2)} degrees Fahrenheit is ${((fah -32) * 5/9).toFixed(2)} degrees Celcius.`
}

const fahrenheit = (cel) => {
    return `${(cel).toFixed(2)} degrees Celcius is ${((cel * 9/5) + 32).toFixed(2)} degrees Fahrenheit.`
}

console.log(celcius(40))

console.log(fahrenheit(40))

