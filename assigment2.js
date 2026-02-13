const prompt = require("prompt-sync")();
let width = prompt("Enter the width of the rectangle:");  
let length =prompt("Enter the length of the rectangle:");

Area = width * length;   
console.log("The area of the rectangle is: " + Area);  