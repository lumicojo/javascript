const name = "Grumpy";
let characterType;

switch (name) {
  case "Sleepy":
  case "Sneezy":
  case "Happy":
  case "Grumpy":
  case "Bashful":
  case "Dopey":
  case "Doc":
    characterType = "dwarf";
    break;
  case "Handsome Prince":
    characterType = "hero";
    break;
  case "Evil Queen":
    characterType = "villain";
    break;
  case "Snow White":
    characterType = "heroine";
    break;
  default:
    characterType = "minor character";
}

console.log(characterType);


const age = 21;
let isAdult, canWork, canEnlist, canDrink;

switch (true) {
  case age >= 21:
    canDrink = true;
  case age >= 18:
    isAdult = true;
    canEnlist = true;
  case age >= 16:
    canWork = true;
}
console.log(canWork);
console.log(canEnlist);
console.log(isAdult);
console.log(canDrink);

/* Ternary
const age = 14;

let isAdult;

age >= 18 ? (isAdult = true) : (isAdult = false);

console.log(isAdult);
*/
/*
if (condition1) {
    console.log("Condition 1 returned true");
  } else if (condition2) {
    console.log("Condition 2 returned true");
  }

*/