/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  sum = number1 + number2;
  return sum;
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
  addend1 = parseInt(document.querySelector("#addend1").value);
  addend2 = parseInt(document.querySelector("#addend2").value);
  sum = add(addend1, addend2);
  document.getElementById("sum").value = sum;
}

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
addButton = document.getElementById("addNumbers");
addButton.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(minuend, subtrahend) {
  difference = minuend - subtrahend;
  return difference;
}

function subtractNumbers() {
  minuend = parseInt(document.querySelector("#minuend").value);
  subtrahend = parseInt(document.querySelector("#subtrahend").value);
  difference = subtract(minuend, subtrahend);
  document.getElementById("difference").value = difference;
}

subtractButton = document.getElementById("subtractNumbers");
subtractButton.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (factor1, factor2) => {
  product = factor1 * factor2;
  return product;
};

const multiplyNumbers = () => {
  factor1 = parseInt(document.querySelector("#factor1").value);
  factor2 = parseInt(document.querySelector("#factor2").value);
  product = multiply(factor1, factor2);
  document.getElementById("product").value = product;
};

multiplyButton = document.getElementById("multiplyNumbers");
multiplyButton.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (dividend, divisor) => {
  quotient = dividend / divisor;
  return quotient;
};

const divideNumbers = () => {
  dividend = parseInt(document.querySelector("#dividend").value);
  divisor = parseInt(document.querySelector("#divisor").value);
  quotient = divide(dividend, divisor);
  document.getElementById("quotient").value = quotient;
};

divideButton = document.getElementById("divideNumbers");
divideButton.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
console.log(currentDate);
// Step 2: Declare a variable to hold the current year
currentYear = currentDate.getFullYear();
console.log(currentYear);
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let arr = [];
for (let i = 1; i > 26; i++) {
  arr.push(i);
}

for (const number in numbers) {
    number + 1
}

console.log(arr);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = arr;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operator) )
const oddNumbers = arr.filter((num) => num % 2 === 1);
console.log(oddNumbers);
document.getElementById("odds").innerHTML = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers);
document.getElementById("evens").innerHTML = evenNumbers;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sumOfArray)
document.getElementById("sumOfArray").innerHTML = sumOfArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const mappedArray = arr.map((num) => num * 2)
console.log(mappedArray)
document.getElementById("multiplied").innerHTML = mappedArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = mappedArray.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sumOfMultiplied)
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;



