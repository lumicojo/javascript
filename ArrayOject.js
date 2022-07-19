// const address = "11 Broadway, 2nd Floor, New York, NY 10004";
// const address = ["11 Broadway", "2nd Floor", "New York", "NY", "10004"];
// they just isert the 3rd floor in the second SVGTextPositioningElement
// address[1] = "3rd Floor";
// address;
// //=> ["11 Broadway", "3rd Floor", "New York", "NY", "10004"]

// We can have empty Objects:
// const obj = {};
// Or Objects with a single property:
// const obj = { key: value };
// multiple
// const obj = {
//   key1: value1,
//   key2: value2,
// };

// or
// nested Oject

// const obj = {
//   key1: value1,
//   key2: {
//     innerKey1: innerValue1,
//     innerKey2: innerValue2,
//   },
// };

const address = {
  street: {
    line1: "11 Broadway",
    line2: "2nd Floor",
  },
  city: "New York",
  state: "NY",
  zipCode: "10004",
};//has four keys: street, city, state, and zipCode

//Multiple properties can have the same value:

const meals = {
  breakfast: "Avocado toast",
  lunch: "Avocado toast",
  dinner: "Avocado toast",
};
meals.breakfast;  // => "Avocado toast"
meals.dinner;    // => "Avocado toast"

//keys must be unique.
// If the same key is used for multiple properties, 
//only the final value will be retained. The rest will be overwritten:


const meals = {
  breakfast: "Avocado toast",
  breakfast: "Oatmeal",
  breakfast: "Scrambled eggs",
};

meals;
// => { breakfast: "Scrambled eggs" }

Access a Value Stored in an Object

Dot Notation

address.street;
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address.city;
//=> "New York"

address.state;
//=> "NY"

address.zipCode;
//=> "10004"
// to access a value inside address.street, we simply append the inner key,
address.street.line1;
//=> "11 Broadway"

address.street.line2;
//=> "2nd Floor"

//     Bracket Notation

address["street"];//=> { line1: "11 Broadway", line2: "2nd Floor" }
address["street"]["line1"];//=> "11 Broadway"
address["street"]["line2"];//=> "2nd Floor"
address["city"];//=> "New York"
address["state"];//=> "NY"
address["zipCode"];//=> "10004"

Nonstandard Keys

const wildKeys = {
  "Cash rules everything around me.": "Wu",
  "C.R.E.A.M.": "Tang",
  "Get the money.": "For",
  "$ $ bill, y'all!": "Ever",
};

//camelCaseEverything
//Start the key with a lowercase letter
//No spaces or punctuation

Accessing Properties Dynamically

address["zip" + "Code"];//=> "10004"
///
const meals = {
  breakfast: "Oatmeal",
  lunch: "Caesar salad",
  dinner: "Chimichangas",
};
let mealName = "lunch";
meals[mealName]; //=> "Caesar salad"
mealName = "dinner"; //=> "dinner"
meals.mealName;  //=> undefined

////creation of a new Object.
const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals = {
  [morningMeal]: "French toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};

meals;
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }
//////

////// with out braket
   //////each key as a literal identifier instead of a variable


const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals = {
  morningMeal: "French toast",
  middayMeal: "Personal pizza",
  eveningMeal: "Fish and chips",
};

meals;
//=> { morningMeal: "French toast", middayMeal: "Personal pizza", eveningMeal: "Fish and chips" }

    Object.keys()value is an Array contain all the key

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

Object.keys(wednesdayMenu);
//=> ["cheesePlate", "fries", "salad"]

  Object.values()
/////returns an array containing values not the keys