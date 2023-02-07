
let person = {
  name: 'lum',
  age: 30
};
person.name = 'John';

person['name'] = 'mary';
console.log(person.name);