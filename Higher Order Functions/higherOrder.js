//setTimeout is a function that takes two arguments, a function and a time in milliseconds

setTimeout(function() {
    console.log('hello')
}, 3000)

//setInterval is also a function that takes two arguments, a function and a time in millisecond

setInterval(sayHello, 2000) // function sayHello is being passed in --> it is called by setInterval every 2 seconds.

function sayHello() {
    console.log('Hello')
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = numbers.filter(callback)

function callback(number){
    return number % 2  === 0
}

console.log(even)

