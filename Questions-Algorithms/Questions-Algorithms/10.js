// Use Math Methods to convert Number to Integer.

// There are 4 common methods to round a number to an integer:

// - Math.round
// - Math.ceil
// - Math.floor
// - Math.trunc

//////////////////////////////

const PI = Math.PI;
console.log(PI); // output: 3.141592653589793

let number1 = 5.26;

//

// Math.round(x) - Returns x rounded to its nearest integer

console.log(Math.round(PI)); // output: 3
console.log(Math.round(number1)); // output: 5

//

// Math.ceil(x) - Returns x rounded up to its nearest integer

console.log(Math.ceil(PI)); // output: 4
console.log(Math.ceil(number1)); // output: 6

//

// Math.floor(x) - Returns x rounded down to its nearest integer

console.log(Math.floor(PI)); // output: 3
console.log(Math.floor(number1)); // output: 5

//

// Math.trunc(x) - Returns the integer part of x (new in ES6)

console.log(Math.trunc(PI)); // output: 3
console.log(Math.trunc(number1)); // output: 5
