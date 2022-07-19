const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
We could then call wrapGift() on each gift individually:

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

The for loop

The for loop is made up of four statements in the following structure:
for ([initialization]; [condition]; [iteration]) {
  [loop body]
}
Initialization
Typically used to initialize a counter variable.

Condition
An expression evaluated before each pass through the loop. If this expression evaluates to true, the statements in the loop body are executed. If the expression evaluates to false, the loop exits.

Iteration
An expression executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to completion.

Loop body
Code that runs on each pass through the loop.

Use a for loop when you know how many times you want the loop to runs

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
//let age = 30 is the initialization: we're creating a variable, age
use let instead of const because we need to increment the value of age.
// use let instead of const because we need to increment the value of age.
//The iteration is age++, which increments the value of age by 1 
//We initialized age as 30, and it retains that value during the first pass through the loop. At the end of the first pass, we increment age to 31, check whether the condition still holds true, and, since it does, run the loop body again with age as 31. After that second loop, we increment age to 32, and so on.

//The loop body is the set of statements that we want to run when the condition evaluates to true.


Using for with Arrays

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

//We started our counter, i, at 0 because arrays have zero-based indexes. 
//i is less than gifts.length (3
//Our iteration, i++, increments our counter by 1 at the end of each pass through the loop.
//Run node inspect index.js in the terminal to enter the debugger, and cont at the debug
//You should see Wrapped teddy bear and added a bow! logged. In our loop body, we reference gifts[i]. Since i starts out as 0, during the first pass through the loop gifts[i] is gifts[0], which is 'teddy bear'. Continue stepping through the loop by entering cont at thedebug prompt and remember you can enter the REPL at any point to check the values of our variables, i and gifts[i].

//When you're done, remove the debugger and execute the code by running node index.js. You should see the following logged to the terminal:
//Wrapped teddy bear and added a bow!
//Wrapped drone and added a bow!
//Wrapped doll and added a bow!
