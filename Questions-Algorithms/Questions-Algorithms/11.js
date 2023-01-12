// Create instances of Data Types using JavaScript Comparison Operators.

console.log(3 > 2); // output: true, because 3 is greater than 2
console.log(3 < 2); // output: false,  because 3 is greater than 2
console.log(2 < 3); // output: true, because 2 is less than 3
console.log(3 >= 2); // output: true, because 3 is greater than 2
console.log(2 <= 3); // output: true, because 2 is less than 3
console.log(3 == 2); // output: false, because 3 is not equal to 2
console.log(3 != 2); // output: true, because 3 is not equal to 2
console.log(3 != 3); // output: false, compare only value
console.log(3 !== 3); // output: false, compare both value and data type

//

console.log(3 == "3"); // output: true, compare only value
console.log(3 === "3"); // output: false, compare both value and data type
console.log(3 !== "3"); // output: true, compare both value and data type

console.log(0 == ""); // output: true, equivalent
console.log(0 == " "); // output: true, equivalent
console.log(0 === ""); // output: false, not exactly the same

//

console.log(0 == false); // output: true, equivalent
console.log(0 === false); // output: false, not exactly the same
console.log(1 == true); // output: true, equivalent
console.log(1 === true); // output: false, not exactly the same

//

console.log(undefined == null); // output: true
console.log(undefined === null); // output: false

//

console.log(NaN == NaN); // output: false, not equal
console.log(NaN === NaN); // output: false

//

console.log("manga".length == "avocado".length); // output: false
console.log("mango".length != "avocado".length); // output: true
console.log("mango".length < "avocado".length); // output: true
console.log("milk".length == "meat".length); // output: true
console.log("milk".length != "meat".length); // output: false
console.log("tomato".length == "potato".length); // output: true
console.log("python".length > "dragon".length); // output: false

///////////////

let check1 = 4 > 3;
console.log(check1); // true

let check2 = !(4 > 3);
console.log(check2); // false

//

let isLightOn = true;
let isLightOff = !isLightOn;
console.log(isLightOff); // false

let isMarried = !false;
console.log(isMarried); // true
