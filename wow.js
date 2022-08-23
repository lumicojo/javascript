const cards =(["Charlie", "Samip", "Ali"], "birthday");
function writeCards(name, birthday) {
    for (let i = 0; i < name.length;  i++) {
        console.log(`Thank you ${name [i]} for wonderful ${birthday [i]} gift!`);
    }
    return name, birthday;
}
writeCards

let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  }


/*
let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
//This is perfectly fine as an alternative way to describe:

for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}
*/
/*
let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
//This is perfectly fine as an alternative way to describe:

for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}
*/







/*

function writeCards(name, birthday) {
  const birthdayMessage =[]  
  for (let i = 0; i < name.length;  i++) {
      birthdayMessage.push(`Thank you, ${name [i]}, for the wonderful ${birthday} gift!`);
  }
  return birthdayMessage;
  //debugger;
} 
writeCards(["carmen", "tom"], "suprise");
*/

function addNums(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber)
}

addNums(1,2) // 3
addNums(21,2) // 23
addNums(221,22) // 243
addNums(12,212) //224
addNums(421,223) //644


//This works becuase we are using the arguments
function addNums(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber)
}

addNums(1,2) // 3
addNums(21,2) // 23
addNums(221,22) // 243
addNums(12,212) //224
addNums(421,223) //644


// DOES NOT WORK BECAUSE HARD CODING
function notWorkingAddNums(firstNumber, secondNumber) {
  console.log(1 + 2)
}

notWorkingAddNums(1,2) // 3
notWorkingAddNums(21,2) // 23
notWorkingAddNums(221,22) // 243
notWorkingAddNums(12,212) //224
notWorkingAddNums(421,223) //644


function sayString(string){
  console.log(string)
}

sayString("hello")
sayString("bye")
sayString("mogli")
