// Declaration of variables and get user inputs
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter a second number:");
let op = prompt("Enter an arithmetic operator:");
let result;

// Check user inputs are correct
console.log(num1);
console.log(num2);
console.log(op);

// Make sure that any numerical characters entered by the user are read as numbers in order to do calculations
num1 = parseInt(num1);
num2 = parseInt(num2);

// Check what arithmetic operator was entered by the user and perform different calculations based on the input 
if (op === "+" || op === "-" || op === "*" || op === "/") {
  if (op === "+") {
    result = num1 + num2;
    console.log("The result of the calculation is " + result);
  } else if (op === "-") {
    result = num1 - num2;
    console.log("The result of the calculation is " + result);
  } else if (op === "*") {
    result = num1 * num2;
    console.log("The result of the calculation is " + result);
  } else if (op === "/") {
    result = num1 / num2;
    console.log("The result of the calculation is " + result);
  }
} else {
    console.log("Invalid operator, refresh screen and enter everything again");
} 
