// 14 exer 5- even and odd num

//write a fraction  showNumbers that take a parameter  call limit .
// 0 to 10 is the limit.
//next each number if is even you should display the even label 
//otherwise add

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++){
//for loop i veriable set to 0 ,i <= limit is less or equl to limit  and increment i
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    console.log(i, message);
     //or
    // if (i % 2 === 0) console.log(i, 'Even')
    // else console.log(i, 'ODD');
    
  }
}
