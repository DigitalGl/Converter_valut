
// Задача что-бы сделать квадрат из звездочек в циклах
// **********
// *        *
// *        *
// *        *
// **********

let horizCount = 10;
let vertCount = 5;
let star = '*';
let whilespase = ' ';

for (let i = 0; i < vertCount; i++) {
    let str = '';

    if (i == 0 || i == vertCount - 1) {
        for (let j = 0; j < horizCount; ++j) {
            str += star;
        }
    } else {
        str = star;
        for (let j = 0; j < horizCount - 2; ++j) {
            str += whilespase;
        }
        str += star;
    }

    console.log(str);
}










// Задача на циклы нарисовать треугольник 


let lines = 7;
let str = ' ';
// let star = '*';
for (let i = 0; i < lines; i++) {
    str += star;
    console.log(str);
}





let i = 0;
j = 0;

let max = 15;
let spase = '';
star = '';

while (i < max) {
    spase = '';
    star = '';
    for (j = 0; j < max - i; j++) spase += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(spase + star);
    i++
}




for (let i = 0; i < 6; i++) {
    console.log(i);
}


let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k);
    
}


let sum = 0;
let p = 0;
while (p <= 3) {
    sum = sum + p;
    p++
}

console.log('sum = ' + sum);


