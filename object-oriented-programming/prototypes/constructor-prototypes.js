// Normally we use this to find the prototype
// Object.getPrototypeOf(myObj)
// myObj.__proto__ (parent of myObj  )
// Constructor.protoype ()

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype;

const circle = new Circle(10);
