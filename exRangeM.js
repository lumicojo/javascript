//write a function arrayFromRange it should 2 param (min, max) (1, 4)

const numbers = arrayFromRange (-10, -4);
console.log(numbers);

 function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
      output.push(i);
      return output;
}