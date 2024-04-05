

let arr = ['Олеся', 'Ян', 'Аня', 'Влад', 'Ира']


// let arr = [4, 6, 1, 12, 9, 8];

let result = arr.sort(function(a, b) {
    if (a < b) return -1;
})

console.log(result);

