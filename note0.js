const firstName = "Spinachius";
const clanName = "Karbitus";
const commonName = "Maris";
let fullName;

// With +
fullName = firstName + " " + clanName + " " + commonName; //=> "Spinachius Karbitus Maris"


// Or, with interpolation
fullName = `${firstName} ${clanName} ${commonName}`; //=> "Spinachius Karbitus Maris"


// Keep in mind it returns a _new_ String; therefore:
firstName; //=> "Spinachius"
clanName; //=> "Karbitus"
commonName; //=> "Maris"
fullName; //=> "Spinachius Karbitus Maris"
///////////////////////////////
mixing data types
const fact = "Spinach is "; // fact is of type `String`
const tail = " years old"; // tail is of type `String`
const age = 5; // age is of type `Number`

fact + age + tail; //=> "Spinach is 5 years old"

A better way to handle this situation is by using interpolation instead:const fact = "Spinach is";
const tail = "years old";
const age = 5;

`${fact} ${age} ${tail}`; //=> "Spinach is 5 years old"


Another alternative is to use JavaScript's toString() method:
const fact = "Spinach is "; // fact is of type `String`
const tail = " years old"; // tail is of type `String`
const age = 5; // age is of type `Number`

fact + age.toString() + tail; //=> "Spinach is 5 years old"

Strict Equality Operator ===
The strict equality operator returns true if two values are equal without performing type conversions. Even if the values on both sides of the operator look similar (e.g., '42' === 42), the === operator will only return true if the data types also match:



42 === 42;
// => true

42 === "42";
// => false

true === 1;
// => false

"0" === false;
// => false

null === undefined;
// => false

" " === 0;
// => false



The strict inequality operator returns true
 if two values are not equal without performing type conversions:
  9000 !== 9001
// => true

9001 !== '9001'
// => true

[] !== ''
// => true
You should prefer === and !== for comparisons.

88 > "9";
// => true
88 >= "hello";
// => false

88 <= "hello";
// => false

The following returns false because the Unicode value of 8,
 the first character in 88, is less than the Unicode value of 9.
 "88" > "9";
// => false

Stick to comparing numerical values with the relational operators and you'll be golden.
