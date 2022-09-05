for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

//const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

//wrapGifts(gifts);


function writeCards(names, birthday) {
    const newArray = []
    for (let i = 0; i < names.length; i ++ ) {
      const newString = `Thank you, ${names[i]}, for the wonderful ${birthday} gift!`;
      newArray.push(newString);
    };
    return newArray;
}  


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);


let countup = 0;
while (countup < 10) {
  console.log(countup++);
}


for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
}

let countDown = 10;
while (countDown > 0) {
    countDown--;
    console.log(countDown);
}
console.log(countDown);
  
  