 'use strict';
let clc;
let result;
function func() {

  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  let errorSet = [NaN,Infinity,null];
  switch(clc) {
      case '+':
        console.log(num1 + num2);
        break;   
      case '-':
        console.log(num1 - num2);
        break;    
      case '*':
        console.log(num1 * num2);
        break;    
      case '/':
        console.log(num1 / num2);
        break;
    }
  };
