// Parameters
function greet(name) {
  console.log("Hello " + name);
}
greet("Dhanu");

// Return Values
function add(a, b) {
  return a + b;
}
let result = add(10, 20);
console.log(result);

// Scope
function display() {
  let message = "Hello Dhanu";
  console.log(message);
}
display();

// Default Parameters
function greetUser(name = "Dhanu") {
  console.log("Hello " + name);
}
greetUser();

// Rest Parameters
function showNumbers(...numbers) {
  console.log(numbers);
}
showNumbers(10, 20, 30, 40);

// Anonymous Functions
let anonymousGreet = function () {
  console.log("Hello Dhanu");
};
anonymousGreet();

// Arrow Functions
const arrowAdd = (a, b) => a + b;
console.log(arrowAdd(10, 20));

// Function Expressions
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(5, 4));

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Executed Immediately - Dhanu");
})();

// Constructor Functions
function Student(name, age) {
  this.name = name;
  this.age = age;
}
const student1 = new Student("Dhanu", 19);
console.log(student1);

// Factorial Function
function factorial(n) {
  let resultFact = 1;
  for (let i = 1; i <= n; i++) {
    resultFact *= i;
  }
  return resultFact;
}
console.log(factorial(5));