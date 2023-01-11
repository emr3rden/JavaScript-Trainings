// "Data Types in JavaScript"

// non-primitive data types in JavaScript includes:

// -Arrays
// -Objects

//////////////////////////////

// Non-primitive data types are modifiable or mutable.

let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // Output: [10, 2, 3]

///////////////

// Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

let numbers1 = [1, 2, 3];
let numbers2 = [1, 2, 3];
console.log(numbers1 == numbers2); // Output: false

let userOne = {
  name: "Emre",
  role: "Developer",
  country: "Turkey",
};
let userTwo = {
  name: "Emre",
  role: "Developer",
  country: "Turkey",
};
console.log(userOne == userTwo); // Output: false

///////////////

// Two objects are only strictly equal if they refer to the same underlying object.

let numbers3 = [1, 2, 3];
let numbers4 = numbers3;
console.log(numbers3 == numbers4); // Output: true

let userThree = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
let userFour = userThree;
console.log(userThree == userFour); // Output: true

//

const Emre = {
  id: 1,
  name: "Emre",
};

const EmreClone = Emre;

EmreClone.surname = "Erden";

console.log(Emre); // Output: {id: 1, name: "Emre", surname: "Erden"}
