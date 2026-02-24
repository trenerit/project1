'use strict';
const menuArea = document.querySelector('.menu-box-items');
const btnHamburger = document.querySelector('.btn-hamburger'); 
const btnClose = document.querySelector('.btn-close'); 

function clickHamburger(e) {
    
    if (e.target.innerText == 'menu') {
        menuArea.classList.remove('hide');
        btnClose.classList.remove('hide');
        btnHamburger.classList.add('hide');
    } else {
        menuArea.classList.add('hide');
        btnClose.classList.add('hide');
        btnHamburger.classList.remove('hide');
    }   
}
const hamburger = document.querySelector('nav .btn-hamburger');

hamburger.addEventListener('click', clickHamburger);

const myClose = document.querySelector('nav .btn-close');

myClose.addEventListener('click', clickHamburger);



