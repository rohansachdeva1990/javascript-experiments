//Spread operator
//Used for expanding arrays so [a,b,c,d] -> a,b,c,d (separate params)

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// Joining arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => (cur.style.color = 'purple'));

// // Spread operator also works on Object

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// Person.prototype.toString = () => {
//   return `Name: ${this.name} and Age: ${this.age}`;
// };

// const state = {
//   persons: [new Person('foo', 10), new Person('bar', 10)],
// };

// const changeName = (name, toName) => {
//   const personIndex = state.persons.findIndex(p => p.name === name);
//   const person = {
//     ...state.persons[personIndex],
//   };

//   person.name = toName;
//   console.log(`Before update: ${state}`);
//   state.persons[personIndex] = person;
//   console.log(`After update: ${state}`);
// };

// changeName('foo', 'foo2');
