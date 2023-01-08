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
