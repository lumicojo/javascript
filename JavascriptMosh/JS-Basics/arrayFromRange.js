//make a func arrayFromRange  w 2 parametry min, max
// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   // we need a forLoop to generate from min to max
//   for (let i = min; i <= max; i++)
//   // push i in to array
//   output.push(i);
//   return output;
// }



const numbers = arrayFromRange(1, 4);
console.log(numbers);
// make a function with 2 parameter min and max
function arrayFromRange(min, max) {
  // make a empty array
  const array = [];
  // use for loop to
  for (let i = min; i <= max; i++)
  // push the item in array
  array.push(i);
//return array
  return array;       // = [1,2,3,4]
}
