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
