const sum = 1 + 1;
console.log(sum);

console.log(5 * 5);

const difference = 10 - 5;
console.log(difference);


const likelyToRain = true;
const clothingChoice = likelyToRain ? "rain boots" : "sun hat";
console.log(clothingChoice);

const name = "Your name here";
const probabilityOfRain = 0.2;
const temperatureInC = 26;
const message = `Hello, ${name}, with a rain chance of ${probabilityOfRain * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (probabilityOfRain > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;
console.log(message);

/*
const truthyValue = 'This value is truthy.';
const falseyValue = 0;
!truthyValue;  //false

const falseValue = 'This value is falseyValue';
const truthyValue = 0;
!falseValue; //false

const truthyValue = 'This value is truthy.';
const falseyValue = 0;
!!truthyValue;// true


const truthyValue = 'This value is truthy.';
const falseyValue = 0;
!!!truthyValue; false


//The logical AND (&&) operator takes two expressions:
*/
expression1 && expression2;
//The return value of the && operator is always one of the two expressions.
false && "Anything";
// => false

// 4 * 0 returns 0, which is falsey
4 * 0 && "Anything";
// => 0

true && false;
// => false

1 + 1 && "Whatever";
// => "Whatever"

"The truthiest of truthy strings" && 9 * 9;
// => 81



//The logical OR (||) operator also takes two expressions:

expression1 || expression2;
true || "Whatever";
// => true

1 + 1 || "Whatever";
// => 2

false || "Whatever";
// => "Whatever"

1 === 2 || 8 * 8;
// => 64

"" || "Not " + "an " + "empty " + "string";
// => "Not an empty string"
