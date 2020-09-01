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
  writable: false,
});
