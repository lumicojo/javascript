//15- Mapping Array
// const numbers = [1, -1, 2, 3]; 
// const filtered = numbers.filter(n => n >= 0);

// // so you want to make HTML markup using this elements in this array
// // so we can pass value (n) or aro => function
// const items = filtered.map(n => '<li>' + n + '</li>') // (3) ['<li>1</li>', '<li>2</li>', '<li>3</li>']
// //with this markup we can  display 
// //a bullet point of course we need to put this in ull element
// console.log(items); // know is map to a sting that is a li item
// // (3) ['<li>1</li>', '<li>2</li>', '<li>3</li>']
// // 0: "<li>1</li>"
// // 1: "<li>2</li>"
// // 2: "<li>3</li>"
// // length: 3
// // [[Prototype]]: Array(0)

// // we can use join to join this array and create a string and add <ul>
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);// <ul><li>1</li> <li>2</li> <li>3</li></ul>
// filter and map don't modif the array
//////////  /mapping with obj

// const numbers = [1, -1, 2, 3]; 

// const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => ({ value: n }));
    

// console.log(items);
// (3) [{…}, {…}, {…}]
// 0: {value: 1}
// 1: {value: 2}
// 2: {value: 3}
// length: 3

////         or chaining
const numbers = [1, -1, 2, 3]; 

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n })) //= (3) [{…}, {…}, {…}]
    .filter(obj => obj.value > 1) //= (2) [{…}, {…}]
    .map(obj => obj.value);  //= (2) [2, 3]
    //this is the power to chaining this methods

    console.log(items);    