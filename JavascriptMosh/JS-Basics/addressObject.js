//create an address obj with 3 propertise
// street
// city
// zipCode
// Then create a function called
// showAddress that take an address obj and display
// all the properties in this obj allong with their value
// showAddress(address)

let address = {
  street: "Olive",
  city: "Deptford",
  zipCode: "08096"
};
function showAddress(address) {
  for (let key in address)
  console.log(key, address[key])
};
showAddress(address);
