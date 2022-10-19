//5 DefaultParameters
//calculate total interest
function interest(principal, rate, years) {
    return principal * rate / 100 * years; //this is formula to calculate the total interest
 }
 console.log(interest(10000, 3.5, 5)); //1750 total int have to pay in 5y
 
 
 // this is the cleaner way
 function interest(principal, rate, years) {
     rate = rate || 3.5; //default
     years = years || 5;
     return principal * rate / 100 * years; //this is formula to calculate the total interest
 }
 console.log(interest(10000));
 ///
 
 // cleaner
 function interest(principal, rate = 3.5, years = 5) {
     return principal * rate / 100 * years;
 }
 console.log(interest(10000));