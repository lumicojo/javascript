/*  this i s for loop
let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
////////////////
/* this is while loop
let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let j = 0;
while (j < myArray.length) {
  console.log(myArray[j++]);
}
*/

// this is for... of
const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of myArray) {
  console.log(element);
}

//iterate over object
const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: "10004"
  };
  
  for (const key in address) {
    console.log(address[key]);
  }

  // using .operator
  address.key = "Let's have a 'key' key!";

for (const key in address) {
  console.log(address.key);
}

/*// shallowIterator
const numbers = [1, [2, [4, [5, [6]], 3]]];

shallowIterator(numbers);
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
*/
/////////////////////////////////
/// deepIterator()
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