//Write a function that takes in an array of names like this:
// [“sushi”, “mogli” “peanut”]
//For each item in the array, print out a sentence that returns 
//“Sushi is the best”, “mogli is the best” “peanut is the best” 


function bestDogs(dogs) {
    for (let i = 0; i < dogs.length; i++) {
        console.log(`${dogs[i]} is the best!`);
    }   
}

bestDogs(["sushi", "mogli", "peanut"]);

/*
const dogs = ["sushi", "mogli", "peanut"];

function bestDogs() {
    for (let i = 0; i < dogs.length; i++) {
    }     
}
bestDogs();
*/


const pizzaPies = [
    { 
      name: "cheese",
      price: 5,
      description: "mozzarella and provolone blend with bazil"
    },
    { 
      name: "meat lovers",
      price: 8,
      description: "sausage, pepperoni, meatballs, canadian bacon"
    }
]
console.log(pizzaPies[1].name);