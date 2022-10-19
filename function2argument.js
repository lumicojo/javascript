
//write a function in javascript that takes two arguments, name and age. 
//return the sentence “i have dog named NAME and he is AGE years old”
//call the function with mogli, 10 and sushi, 7

function dogs(name, age) {
    console.log(name);
    console.log(age);
    return `I have  dog  ${name} and ${age}`;
}
dogs("mogli",10);
dogs("sushi",7)


//Write a function that takes in an array of names like this:
// [“sushi”, “mogli” “peanut”]
//For each item in the array, print out a sentence that returns 
//“Sushi is the best”, “mogli is the best” “peanut is the best” 
const dogs = ["sushi", "mogli", "peanut"];
bestDogs();
function bestDogs() {
    for (let i = 0; i < dogs.length; i++) {
        const newArray = (`${dogs[i]} is the best!`)
        
        return dogs;
    }
}
bestDogs(dogs);