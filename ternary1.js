//const advice = raining ? "take an umbrella" : "enjoy this rain-free day";

//we can write ternary expressions on one line, as we did above, or on multiple lines:

//The value assigned to advice will be "take an umbrella" 
//if raining is true, and "enjoy this rain-free day"
// otherwise.
////////////////////  or

//const rainAdvice = likelyToRain
 // ? "take an umbrella"
  //: "enjoy this rain-free day";

  //const name = "Spinach the Shiba";
  //const probabilityOfRain = 0.2;
  //const temperatureInC = 26;
  
  //const likelyToRain = probabilityOfRain > 0.3;
  //const sunIsDangerous = temperatureInC >= 26;
  //const rainPercentage = probabilityOfRain * 100;
  
  //const rainAdvice = likelyToRain
  //  ? "take an umbrella"
  //  : "enjoy this rain-free day";
  //const sunAdvice = sunIsDangerous
  //  ? " and watch out for heatstroke"
  //  : " and bask in this fine weather";
  //const message = `Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ` + rainAdvice + sunAdvice;
  //console.log(message);

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