
  ///////////// 7- logical Operator
  
  // Logical AND (&&)
  // return TRUE if both operators are TRUE
  //console.log(true && true);
  // let highIncome = true;
  // let goodCreditScore = true;
  // let eligibleForLoan = highIncome &&  goodCreditScore;
  // console.log(eligibleForLoan);
  
  // Logical OR (||)
  // Return TRUE if one of the operands is TRUE.
  //let highIncome = true;
  // let goodCreditScore = true;
  // let eligibleForLoan = highIncome ||  goodCreditScore;
  // console.log(eligibleForLoan);
  
  // // NOT (!)
  // let applicationRefused = !eligibleForLoan;
  // console.log(eligibleForLoan);
  
  let highIncome = false;
  let goodCreditScore = false;
  let eligibleForLoan = highIncome ||  goodCreditScore;
  console.log('Eligible', eligibleForLoan);
  
  
  let applicationRefused = !eligibleForLoan;
  console.log(eligibleForLoan);
  console.log('Application Refused', applicationRefused);
  
  ////////8- Logical Oper with Non-booleans value
  
  //not a number is a special value in javaScript
  
  // let userColor = 'red';
  // let defaultColor = 'blue';
  // let currentColor = userColor || defaultColor;
  // console.log(currentColor);
  
  let userColor = undefined;
  let defaultColor = 'blue';
  let currentColor = userColor || defaultColor;
  console.log(currentColor);
  
  
  ///// 9-Bitwise Operators
   //this is not something we use 
  
  
  //// 10 Operator Precedence = complete expresion
  
//   let x = 2 + 3 * 4;
//   console.log(x);
  
  let x = 1;
  console.log(x === 0);  

  ////////1-JavaScriptOperators  #1
  // let x = 10;
  // let y = 3;
  
  //console.log(x + y);
  // console.log(x - y);
  // console.log(x * y);
  // console.log(x / y);
  // console.log(x % y);
  // console.log(x ** y);
  
  //increment (++)
  //console.log(++x); =11
  //console.log(x++);// 10
  
  //decrement (--)
  //console.log(--x); //=9
  //console.log(x--); //10
  
  /////////3-assignment Operators #2
  
  //let x = 10;
  //x++; x += 5; x *=3;
  //x = x +1;
  
  //4-comparison Operator
  //relational
  //let x = 1;
  // console.log(x > 0);//the expresion is bulion true
  // console.log(x >= 1); //true
  // console.log(x < 1); //false
  // console.log(x <= 1);// true
  
  // // equality
  // console.log(x ===1); //true
  // console.log(x !== 1); // false
  
  //5- Equality Operators
  
  //strict equality (same type and value)
  //console.log(1 === 1);true
  //console.log('1' === 1); false
  
  //lose equality
  console.log(1 == 1);
  console.log('1' == 1);

  
  