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