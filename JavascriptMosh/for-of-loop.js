// this is frm ES 6
// for-of-loop

// define an array colors with 3 values
const colors = ['red', 'green', 'blue'];
for (let color of colors)
  console.log(color);


  //for-in loop
const person = {
  name: 'Mosh',
  age: 30
};
for (let key in person)
  console.log(key, person[key]);
