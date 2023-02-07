
// showPrime(20);
// //the first prime number is 2 need for loop
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++) {
//     // for each numb need to check if is prime
//     //we need veriable
//     let isPrime = true;
//     // we need another loop starts with 2 all the way to current numb witch is i
//     // 2 - current (i)
//     for (let factor =2; factor < number; factor++) {
//       if (number % factor === 0) {// if numb divided
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

                 //OR
//modifi this code extract a new function make shore each function is small
// and responsible for single task

showPrime(10);
function showPrime(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor =2; factor < number; factor++)
    if (number % factor === 0) // if numb divided
      return false;
  return true;
}
