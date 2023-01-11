// "JavaScript Type Conversion"

// JavaScript variables can be converted to a new variable and another data type

//////////////////////////////

// Number to String //

// 3 ways:
// - String()
// - toString()
// - Plus sign(+)

//

// String()

let num14 = 10;
console.log(num14); // Output: 10 (Number)
let numStr2 = String(num14);
console.log(numStr2); // Output: 10 (String)

//

// toString()

let num13 = 10;
console.log(num13); // Output: 10 (Number)
let numStr1 = num13.toString();
console.log(numStr1); // Output: 10 (String)

//

// Plus sign(+)

let num15 = 10;
console.log(num15); // Output: 10 (Number)
let numStr3 = num15 + "";
console.log(numStr3); // Output: 10 (String)

//////////////////////////////

// Number to Boolean //

// 2 ways:
// - Boolean()
// - Plus sign(+)

//

// Boolean()

let num23 = 1;
console.log(num23); // Output: 1 (Number)
let numBool1 = Boolean(num23);
console.log(numBool1); // Output: true (Boolean)

//

// Plus sign(+)

let num24 = 1;
console.log(num24); // Output: 1 (Number)
let numBool2 = +num24;
console.log(numBool2); // Output: 1 (Number)

//////////////////////////////

// Number to Float //

// 2 ways:
// - parseFloat()
// - Plus sign(+)

//

// parseFloat()

let num16 = 10;
console.log(num16); // Output: 10 (Number)
let numFloat3 = parseFloat(num16);
console.log(numFloat3); // Output: 10 (Number)

//

// Plus sign(+)

let num17 = 10;
console.log(num17); // Output: 10 (Number)
let numFloat4 = +num17;
console.log(numFloat4); // Output: 10 (Number)
