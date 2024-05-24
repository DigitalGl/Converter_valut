

//Пример использования
// let message = "Привет, фрилансер!";

// if (2 > 1) {
//     //код выполняется только если
//     //выражение в скобках вернет true
//     console.log(message);
// }




// //Пример использования
// let message = "Привет, фрилансер!";

// let first = 5;
// let second = 10;

// if (first === second) {
//     //код выполняется только если
//      //выражение в скобках вернет true
//     console.log(message);
// }





// //Пример использования
// let message = "Привет, фрилансер!";

// //Более сложные условия
// if (2 + 1 === 3 && "1" === 1 || 10 > 5 && 10 === 1) {
//     //код выполняется только если
//     //выражение в скобках вернет true
//     console.log(message);
// }





// //Пример использования
// let message = "Привет, фрилансер!";

// //Преобразование типов
// if ("") {
//     //код выполняется только если
//     //выражение в скобках вернет true
//     console.log(message);
// }





// //Пример использования
// let message = "Привет, фрилансер!";


// //Более короткая запись 
// //код выполняется только если
// //выражение в скобках вернет true
// if (2 > 1) console.log(message);










//Блоки else else if
// let message = "Привет, мир!";
// let number = 5;

// if (number > 10) {
//     console.log(message);
// } else {
//     console.log('Условие не выполнено :(');
// }







// //Блоки else else if
// let message = "Привет, мир!";
// let number = 50;

// if (number > 50) {
//     console.log('5 больше 50');
// } else if (number > 30) {
//     console.log('5 больше 30');
// } else if (number > 10) {
//     console.log('5 больше 10');
// } else if (number > 1) {
//     console.log('5 больше 1');
// } else {
//     console.log('Условие не выполнено :(');
// }






// //Условный оператор "?"
// let message = "Привет";


// // if ( 5 > 1) {
// //     messageEnd = ", Вася!";
// // } else {
// //     messageEnd = ", Оля!";
// // }

// let messageEnd = (5 > 10) ? ", Вася!" : ", Оля!";

// message += messageEnd;
// console.log(message);






// //Условный оператор "?"
// let message = "Привет";
// let messageEnd;

// if (5 > 50) {
//     messageEnd = ", Вася!";
// } else if (5 > 30) {
//     messageEnd = ", Оля!";
// } else if ( 5 > 10) {
//     messageEnd = ", Миша!";
// } else if (5 > 1) {
//     messageEnd = ", Андрей!";
// } else {
//     messageEnd = ", Иннокентий!";
// }

// messageEnd = 5 > 10 ? ", Вася!" :
//     5 > 30 ? ", Оля!" :
//         5 > 10 ? ", Миша!" :
//             5 > 15 ? ", Андрей!" : ", Иннокентий!"

// message += messageEnd;
// console.log(message);









//Домашка


// //1 ложь
// if (1 === "1") {
//     console.log('Истина!');
// } else {
//     console.log('Ложь!');
// }


// // //2 ложь
// if (5 === "5") {
//     console.log("Истина!");
// } else {
//     console.log('Ложь!');
// }
































class CustomArray extends Array {
    customPush(newElement) {
        this
        console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
    }
}

const myCostomArray = new CustomArray(10, 3, 7, 5)
myCostomArray.customPush(27)

