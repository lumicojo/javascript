// This is my first Javascript
//console.log('Hello World');
// let name = 'Mosh';
// console.log(name);
// //variable
// let firstName = 'Mosh';
// let lastName = 'Hamedani';

//  // constant
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Primitive Types
// let name = 'mosh';// str literal
// let age = 30; // num  literal
// let isAproved = false; //bolean literal
// let firstName = undefined;
// let selectedColor = null;

//Dynamic Typing  typeOf
// let name = 'mosh'; //string
// let age = 30; //number
// let isAproved = false; //booleon
// let firstName = undefined; // undefine
// let selectedColor = null; // = object

// Object
// let person = {
//   name: 'mosh',
//   age: 30
// };

//dot notation
// person.name ='John';

// // brecket notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);


// Array   this is dinamic

// let selectedColors = ['red','blue'];
// selectedColors[2] = 'green';
// selectedColors[2] = 1; // = ['red', 'blue', 1]
// console.log(selectedColors); // = an array with 3element  (3)['red', 'blue', 'green']
// console.log(selectedColors.length);// = 3 element


// Function
// function greet(name) {
//   console.log('Hello ' + name);
// }
// greet('john');
// greet('Mary');

// 2 parameter
// function greet(name,lastName) {
//   console.log('Hello ' + name + ' ' + lastName);
// }
// greet('john', 'Smith');

// Type of function
// calculate a value
// function square(number) {
//   return number * number;
// }

// console.log(square(2));  //=4

//   Arithmetic Operators
// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
//console.log(x); //= 10

//console.log(++x); // = 11

// console.log(x++); //=11
// console.log(x);


// Decrement (--)
//console.log(--x); // =9

//Assignment Operators
// let x = 10;

// x = x + 5;
// x += 5;

// x =x * 3;
// x *= 3;


//   Relational operator                  comparison

// let x = 1;
// console.log(x > 0);   //true
// console.log(x >= 1 );  // true
// console.log(x < 1); // false
// console.log(x <= 1); // true


// // Equality operat

// console.log(x === 1); // true
// console.log(x !== 1);  // false not true


//5- Equality Operators

//Strict Euality (type + Value ) they are same
// console.log(1 === 1); //true
// console.log('1' === 1);  // false


// Lose Equality  they check value are equl

// they will mach what they have in the write side the left side
// console.log(1 == 1); // true
// console.log('1' == 1); // true
// console.log(true == 1); // true


//Ternary Operator

// if customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);    // gold


let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);    // silver


//Logical Operators
//  && and
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);  //true

// Logical OR ||
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);  //true

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);


//Logical Operators with Non-booleans
// falsy (false) , undefine, null, 0, false, ' ', NaN
let userColor = 'red';
//let userColor = undefined; //if user has undefined it will be the defaultColor == blue
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);  // red


// Operators Precedence
//let x = 2 + 3 * 4;
//console.log(x); // = 14

let x = (2 + 3) * 4;
console.log(x);  // =20



