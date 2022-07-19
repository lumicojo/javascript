const employee = {
  name: "Sam",
  streetAddress: "262 West Olive street "

}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;

}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key]
  return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key] 
  return employee;

}
  
updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. 
This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
 Hint: use the spread operator!
destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.