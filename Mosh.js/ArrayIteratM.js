//10- Iterating an array
const numbers =[1, 2, 3];

for (let number of numbers)
    console.log(number);
    ///// or

numbers.forEach(function(number) {
    console.log(number);
});

///////////  or 
//numbers.forEach(number => console.log(number));

numbers.forEach((number, index) => console.log(index, number));
