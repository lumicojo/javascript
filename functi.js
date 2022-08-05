function doNothing() {}
function sayHello() {
    console.log("Hello!");
}
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
}
doSomething("anything");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);


function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");
say("Julio", "hello");

function say(greeting, firstName) {
    console.log("firstName:", firstName);
    console.log("greeting:", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Howdy", "partner"));

function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
function say(greeting, firstName) {
  console.log("hi Nai!");
  return `${greeting, firstName}!`;
}