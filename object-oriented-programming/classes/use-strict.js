'use strict';

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();

// This is a method call, we are calling a method on an object
c.draw();

// Getting reference of a method
const draw = c.draw;
console.log(draw);

// This is a function call,
draw(); // => Refers to undefined
