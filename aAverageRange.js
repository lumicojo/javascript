function calculateGrade(marks) { 
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
  }
  
  function calculateAverage(array) {
    let sum = 0; 
    for (let value of array)
      sum += value; 
    return sum / array.length; 
  }

  const numbers = arrayFromRange(1, -4);

console.log(numbers);
////////////////


function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}
//////////

showStars(2);

function showStars(rows) { 
  for (let row = 1; row <= rows; row++) {
    let pattern = ''; 
    for (let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}

//////////////
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
      if (isPrime(number)) console.log(number);
  }
  
  function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)
        return false; 
    
    return true; 
  }
  /////////////


try {
    const numbers = [1, 2, 3, 4]; 
    const count = countOccurrences(null, 1); 
    console.log(count); 
  }
  catch (e) {
    console.log(e.message);
  }
  
  function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
      throw new Error('Invalid array.');
  
    return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  }

  ///////////
  const circle = {
    radius: 1,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  };
  
  console.log(circle.area);