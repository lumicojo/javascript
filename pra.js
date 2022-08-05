const employee = {
  name: "tom",
  streetAdress: "262 vest westvile"
}
function updateEmployeeWithKeyAndValue(object, key, value ) {
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}
//function deleteFromEmployeeByKey(object, key); {
  //newEmployee[key]
//}

function introduction(name) {
  return(`Hi, my name is ${name}.`);
}

//takes in an argument of a name and returns a phrase with that name using string i

function introductionWithLanguage(name, language) {
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);   
}
//takes in two arguments, a name and a language, and returns a phrase using those arguments
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
//takes in two arguments, a name and a language, and language defaults to JavaScript

function add() {

}

function subtract(){

}
function multiply() {

}
function divide() {

}
function add(a, b) {
    return(a + b)
}
function subtract(a, b) {
    return(a - b)
}
function multiply(a, b) {
    return(a * b)

}
function divide(a, b) {
    return(a / b)
}
function increment(n) {
    return(n + 1)
}
function decrement(n) {
    return(n - 1)
}
function makeInt(n) {
    return parseInt(n)
}
function makeInt(n) {
    return parseFloat(n)
}
function preserveDecimal(n) {
    return parseFloat(n)
}
/*
basic math functions
    ✓ 'add()' is a valid function
    ✓ 'subtract()' is a valid function
    ✓ 'multiply()' is a valid function
    ✓ 'divide()' is a valid function
    ✓ add(a, b) adds two numbers and returns the result
    ✓ subtract(a, b) subtracts b from a and returns the result
    ✓ multiply(a, b) multiplies two numbers and returns the result
    ✓ divide(a, b) divides a by b and returns the result
    ✓ increment(n) increments n and returns the result
    ✓ decrement(n) decrements n and returns the result

  makeInt(n)
    ✓ parses n as an integer and returns the parsed integer
    ✓ assumes base 10
    ✓ returns NaN as appropriate

  preserveDecimal(n)
    ✓ preserves n's decimals (it parses n as a floating point number) and returns the parsed number
    ✓ returns NaN as appropriate
*/
