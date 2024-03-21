

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

let result = arr.sort(function(a,b){
    if (a > b) return -1;
});

console.log(result);








