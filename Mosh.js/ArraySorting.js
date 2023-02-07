//12- Sorting Array
const numbers = [3, 2, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);


// this is with obj
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javaScript'},
];
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = a.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);