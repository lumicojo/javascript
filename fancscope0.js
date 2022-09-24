//block scope defines a scope for variables
if (true) {
    // "if" block scope
    const message = 'Hello';
    console.log(message); // 'Hello'
  }


  // for loop defines a scope:
  for (const color of ['green', 'red', 'blue']) {
    // "for" block scope
    const message = 'Hi';
    console.log(color);   // 'green', 'red', 'blue'
    console.log(message); // 'Hi', 'Hi', 'Hi'
  } 


// while statement creates a scope for its variables:

//while (true/* condition */) {
    // "while" block scope
//    const message = 'Hi';
//    console.log(message); // 'Hi'
//  }


  //Function scope
  function run() {
    // "run" function scope
    var message = 'Run, Forrest, Run!';
    console.log(message); // 'Run, Forrest, Run!'
  }
  run();
  
  function run() {
    // "run" function scope
    const two = 2;
    let count = 0;
    function run2() {}
    console.log(two);   // 2
    console.log(count); // 0
    console.log(run2);  // function
  }
  run();  
 
  
//Lexical scope
function outerFunc() {
    // the outer scope
    let outerVar = 'I am from outside!';
    function innerFunc() {
      // the inner scope
      console.log(outerVar); // 'I am from outside!'
    }
    return innerFunc;
  }
  const inner = outerFunc();
  inner();  