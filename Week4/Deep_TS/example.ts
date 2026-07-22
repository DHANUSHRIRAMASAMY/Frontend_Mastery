// // Union Type
let studentId: number | string;
studentId = 101;
console.log(studentId);
studentId = "101";
console.log(studentId);
let studentId: string = "Dhanushri";
console.log(studentName);


// Optional Property
function welcome(name: string, city?: string) {
    console.log("Name:", name);
    if (city) {
        console.log("City:", city);
    }
}
welcome("Dhanu");
welcome("Sibi", "Chennai");

// Generic Fn
function printData<T, U>(first: T, second: U) {
    console.log(first);
    console.log(second);
}
printData("Dhanu", 22);
printData("Java", true);

// Partial_Utility
interface Employee {
    id: number;
    name: string;
    department: string;
}
let employee: Partial<Employee> = {
    name: "Dhanushri"
};
console.log(employee);

// Readonly Utility
interface Book {
    title: string;
}
const book: Readonly<Book> = {
    title: "TypeScript Basics"
};
console.log(book);


// Generic_Interface
interface Box<T> {
    item: T;
}
const numberBox: Box<number> = {
    item: 100
};
const stringBox: Box<string> = {
    item: "TypeScript"
};
console.log(numberBox);
console.log(stringBox);