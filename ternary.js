console.log('Hello, world!')
const sum = 1 + 1;
console.log(sum);

console.log(5 * 5);
const difference = 10 - 5;



//const likelyToRain = true; // if false you get sun hat
//const clothingChoice = likelyToRain ? "rain boots" : "sun hat";

//console.log(clothingChoice);

const likelyToSnow = true;
const clothChoice = likelyToSnow? "snow boots": "suny sunGlasses";
console.log(clothChoice);


const hungry = false;
const foodChoice = hungry ? "snack": "notHungry drinkWather";
console.log(foodChoice);


//const rainPercentage = 0.2;
//const clothingChoice = rainPercentage > 0.3 ? "rain boots" : "sun hat";
//console.log(clothingChoice);



// Input values: we could easily imagine asking a user for these values.
//const name = "Your name here";
//const probabilityOfRain = 0.2;
//const temperatureInC = 26;

// Create our message
//const message = `Hello, ${name}, with a rain chance of ${probabilityOfRain * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (probabilityOfRain > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
//`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;
//console.log(message);



/*
const name = "Spinach the Shiba";
const probabilityOfRain = 0.2;
const temperatureInC = 26;

const likelyToRain = probabilityOfRain > 0.3;
const sunIsDangerous = temperatureInC >= 26;
const rainPercentage = probabilityOfRain * 100;

const message = `Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ` +
  (likelyToRain ? "take an umbrella" : "enjoy this rain-free day") +
  `${
    sunIsDangerous
      ? " and watch out for heatstroke!"
      : " and bask in this fine weather."
  }`;

console.log(message);
*/

//refactor the code
const name = "Spinach the Shiba";
const probabilityOfRain = 0.2;
const temperatureInC = 26;

const likelyToRain = probabilityOfRain > 0.3;
const sunIsDangerous = temperatureInC >= 26;

const rainPercentage = probabilityOfRain * 100;
const rainAdvice = likelyToRain ? "take an umbrella" : "enjoy this rain-free day";
const sunAdvice = sunIsDangerous ? "watch out for heatstroke" : "bask in this fine weather";

const message = `Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ${rainAdvice} and ${sunAdvice}.`;

console.log(message);

const first = 2;
const second = 1;
const problem = 99;
const luckyNumber = first > second ? (problem - 1) / 2 : problem / 3;
luckyNumber; //=> ??? (Test it out yourself!)
console.log(luckyNumber);

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));


/*let favoriteNumber = 32;
if (favoriteNumber >= 10) { // evaluating favoriteNumber >= 10 returns true
  favoriteNumber = favoriteNumber + 10
} 
console.log(favoriteNumber);
favoriteNumber;
*/
let favoriteNumber = 0;
while (favoriteNumber < 10) {
  favoriteNumber = favoriteNumber + 1;
}
console.log(favoriteNumber);
favoriteNumber;