// 18-ex 2- includesM
// writ a func that includes method
//Imagine we don't have the method in arrays impliment this method in your self
// check if elem exist in array
//Create a function includes that takes (array, searchElement)
// if you have search elem in array it should return true
const numbers = [1, 2, 3, 4];
console.log(numbers.includes(1));

function includes(array, searchElement) {
    for (let element of array)
        if(element === searchElement)
        return true;
    return false;    
}