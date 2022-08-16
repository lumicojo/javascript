/*
Arrays in arrays
const letters = ["a", ["b", ["c", ["d", ["e"]], "f"]]];
//how would we get the letter 'e'? First, we'd need the second element in letters, letters[1]:

letters[1];  //=> ["b", ["c", ["d", ["e"]], "f"]]
//Then we'd need the second element of that element, so letters[1][1]:

letters[1][1];  //=> ["c", ["d", ["e"]], "f"]
//Then the second element of that element, letters[1][1][1]:

letters[1][1][1]; //=> ["d", ["e"]]
//And the second element of that element, letters[1][1][1][1]:

letters[1][1][1][1];  //=> ["e"]
//Finally, we want the first element in that final nested array, letters[1][1][1][1][0]:

letters[1][1][1][1][0];   //=> "e"
*/
// Iterating over nested objects and arrays



const primes = [2, 3, 5, 7, 11];

shallowIterator(primes);

function shallowIterator(target) {
  for (const key in target) {
    if (typeof target[key] === "object") {
      for (const nestedKey in target[key]) {
        console.log(target[key][nestedKey]);
      }
    } else {
      console.log(target[key]);
    }
  }
}

shallowIterator(numbers);

