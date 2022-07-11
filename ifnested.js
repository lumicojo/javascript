const age = 17;

let canWork, isAdult, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

console.log(canWork);
console.log(isAdult);
console.log(canEnlist);
console.log(canDrink);