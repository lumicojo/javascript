const age = 26;
const isAdult = age >= 18 ? true : false;

isAdult;
//=> true

const age = 6;
const isAdult = age >= 18;

isAdult;
//=> false

//The ternary (or if...else) is only necessary if the desired
//return value is something other than a Boolean:

const age = 20;
const ageMessage = age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!";

ageMessage;
//=> "Congratulations! You're an adult!"


