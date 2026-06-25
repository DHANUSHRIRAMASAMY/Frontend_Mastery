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