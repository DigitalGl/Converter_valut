

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





// Изменение обьектов
let userInfo = {
    name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
    city: "Uzhhorod",
    street: "Freedom",
};

console.log(userInfo);







