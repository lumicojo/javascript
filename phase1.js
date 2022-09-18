var x = 1;
if (x === 1) {
    var x = 2;
    console.log(x);
}
console.log(x);

/*              variable- Lab
Phase 1
const companyName = 'Scuber';
let Scuber = "companyName";
let mostProfitableNeighborhood = "Chelsea";
let companyCeo = "Susan Smith"

companyName
      ✓ is set as Scuber
      ✓ is defined as a const
    mostProfitableNeighborhood
      ✓ is declared as equal to Chelsea
      ✓ is defined using let
    companyCeo
      ✓ is declared as equal to Susan Smith
      ✓ is defined using let


  6 passing (215ms)


String lab
//const currentUser = 'Grace Hopper';// Write your code in this file!
//const welcomeMessage = 'Welcome to Flatbook,' + currentUser;
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//const shortGreeting = "Welcome, ";

//const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;






//Concatenate Strings with the + Operator
//The easiest way to concatenate strings in JavaScript is with the + operator, like so:

"High " + "five!";
//=> "High five!"

"We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
//=> "We can concatenate as many strings as our heart desires."

const currentUser = 'Grace Hopper';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
/*
const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
//=> "Saying that interpolation with template literals is better than concatenation 100% of the time is simply false. But it is pretty cool!

// Beware that new lines inside of a template literal will be preserved as new lines in the resulting string!"

 example above, one of the things we interpolated into our string is an arithmetic expression: ${90 + myNumber}. We aren't limited to interpolating just variables — we can use any expression inside the curly braces.
*/


const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//const shortGreeting = "Welcome, ";

//const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
//To satisfy our team's current specifications for shortGreeting, we need to start our slice at index 0 and end it before index 1:

currentUser.slice(0, 1);
//Now, when our product team asks us to use the first two characters of currentUser, the change is as simple as currentUser.slice(0, 1) → currentUser.slice(0, 2).
 