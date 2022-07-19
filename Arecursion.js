/*
//shallowIterator()
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

shallowIterator(numbers);//There has to be another way!

Recursion

//a better way to write our shallowIterator() to take advantage of recursion:

That's recursion!
function deepIterator(target) {
  if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

//deepIterator() with an argument, the function first checks if the argument is an object (recall that the typeof operator returns
// "object" for arrays as well). If the argument isn't an object, deepIterator() simply console.log()s out the argument and exits.
// However, if the argument is an object, we iterate over the properties (or elements) in the object, passing each to deepIterator() and re-invoking the function. 


const numbers = [1, [2, [4, [5, [6]], 3]]];
deepIterator(numbers);
*/
function deepIterator(target) {
  console.log("Argument: ", target);
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log("Logged value: ", target);
  }
}

const numbers = [1, [2, [4, [5, [6]], 3]]];

deepIterator(numbers);

function deepIterator(target) {
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

const userInfo = {
firstName: "Avi",
lastName: "Flombaum",
company: {
  name: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
},
friends: [
  {
    firstName: "Nancy",
    lastName: "Burgess",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
  },
  {
    firstName: "Corinna",
    lastName: "Jackson",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Lead Developer",
    },
  },
],
projects: [
  {
    title: "Flatbook",
    description:
      "The premier Flatiron School-based social network in the world.",
  },
  {
    title: "Scuber",
    description:
      "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
  },
],
};

deepIterator(userInfo);
//helpful to use a counter variable:
/*
let counter = 0;

function deepIterator(target) {
  counter++;

  if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(userInfo);
*/
function deepIterator(target) {
  if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else if (Array.isArray(target)) {
    console.log("We found an array");
    // iterate through the array
  } else {
    // console.log(target);
  }
}

deepIterator(userInfo); //We can fix this by reversing the order of our conditions.
// Let's also put the second console.log() back in, and try running the code again.

function deepIterator(target) {
  if (Array.isArray(target)) {
    // iterate through the array
    console.log("We found an array");
  } else if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(userInfo); //The logs are working for the primitive values and the non-array object,
// so now we just need to code the body of our new if statement, using for...of:
function deepIterator(target) {
  if (Array.isArray(target)) {
    for (const element of target) {
      deepIterator(element);
    }
  } else if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(userInfo);

//. Create some other nested data structures and traverse over them with shallowIterator() and deepIterator(),