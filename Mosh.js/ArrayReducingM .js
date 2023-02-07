// 16- Reducing Array
//calculate the sum of all this numbers
// const numbers = [1, -1, 2, 3];
// // accumulator = 0     currentValue = c and the round  will be set to first number which is 1 
// // we add them a+c together so we get 1 and a will be set after call back function is execueted so a will be 1
// // a = 0, c = 1 => a = 1
// // a = 1, c = -1 => a = 0
// // a = 0 , c = 2 => a = 2
// // the last call a=2, c= 3 the result a will be 5
// // we convert the array in a single value
// // a = 2, c = 3 => a = 5 
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
//console.log(sum); // = 5

// we can reduce al elements in the array in a single value that 
// is the sum on this array.
// call back func first argument and second argument is the initial value 0 for accumulator

/////     or  shorter

const numbers = [1, -1, 2, 3];
// a = 1, c = -1 => a = 0
// a = 0 , c = 2 => a = 2
// a = 2, c = 3 => a = 5 
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // = 5