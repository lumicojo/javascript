//This is infinite loop
//while (true) {
//  console.log("say this forever...");
//}
/*
while (-1) {
  // -1 is truthy....
  console.log("say this forever...");
}

while (null) {
  console.log("I will never run");
}
*/
/*
let count = 0; // Initialize a counter variable; note that we need to use `let` here
while (count < 3) {
  //A Boolean expression that uses the counter to decide whether to keep looping
  console.log(`I am the ${count}, I love to count!`); // The work the loop does
  count = count + 1; // Update the counter variable; this keeps track of how many times the loop has executed
}

let count = 0; 
while (count < 3) {
  console.log(`I am the ${count}, I love to count!`); // The work the loop does
  count = count + 1; 
}
*/

//////////////////////   ++ + same
let count = 0; 
while (count < 3) { 
  console.log(`I am the ${count}, I love to count!`); 
  count++; 
}
///do...while Loop
do {
  console.log(`I will execute once`);
} while (false);

//The do while loop will always ask them to enter their password
// the first time, and can continue to ask as long as
// (while) the value they enter doesn't meet the password requirements.

