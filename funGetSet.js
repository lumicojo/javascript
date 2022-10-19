//6 Getters and Setters
// gettets == access properties  get
// setters == change or mutate them

// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     get fullName() {// we set the get getter
//         return `${person.firstName} ${person.lastName}`;
//     }
// };
// console.log(person.fullName());



// gettets == access properties  get
// setters == change or mutate them

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    // we set the set setter
    set fullName(value) {// the value is in rite side John Smith
        // take it parts and set first and last name property
        const parts = value.split(' '); //it will return an array will call that parts
        this.firstName = parts[0]; // know we set the parts
        this.lastName = parts[1];

    }
};
person.fullName = 'John Smith' // with set it change the name insted of mosh we get JohmS
console.log(person);
// { firstName: 'John', lastName: 'Smith', fullName: [Getter/Setter] }
