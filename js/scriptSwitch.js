// Declaration of constants, variables and get user inputs
let num1 = prompt("Enter first number:");
let op = prompt("Enter an arithmetic operator:");
let num2 = prompt("Enter a second number:");
let result;

// Check user inputs are correct
console.log(num1);
console.log(op);
console.log(num2);

// Make sure that any numerical characters entered by the user are read as numbers in order to do calculations
num1 = parseInt(num1);
num2 = parseInt(num2);

// Check what arithmetic operator was entered by the user and perform different calculations based on the input by using a switch statement
switch (op) {
    case '+':
        result = num1 + num2;
        console.log("The result of the calculation is " + result);
        alert("The result of the calculation is " + result);
        break;
    case '-':
        result = num1 - num2;
        console.log("The result of the calculation is " + result);
        alert("The result of the calculation is " + result);
        break;
    case '*':
        result = num1 * num2;
        console.log("The result of the calculation is " + result);
        alert("The result of the calculation is " + result);
        break;
    case '/':
        result = num1 / num2;
        console.log("The result of the calculation is " + result);
        break;
    default: 
        console.log("Invalid operator, refresh screen and enter everything again");
        alert("Looks like you entered an invalid operator. Please refresh the screen and next time please enter either + OR - OR * or /");
        break;
}
