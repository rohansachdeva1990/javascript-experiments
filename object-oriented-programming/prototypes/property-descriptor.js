let person = { name: 'Rohan' };
let baseObject = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(baseObject, 'toString');

console.log(descriptor);
/*
{writable: true, enumerable: false, configurable: true, value: ƒ}
configurable: true  // Can be deleted
enumerable: false // Cannot be iterated over
value: ƒ toString()
writable: true  // Overridable
__proto__: Object
*/

Object.defineProperty(person, 'name', {
  writable: false, // Can't be wriiten
  enumerable: false, // Can't be iterated over
  configurable: false, // Can't be deleted
});

// Won't work as it is readonly
//person.name = 'John'
Object.keys(person); // Won't show name
delete person.name; // Won't delete this property
