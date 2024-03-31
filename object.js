

//Синтаксис

const { log } = require("console");

//Создание обьектов

// let userInfo = new Object(); //Синтаксис "конструктор обьекта"
// let userInfo1 = {}; //синтаксис "литерал обьекта"


let userInfo = {
    name:"Вася", //Свойство обьекта
    age: 30, //Последняя (висячая) запятая
    "likes javascript": true,
};

console.log(userInfo.name);
console.log(userInfo["likes javascript"]);


