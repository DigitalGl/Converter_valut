

//Синтаксис

const { log } = require("console");

// const { log } = require("console");

//Создание обьектов

// let userInfo = new Object(); //Синтаксис "конструктор обьекта"
// let userInfo1 = {}; //синтаксис "литерал обьекта"


// let userInfo = {
//     name:"Вася", //Свойство обьекта
//     age: 30, //Последняя (висячая) запятая
//     "likes javascript": true,
// };

// console.log(userInfo.name);
// console.log(userInfo['name']);
// console.log(userInfo["likes javascript"]);








//Вычисляем имя 

// let userInfo = {
//     let: "Вася",
//     for: 30,
// };


// console.log(userInfo.let);
// console.log(userInfo.for);






// let userInfo = {
//     0: "Вася", //0 тоже самое что "0"
// }
// console.log(userInfo[0]);
// console.log(userInfo["0"]);





//Создаем символ id с описанием (именем) "id"
// let id = Symbol("id");
// let userInfo = {
//     name: "Вася",
//     age: 30,
//     [id]: "Некое значение"
// };
// console.log(userInfo);







// let userInfo = {
//     name: "",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     }
// }

// console.log(userInfo);
// console.log(userInfo.address);
// console.log(userInfo.address.city);



// Свойства из переменной

// function makeUserInfo(name, age) {
//     return {
//         name, //тоже самое что и name: name, 
//         age, // тоже самое что и age: age,
//         "likes javascript": true,
//         // ...Другие свойства
//     }
// }

// let user = makeUserInfo("вася", 30);
// console.log(user);







// Object.assign(куда(обьект), что(свойство #1), что(свойтсво #2), ...);

// let userInfo = {
//     name: "Вася",
//     age: 30,
// }

// Object.assign(userInfo, { [ 'likes javascript']: true, city: "Uzhhorod"});
// console.log(userInfo);








// Оператор "in"

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     }
// }

// if ("name" in userInfo) {
//     console.log(userInfo.name);
// }










//Пример
// Цикл for in


// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     }
// }

// // for (переменная in объект) {
// //     выполняемый код
// //  }

// for ( let key in userInfo) {
//     //ключи 
//     console.log(key); //name, age, address
//     //значения ключей
//     console.log(userInfo[key]); //Вася, 30, Object {}
// }

// for (let key in userInfo.address) {
//     //ключи
//     console.log(key); // city, street
//     //значения ключей
//     console.log(userInfo.address[key]); // Uzhhorod, Freedom
// }









// Использование "this"

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     },
//     showInfo() {
//         function show() {
//             console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
//         }
//         // у стрелочной функции нет своего "this" использукется
//         // значения из внешнего метода userInfo.showInfo()
//         // let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);

//         show();
//     }
// }

// userInfo.showInfo();









// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     },
//     showInfo() {
//         console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
//         // console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
//     }
// }
// userInfo.showInfo();

// let user = userInfo;
// userInfo = null;
// user.showInfo();







// Функция - конструктор

/*
Обычный синтаксис создания обьекта {... } позволяет создать 
только один обьект. Но зачастую нам нужно создать множество 
аднотипных обьектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new"
*/

/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1)Имя функции - конструктора должно начинаться с большой буквы.
2)Функция - конструктор должна вызываться при помощи оператора "new"
*/

function UserInfo(name) {

    // this = {}; Создается пустой обьект (неявно)

    this.name = name;
    this.age = 30;

    // return this; Возврощается обьект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));

























