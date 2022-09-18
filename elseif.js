const age = 20;

let isAdult, canWork, canEnlist, canDrink;

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

console.log(canWork);//true
console.log(canEnlist);//true
console.log(isAdult);//true
console.log(canDrink);// udefined


function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));