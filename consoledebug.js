const age = 18;

let isAdult=false, canWork=false, canEnlist=false, canDrink=false;

if (age >= 21) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
  canDrink = true;
} else if (age > 18) {
  console.log("The condition returned true")
  canWork = true;
  canEnlist = true;
  isAdult = true;
} else if (age >= 16) {
  canWork = true;
}

console.log(`Age: ${age}\nCan work: ${canWork}\nCan enlist: ${canEnlist}\nIs a legal adult: ${isAdult}\nCan drink: ${canDrink}`);

// Taking this incremental approach will make it much easier 
//to find and fix any errors.

//if (condition1) {
//  console.log("Condition 1 returned true");
//} else if (condition2) {
 // console.log("Condition 2 returned true");
//}