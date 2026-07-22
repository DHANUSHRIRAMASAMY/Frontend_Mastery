let vehicle_num = ["TN33AB1234","TN33CD5678","TN33EF9012","TN33GH3456", "TN33IJ7890"]
for (let i = 0; i < vehicle_num.length; i++) {
    console.log(vehicle_num[i]);
}
let count =0;
vehicle_num.forEach(() =>
{
    count++;
});
console.log("total vehicles : " + count);

const vehicles = new Map();

vehicles.set("TN33AB1234", "Car");
vehicles.set("TN33CD5678", "Bike");
vehicles.set("TN33EF9012", "Car");
vehicles.set("TN33GH3456", "Bus");
vehicles.set("TN33IJ7890", "Bike");

for(let [number, name] of vehicles) {
    console.log(number, name);
}
let j=0;
let carCount=0;
const vehicleTypes = ["Car", "Bike", "Car", "Bus", "Bike"];
while(j < vehicleTypes.length){
    if(vehicleTypes[j] === "Car"){
    carCount++;
}
j++;
}
let vehicleType = "Car";
switch(vehicleType){
    case "Car":
        console.log("Parking Fee: 100");
        break;

    case "Bike":
        console.log("Parking Fee: 50");
        break;

    case "Bus":
        console.log("Parking Fee: 150");
        break;

    default:
        console.log("Invalid Vehicle Type");
}

if(count > 5){
    console.log("Parking Area is Busy");
}
else{
    console.log("Parking Area is Available");   
}


// # JavaScript Loops and Conditional Statements

// ### Conditional Statements

// * **if statement** – Executes a block of code when a condition is true.
// * **else statement** – Executes a block of code when the condition is false.
// * **else if statement** – Tests multiple conditions one after another.
// * **switch statement** – Selects and executes code based on different cases.
// * **ternary operator** – A short form of if-else written in a single line.
// * **Nested if...else** – Uses an if-else statement inside another if-else statement.

// ### Loops

// * **for loop** – Repeats a block of code for a specific number of iterations.
// * **while loop** – Repeats a block of code as long as a condition remains true.
// * **do...while loop** – Executes a block of code at least once before checking the condition.
// * **for...in loop** – Iterates through the keys or properties of an object.
// * **for...of loop** – Iterates through the values of iterable objects such as arrays and strings.
// * **forEach()** – Executes a function once for each element in an array.

// ### Map

// * **Map** – A collection that stores data in key-value pairs and maintains the insertion order of elements.

// ## Learning Outcomes

// * Learned how to control program flow using conditional statements.
// * Understood different looping techniques for iterating over data.
// * Practiced working with arrays, objects, and maps.
// * Improved problem-solving skills using JavaScript fundamentals.
// * Gained hands-on experience with real-world programming scenarios.
