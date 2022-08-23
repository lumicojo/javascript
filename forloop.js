/*
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}
*/
for (let i = 0; i < 99; i += 1) {
    if (i > 5) {
       break;
    }
    console.log(i)
}

//nested for loop
for (let outer = 0; outer < 2; outer += 1) {
    for (let inner = 0; inner < 3; inner += 1) {
      console.log(`${outer}-${inner}`);
    }
  }
  
  