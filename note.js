What Is a Data Type?
Everything in JavaScript is data except:

Operators: +, !, <=, etc.
Reserved words: function, for, debugger, etc.
Every piece of data falls into one of JavaScript's seven data types:
 numbers, strings, booleans, symbols, objects, null, and undefined.
 typeof == accepts one argument

 const js = {
  name: "JavaScript",
  createdBy: {
    firstName: "Brendan",
    lastName: "Eich",
  },
  firstReleased: 1995,
  isAwesome: true,
};

typeof {};
//=> "object"

const dogs = ["Byron", "Cubby", "Boo Radley", "Luca", "Spinach"];
typeof dogs;
//=> "object"

typeof null;
//=> "object"

ypeof undefined;
//=> "undefined"

let unassignedVariable;
typeof unassignedVariable;
//=> "undefined"

unassignedVariable = "";
typeof unassignedVariable;
//=> "string"

Primitive Types
Six of the seven JavaScript data types — everything except object — are primitive. All this means is that they represent single values, such as 7 or "hello" or false, instead of a collection of values.

Data Types Interact 3 - 2;
//=> 1
.and that strings can be added to other strings:

"Hello" + ", " + `world!`;
//=> "Hello, world!"

"High " + 5 + "!";
//=> "High 5!"

null ** 2; // null to the power of 2
//=> 0

undefined ** null; // undefined to the power of null
//=> 1

{}+{}; // empty object plus empty object
//=> "[object Object][object Object]" <-- That's a string!

1 + 2 + 3 + 4 + 5;
//=> 15

"1" + 2 + 3 + 4 + 5;
//=> "12345"

1 + "2" + 3 + 4 + 5;
//=> "12345"

1 + 2 + "3" + 4 + 5;
//=> "3345"

1 + 2 + 3 + "4" + 5;
//=> "645"

1 + 2 + 3 + 4 + "5";
//=> "105"


1 + 2 + "3" + 4 + 5;
//=> "3345"
First, we add the numbers 1and 2 together to get 3 (a number).
 We then ask JavaScript to add 3 (a number) to "3" (a string).
  JavaScript can't perform addition with a string, so it decides to concatenate
   the two operands instead, resulting in "33" (a string). 
   The next operation, "33" + 4, is also between a string and a number, and 
   JavaScript once again concatenates, giving us the result of "334" (a string). 
   In the final operation, we're adding "334" with 5 (a number). Again, JavaScript concatenates, giving the final result of "3345".

   Interpolation
   const barkCount = 3;
const backtick = `Spinach barks ${barkCount} times`; //=> "Spinach barks 3 times"
const singleQuote = 'Spinach barks ${barkCount} times'; //=> "Spinach barks ${barkCount} times"
const doubleQuote = "Spinach barks ${barkCount} times"; //=> "Spinach barks ${barkCount} times"

const spinach = `Spinach is ${2 + 3} years old`; //=> "Spinach is 5 years old"
