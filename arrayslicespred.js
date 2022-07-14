/////////////////          Slicing and Spreading
/////////// Combining .slice() and the spread operator allows us to replace elements nondestructively, leaving the original Array unharmed:

const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];

const newMenu = [
  ...menu.slice(0, 1),
  "Veggie Burger",
  "House Salad",
  "Teriyaki Tofu",
  ...menu.slice(3),
];

menu;
// => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]

newMenu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]


const food = [
  "ice cream",
  "chocolate",
  "pizza",
  "frence fries"
];
const newFood = [
  ...food.slice(1, 2),
  "cockie",
  "cheese steak",
  ...food.slice(3),
];
food;
newFood;
//you need console.log (food) to be able to see the print
