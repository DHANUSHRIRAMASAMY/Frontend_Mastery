"use strict";
let username = "Dhanu";
let age = 19;
let isstudent = true;
console.log(username);
console.log(age);
console.log(isstudent);
let employee = "Rahul";
let salary = 35000;
function employeeDetails(employee, salary) {
    return `${employee} earns ₹${salary}`;
}
console.log(employeeDetails(employee, salary));
let product = "Laptop";
let price = 50000;
let inStock = true;
function productInfo(product, price, inStock) {
    return `${product} costs ₹${price}. Available: ${inStock}`;
}
console.log(productInfo(product, price, inStock));
let student = "Dhanu";
let mark = 95;
let passed = true;
function studentInfo(student, mark, passed) {
    return `${student} scored ${mark}. Passed: ${passed}`;
}
console.log(studentInfo(student, mark, passed));
