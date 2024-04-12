function isElementInArray(searchElement, inputArray) {
    if (typeof searchElement !== 'object') {
        return inputArray.includes(searchElement)
    }

    return inputArray
        .map((element) => JSON.stringify(element))
        .includes(JSON.stringify(searchElement))

}


const tags = [
    ['javascript', 'es6'],
    ['css', 'flexbox'],
    ['html', 'web-browser'],
]

const fruits = [
    { title: 'Orange', quantity: 10 },
    { title: 'Banana', quantity: 5 },
    { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true