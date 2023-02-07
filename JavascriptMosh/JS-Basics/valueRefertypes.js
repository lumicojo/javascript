
//define 2 primitive
let x = { value: 10};
let y = x;
// x and y are two independeble variable
//change x to 20
x.value = 20;

//ex2

let number = 10;
function increase(number) {
  number++;// this number is total diferit from veriables
}

increase(number);  // == 10
console.log(number);


// ex 3

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);   // we got this obj with value 11
console.log(obj);

