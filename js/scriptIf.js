// Declaration of variables and get user inputs
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

// Check what arithmetic operator was entered by the user and perform different calculations based on the input 
if (op === "+" || op === "-" || op === "*" || op === "/") {
  if (op === "+") {
    result = num1 + num2;
    console.log("The result of the calculation is " + result);
    alert("The result of the calculation is " + result);
  } else if (op === "-") {
    result = num1 - num2;
    console.log("The result of the calculation is " + result);
    alert("The result of the calculation is " + result);
  } else if (op === "*") {
    result = num1 * num2;
    console.log("The result of the calculation is " + result);
    alert("The result of the calculation is " + result);
  } else if (op === "/") {
    result = num1 / num2;
    console.log("The result of the calculation is " + result);
    alert("The result of the calculation is " + result);
  }
} else {
    console.log("Invalid operator, refresh screen and enter everything again");
    alert("Looks like you entered an invalid operator. Please refresh the screen and next time please enter either + OR - OR * or /");
} 

//Playing around with a while loop to add validation functionality to the user input prompts

/* const userStart = document.querySelector('.userStart');


let check1 = false;
let check2 = false;
let check3 = false;

let Num1;
let Num2;
let Operator;


function getUserInputs () {
while (check1 == false) {
  let userNum1 = prompt("Please enter your first number:");

  if (isNaN(userNum1)) {
    alert("Please enter a numerical value using the number keypad");
  } else {
    Num1 = parseInt(userNum1);
    check1 = true;
  }
}

while (check2 == false) {
  let userOperator = prompt(
    "Please enter an arithmetic operator: + (for addition) or - (for subtraction) or * (for multiplication) or / (for division)"
  );

  if (
    userOperator === "+" ||
    userOperator === "-" ||
    userOperator === "*" ||
    userOperator === "/"
  ) {
    Operator = userOperator;
    check2 = true;
  } else {
    alert("Please enter an arithmetic operator: of either +, -, * or /");
  }
}

while (check3 == false) {
  let userNum2 = prompt("Please enter your second number:");

  if (isNaN(userNum2)) {
    alert("Please enter a numerical value using the number keypad");
  } else {
    Num2 = parseInt(userNum2);
    check3 = true;
  }
}

console.log(Num1);
console.log(Operator);
console.log(Num2);



}

userStart.addEventListener('click', getUserInputs);

*/