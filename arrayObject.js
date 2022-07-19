Add an Object Property Using Dot 

const circle = {}; // Create `circle` and set it to an empty Object
circle;//=> {}
circle.radius = 5; // Create the key inside `circle` and set its value to 5
circle;//=> { radius: 5 }
//or  we can use any expression as the value:

const circle  = {}
circle.radius = 5;
circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;
//=> 31.41592653589793
circle["area"] = Math.PI * circle.radius ** 2;
//=> 78.53981633974483
circle;
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }
//we can add, modify or delete properties

Modify a Property Using Dot or Bracket Notation
We can update or overwrite existing properties simply by assigning a new value to an existing key:
const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};
mondayMenu.fries = "Sweet potato";

mondayMenu;
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Cobb" }

function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value; //Why are we using bracket notation here?

  return obj;
}  

update our mondayMenu to the tuesdayMenu:

const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Sweet potato",
  salad: "Cobb",
};

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");
tuesdayMenu;
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }
tuesdayMenu.salad;  //=> "Caesar"
mondayMenu.salad;   //=> "Caesar"

Update an Object Nondestructively Using the Spread Operator

function nondestructivelyUpdateObject(obj, key, value) {
  // Code to return new, updated menu object
}
use the spread operator to copy all of the old menu Object's properties into a new Object:

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };
// Code to return new, updated menu object goes here
}
leaving the original menu Object unchanged:

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}
const sundayMenu = nondestructivelyUpdateObject(
  tuesdayMenu,
  "fries",
  "Shoestring"
);
tuesdayMenu.fries;//=> "Sweet potato"
sundayMenu.fries;//=> "Shoestring"


Remove a Property from an Object

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};
delete wednesdayMenu.salad;  //=> true
wednesdayMenu;
//=> { cheesePlate: { soft: "Brie", semiSoft: "Fontina", hard: "Provolone" }, fries: "Sweet potato" }

Array AR OBJECT

const myArray = [];
myArray.summary = "Empty array!";
myArray;//=> [summary: "Empty array!"]
myArray["summary"] = "This array is totally empty.";

myArray;   //=> [summary: "This array is totally empty."]
myArray.summary;  //=> "This array is totally empty."
myArray.push(2, 3, 5, 7);  //=> 4
myArray;  //=> [2, 3, 5, 7, summary: "This array is totally empty."]
myArray.length;//=> 4
myArray[0]; //=> 2
Hm, then maybe it's the last element?
myArray[myArray.length - 1]; //=> 7
