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