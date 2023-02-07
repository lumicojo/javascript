
showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++){
    // we need to display one or more stars
    // declare a variable pattern set to empty strin''
    let pattern = ''; // we need to add more stars to the pattern
    // we ndde another for loop
    for (let i = 0; i < row; i++)
    // add the star to the pattern
    pattern += '*';
    console.log(pattern);
  }
}
