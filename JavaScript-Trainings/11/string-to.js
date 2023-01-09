// "JavaScript Type Conversion"

// JavaScript variables can be converted to a new variable and another data type

//////////////////////////////

// String to Number //

// 3 ways:
// - Number()
// - parseInt()
// - Plus sign(+)

//

// Number()

let num1 = "6";
let num2 = "2";
console.log(num1 + num2); // Output: 62 (String)

let num3 = Number(num1);
let num4 = Number(num2);
console.log(num3 + num4); // Output: 8 (Number)

//

// parseInt()

let num5 = "10";
console.log(num5); // Output: 10 (String)
let numInt1 = parseInt(num5);
console.log(numInt1); // Output: 10 (Number)

//

// Plus sign(+)

let num6 = "10";
console.log(num6); // Output: 10 (String)
let numInt2 = +num6;
console.log(numInt2); // Output: 10 (Number)

//////////////////////////////

// String to Boolean //

// 2 ways:
// - Boolean()
// - Plus sign(+)

//

// Boolean()

let str1 = "true";
console.log(str1); // Output: true (String)
let strBool1 = Boolean(str1);
console.log(strBool1); // Output: true (Boolean)

//

// Plus sign(+)

let str2 = "true";
console.log(str2); // Output: true (String)
let strBool2 = +str2;
console.log(strBool2); // Output: 1 (Number)

//////////////////////////////

// String to Float //

// 3 ways:
// - Number()
// - parseFloat()
// - Plus sign(+)

//

// number()

let num7 = "6.2";
let num8 = "2.5";
console.log(num7 + num8); // Output: 6.22.5 (String)

let num9 = Number(num7);
let num10 = Number(num8);
console.log(num9 + num10); // Output: 8.7 (Number)

//

// parseFloat()

let num11 = "10.5";
console.log(num11); // Output: 10.5 (String)
let numFloat1 = parseFloat(num11);
console.log(numFloat1); // Output: 10.5 (Number)

//

// Plus sign(+)

let num12 = "10.5";
console.log(num12); // Output: 10.5 (String)
let numFloat2 = +num12;
console.log(numFloat2); // Output: 10.5 (Number)
