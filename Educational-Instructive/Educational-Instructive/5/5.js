// "let"

// 1- Variables defined with "let" cannot be Redeclared.

// 2- Variables defined with "let" must be Declared before use.

// 3- Variables defined with "let" have Block Scope.

//////////////////////////////

// 1- Declare JavaScript "let" Variables and use console.log() to print the values of the variables

let a = 1;
console.log(a); // output: 1

let b = 2;
console.log(b); // output: 2

let c = a + b;
console.log(c); // output: 3

// 2- Declare multiple variables in one statement and use console.log() to print the values of the variables

let d = 1,
  e = 2,
  f = d + e;
console.log(f); // output: 3

// 3- Declare undefined variables and use console.log() to print the values of the variables

let g;
console.log(g); // output: undefined
