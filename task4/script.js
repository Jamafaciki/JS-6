const link = document.querySelector('a');

link.addEventListener('click', function(event){
    this.textContent = prompt('Введите текст ссылки');
    event.preventDefault();
})

