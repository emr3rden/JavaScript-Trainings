// "const"

// "const" variables must be assigned a value when they are declared:

// Examples:

const a;
console.log(a); // output: SyntaxError: Missing initializer in const declaration

//

const b;
b = "Hello";
console.log(b); // output: SyntaxError: Missing initializer in const declaration

//////////////////////////////

// ES6 introduced new JavaScript keyword: "const"

// This keyword provide -Block Scope- in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example:

const x = 1;
console.log(x); // output: 1

{
  const x = 2;
  console.log(x); // output: 2
}

console.log(x); // output: 1
