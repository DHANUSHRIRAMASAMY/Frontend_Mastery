let username: string = "Dhanu";
let age: number = 19;
let isstudent: boolean = true;
console.log(username);
console.log(age);
console.log(isstudent);


let employee: string = "Rahul";
let salary: number = 35000;

function employeeDetails(employee: string, salary: number): string {
    return `${employee} earns ₹${salary}`;
}

console.log(employeeDetails(employee, salary));


let product: string = "Laptop";
let price: number = 50000;
let inStock: boolean = true;

function productInfo(product: string, price: number, inStock: boolean): string {
    return `${product} costs ₹${price}. Available: ${inStock}`;
}

console.log(productInfo(product, price, inStock));


let student: string = "Dhanu";
let mark: number = 95;
let passed: boolean = true;

function studentInfo(student: string, mark: number, passed: boolean): string {
    return `${student} scored ${mark}. Passed: ${passed}`;
}

console.log(studentInfo(student, mark, passed));
