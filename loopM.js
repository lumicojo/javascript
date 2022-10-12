// 12 -Exercise- Swapping Variable

let a = 'red';
let b = 'blue';

 let c =  a;
 a = b;
 b = c;

console.log(a);
console.log(b);


//             1. If.....else

// Hour
//  if hour is between 6am and 12pm: Good morning
//  if hour is between 12pm and 6pm: Good afternnon
//  otherwise : Good evening


      // 2  Switch... case
//we don't have to use switch use if statement
let role;

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User')  
}

let role;
if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');

        // 3... For Loops
// we need 3 statements:
//veriable= i      condition   incrementExpression
for (let i = 0;   i < 5)       i++

for (let i = 0; i < 5; i++) {
  console.log('Hello World');
} 

//       ///////add number
for (let i = 1; i <=5; i++) {
  if (i % 2 !== 0) console.log(i);
}
                  //decrement
for (let i = 5; i >=1; i--) {
  if (i % 2 !== 0) console.log(i);
}

        ///////// 4-....While Loop


let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i); //statement
  i++ 
}

           ////// 5- Do.....While

 //you not going to use it
let i = 9;
do {
  if (i % 2 !== 0) console.log(i); //statement
  i++ 
} while (i <= 5);


          //// 6- Infinite Loops

let i = 0;
while (i <= 5) {
  console.log(i);
i++  //if you forget the increment i++ you get inf loop
}  

        //// 7- For...in

const person = {
  name: 'Mosh',
  age: 30
}; 
// we can use dotNotation person.name or bracketNotation
for (let key in person)
  console.log(key, person[key]);


const colors = ['red', 'green', 'blue'];
//use for loop
for (let index in colors)
//  console.log(index);        //  0,1,2

  // if you want the elements;
  console.log(index,colors[index]);


         //8- For...of
     in an array

const colors = ['red', 'green', 'blue'];
for (let color of colors)  
  console.log(color);     


///// 9- Break and Continue

let i = 0;
while (i <= 10) {
  //if (i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue; // don't use it
  }

  console.log(i);
  i++;
}
