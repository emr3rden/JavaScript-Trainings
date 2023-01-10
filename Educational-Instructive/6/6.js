// "let"

// Variables defined with "let" are hoisted to the top of the block, but not initialized.

// Meaning: Using a "let" variable before it is declared will result in a ReferenceError:

// Examples:

let a;
console.log(a); // output: undefined

//

fullName = "Emre";
let fullName = "Erden";
console.log(fullName); // output: ReferenceError: Cannot access 'fullName' before initialization

//////////////////////////////

// ES6 introduced new JavaScript keyword: "let"

// This keyword provide -Block Scope- in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example:

let x = 1;
console.log(x); // output: 1

{
  let x = 2;
  console.log(x); // output: 2
}

console.log(x); // output: 1
