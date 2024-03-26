


// "use strict"
// if (2 > 1) {
//     function getSum() {
//         let numOne, numTwo;
    
//         function getNumOne() {
//             numOne = 1;
//         }
//         function getNumTwo() {
//             numTwo = 2;
//         }
//         getNumOne();
//         getNumTwo();
    
//         let numSumm = numOne + numTwo;
//         console.log(numSumm);
//     }
// }


// getSum();

// let message = "Сообщение 1"

// function showMessage() {
//     let message = "Сообщение 2";
//     console.log(message);
// }


// console.log(message);

// showMessage();




// let globalVar = "Я Глобальная переменная";

// function getSumm() {
//     let numOne, numTwo;

//     function getNumOne() {
//         numOne = 1;
//         console.log(globalVar);
//     }
//     function getNumTwo() {
//         numTwo = 2;
//     }
//     getNumOne();
//     getNumTwo();

//     let numSumm = numOne + numTwo;
//     console.log(globalVar);
// }

// console.log(globalVar);

// getSumm();














// function calcSumm(numOne, numTwo) {
//     console.log(`Переменная numOne:${numOne}`);
//     console.log(`Переменная numOne:${numTwo}`);

//     let numSumm = numOne + numTwo;

//     console.log(`Сумма:${numSumm}`);
// }

// calcSumm(1, 2);











//Функции-колбеки

// function calcSumm(numOne, numTwo, more, less) {
//     let numSumm = numOne + numTwo;

//     if (numSumm > 3) {
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log('Больше чем 3');
// }
// function showLessMessage() {
//     console.log('Меньше чем 3');
// }
// calcSumm(1, 5, showMoreMessage, showLessMessage);















// //Возврат результата

// function calcSumm(numOne, numTwo) {
    
//     let numSumm = numOne + numTwo;

//     // Возврат
//     return numSumm;

//     //Дальше код не выполняется

// }
// let funcRezult = calcSumm(1, 2);

// console.log(`Сумма: ${funcRezult}`);













// Рекурсия

// function calcSumm(numOne, numTwo) {
//     let result = 1;
//     //умножаем result на numOne numTwo раз в цикле
//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }
//     return result;
// }
// console.log(calcSumm(2, 3));


// function calcSumm(numOne, numTwo) {
//     if ( numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }
// console.log(calcSumm(2, 3));









// Функциональное выражение (function expression)

// let showMessage = function () {
//     console.log('Привет!');
// }

// showMessage();






// function getSumm() {
//     let sum = 1 + 2;
//     console.log(sum);
// }

// let someVar = getSumm;

// someVar();
// getSumm();







// //функции стрелки (arrow function)

// //Функциональное выражение (function expression)
// let имч переменной = function (параметр, ...параметр) {
//     return выражение;
// };

// //Стрелочная функция (arrow function)
// let имя переменной = (параметр, ...параметр) => выражение 




// function showMessage(text, name) {
//     console.log(`${text}, ${name}!`);
//     setTimeout(showMessage, 3000, text, name);
// }

// setTimeout(showMessage, 3000, 'Привет', 'Вася');








//Выводить число в консоль число при этом увеличивая его на еденицу

// function showNumber(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumber, 1000, ++num);
//     if (num === 6) {
//         clearTimeout(timeId);
//     }
// }

// setTimeout(showNumber, 1000, 1);


// let result = 0;
// function showNumber(num) {
//     result += num;
//     console.log(result);
//     if (result === 5) {
//         clearInterval(timeId);
//     }
// }

// let timeId = setInterval(showNumber, 1000, 1)


















// //Применение функций

// //Функция соеденения строк
// function createMessage(text, name) {
//     return `${text}, ${name}!`;
// }

// //Функция вывода в консоль
// function showMessage(message) {
//     console.log(message);
// }

// //Обьединяющая функция, вызывает обе функции
// function initMessage(text, name) {
//     showMessage(createMessage(text, name));
// }

// initMessage('Привет', 'Фрилансер');












//ДОМАШКА

// 1. Изучить теорию
// 2. Решить задачи:


// Задача №1
// Кто попадет в консоль первым Вася или Коля?
// function showName() {
// 	console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');

// // Задача №2
// // Верно ли вызвана функция
// showMessage();
// function showMessage() {
// 	console.log('Сообщение');
// }
// // Задача №3
// // Верно ли вызвана функция
// showMessage();
// let showMessage = function () {
// 	console.log('Сообщение');
// }
// // Задача №4
// // Как решить проблему?
// 'use strict'
// if (2 > 1) {
// 	function showMessage () {
// 		console.log('Сообщение');
// 	}
// }
// showMessage(); // Error (showMessage is not defined)

//Решение
let showMessage

if (2 > 1) {
	showMessage = function () {
		console.log('Сообщение');
	}
}
showMessage();


























