// Defining the function:
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Calling the function:
  sum(3, 6); // 9
/////////////////////
// Named function
function rocketToMars() {
    return 'BOOM!';
  }
  
  // Anonymous function
 // const rocketToMars = function() {
   // return 'BOOM!';
  //}
////////////

//function expresion
const dog = function() {
    return 'Woof!';
  }
/////////////////////////////
  // The parameter is name
function sayHello(name) {
    return `Hello, ${name}!`;
  }
  ////////////////
// With return
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Without return, so the function doesn't output the sum
  function sum(num1, num2) {
    num1 + num2;
  }
/////////////////////
function add(num1, num2) {
    return num1 + num2;
  }
/////////////////
// Defining the function
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Calling the function
  sum(2, 4); // 6
////////////////////
// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}
printColor(); 

//passing the argument
function doSomething(thing) {
  console.log(thing);
}
doSomething("anything");

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Juilo");   

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

//the return keyword
function add(x, y) {
  x + y;
  return x+y;
}
console.log(add(1, 2));

function logTwoValues(value1, value2) {
  console.log(`The two value are ${value1}, ${value2}`);

}
say("value1", "value2");


function logTwoValues(value1, value2) {
  console.log("value1", value1);
  console.log("value2", value2);
  console.log(`The two value are ${value1}, ${value2}`);
  
}

function sayHello(firstName) {
  console.log(`Hello, ${firstName}!`);
}

///DEFAULT  VALUE 
function sayHelloTo(firstName = "User") {//default value(user)
  console.log(`Hello, ${firstName}!`);
}

///DEFAULT  VALUE (JavaScript)
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//console.log('Hello World');
//let name = 'mosh'; // string
//let interestRate = 1//number
//let isApprove = false;
//let firstName = undefined;
//let selectedColor = null;

        //Object
//let name = 'Mosh';
//let age = 30;
//we have 2 propeties  key value pairs name and age
let person = {  //object literal {}
  name: 'Mosh',
  age: 30
};
//console.log(person);
   
//Dot Notation    //change proprety
person.name = 'John'
//console.log(person.name);
  ////  or
// Bracket Notation  Array
person['name'] = 'Mary';
//console.log(person.name);
let selectedColor = ['red', 'blue'];
selectedColor[2] = 1; //dinamic
//console.log(selectedColor.length);

// 7- Function

function greet(name) { //parameter for nme
    console.log('Hello ' + name);
}
greet('John', 'Smith'); //John is argument for name parameter
greet('Mary') // not defind


//performing a task
function greet(name, lastName) { //parameter for nme
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');   

/////  8- Types of Function

// Calculating a value
function square(number) {
    return number *number;
}
//console.log(square(2)); //function call another function

