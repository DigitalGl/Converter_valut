const input = prompt('Введите число')
const number = Number(input)


if (!isNaN(number) && number >= 0 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${i*number}`)
    }
}



const array = [1, 2, 3, 4, 5]

console.log(array)





const item = {
    title: 'Phone',
    fullPrice: 100,
    calculatePrice(discountPercent = 0) {
        console.log(this.fullPrice - discountPercent/100 * this.fullPrice);
    }
}

item.calculatePrice()




function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

let addTwo = makeAdder(2);
let addFive = makeAdder(5);

console.log(addTwo(3)); // выведет 5
console.log(addFive(7))





const arr1 = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}






function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}