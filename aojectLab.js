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
/*
updateEmployeeWithKeyAndValue(employee, key, value)
✓ returns an employee with the original key value pairs and the new key value pair
✓ it does not modify the original employee, but rather returns a clone with the new data
destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
✓ updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
deleteFromEmployeeByKey(employee, key)
✓ deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
✓ does not modify the original employee (it is non-destructive)
destructivelyDeleteFromEmployeeByKey(employee, key)
✓ returns employee without the deleted key/value pair
✓ modifies the original employee
*/
