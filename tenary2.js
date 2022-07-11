const first = 2;
const second = 1;
const problem = 99;
const luckyNumber = first > second ? (problem - 1) / 2 : problem / 3;
console.log(luckyNumber); //=> ??? (Test it out yourself!)

//An important thing to remember is that a ternary is an expression that,
// itself, is made up of three "inner" expressions.


//                              CONDITIONAL OPERATOR

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

////////////////////////////////// Handling null values
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
}

console.log(greeting({ name: "Alice" }));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"

/////////////////////////////  Conditional chains
//The ternary operator is right-associative, which means it can be "chained"
// in the following way, similar to an if … else if … else if … else chain:

function example() {
  return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}

// Equivalent to:

function example() {
  if (condition1) { return value1; }
  else if (condition2) { return value2; }
  else if (condition3) { return value3; }
  else { return value4; }
}

