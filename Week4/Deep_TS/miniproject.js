"use strict";
let price;
price = 500;
console.log("Price:", price);
price = "500";
console.log("Price:", price);
const product1 = {
    name: "Laptop",
    price: 50000
};
const product2 = {
    name: "Mobile",
    price: 20000,
    brand: "Samsung"
};
console.log(product1);
console.log(product2);
function printValue(value) {
    return value;
}
console.log(printValue("TypeScript"));
console.log(printValue(100));
console.log(printValue(true));
const emp1 = {
    name: "Dhanushri"
};
console.log(emp1);
const emp2 = {
    id: 1,
    name: "Sibi",
    department: "IT"
};
console.log(emp2);
const emp3 = {
    id: 2,
    name: "Rahul"
};
console.log(emp3);
const studentMarks = {
    Maths: 95,
    English: 90,
    Science: 98
};
console.log(studentMarks);
function displayUser(name, city) {
    console.log("Name:", name);
    if (city) {
        console.log("City:", city);
    }
}
displayUser("Dhanushri");
displayUser("Sibi", "Chennai");
