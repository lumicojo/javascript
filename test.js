//For the object below, Object.keys(employee) would return an array containing how many elements?
const employee = {
     name: "joe",
     deparment: "Sales",
     emergencyContact: {
     name: "jean",
     contactInfo: {
     phone: '212-555-2151',
    email: 'jeanx@gmail.com'
    }
  },
  salary: 65000
};
console.log(Object.keys(employee));
  //return this [ 'name', 'deparment', 'emergencyContact', 'salary' ]


