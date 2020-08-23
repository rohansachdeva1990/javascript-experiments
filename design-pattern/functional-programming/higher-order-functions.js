// These are higher order functions
function greet(fn) {
  console.log(fn());
}

function sayHello() {
  return function () {
    return 'Hello World';
  };
}

// Higher order function in day to day JS
let numbers = [1, 2, 3];
numbers.map(number => number * 2);

setTimeout(() => console.log('Hello After 1 Seconds'), 1000);
