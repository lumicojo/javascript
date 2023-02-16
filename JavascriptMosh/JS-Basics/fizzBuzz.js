// if number divisible by 3 = Fizz
// if number divisible by 5 = Buzz
// if number divisible by 3 and 5 like 15 = FizzBuzz
// if number not divisible by 3 or 5 = same input
// if input is not a number = NaN

const output = FizzBuzz(5);
console.log(output);

function FizzBuzz(input) {
  //console.log(typeof input) just to check if is a number
  if (typeof input !== 'number')
    return 'NaN';
  if (input % 3 === 0 &&  input % 5 === 0)
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 === 0)
    return 'Buzz';

  return input;
}
