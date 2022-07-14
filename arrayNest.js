const egregiouslyNestedArray = [
  "How",
  ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
  "seems.",
];
egregiouslyNestedArray[0];
//=> 'How'
egregiouslyNestedArray[1];
//=> [ 'deep', [ 'can', [ 'we', [Array], 'dang' ], 'deep,' ], 'it' ]
egregiouslyNestedArray[2];
//=> 'seems.'
//we access the array nested inside that array? We simply add another set of brackets:
egregiouslyNestedArray[1][0];
//=> 'deep'

egregiouslyNestedArray[1][1];
//=> [ 'can', [ 'we', [ 'go', [Array], 'Pretty' ], 'dang' ], 'deep,' ]

egregiouslyNestedArray[1][2];
//=> 'it'

//adding another set of
egregiouslyNestedArray[1][1][1][1][1];

//Two levels is perfect for representing two-dimensional things, like a tic-tac-toe board:
const board = [
  ["X", "O", " "],
  [" ", "X", "O"],
  ["X", " ", "O"],
];

board;
// => [["X", "O", " "], [" ", "X", "O"], ["X", " ", "O"]]
board[1];
// => [" ", "X", "O"]
board[0][0];
// => "X"

board[0][2];
// => " "

board[2][2];
// => "O"
/////////////////////////// Array Method
const string = "Hello";

string.toUpperCase();
//=> "HELLO"
//////////////   Add Elements to an Array
///////////////////        .push() and .unshift()

const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
superheroes.push("Wonder Woman");
superheroes;
// => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]

const cities = ["New York", "San Francisco"];
cities.unshift("Boston", "Chicago");
// => 4
cities;
// => ["Boston", "Chicago", "New York", "San Francisco"]


/////         Spread Operator ... make copy

const coolCities = ["New York", "San Francisco"];
const copyOfCoolCities = [...coolCities];
copyOfCoolCities;
//=> ["New York", "San Francisco"]

//To add an element to the front of the new array, we simply type in the new element before spreading the elements in the original array:

