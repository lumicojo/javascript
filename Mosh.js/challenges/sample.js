/*let is define a new varib in current scope :*/
let a = 1;
let b = 2;
let c = a + b;
console.log(`The sum of ${a} and ${b} is ${c}`);

/*condition*/
// if (age >= 21) {
//   let bevarage = "Gin & Tonoc";
// } else {
//   let bevarage = "Shila";
// }


/* Data Types*/
let quotient = 4 / 3;
console.log(`The quotient of 4 / 3 is ${quotient}`);
// The quotient of 4 / 3 is 1.3333333333333333


/* Function*/
let add = (a, b) => {
  return a + b;
}

let sum = add(1, 2);
console.log(`The sum of 1 and 2 is ${sum}`);


/*Array*/
let numbers = [3, 2, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((number) => {
  console.log(number);
})

/*Wile*/
let n = 0;
while (n < 5) {
  console.log(n);
  n++;
}
