function exerciseByronThePoodle() {
    console.log("Wake Byron the poodle");
    console.log("Leash Byron the poodle");
    console.log("Walk to the park Byron the poodle");
    console.log("Throw the frisbee for Byron the poodle");
    console.log("Walk home with Byron the poodle");
    console.log("Unleash Byron the poodle");
}
exerciseByronThePoodle();  

function exerciseByronThePoodle() {
    const dogName = "Byron";
    const dogBreed = "poodle";
    console.log(`Wake ${dogName} the ${dogBreed}`);
    console.log(`Leash ${dogName} the ${dogBreed}`);
    console.log(`Walk to the park ${dogName} the ${dogBreed}`);
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    console.log(`Unleash ${dogName} the ${dogBreed}`);
}
exerciseByronThePoodle();//We define the dogName and dogBreed in only one place.


//The full function declaration for exerciseDog is:
function exerciseDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    console.log(`Leash ${dogName} the ${dogBreed}`);
    console.log(`Walk to the park ${dogName} the ${dogBreed}`);
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    console.log(`Unleash ${dogName} the ${dogBreed}`);
}
exerciseDog("Byron", "poodle");

const weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
    const weatherToday = "Rainy";
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}

const result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise due to rain"