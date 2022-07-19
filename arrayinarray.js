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
/*
const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  companyName: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
  friend1firstName: "Nancy",
  friend1lastName: "Burgess",
  friend1companyName: "Flatbook Labs",
  friend1jobTitle: "Developer Apprentice",
  friend2firstName: "Corinna",
  friend2lastName: "Jackson",
  friend2companyName: "Flatbook Labs",
  friend2jobTitle: "Senior Developer",
  project1title: "Flatbook",
  project1description:
    "The premier Flatiron School-based social network in the world.",
  project2title: "Scuber",
  project2description:
    "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
};

function shallowIterator(target) {
  for (const key in target) {
    console.log(target[key]);
  }
}

shallowIterator(userInfo);
*/
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

