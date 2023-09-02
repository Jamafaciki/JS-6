let log = document.querySelector('#consoleLog');
log.addEventListener('click', () => {
alert('Метод для вывода сообщения в веб-консоль.')
});

let getalert = document.querySelector('#alert');
getalert.addEventListener('click', () => {
alert('Метод для вывода всплывающего окна.')
});

let getprompt = document.querySelector('#prompt');
getprompt.addEventListener('click', () => {
alert('Метод для вывода всплывающего окна с возможностью ввода данных.')
});

