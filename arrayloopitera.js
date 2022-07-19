/*
For loop

let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

while loop
let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let j = 0;

while (j < myArray.length) {
  console.log(myArray[j++]);
}

for...of
const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of myArray) {
  console.log(element);
}


Iterating over... strings?
for (const char of 'Hello, world!') {
  console.log(char);
}
Iterating over objects
for (const [KEY] in [OBJECT]) {
  // Code in the statement body
}


only pass keys
const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: '10004',
};

for (const key in address) {
  console.log(key);
}


combining the passed-in key with the bracket operator:

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


use the dot operator!
address.key = "Let's have a 'key' key!";

for (const key in address) {
  console.log(address.key);
}
*/
