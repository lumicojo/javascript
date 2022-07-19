/*
function countDown(number) {
  let i = number;
  while (i >= 0) {
      console.log(i);
      i--;
  }
  return number;

}  
countDown(10) 
*/
 /*   
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
*/

for (const char of 'Hello, world!') {
  console.log(char);
}

const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: '10004',
};

for (const key in address) {
  console.log(address[key]);
}

