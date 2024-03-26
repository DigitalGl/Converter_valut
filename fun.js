


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

function calcSumm(numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;

    if (numSumm > 3) {
        more();
    } else {
        less();
    }
}

function showMoreMessage() {
    console.log('Больше чем 3');
}
function showLessMessage() {
    console.log('Меньше чем 3');
}
calcSumm(1, 5, showMoreMessage, showLessMessage);










