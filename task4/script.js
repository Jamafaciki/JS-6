const link = document.querySelector('a');

link.addEventListener('click', function(event){
     let textlink = prompt('Введите текст ссылки');
     textlink = trim(textlink);
     if(textlink == ''){
        textlink = 'Введите текст ссылки';
     }
     this.textContent = textlink;
    event.preventDefault();
})

