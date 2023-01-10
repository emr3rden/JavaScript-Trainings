// 1- Type "Hello World!" in console.log with using console.log styling

console.log("%cHello World!", "color: red; font-size: 20px;"); // output: Hello World!

// 2- Type "Hello" and "World!" in console.log with using console.log styling

console.log(
  "%cHello %cWorld!",
  "color: purple; font-size: 25px; background-color: white;",
  "color: white; font-size: 20px; background-color: purple;"
); // output: Hello World!

//////////////////////////////

// w/Variables + w/Template Literals

// 1- Type "Hello" and "World!" in console.log with using console.log styling and using variables and using template literals

const hello2 = "%cHello";
const world2 = "%cWorld!";
const colorHello2 = "color: red; font-size: 20px;";
const colorWorld2 = "color: blue; font-size: 20px;";
console.log(`${hello2} ${world2}`, colorHello2, colorWorld2); // output: Hello World!
