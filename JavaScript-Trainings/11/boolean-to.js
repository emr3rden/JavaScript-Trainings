// "JavaScript Type Conversion"

// JavaScript variables can be converted to a new variable and another data type

//////////////////////////////

// Boolean to String //

// 3 ways:
// - String()
// - toString()
// - Plus sign(+)

//

// String()

let bool1 = true;
console.log(bool1); // Output: true (Boolean)
let boolStr1 = String(bool1);
console.log(boolStr1); // Output: true (String)

//

// toString()

let bool2 = true;
console.log(bool2); // Output: true (Boolean)
let boolStr2 = bool2.toString();
console.log(boolStr2); // Output: true (String)

//

// Plus sign(+)

let bool3 = true;
console.log(bool3); // Output: true (Boolean)
let boolStr3 = bool3 + "";
console.log(boolStr3); // Output: true (String)

//////////////////////////////

// Boolean to Number //

// 3 ways:
// - Number()
// - parseInt()
// - Plus sign(+)

//

// Number()

let bool4 = true;
console.log(bool4); // Output: true (Boolean)
let boolNum1 = Number(bool4);
console.log(boolNum1); // Output: 1 (Number)

//

// parseInt()

let bool5 = true;
console.log(bool5); // Output: true (Boolean)
let boolNum2 = parseInt(bool5);
console.log(boolNum2); // Output: 1 (Number)

//

// Plus sign(+)

let bool6 = true;
console.log(bool6); // Output: true (Boolean)
let boolNum3 = +bool6;
console.log(boolNum3); // Output: 1 (Number)

//////////////////////////////

// Boolean to Float //

// 3 ways:
// - Number()
// - parseFloat()
// - Plus sign(+)

//

// Number()

let bool7 = true;
console.log(bool7); // Output: true (Boolean)
let boolFloat1 = Number(bool7);
console.log(boolFloat1); // Output: 1 (Number)

//

// parseFloat()

let bool8 = true;
console.log(bool8); // Output: true (Boolean)
let boolFloat2 = parseFloat(bool8);
console.log(boolFloat2); // Output: 1 (Number)

//

// Plus sign(+)

let bool9 = true;
console.log(bool9); // Output: true (Boolean)
let boolFloat3 = +bool9;
console.log(boolFloat3); // Output: 1 (Number)
