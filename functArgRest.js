// 3 Argument
// 4 restOperator
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));// 3


function sum(a, b) {
    return a + b;  // 1+ undefine 
}
console.log(sum(1)); // NaN


// 4 restOperator
function sum(...args) { // (... is rest operator) it look like spread operator.We use this on function along with the parametr
    //when we use ...restOperator it takes all argruments and put them in array
    //if we want to get the sum in the array use reduceMethod
    return args.reduce((a, b) => a + b);
}    
console.log(sum(1, 2, 3, 4, 5, 10));    // 25 



function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30)); // 45




function sum(a, b) {
    console.log(arguments);
    return a + b;  // 1+ undefine 
}
console.log(sum(1, 2, 3, 4, 5)); 
//we get Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// callee: f sum(a, b) length: 5  




function sum(a, b) { //so we change the sum of all arguments
    let total = 0;   //declare varib total se tto 0
    for (let value of arguments) //use for of loop to iterate ove arguments obj
        total += value; // for every argument we are gone add total verib
    return total; 
}    
console.log(sum(1, 2, 3, 4, 5, 10));     // 25





function sum() { // we can complety remove the paprametry
    let total = 0;   
    for (let value of arguments) 
        total += value; 
    return total; 
}    
console.log(sum(1, 2, 3, 4, 5, 10)); 