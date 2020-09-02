/**
 * Shape => ShapeBase => ObjectBase
 */
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

//
function Circle(radius) {
  this.radius = radius;
}

// Here we are resetting the prototype of the circle, we can no longer access Circle's
// default prototype.
// Circle.prototype = Object.create(Object.prototype); //  This is implicit
Circle.prototype = Object.create(Shape.prototype); // Now circle will have access to 'duplicate'

// As a best practice we should also reset the constructor
// Now in the inheritance tree, constructor will be referring to Circle constructor
// rather than Shape Constructor if we do the above scenario
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(10);

c.draw();
c.duplicate();
