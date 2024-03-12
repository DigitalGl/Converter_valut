
// Фнукция которая генерирует другие функции
// Функция - конструктор других функций

// function createGreeting() {
//     const message = 'hello';

//     function greeting(str) {
//         console.log(message, str);
//     }

//     return greeting
// }

// const helloWorld = createGreeting();

// helloWorld("word")



// function addByx(num) {
//     return function(x) {
//         return num + x;
//     }
// }

// const addByTwo = addByx(2);
// const addByFive = addByx(5);

// console.log(addByTwo(3)) // 5
// console.log(addByTwo(6)) // 8

// console.log(addByFive(6)) // 11
// console.log(addByFive(2)) // 7






// function once(fn) {
//     let  hasBeenValled = false 
//     let cachedResult;

//     return function(...args) {
//         if (hasBeenValled) return cachedResult;

//         hasBeenValled = true;
//         cachedResult = fn(...args);

//         return cachedResult;
//     }
// }

// const addByTwoOnce = once(num => num + 2);

// console.log(addByTwoOnce(2));
// console.log(addByTwoOnce(5));
// console.log(addByTwoOnce(7));


