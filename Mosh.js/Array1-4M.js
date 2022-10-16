// 1-Introduction Arrays
//2 -Adding Elements
// 3- finding elements(primitives)
// 4- finding elements(reference type)
const numbers = [3, 4];
//end
numbers.push(5, 6);
// beginning
numbers.unshift(1, 2);
//middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
// (8)  [1, 2, 'a', 'b', 3, 4, 5, 6]

///////////////////////

//3- finding elements(primitives)

const num = [1, 2, 3, 1, 4];
console.log(num.indexOf(1));// = 0
console.log(num.indexOf('1')); // -1 because don't exist
console.log(num.lastIndexOf(1));// = 3

console.log(num.indexOf(1) !== -1);// true because is in array
// or
console.log(num.includes(1)); //true

console.log(num.indexOf(1, 2));// = 3
// two arguments first 1 and second argument 2 it call from index witch
// research will begin with second1 witch = 3
// so indexof 1 = 0 


//////////////////////

// 4- finding elements(reference type)

const courses = [
    {id: 1, name: 'a' },// this and //are 2 different object
    {id: 2, name: 'b' },          
];            
                   //    this    // and in different location memory So check refernce type
  //console.log(courses.includes( {id: 1, name: 'a'}));//false  
const course = courses.find(function(course) {   
    return course.name === 'a'; //return the first match criteria
})  
console.log(course);// = {id: 1, name: 'a'}


// const course = courses.findIndex(function(course) {   
//     return course.name === 'a'; 
// });  
// console.log(course); // = 0





// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(function(element) {
//     return element > 10;
// });    
// console.log(found);
//   // expected output: 12
  