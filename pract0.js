// From the Three Dog Night song: "Joy to the World (Jeremiah was a Bullfrog)"
const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
const lineThree = "Joy to the fishes in the deep blue sea";
const lineFour = "Joy to you and me";

// The '\n' inserts a new line into the string
const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
console.log(chorus);

/*
const age = 30;
let isAdult;
if (age >= 18) {
  isAdult = true;
}
console.log(isAdult);
*/

const age = 14;
let isAdult;
if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}
console.log(isAdult);
/*
//ternary expresion
const age = 14;
let isAdult = true;
age >= 18 ? (isAdult = true) : (isAdult = false);
console.assert(isAdult);
*/