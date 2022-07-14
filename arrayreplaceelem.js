////////Replace Elements in an Array
////.splice() with 3+ arguments

//array.splice(start, deleteCount, item1, item2, ...)
// We can replace a single element in an Array as follows, discarding a card and drawing a new one:
const cards = [
  "Ace of Spades",
  "Jack of Clubs",
  "Nine of Clubs",
  "Nine of Diamonds",
  "Three of Hearts",
];
cards.splice(2, 1, "Ace of Clubs");  // => ["Nine of Clubs"]
cards;  // => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "
//We have deleted "Nine of Clubs" and inserted "Ace of Clubs" in place, effectively replacing the original card.

//Or we can remove two elements and insert three new ones as our restaurant expands its vegetarian options:
const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];
menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu");
// => ["Cheeseburger", "Fish and Chips"]
menu; 
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]

// we can use it to insert any number of elements anywhere within an Array by passing 0 as the second argument.
//Here we're adding new books to our library in alphabetical order:
const books = ["Beloved", "Giovanni’s Room", "The Color Purple", "The Grass Dancer"];
books.splice(2, 0,  "Kindred", "Love Medicine");
// => []
books;
// => ['Beloved', 'Giovanni’s Room', 'Kindred', 'Love Medicine', 'The Color Purple', 'The Grass Dancer']

//Using Bracket Notation to Replace Elements

const cards = [
  "Ace of Spades",
  "Jack of Clubs",
  "Nine of Clubs",
  "Nine of Diamonds",
  "Three of Hearts",
];
cards[2] = "Ace of Clubs";
// => "Ace of Clubs"
cards;
// => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]


