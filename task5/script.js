const button = document.querySelector('button');
let text = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');

button.addEventListener('click', function(event) {
    console.log(text.value);
    text.value = "";
    duplicateField.textContent = "";
    event.preventDefault();
})

text.addEventListener('keyup', function() {
    duplicateField.innerHTML = text.value;
})