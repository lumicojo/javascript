 //22- ex-6 Get Max

// create a function getMax and gives an array and return the largest number
// first check if array is empty or not
const numbers = [1, 2, 3, 4];
const max = getMax([1, 2, 2, 1, 3]);
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i < array.length; i++) 
        if (array [i] > max) 
        max = array[i];
return max;     
           
    
}
// im gone declare verib call it max and set it to first elem [0] in this array
//let max = array[0]; // we want to assume the first elem is the larger
//next we iterate to this array and if we find a numb that is larger
// then we will reset max verib 
// for loop let i start with second elem  and run this loop as long as  
//the length is less af the array.lenght then increment i++            
//for (let i = 1; i < array.length; i++) 
//know we need to check if current num is larger then max
 //if (array [i] > max)
//we need to check the num if current num is larger then max
  // max = array[i]; // current value
//return max; 
  
//}


// const numbers = [1, 2, 3, 4];

// const max = getMax([1, 2, 2, 1, 3]);

// console.log(max);

// function getMax(array) {
//     if ( array.length === 0) return undefined;

//   return Math.max.apply(null, array)
// }
////////////////////////////////////////////////


// const numbers = [1, 2, 3, 4];
// const max = getMax([1, 2, 2, 1, 3]);

// console.log(max);

// function getMax(array) {
//     if ( array.length === 0) return undefined;

//     return array.reduce((a, b) => ( a > b) ? a : b);
// }
