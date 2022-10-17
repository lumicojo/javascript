

// Array Method
const string = "Hello";

string.toUpperCase();
//=> "HELLO"
//////////////   Add Elements to an Array
///////////////////        .push() and .unshift()

const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
superheroes.push("Wonder Woman");
console.log(superheroes);

const cities = ["New York", "San Francisco"];
cities.unshift("Boston", "Chicago");
// => 4
console.log(cities);


/////         Spread Operator ... make copy

const coolCities = ["New York", "San Francisco"];
const copyOfCoolCities = [...coolCities];
console.log(copyOfCoolCities);

const allCities = ["Los Angeles", ...coolCities];
console.log(coolCities);
console.log(allCities);


const coolCats = ["Hobbes", "Felix", "Tom"];
console.log(coolCats);
const allCats = [...coolCats, "Garfield"];
console.log(allCats);


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(days.pop()); //it took of from the backSun

console.log(days);

console.log(days.shift()); // off from the front Mom
console.log(days);

//.slice
console.log(days.slice(2, 5)); // 2 arguments.slice
//console.log(days.slice(5)); //1 argument.slice

const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice();

console.log(primes);
copyOfPrimes;
const copyOfPrimesUsingSlice = primes.slice();


const copyOfPrimesUsingSpreadOperator = [...primes];
console.log(primes.push(11));
console.log(primes);
// => [2, 3, 5, 7, 11]

console.log(copyOfPrimesUsingSlice);
// => [2, 3, 5, 7]

console.log(copyOfPrimesUsingSpreadOperator);


  
  const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
  ];
  
  console.log(menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu"));
  console.log(menu);
  const newMenu = [
    ...menu.slice(0, 1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(3),
  ];
  console.log(menu);
  console.log(newMenu);
  

  