//23- ex 7-FilterMovies
// 1  Filter all the movies m by year in 2018 and rating > 4
// 2  Sort them by their rating
// 3  Descending order by higer first   descending= reverse
// 4  Pick their title and display in console.
// The result it should be 'b', 'a'.
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

// movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => { // a b are the 2 movies in array
//         // a < b => -1 //if 
//         // a === b => 0 // if they are === return 0
//         // a > b => 1  // if 
//     })
           // a = 4.5 - b = 4 = 0.5 so that mean a is greater > b.

const title = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating) 
    .reverse()    //descending = reverse  we need to call .reverseMethod to change the order of this movies
    . map(m => m.title)       //map = pick only their title m => m.title

console.log(title);  //(2) ['b', 'a']