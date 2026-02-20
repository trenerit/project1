'use strict';

// function fn1() {
//     console.log('sdfwefmnlksxmlk09809ujlksjelkqj');
// }

// let btnCta = document.querySelector('.box a');

// btnCta.addEventListener('click', () => {
//     alert('ksjahfiuskhm,xnk');
// });

// console.log(btnCta);

let form1 = document.getElementById('form1');

form1.addEventListener('submit', function(event) {
    
    event.preventDefault();
    let num1 =document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(num1 * num2);

})

// function calc(event) {
//     event.preventDefault();
//     let num1 =document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     console.log(num1 * num2);
// }



