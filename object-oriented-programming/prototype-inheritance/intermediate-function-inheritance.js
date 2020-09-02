function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

// Uppercase we are expecting constructor function
// These are call intermediate inheritance functions
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log('draw');
};

function Square(size) {
  this.size = size;
}
extend(Square, Shape);

const s = new Shape();
const c = new Circle(10, 'purple');

c.draw();
c.duplicate();
