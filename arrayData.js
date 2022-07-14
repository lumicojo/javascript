const theBeatles = [
  "John Lennon",
  "Paul McCartney",
  "Ringo Starr",
  "George Harrison",
];

//Key	                Value
//"liverpool"	    "The Beatles"
//"manchester"	   "The Smiths"
//"coventry"	     "Delia Derbyshire and the BBC Radiophonic Band"
//"london"	      "Ziggy Stardust and the Spiders from Mars"

const englishBandsByCity = {
  liverpool: "The Beatles",
  manchester: "The Smiths",
  coventry: "Delia Derbyshire and the BBC Radiophonic Band",
  london: "Ziggy Stardust and the Spiders from Mars",
};

//////////Nesting
const englishMusicByCity = {
  manchester: [
    {
      bandName: "The Smiths",
      memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
    },
    {
      bandName: "Joy Division",
      memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
    },
  ],
};

//englishMusicByCity["manchester"][0]["bandName"]; //=> "The Smiths"
//englishMusicByCity["manchester"][0]["memberNames"]; //=> ["Morrissey", "Johnny", "Andy", "Mike"]

//console.log(
//  `There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`
//);
//=> "There were 4 members in The Smiths"

//magine that we're working on a lottery application that has to represent the winning lottery numbers. We could do that as follows:
const firstNumber = 32;
const secondNumber = 9;
const thirdNumber = 14;
const fourthNumber = 33;
const fifthNumber = 48;
const powerBall = 5;

function logWinningNumbers(first, second, third, fourth, fifth, power) {
  console.log("Winning numbers:", first, second, third, fourth, fifth, power);
}

logWinningNumbers(
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  fifthNumber,
  powerBall
);

//Create an array
["This", "is", "an", "array", "of", "strings."];
["Hello, world!", 42, null, NaN];

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
const flowers = ["Rose", "Tulip", "Orchid", "Lily"];

const myArray = ["This", "array", "has", 5, "elements"];
//We can find out how many elements an Array contains by checking the Array's built-in length property:
myArray.length;
// => 5

const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}

logWinningNumbers(winningNumbers);