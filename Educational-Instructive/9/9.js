// With "const" you can:
// - Change the elements of constant array
// - Change the properties of constant object

// Examples:

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");

console.log(cars); // output: ["Toyota", "Volvo", "BMW", "Audi"]

//

// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
console.log(car); // output: {type: "Fiat", model: "500", color: "red", owner: "Johnson"}

///////////////

// With "const" you can NOT:
// - Reassign a constant value
// - Reassign a constant array
// - Reassign a constant object

// Examples:

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];

console.log(cars); // output: TypeError: Assignment to constant variable.

//

const car = { type: "Fiat", model: "500", color: "white" };
car = { type: "Volvo", model: "EX60", color: "red" };

console.log(car); // output: TypeError: Assignment to constant variable.
