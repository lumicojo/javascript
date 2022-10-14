// 5- Constructor Property
// 16 ex 2- Factory and Constructor
// initialize an address obj 
//first using a factory function
// then use a construction function

//let address = createAddress('a', 'b', 'c');
//use the new operator and call our costruction function
let address = new Address('a', 'b', 'c');
console.log(address);
//factory Function
function createAddress(street, city, zipCode) {
    return{
        street,
        city,
        zipCode     
    };
}

// Constructor Function we use Pascal notation =(start capital letter)
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
    


//Factory Function
function createCircle(radius) {   
    return { 
      radius,
      draw: function() {
        console.log('draw');
      }
    };
}
const circle = createCircle(1);

//constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);




// this is what we get in console after we write:
//another.constructor  <- this
// ƒ Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// circle.constructor  <- this
// ƒ Object() { [native code] }