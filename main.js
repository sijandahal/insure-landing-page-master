const burger = document.querySelector('.burger');
const ul = document.querySelector('.list_items')

burger.addEventListener('click', function(){
    ul.classList.toggle('toggle');
})