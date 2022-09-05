const employee = {
  name: "tom",
  streetAdress: "262 vest westvile"
}
function updateEmployeeWithKeyAndValue(object, key, value ) {
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}
//function deleteFromEmployeeByKey(object, key); {
  //newEmployee[key]
//}

function introduction(name) {
  return(`Hi, my name is ${name}.`);
}

//takes in an argument of a name and returns a phrase with that name using string i

function introductionWithLanguage(name, language) {
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);   
}
//takes in two arguments, a name and a language, and returns a phrase using those arguments
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
//takes in two arguments, a name and a language, and language defaults to JavaScript

