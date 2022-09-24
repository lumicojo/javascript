//   Passing Functions as Arguments
//pass an object into a function:
function iReturnThings(thing) {
    return thing;
  }
  iReturnThings({first: 'Brendan', lastName: 'Eich'}) ;
  console.log(iReturnThings);


//  pass a function into a function:
iReturnThings(function(){return 4 + 5;});

//invoke it and return the function's result:
function iInvokeThings(thing) {
    return thing();
}

iInvokeThings(function() {return 4 + 5;});
console.log(iInvokeThings);
iInvokeThings(function() {return 'Hello,' + 'word'});
console.log(iInvokeThings);

//Define Callback Functions
//When we pass a function into another function wherein it might be invoked, 
//we refer to the passed function as a callback. 
function main(cb) {
    console.log(cb());
}

main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
// LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!


function greet (name, cb) {
    return cb(name);
  }
  
  greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
  // => "Hello there, Ada Lovelace"
  
  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }
  
  doMath(42, 8, function (num1, num2) { return num1 * num2; });
  // => 336
  console.log(doMath);

  function somethingExpensive(cb) {
    cb(data);
}
console.log(somethingExpensive);

// Code your solution in this file!
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
 //   pull all of our five-mile runs into their own function
function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps(){
    console.log("Swim 40 laps");
}
function Monday() {
    runFiveMiles();
    liftWeights();
}

//created a function that took the second activity as a parameter
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

// try to use this new function we created in our Monday() function:

function Monday() {
    exerciseRoutine(liftWeights);
}
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
Monday();

//////      Inline Functions
exerciseRoutine(function() {
    console.log("Stretch! Work that core!"); // "Go for a five-mile run"
    // "Stretch! Work that core!"
})

// rewrite this to be more concise by using an arrow function:
exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
})

// Or even shorter:
exerciseRoutine(() => console.log("Stretch! Work that core!"));

///////             Returning Functions
function morningRoutine(exercise) {
    let breakfast;
    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }
    exerciseRoutine(exercise);
    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious`);
    };
}
//Now when we call morningRoutine(), our exercise routine will be logged as before, but we'll also get a function back:

const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }
//And we can call that function later:

//afterExercise();
// LOG: Nom nom nom, this protein bar is delicious!