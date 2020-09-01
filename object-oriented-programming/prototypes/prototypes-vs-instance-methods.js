function Circle(radius) {
  // Instance Members
  this.radius = radius;

  // Instance Methods
  this.move = function () {
    console.log('move');
  };

  this.moveAgain = function () {
    this.draw();
    console.log('moving again!');
  };
}

// Prototype Members
//Circle.prototype === circle.__proto__;
// Now draw is available on both c1 and c2
Circle.prototype.draw = function () {
  this.move();
  console.log('draw!');
};

// Here circle1.__proto__=== circle2.__proto__
const circle1 = new Circle(10);
const circle2 = new Circle(10);

// Now, because of prototypical inheritance, draw method is available
// in both the circle objects
circle1.draw();

// Overriding functions
Circle.prototype.toString = function () {
  return 'Circle with radius ' + this.radius;
};
