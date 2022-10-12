//15 ex6- count Truthy

//falsy,undefine,null,false,0,NAN

//create a function called countTruthy,
//witch takes an array and return number truthy
// elements an this array.
const array = [0, null, undefined, '', 1, 2, 3];// = 3true
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array)
  if (value)//is truthy
    count++;
  return count;  
}

