function Circle(radius) {
  // Instance Members
  this.radius = radius;

  this.move = function () {
    console.log('move!');
  };
}

const c1 = new Circle(10);

// Prototype members
Circle.prototype.draw = function () {
  console.log('draw!');
};

c1.draw();

// Only returns Instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) {
  console.log(key);
}
