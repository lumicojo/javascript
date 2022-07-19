let count = 1;
while (count < 5) {
  debugger;
  if (count === 1) {
    console.log(`This loop has executed ${count} time.`);
  } else {
    console.log(`This loop has executed ${count} times.`);
    debugger
  }
  count += 1;
}

node inspect index.js
Place one or more breakpoints in your code using the debugger keyword
Run node inspect <filename> in the terminal to launch the debugger
Run cont at the debug prompt to start execution of the code and advance to the first breakpoint
Run repl at the debug prompt to enter the debugger's REPL
Check the value of any variables by entering the variable name at the > prompt
Exit the REPL using ctrl-c
Continue stepping through the code using cont
Run .exit or type ctrl-c twice to exit the debugger

Stack traces

function first() {
  second(); // Line 13
}

function second() {
  third(); // Line 17
}

first(); // Line 20

Let's read it backwards and reconstruct the events that led to the error:

The JavaScript engine reaches line 20 and invokes first().
Inside first(): the engine reaches line 13 and invokes second().
Inside second(): the engine reaches line 17 and sees the identifier third.
The engine can't find a declared variable or function with that name so it throws an error inside second().
To fix the third is not defined error, let's first try declaring third as the simplest thing we know, a variable:

function first() {
  second();
}

function second() {
  third();
}
//we change this const
//const third = 'Declaring a new variable.';
// to this
function third() {
  console.log("Now I'm a function!");
} //We'll fix this by declaring third() as a function instead of a simple variable: 
first();
//=> errors.js
//That'll be $1, please!
//Now I'm a function!
Uncaught ReferenceError: _____ is not defined (Links to an external site.)
Uncaught TypeError: _____ is not a function (Links to an external site.)
Uncaught SyntaxError: missing ) after argument list (Links to an external site.)
Uncaught TypeError: Assignment to constant variable. (Links to an external site.)
