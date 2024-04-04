
// // Создание массива







// let arr = new Array(); //Используется редко
// let arr1 = [];









// // Значение массива

// let arrOne = [
//     'Ваня',
//     'Иштван',
//     'Оля', //Висячая запятая
// ];
// // или

// let arrOne1 = ['Ваня','Иштван','Оля',];











// //Различные типы значений 
// let arrTwo = [
//     "Коля",
//     {
//         type: "JS",
//         age: 36
//     },
//     true,
//     function () {
//         console.log('Привет я Коля');
//     }
// ];

// // Многомерные массивы
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];










// // Получение значений

// let arrOne = [
//     'Ваня', // 0 позиция
//     'Иштван', // 1 позиция
//     'Оля', // 2 позиция
// ];

// console.log(arrOne[1]);
// console.log(arrOne[5]); //undefined









// let arrTwo = [
//     "Коля",
//     {
//         type: "JS",
//         age: 36
//     },
//     true,
//     function () {
//         console.log('Привет, я Коля');
//     }
// ];

// console.log(arrTwo);
// console.log(arrTwo[0])
// console.log(arrTwo[1].type);
// console.log(arrTwo[2]);
// arrTwo[3]();



// // многомерные массивы
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix);
// console.log(matrix[0][1]);










// //Длина массива. Свойства length

// let arrOne = ['Ваня','Иштван','Оля',];
// console.log(arrOne);
// console.log(arrOne.length);











// // Доступ к массиву 

// /*
// Напоминаю что массив является обьектом и, следовательно,
// ведет себя как обьект. Например, копируется по ссылке:
// */

// let arr = ['Ваня','Иштван','Оля',];
// console.log(arr);

// let arrNew = arr;

// arrNew.length = 2;

// console.log(arr);








// // Изменение значений 
// let arr = ['Ваня','Иштван','Оля',];

// // Меняем существубщее
// arr[0] = 'Коля';
// console.log(arr);

// // Добовляем новое
// arr[3] = 'Ваня';
// console.log(arr);






// // Метод push - добовляет элемент в конец массива

// let arr = ["Ваня", "Иштван", "Оля",];
// arr.push("Вася");
// console.log(arr);

// arr.push("Дима", "Катя");
// console.log(arr);









// // Метод shift - удаляет элемент в начале,
// //  так что второй элемент становится первым.
// let arr = ["Ваня", "Иштван", "Оля"];
// arr.shift();
// console.log(arr);









// // Метод pop - удаляет последний элемент
// let arr = ["Ваня", "Иштван", "Оля"];
// arr.pop();
// console.log(arr);







// // Метод unshift - добовляет элемент в начало массива 
// let arr = ["Ваня", "Иштван", "Оля"];
// arr.unshift("Вася");
// console.log(arr);

// arr.unshift("Дима", "Катя");
// console.log(arr);







// // Удаление/добавление/изменение конкретных элементов

// let arr = ["Ваня", "Иштван", "Оля"];

// delete arr[1];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);













