function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

// Method overriding; should be after extending it
Circle.prototype.duplicate = function () {
  // Calling parent duplicate method
  // Shape.prototype.duplicate(); // Use only when there is no involvment of this in the call
  // Otherwise, use call() and pass the right context to it
  Shape.prototype.duplicate.call(this);
  console.log('duplicate from circle');
};

const c = new Circle();
