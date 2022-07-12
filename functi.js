/*function sayHello() {
console.log('Hello!');
}
sayHello();
*/
hi = "sayHello"
function sayHelloToGuadalupe() {
console.log("Hello, Guadalupe!");
  }
sayHelloToGuadalupe();  

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
sayHelloToLiz(); 

function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
sayHelloToSamip();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
  console.log(thing);
}

doSomething("anything"); // passing the argument 'anything' into our function
//We pass the argument at the time that we call the function, by including it inside the parentheses after the name of the function:
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"
//What if we want our function to say something other than "Hello"? Well, we can move the greeting to a parameter as well:
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio"); 
say("Julio", "hello");
function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
function add(x, y) {
  return x + y;
} 
console.log(add(1,2));
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));


// In JavaScript, in order to have our function return a value, we need to use the return keyword.
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
console.log(say("Hello", "Liz"));
//function does not have a return value! This is because a console.log() doesn't return anything —

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Howdy", "partner"));

console.log(add(1, 2));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log();  
  function sayHello(dogsName) {
    console.log(`Hello, ${nameDog}`);
}
sayHelloTo("Sushi");

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
  
function say(firstName, lastName){
    console.log("Sushi", "Cojo");
return `${firstName}, ${lastName}!`;
}
console.log();
  
  