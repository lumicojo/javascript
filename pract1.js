const age = 20;
let isAdult, canWork, canEnlist, canDrink;

if (age >= 21) {
    canWork = true;
    canEnlist = true;
    isAdult = true;
    canDrink = true;
} 
    else if (age >= 18) {
    canWork = true;
    canEnlist = true;
    isAdult = true;

}
    else if (age >= 16) {
    canWork = true;
    }
   
    
    console.log(canWork);
    console.log(canEnlist);
    console.log(isAdult);
    console.log(canDrink);
        
    