//7 Try and Catch
// Error handling
// (e) exception,  catch (e), alert(e)
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is not a string.');

        const parts = value.split(' '); 
        if (parts.length !==2)
            throw new Error('Enter a first and last name.')

        this.firstName = parts[0]; 
        this.lastName = parts[1];

    }
};// we nedd to use try block
try {
    person.fullName ='';            //null;
}
catch (e) {
    alert(e);   //
}
console.log(person);

