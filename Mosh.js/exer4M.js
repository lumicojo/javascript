///  13 exercise 4- Demerit Points

//implement this function it takes a 
//parameter (speed of car)
//for every 5 over they get 1 point
//speed limit = 70
// 5 -> 1 point
//Math.floor(1.3) // converts in integer 1
// 12 points -> suspended  12x5 is 60Km above the limit
//so if we pass 130 we should get 12 point and suspended lic.
// checkSpeed(130);

//checkSpeed;
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

// if (speed < speedLimit + kmPerPoint)
//   console.log('Ok');
// else {
//   const points = Math.floor((speed -speedLimit) / kmPerPoint);
//   if (points >= 12)
//     console.log('License suspended')
//   else
//     console.log('Points', points); 
// }  
// }

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }
  else {
    const points = Math.floor((speed -speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log('License suspended')
    else
      console.log('Points', points); 
  }  
}

