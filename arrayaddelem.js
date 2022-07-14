//const coolCities = ["New York", "San Francisco"];
//const allCities = ["Los Angeles", ...coolCities];
//coolCities;
// => ["New York", "San Francisco"]
//allCities;
// => ["Los Angeles", "New York", "San Francisco"]

///// to add a new item to the end of an Array, we type in the new element after spreading the elements in the original array:
const coolCats = ["Hobbes", "Felix", "Tom"];
const allCats = [...coolCats, "Garfield"];
coolCats;
// => ["Hobbes", "Felix", "Tom"]
allCats;
// => ["Hobbes", "Felix", "Tom", "Garfield"]

const coolDogs = ["Sushi", "Mogly", "Tomy", "Pegy"];
const allDogs = [... coolDogs, "Betty"];
coolDogs;
allDogs;
 
//////////////   Remove Elements from an Array  .pop() and .shift()
/////       .pop()
//const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//days.pop();      // => "Sun"
//days;             // => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//////       .shift()
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.shift();      // => "Mon"
days;        // => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

////////////   .slice() NO Argument

const primes = [2, 3, 5, 7];
const copyOfPrimes = primes.slice();
primes;   // => [2, 3, 5, 7]
copyOfPrimes;      // => [2, 3, 5, 7]    original copy

const primes = [2, 3, 5, 7];
const copyOfPrimesUsingSlice = primes.slice();
const copyOfPrimesUsingSpreadOperator = [...primes];
primes.push(11);
// => 5

primes;// => [2, 3, 5, 7, 11]

copyOfPrimesUsingSlice;// => [2, 3, 5, 7]

copyOfPrimesUsingSpreadOperator;// => [2, 3, 5, 7]

///////////////          .Slice With Arguments

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.slice(2, 5);   // => ["Wed", "Thu", "Fri"]

//if no second argument the slice will run from the index specified by the first argument to the end of the Array:
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.slice(5);     // => ["Sat", "Sun"]

//To return a new Array with the first element removed, we call .slice(1):
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.slice(1);     // => ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

//// last element removed in a way that will look familiar from the previous lesson:
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.slice(0, days.length - 1);// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//.slice() provides an easier syntax for referencing the last element (or elements) in an Array:

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.slice(-1);// => ["Sun"]
days.slice(-3);// => ["Fri", "Sat", "Sun"]
days.slice(0, -1);// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


//////////////////        .splice()
//////you can add, remove or replace any element or any combination of the three

//                With a Single Argument
array.splice(start);

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.splice(2);// => ["Wed", "Thu", "Fri", "Sat", "Sun"]
days;// => ["Mon", "Tue"]
//We can use a negative 'start' index with splice(), the same as with slice():

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
days.splice(-2);// => ["Sat", "Sun"]
days;// => ["Mon", "Tue", "Wed", "Thu", "Fri"]

///          With Two Arguments
array.splice(start, deleteCount);
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
days.splice(2, 3);// => ["Wed", "Thu", "Fri"]
days;// => ["Mon", "Tue", "Sat", "Sun"]

