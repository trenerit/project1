'use strict';

console.log('start');

function clickHamburger() {
    // alert('test');
    const menuArea = document.querySelector('.menu-box-items');
    menuArea.style.display = 'flex';
}

const hamburger = document.querySelector('nav .material-icons');

hamburger.addEventListener('click', clickHamburger);

// function fn1() {
//     console.log('sdfwefmnlksxmlk09809ujlksjelkqj');
// }

// let btnCta = document.querySelector('.box a');

// btnCta.addEventListener('click', () => {
//     alert('ksjahfiuskhm,xnk');
// });

// console.log(btnCta);

let form1 = document.getElementById('form1');
let resPlace = document.getElementById('result');

form1.addEventListener('submit', function(event) {
    
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    event.preventDefault();
    let res = num1 + num2;
    console.log(res);
    resPlace.innerText = res;

})

// function calc(event) {
//     event.preventDefault();
//     let num1 =document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     console.log(num1 * num2);
// }

console.log('end');

