// declare a variable initialize to 0
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++ // this give 1 to 10
// }


// if you want to jump out of the loop
// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   console.log(i);
//   i++  // you get 0,1,2,3,4
// }


// we want to see if i is a even number or not
let i = 0;
while (i <= 10) {
  //if (i === 5) break;// u get out the loop
  if (i % 2 === 0) { // if it is i want to continue
    i++;
    continue;// you go to next iteration
  }
  console.log(i);
  i++;
} // = 1,3,5,7,9
