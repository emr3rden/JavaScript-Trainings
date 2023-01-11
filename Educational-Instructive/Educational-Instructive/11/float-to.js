// "JavaScript Type Conversion"

// JavaScript variables can be converted to a new variable and another data type

//////////////////////////////

// Float to String //

// 3 ways:
// - String()
// - toString()
// - Plus sign(+)

//

// String()

let num18 = 10.5;
console.log(num18); // Output: 10.5 (Number)
let numStr4 = String(num18);
console.log(numStr4); // Output: 10.5 (String)

//

// toString()

let num19 = 10.5;
console.log(num19); // Output: 10.5 (Number)
let numStr5 = num19.toString();
console.log(numStr5); // Output: 10.5 (String)

//

// Plus sign(+)

let num20 = 10.5;
console.log(num20); // Output: 10.5 (Number)
let numStr6 = num20 + "";
console.log(numStr6); // Output: 10.5 (String)

//////////////////////////////

// Float to Number //

// 2 ways:
// - Number()

//

// Number()

let num21 = 10.5;
console.log(num21); // Output: 10.5 (Number)
let numInt3 = Number(num21);
console.log(numInt3); // Output: 10 (Number)

//

// parseInt()

let num22 = 10.5;
console.log(num22); // Output: 10.5 (Number)
let numInt4 = parseInt(num22);
console.log(numInt4); // Output: 10 (Number)

//////////////////////////////

// Float to Boolean //

// 2 ways:
// - Boolean()
// - Plus sign(+)

//

// Boolean()

let num25 = 1.5;
console.log(num25); // Output: 1.5 (Number)
let numBool3 = Boolean(num25);
console.log(numBool3); // Output: true (Boolean)

//

// Plus sign(+)

let num26 = 1.5;
console.log(num26); // Output: 1.5 (Number)
let numBool4 = +num26;
console.log(numBool4); // Output: 1.5 (Number)
