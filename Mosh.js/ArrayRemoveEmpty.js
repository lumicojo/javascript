// 5- ArrowFunction
// 6- removing elem
// 7 emptying array
const courses = [
    {id: 1, name: 'a' },
    {id: 2, name: 'b' },          
];            
const course = courses.find(course => course.name === 'a');  
console.log(course);


// 6- removing elem
//const num = [1, 2, 3, 4];
//End 
//const last = num.pop(); //(3)  [1, 2, 3]
// console.log(num);
// console.log(last);//4


//Beginning
//const num = [1, 2, 3, 4];
//const first = num.shift();
// console.log(first); // 1
// console.log(num); //(2)  [2, 3]


// Middle     if you want to remove 3 is index2 and how many element you want to remove so we remove 1 element

//const num = [1, 2, 3, 4];
//num.splice(2, 1);
//console.log(num); //  (3) [1, 2, 4]



                // 7 emptying array
//solution 1

let numbers = [1, 2, 3, 4];
let another = numbers;
//numbers = [];
//console.log(numbers); // =  [] empty array


//solution 1

// numbers.length = 0;
// console.log(numbers);// = []
// console.log(another); // = []


// solution 3


// numbers.splice(0, numbers.length);
// console.log(numbers);// = []
// console.log(another); // = []


//solution 4

while ( numbers.length > 0) // not recomand
numbers.pop();

console.log(numbers);// = []
console.log(another); // = []
