//function declaration
function foo() {
    return "bar";
} //or can write 
const foo = function() {
    return 'bar';
}     //function() {...}= function expresion

const foo = function() {
    return 'bar';
}//Evaluate the expression function() { return 'bar' }, returning a thing that can be called, and assign it to the variable foo. 

const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2,3); //=> 5

//const twoAdder = x => x + 2;
// is the same as
//const twoAdder = (x) => x + 2;

const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
}
sum(1, 2); //3

const nums = [1,2,3];
const squares = nums.map(x => x ** 2); 
squares; //=> [1,4,9]
nums; //=> [1,2,3]


//.map
//we can imagine that overdueTodoItems is a collection of DOM elements:

finishedItems = overdueTodoItems.map( item => item.className = "complete" );
header.innerText = `You finished ${finishedItems.length} items!`;

//Or we might use map in billing software:
lapsedUserAccounts.map( u => sendBillTo(u.address) );
