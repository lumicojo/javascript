// 16 ex 2- Factory and Constructor
// initialize an address obj 
//first using a factory function
// then use a construction function

//let address = createAddress('a', 'b', 'c'); = first
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

// Constructor Function 
//we use Pascal notation =(start capital letter)
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
    
