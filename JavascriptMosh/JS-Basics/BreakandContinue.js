//break and continue


let i = 0;
while (i <= 10) {
  //if (i === 5) break;
  if (i % 2 === 0) { // if it is i want to continue
    i++;
    continue;
  }
  console.log(i);
  i++;
}
