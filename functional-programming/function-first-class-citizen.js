/**
 * In Javascript,
 * 1. Functions as First-class Citizens, which means
 *  - We can treat them like any other variable
 *  - Pass them as arguments
 *  - Return them from other functions
 */

function sayHello() {
  return 'Hello World';
}

// fn is alias for sayHello
let fn = sayHello;
fn();

// Function as an argument
function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);

// Returning a functions
function sayHelloReturnsAFn() {
  return function () {
    return 'Hello World from returned function!';
  };
}

let fn2 = sayHelloReturnsAFn();
let message = fn2();
