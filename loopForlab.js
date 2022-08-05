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
/The loop body is the set of statements that we want to run when the condition evaluates to true.


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



