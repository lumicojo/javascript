console.log('Hello, world!')
const sum = 1 + 1;
console.log(sum);

console.log(5 * 5);
const difference = 10 - 5;

//booleanExpression ? "thingToReturnIfTrue" : "thingToReturnIfFalse";

//f the expression in the first position evaluates to a truthy value, 
//then the return value of the ternary expression is whatever is in the second position;
// here, "thingToReturnIfTrue". If the expression in the first position is falsey, however,
// whatever is in the last position is returned; here, "thingToReturnIfFalse".

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

//Refactoring our Code
//const name = "Spinach the Shiba";
//Or values evaluated from an expression:

//const rainPercentage = 0.2 * 100;
//We can also include variables as part of the evaluated expression:

//const probabilityOfRain = 0.2;
//const rainPercentage = probabilityOfRain * 100;

//you can assign virtually any expression as the value of
// a variable, including comparison expressions. 

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
