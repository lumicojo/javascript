// Joining Arrays
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

// this is for stings
//string // Split method goes hand in hand with array
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);  // it become an array . Know we can use separetor
/////////////////////(5) ['This', 'is', 'my', 'first', 'message']

const combined = parts.join('-');
console.log(combined); // This-is-my-first-message
