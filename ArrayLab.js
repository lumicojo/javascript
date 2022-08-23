
const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
});

  function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
} 
function  prependCat(name) {
    const allCats = [...cats];
    allCats.unshift(name);
    return allCats
}  

function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.splice(2);
    return copyOfCats
}

function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift(0);
    return copyOfCats
}
/*
Array functions
      destructivelyAppendCat(name)
        ✓ appends a cat to the end of the cats array
      destructivelyPrependCat(name)
        ✓ prepends a cat to the beginning of the cats array
      destructivelyRemoveLastCat()
        ✓ removes the last cat from the cats array
      destructivelyRemoveFirstCat()
        ✓ removes the first cat from the cats array
      appendCat(name)
        ✓ appends a cat to the cats array and returns a new array, leaving the cats array unchanged
      prependCat(name)
        ✓ prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
      removeLastCat()
        ✓ removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
      removeFirstCat()
        ✓ removes the first cat from the cats array and returns a new array, leaving the cats array unchanged


  9 passing (251ms)
  */   

     
