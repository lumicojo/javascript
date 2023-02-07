//11 Joining array 
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

//spit method is part of the sting example;
const message = 'This is my first message';
// so we can split message like this;
const parts = message.split(' ');
console.log(parts);// we have 5 elements
// == (5) ['This', 'is', 'my', 'first', 'message']
// know we have an array we can use separator
// we use haifin -
const combined = parts.join('-');
console.log(combined);
// == This-is-my-first-message

//this method is good when you use a URL