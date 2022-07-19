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