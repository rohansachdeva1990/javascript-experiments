function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

// Calling super constructor
function Circle(radius, color) {
  /**
   * if we call Shape(color), then color will be set in windows context, because
   * here the Shape constructor is not aware the right context. But, in JS we can
   * by pass it by using 'call' and pass the right context to it
   */

  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(10, 'purple');

c.draw();
c.duplicate();
