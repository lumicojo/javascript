

// Array Method
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


