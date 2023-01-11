// 1- Type "This is a first log text" in console.log

console.log("This is a first log text"); // output: This is a first log text

// 2- Type "Hello World!!" in console.log

console.log("Hello World!"); // output: Hello World!

// 3- Type "Emre Erden" in console.log

console.log("Emre Erden"); // output: Emre Erden

//////////////////////////////

// w/Variables

// 1- Type "Front-End Developer" in console.log using variables

const fendDev1 = "Front-End Developer";
console.log(fendDev1); // output: Front-End Developer

// 2- Type "Front-End" and "Developer" in console.log using variables

const frontEnd1 = "Front-End ";
const dev1 = "Developer";

console.log(frontEnd1); // output: Front-End
console.log(dev1); // output: Developer

console.log(frontEnd1 + dev1); // output: Front-End Developer

console.log(frontEnd1 + "Developer"); // output: Front-End Developer
console.log("Front-End " + dev1); // output: Front-End Developer

//////////////////////////////

// w/Variables + w/Template Literals

// 1- Type "Front-End Developer" in console.log using variables and using template literals

const fendDev2 = "Front-End Developer";
console.log(`${fendDev2}`); // output: Front-End Developer

// 2- Type "Front-End" and "Developer" in console.log using variables and using template literals

const frontEnd2 = "Front-End";
const dev2 = "Developer";

console.log(`${frontEnd2} ${dev2}`); // output: Front-End Developer

console.log(`Front-End ${dev2}`); // output: Front-End Developer
console.log(`${frontEnd2} Developer`); // output: Front-End Developer
