
// Factory Function
// camel notation oneTwoThreeFour...
function createCircle(radius) {
  return {
  radius,
  draw() {
    console.log('draw')
  }
};
}
const myCircle = createCircle(1);


//Constructor Function
//(is the same as create)
//Pascal notation start wit big later OneTwoThree...
function Circle(radius) {
  // we add  a new property to an empty obj
  this.radius = radius;
  this.draw = function() { // draw is a method
    console.log('draw');
  }
}
//in order to create a circle obj using the constuctor function
// you gone define const called circle
const circle = new Circle(1);

