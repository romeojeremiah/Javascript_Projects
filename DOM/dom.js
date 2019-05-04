//Some DOM methods return white space as nodes

//element.childNodes return white space
//element.children do no


const results = document.querySelector('#results')
const first = document.querySelector('#first')
const allChildren = results.childNodes

const children = results.children

console.log(allChildren)

console.log(children)

//nextSibling property returns whitespace
console.log(results.nextSibling)
//previousSibling also returns whitespace and nulls
console.log(results.previousSibling)
//You can chain to get expected results
console.log(results.previousSibling.previousSibling)

console.log(results.nodeValue)
// nodeValue returns whitespace
console.log(first.nodeValue)

console.log(first.textContent)

console.log(results.children[0].getAttribute('id'))

console.log(results.children[0].setAttribute('class', 'google'))

console.log(results.children[0].getAttribute('class'))

first.style.color = 'red'

console.log(first.classList)
