let count = 1;
while (count < 5) {
  debugger;
  if (count === 1) {
    console.log(`This loop has executed ${count} time.`);
  } else {
    console.log(`This loop has executed ${count} times.`);
    debugger
  }
  count += 1;
}

