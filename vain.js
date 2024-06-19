


const timeID = setInterval(function () {
    console.log('setInterval!');
}, 1000);



setTimeout(function () {
    clearInterval(timeID)
}, 10000);