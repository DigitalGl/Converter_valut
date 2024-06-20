


const timeID = setInterval(function () {
    console.log('setInterval!');
}, 1000);



setTimeout(function () {
    clearInterval(timeID)
}, 10000);












// TO-Do




    // Создаем тег li через разметку
    // const li = `<li>${taskText}</li>`;

    // Добовляем разметку на страницу
    // todoList.insertAdjacentHTML('beforeend', li);






    const todoList = document.querySelector('#todo-list');
    const todoForm = document.querySelector('#todo-form');
    const todoInput = document.querySelector('#todo-input');
    
    
    todoForm.addEventListener('submit', formHandler);
    
    
    
    function formHandler(event) {
        event.preventDefault();
    
        // Получаем название задачи из поля ввода
        const taskText = todoInput.value;
    
    
        // Создаем тег li с помощью создания элемента 
        const newTask = document.createElement('li');
        newTask.innerText = taskText;
    
    
        
        // Создаем кнопку удалить 
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('role', 'button');
        deleteBtn.innerText = 'Удалить';
        deleteBtn.style['margin-left'] = '15px';
        newTask.append(deleteBtn);
    
    
        // Добовляем событие по клику 
        deleteBtn.addEventListener('click', function() {
            this.closest('li').remove();
        });
    
    
        // Добовляем элемент на страницу
        todoList.append(newTask);
    
    
        // Очищаем поле ввода
        todoInput.value = '';
    
        // Фокус на поле ввода
        todoInput.focus();
    }