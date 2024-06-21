

// =============== Callback.  Callback hell ==================


// 1.Проверить номера в отеле
// 2. Проверить билеты



function checkRooms(succses, failed) {
    setTimeout(function() {
        console.log('Проверяем номера в отеле...');
        const availableRooms = true;
        

        if (availableRooms) {
            let message = 'Номера есть!';
            succses(message);
        }else {
            let message = 'Номеров НЕТ';
            failed(message)
        }
    }, 1000)
}


function checkTickets(message){
    setTimeout(function(){
        console.log('---- function checkTikets -----');
        console.log('Ответ на предыдущем шаге:', message);

        console.log('Проверяем авиабилеты...');
        const availableTickets = true;

        if (availableTickets) {
            let message = 'Билеты есть';
            success(message);
        } else {
            let message = 'Билетов нет';
            failed(message);
        }

    }, 500)
}


checkRooms(function(messageFromCheckRooms) {
    sumbitVacation(messageFromCheckRooms)
}, function(messageFromCheckRooms){
    cancelVacation(messageFromCheckRooms)
});




function cancelVacation(message) {
    console.log('---- cancelVacation -----');
    console.log('Ответ на предыдущем шаге:', message);
    console.log('Отпуск отменяется :(');
}


function sumbitVacation(message) {
    console.log('---- sumbitVacation -----');
    console.log('Ответ на предыдущем шаге:', message);
    console.log('Едем в отпуск :)');
}





