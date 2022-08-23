let a = 1;
let b =2;
let c = a + b;
console.log(`the sum of ${a} and ${b} is ${c}`);
//Conditional
//if (age >= 21) {
 //   let beverage = "Gin & Tonic";
//} else {
//    let  beverage = "shirley temple";
//}


let add = (a, b) => {
    return a + b;
  }
  
  let sum = add(1, 2);
  console.log(`The sum of 1 and 2 is ${sum}`);
  
//ARRAy

  let numbers = [3, 2, 6];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  
  numbers.forEach((number) => {
    console.log(number);
  })

  let n = 0;
while (n < 5) {
  console.log(n);
  n++;
}

let daysInAWeek = 7;
console.log(daysInAWeek);

let number = 5;
number++;
console.log(number);  // output is 6

//reassign veriable
let anotherNumber = 5;
anotherNumber = anotherNumber + 1;
console.log(anotherNumber);  // output is 6

//decrement veriable
let numb = 5;
number--;
console.log(numb);  // output is 4

let d = 1.99;
let e = 3.89;
let f = 2.29
let g = d + e + f;
console.log(`the sun of ${d} and ${e} and ${f} is ${g}`);

let name = "queen";
console.log(name.length);
let phrase = "towards thee I roll, thou all-destroing";
let shout = phrase.toUpperCase();
console.log(shout);

let reiterate = phrase.repeat(3);
console.log(reiterate);

let changeCourse = phrase.replace("whale", "narwhal");
console.log(changeCourse);

