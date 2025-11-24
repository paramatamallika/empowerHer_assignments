// a) isEven
const isEven = n => n % 2 === 0;
console.log(isEven(4)); // true

// b) Ternary for marks
let marks = 20; 
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result); // Fail

// c) greet
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);
greet();
greet("Mallika");

