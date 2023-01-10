// 1- Use typeof in console.log

console.log(typeof "Emre Erden"); // output: string

console.log(typeof 6); // output: number

console.log(typeof true); // output: boolean

console.log(typeof null); // output: object

console.log(typeof undefined); // output: undefined

console.log(typeof {}); // output: object

console.log(typeof []); // output: object

console.log(typeof function () {}); // output: function

console.log(typeof NaN); // output: number

console.log(typeof Infinity); // output: number

console.log(typeof -Infinity); // output: number

//////////////////////////////

// w/Variables

// 1- Use typeof in console.log with using variables

const fullName = "Emre Erden";

const number = 6;

const boolean = true;

const nullValue = null;

const undefinedValue = undefined;

const object = {};

const array = [];

const functionValue = function () {};

const nan = NaN;

const infinity = Infinity;

const minusInfinity = -Infinity;

console.log(typeof fullName); // output: string

console.log(typeof number); // output: number

console.log(typeof boolean); // output: boolean

console.log(typeof nullValue); // output: object

console.log(typeof undefinedValue); // output: undefined

console.log(typeof object); // output: object

console.log(typeof array); // output: object

console.log(typeof functionValue); // output: function

console.log(typeof nan); // output: number

console.log(typeof infinity); // output: number

console.log(typeof minusInfinity); // output: number

//////////////////////////////

//////////////////////////////

console.log(typeof 1 / 0); // output: Infinity

console.log(typeof -1 / 0); // output: -Infinity

console.log(typeof 1 / -0); // output: -Infinity

console.log(typeof -1 / -0); // output: Infinity

console.log(typeof 0 / -0); // output: -Infinity

console.log(typeof 0 / 1); // output: 0

console.log(typeof 0 / -1); // output: -0

console.log(typeof 0 / 0); // output: NaN
