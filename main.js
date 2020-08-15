const burger = document.querySelector('.burger');
const showburger = document.querySelector('.burger__image');
const close = document.querySelector('.close');
const ul = document.querySelector('.list_items')

burger.addEventListener('click', function(){
    ul.classList.toggle('toggle');
    showburger.classList.toggle('toggle');
    close.classList.toggle('toggle');
})