'use strict';
const menuArea = document.querySelector('.menu-box-items');
const btnHamburger = document.querySelector('.btn-hamburger'); 
const btnClose = document.querySelector('.btn-close'); 

function clickHamburger(e) {
    
    if (e.target.innerText == 'menu') {
        menuArea.classList.add('is-open');
        btnClose.classList.remove('hide');
        btnHamburger.classList.add('hide');
    } else {
        menuArea.classList.remove('is-open');
        btnClose.classList.add('hide');
        btnHamburger.classList.remove('hide');
    }   
}
const hamburger = document.querySelector('nav .btn-hamburger');

hamburger.addEventListener('click', clickHamburger);

const myClose = document.querySelector('nav .btn-close');

myClose.addEventListener('click', clickHamburger);

const menuLinks = document.querySelectorAll('.menu-box-items a');

menuLinks.forEach((elem) => {
    elem.addEventListener('click', clickHamburger);
})




