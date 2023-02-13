// calculate the sum of all numb in array
const numbers = [1, -1, 2, 3];
let sum = 0;
for (let number of numbers)
  sum += number;
console.log(sum);

/// or
// const sum = numbers.reduce(
 //  (accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);
