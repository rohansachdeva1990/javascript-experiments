const state = {
  persons: [
    { name: 'foo', age: 20 },
    { name: 'bar', age: 20 },
  ],
};

const deletePersonMutable = personIndex => {
  const persons = state.persons;
  persons.splice(personIndex, 1);
};

const deletePersonImmutable = personIndex => {
  // Create a copy of the person
  const persons = state.persons.slice();
  // Or using ES6, spread operator
  const persons2 = [...state.persons];

  persons.splice(personIndex, 1);
};

// Spread operator also works on Object
const changeName = name => {
  const personIndex = this.state.persons.findIndex(p => p.name === name);

  const person = {};
};
