let favoriteNumber = 32;
if (favoriteNumber >= 10) { // evaluating favoriteNumber >= 10 returns true
  favoriteNumber = favoriteNumber + 10
} 
console.log(favoriteNumber);


//let favoriteNumber = 0;
//while (favoriteNumber < 10) {
//  favoriteNumber = favoriteNumber + 1;
//}
//console.log(favoriteNumber);

const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
const lineThree = "Joy to the fishes in the deep blue sea";
const lineFour = "Joy to you and me";

const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
console.log(chorus);

/*
const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
const lineThree = "Joy to the fishes in the deep blue sea"; 
*/
//const lineFour = "Joy to you and me";

//lineFour; // => "Joy to you and me"
/*
if hungry → make a meal.
else → don't make a meal.
if light is green → press gas pedal.
else → press brake pedal.
if it's the first of the month → pay the bill.
else → don't pay the bill.
*/
const age = 30;

let isAdult;

if (age >= 18) {
  isAdult = true;
}

console.log(isAdult);
//age is initialized to 30, so 
//the condition (age >= 18) resolves to true.
// The code in the code block executes,
// setting the isAdult variable to true