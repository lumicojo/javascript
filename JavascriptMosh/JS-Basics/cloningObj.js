
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// Old way
// const another = {};
// // use the for loop to eterate all the property in this obj
// // and copieem in to the new obj
// for (key in circle) // this is the old way
//   another[key] = circle[key]; //another['radius'] = circle['radius']; the circle[radius] goes in another['radius']
// console.log(another);


// this is the new way
// const another = Object.assign({}, circle);
// console.log(another);

// exm:
// const another = Object.assign({
//   color: 'yellow'
// }, circle);
// console.log(another);

//clone using spred operator

const another = { ...circle };

console.log(another);

