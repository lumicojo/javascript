number += 3; //=> 8
//-= modifies the value to the operator's left by subtracting from it the value to the operator's right:
number -= 2; //=> 6
//*= modifies the value to the operator's left by multiplying it by the value to the operator's right:
number *= 10; //=> 60
//   /= modifies the value to the operator's left by dividing it by the value to the operator's right:
number /= 5; //=> 12

//reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5
function multiply(a, b) {
  return "something";
}
function multiply(a, b){
  return a * b;
}
function divide(a, b) {
  return "something";
}
function divide(a, b) {
  return a / b;
}
function increment(n) {
  return "result";
}
function increment(n) {
  return n + 1;
}
function decrement(n) {
  return "result";
}
function decrement(n) {
  return n - 1;
}
parseInt("2", 10); //=> 2
parseInt("nonsense!", 10);
parseFloat("80.123999"); // 80.123999

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}
function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);

}
