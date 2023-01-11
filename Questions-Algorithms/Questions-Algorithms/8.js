// Create random number generators with "Math.random / Math.floor" and display it with console.log.

//

// Math.random()

//

let randomNum1 = Math.random();

console.log(randomNum1); // output: 0.840009292952395 --- ...
// returns a random number between 0 (inclusive) and 1 (exclusive)

//

let randomNum2 = Math.random() * 10;

console.log(randomNum2); // output: 5.840009292952395 --- ...
// returns a random number between 0 and 10

//

let randomNum3 = Math.random() * 100;

console.log(randomNum3); // output: 53.840009292952395 --- ...
// returns a random number between 0 and 100

///////////////

// Math.floor() - (Math.random() used with Math.floor() can be used to return random integers.)

//

let randomNum4 = Math.floor(Math.random() * 10);

console.log(randomNum4); // output: 5 --- ...
// returns a random integer between 0 and 9

let randomNum5 = Math.floor(Math.random() * 11);

console.log(randomNum5); // output: 6 --- ...
// returns a random integer between 0 and 10 //

//

let randomNum6 = Math.floor(Math.random() * 100);

console.log(randomNum6); // output: 53 --- ...
// Returns a random integer between 0 and 99:

let randomNum7 = Math.floor(Math.random() * 101);

console.log(randomNum7); // output: 54 --- ...
// Returns a random integer between 0 and 100

//

let randomNum8 = Math.floor(Math.random() * 10) + 1;

console.log(randomNum8); // output: 6 --- ...
// Returns a random integer between 1 and 10:

//

let randomNum9 = Math.floor(Math.random() * 100) + 1;

console.log(randomNum9); // output: 54 --- ...
// Returns a random integer between 1 and 100:
