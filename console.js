const age = 16;

let isAdult=false, canWork=false, canEnlist=false, canDrink=false;

if (age >= 21) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
  canDrink = true;
} else if (age >= 18) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
} else if (age >= 16) {
  canWork = true;
}
//console.log(canWork, canEnlist, isAdult, canDrink);
console.log(
  "Age:",
  age,
  "Can work:",
  canWork,
  "Can enlist:",
  canEnlist,
  "Is a legal adult:",
  isAdult,
  "Can drink:",
  canDrink
);

/////////////////// or we can doo this;

console.log(
  `Age: ${age}, Can work: ${canWork}, Can enlist: ${canEnlist}, Is a legal adult: ${isAdult}, Can drink: ${canDrink}`
);
//With this approach, we're passing a single expression to console.log() 

