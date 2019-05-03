const names = ['john', 'bob', 'susy']

//for loop

for (i = 0; i < names.length ; i++){
    console.log(names[i])
}

//forEach

names.forEach(callback)

function callback(value, index, array){
    console.log(value, index, array)
}

//filter using the name of the function
const numbers = [0, 1, 2, 3, 4, 5]

const even = numbers.filter(isEven)

function isEven(number){
    return number % 2 === 0
}

//filter using the function itself
const odd = numbers.filter(function(number){
    return number % 2 !==0
})

console.log(even)
console.log(odd)

//map changes value of the array

const doubledNumbers = numbers.map(double)

function double(number){
    return number * 2
}

console.log(doubledNumbers)


const fullNames = names.map(fullName)

function fullName(name){
    return name + ' Anderson'
}

console.log(fullNames)
