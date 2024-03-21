

let arr = [
    {
        name: 'Оля',
        age: 22
    },
    {
        name: 'Павел',
        age: 32
    },
    {
        name: 'Алекс',
        age: 19
    },
    {
        name: 'Борис',
        age: 15
    },
]

const sortUsers = (arr, prop, dir = false) => arr.sort((a,b) => !dir ? a[prop] < b[prop] : a[prop] > b[prop] ? -1 : 1);



console.log(sortUsers(arr, 'age', true));








