// Hour
//If hour is between 6 am and 12 pm: good morning!
//If hour is between 12 pm and 6 pm: good afternoon!
// Otherwise: Good evening!

let hour = 10; // hord coding if change the hr to 13 is good afternoon, if change to 20 is good evening
// we going with 24 hr
if (hour >= 6 && hour < 12)
  console.log('Good morning!'); // this is statement
else if (hour >=12 && hour < 18)
  console.log('Good afternoon!');
else
  console.log('Good evening');
