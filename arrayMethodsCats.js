const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
});
//appends a cat to the end of the cats array
  function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(-1); //removes the last cat from the cats array
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);  //removes the first cat from the cats array
}


//appends a cat to the cats array and returns a new array,
// leaving the cats array unchanged
function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
} 

//prepends a cat to the cats array and returns a new array,
// leaving the cats array unchanged
function  prependCat(name) {
    const allCats = [...cats];
    allCats.unshift(name);
    return allCats
}  

//removes the last cat in the cats array and returns a new array,
// leaving the cats array unchanged
function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.splice(2);
    return copyOfCats
}

//removes the first cat from the cats array and returns a new array,
// leaving the cats array unchanged
function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift(0);
    return copyOfCats
}
   

     
