// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };
// // this is for loop
// for (let key in circle)
//   //console.log(key);     = radius , draw
//   console.log(key, circle[key]);
// // value of radius is 1 and  draw is a function


// for of loop
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

for (let key of Object.keys(circle)
  console.log(key);
