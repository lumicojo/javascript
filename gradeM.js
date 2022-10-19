// 18- exercise 9- Grade
//calculate grade of a student average [80+80+50]= 210 / 3=70
//Average is 70

const marks = [80, 80, 50];

//if avr is 0-59: is F
//if avr is 60-69: D
//if avr is 70-79: C
//if avr is 80-89: B
//if avr is 90-100: A
console.log(calculateGrade(marks));

function calculateGrade(marks){
   const average = calculateAverage(marks);

   if (average < 60) return 'F';
   if (average < 70) return 'D';
   if (average < 80) return 'C';
   if (average < 90) return 'B';
   return 'A';
}
function calculateAverage(array) {
    let sum = 0;
    for(let value of array) 
      sum += value; 
    return sum / marks.length;
}


// console.log(calculateGrade(marks));
// function calculateGrade(marks) {
// // to calc the avr we need to declare variable sum initialize ti 0
// //then for loop to iterate array of marks and calculate the sum of marks
//   let sum = 0;
//   for(let mark of marks) // and added to sum
//     sum += mark; //this is total
//   let average = sum / marks.length; // average
//    //we need to get the table to map it to it grade
//    //we can write like this 
//    //if (average >= 0 && average <= 59) return 'F';
//         ////////o     or
//    if (average < 60) return 'F';
//    if (average < 70) return 'D';
//    if (average < 80) return 'C';
//    if (average < 90) return 'B';
//    return 'A';
// }  