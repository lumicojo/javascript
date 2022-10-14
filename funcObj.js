function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');

    }
}

// const Circle1  = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);
// const circle = new Circle1(1); // circle1and(1) as a radius

//const another = new Circle(1);


//to break the code in multiple lines you need the ``

// so we get in console a real circle with 2 members;
// circle
//  {radius: 1, draw: ƒ}
//   draw: ƒ()
//   radius: 1
//   [[Prototype]]: Object

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1)
Circle.apply({}, [1, 2,3]); // this sec arg apply if you have [array]
const another = new Circle(1);