// 20-ex 6- priceRangeObj
//create an array with 3 obj each should have 4 properties
// label,tooltip, minimum  and maximum. You may have a list ov restaurant,
// with average per person 0 to 10.
//Now you want to filter a list of restaurants and pull out those averagePerPerson is between those values
//so we can create 2 more obj. What properties would you use?

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
 
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },  
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },  
 
 ];
 
 let restaurants = [
     { averagePerPerson: 5}
 ]