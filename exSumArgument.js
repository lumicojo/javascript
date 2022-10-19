// 12 ex 1 SumArguments
//Create a function called sum that take (avering) number of arguments USE THE REST OPERATOR (...)
// and return their sum we shod get 10
//modif the sum function to be able to except an array,
//and still return the same result.
// sum ([1, 2, 3, 4]) => 10

// function sum(...items){
//     return items.reduce((a, b)=> a + b);
// }
// console.log(sum(1, 2, 3, 4));

////////////////////




console.log(sum([1, 2, 3, 4]));
//because we use the ...rest oper it take the array and put it in a new array
function sum(...items) { // the rest oper... converts in the array
    if (items.length === 1 && Array.isArray(items[0]))
    // know we use spreOpert... 
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

//we need to check if item  in array has a single  element and the first element is an array at it self
//first element is an array = Array.isArray and pass [0]