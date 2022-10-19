//19- ex 3- Except
const numbers = [1, 2, 3, 4];
const output = except(numbers, [1, 2]);// exclude1,2
// if we exclude all num in array we get empty[]
console.log(output);

function except(array, excluded) {
   const output = [];
   for (let element of array)
     if (!excluded.includes(element))
     output.push(element)
   return output; //(2) [3, 4]

    
}