//for-in loop
const person = {
  name: 'Mosh',
  age: 30
};
for (let key in person)
  console.log(key, person[key]);

// dot notation
//person.name
// bracket notation
//person['name']

// define an array colors with 3 values
const colors = ['red', 'green', 'blue'];
for (let index in colors)
  //console.log(index); // = 0,1,2
  // if want to get elements use []brackets notation
  console.log(index, colors[index]); // 0 red, 1 green ,2 blue
