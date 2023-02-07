// This is how difine a function:
// function draw() {
//  }

// Factory Function
function createCircle(radius) {
  return {
  radius,
  draw() {
    console.log('draw')
  }
};
}
//we create a cercoe func  and we create a single method for both circles
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);




// this is the long way

// function createCircle(radius, location) {
//   return {
//   radius: radius,
//   location: location,
//   isVisible: true,
//   draw: function() {
//     console.log('draw')
//   }
// };
// }

