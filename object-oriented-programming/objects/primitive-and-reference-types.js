// Value types
/*
    Number
    String
    Boolean
    Symbol
    undefined
    null
*/
// Primitive types are copied by value
let x = 10;
let y = x;

x = 20;
/*
    x = 20, y = 10
*/

// Reference Types
/*
    Object
    Function
    Array
*/
// Reference/Objects are copied by their reference
let a = { value: 10 };
let b = a;

a.value = 20;

/*
    a = { value: 20 } and b = { value: 20} 
*/

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // number = 10
