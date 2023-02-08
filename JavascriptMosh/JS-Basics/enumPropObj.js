const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};
// this is for loop  the easy way to enumerate
for (let key in circle)
  //console.log(key);     = radius , draw
  console.log(key, circle[key]);
// value of radius is 1 and  draw is a function


// for of loop
for (let key of Object.keys(circle))
  console.log(key);

  //method entries this is another ethod to get all the property in obj
  for (let entry of Object.entries(circle))
  console.log(entry);
  // constructor function
// function Object () {}
// const x ={ value: 1};
// const x = new Object(;)

// In operator
if ('radius' in circle) console.log('yes');
