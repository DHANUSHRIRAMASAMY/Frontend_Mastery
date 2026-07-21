console.log("Hello Dhanu");

//variables
const name ="Dhanu";
let age = 13;
console.log(name);
console.log(age);

//function
function greet(name){
    return "Hello " + name ;
}
console.log(greet("Dhanu"));

// modules
const add = require("./math");
console.log(add(3,5));

//function
const fs = require("fs");
fs.readFile("sample.txt","utf8",(err,data) =>{
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
});
