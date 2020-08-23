/**
 * Here we will demonstrate, how to update an object safely
 */
const person = { name: 'John' };

// Way 1
let updatedPerson = Object.assign({}, person, { name: 'Bob', age: 41 });

// Way 2 (Recommended), using spread operator (Both of them do a shallow copy)
updatedPerson = { ...person, name: 'Bob' };

// Now, doing a deep copy
const student = {
  name: 'drake',
  address: {
    country: 'Netherlands',
    city: 'Rotterdam',
  },
};

let updatedStudent = {
  ...student,
  address: {
    ...student.address,
    // If required to change something
    city: 'Amsterdam',
  },
  name: 'Nathan',
};
