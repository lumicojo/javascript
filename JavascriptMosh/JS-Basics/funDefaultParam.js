// this func calculate total interest
function interest(principal, rate, years) {
  // formula to calculate the total interst is:  principal * rate / 100 * years
  return principal * rate / 100 * years;
}

 console.log(interest(10000, 3.5, 5)); // total interes have to pay is 1750


// default
function interest(principal, rate, years) {
  // a tehnic rate = rate || 3.5
  // if rate has a value truty we use that otherwise 3.5
  rate = rate || 3.5;
  years = years || 5;
    // we use or|| to give variable a default value
  return principal * rate / 100 * years;
}
console.log(interest(10000));  // = same result  1750



//default short
function interest(principal, rate = 3.5, years = 5) {
  return principal * rate / 100 * years;
}
console.log(interest(10000));  // = same result  1750
