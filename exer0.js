///// 10- Exercise 1- Max of two numbers

//Write a function that takes two numbers
//and returns the maximum of the two.
//Call that function give a different argument and
// make sure it's working properly.

// let number = max(1, 2);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }
// //we clean up
let number = max(5, 10);
 console.log(number);

 function max(a, b) {
   return (a > b) ? a : b;
 }

 //Implement this function.
//Function isLandscape, it takes two
//parameters width, and height of an image
//and returns true width is greater than
//height .Otherwise return false

let mes = (4, 5);
console.log(mes);

function isLandscape(width, height) {
  return mes (width > height) ? width : height;
}


console.log(isLandscape(300, 600));  false
console.log(isLandscape(600, 300));  true
function isLandscape(width, height) {
  return(width > height);

}
///////  12 Exe 3- fizzBuzz Algorism  this is interview

//we the function called fizz buzz,we give  it an
//input and return a string
//declare a constant called output.Here we call
//fizzBuzz and pass an input like 3. Then log output on the console.

//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not number => 'Not a number'
const output = fizzBuzz(false); // 3, 5, 15 ,7
// we move fizzBuzz because it was not reading
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN      //'Not a number'
  if ((input % 3 === 0) && (input % 5 === 0))  //first expression () and second exp())
   return'FizzBuzz'
  
  if (input % 3 === 0)
   return 'Fizz';
  if (input % 5 === 0) 
   return 'Buzz';
  
   return input;

}