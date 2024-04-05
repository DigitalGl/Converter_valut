

const arr = ['Аня', 'Игорь', 'Марина', 'Таня', 'Олег', 'Алексей', 'Вика']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

function printArr(arr, index = 0) {
    console.log(arr[index]);
    if (index < arr.length) {
        printArr(arr, ++index)
    }
    
}


printArr(arr)