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

Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};

function Square() {}

Square.prototype.duplicate = function () {
  console.log('duplicate square');
};

extend(Square, Shape);

const c = new Circle();

const shapes = [new Circle(), new Square()];

// Polymorphism in action (Relatable to JAVA)
for (let shape of shapes) {
  shape.duplicate();
}
