
// Фнукция которая генерирует другие функции
// Функция - конструктор других функций

// function createGreeting() {
//     const message = 'hello';

//     function greeting(str) {
//         console.log(message, str);
//     }

//     return greeting
// }

// const helloWorld = createGreeting();

// helloWorld("word")



// function addByx(num) {
//     return function(x) {
//         return num + x;
//     }
// }

// const addByTwo = addByx(2);
// const addByFive = addByx(5);

// console.log(addByTwo(3)) // 5
// console.log(addByTwo(6)) // 8

// console.log(addByFive(6)) // 11
// console.log(addByFive(2)) // 7

const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()








function once(fn) {
    let  hasBeenValled = false 
    let cachedResult;

    return function(...args) {
        if (hasBeenValled) return cachedResult;

        hasBeenValled = true;
        cachedResult = fn(...args);

        return cachedResult;
    }
}

const dfggg = once(num => num + 2);

console.log(addByTwoOnce(2));
console.log(addByTwoOnce(5));
console.log(addByTwoOnce(7));




class CustomArray extends Array {
    customPush(newElement) {
        console.log(this.length)
        this[this.length] = newElement
        console.log(this.length)
        console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
    }
}

const myCostomArray = new CustomArray(10, 3, 7, 5)
myCostomArray.customPush(25)

console.log(myCostomArray);

myCostomArray.push(30)

console.log(myCostomArray);