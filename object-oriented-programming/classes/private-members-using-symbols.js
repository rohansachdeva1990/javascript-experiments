const _somePrivateField = Symbol();
const _somePrivateMethod = Symbol();

class Circle {
  constructor(radius) {
    // Public
    this.radius = radius;
    this[_somePrivateField] = radius + 1;
  }

  // Public
  draw() {
    // Accessing a private method
    this[_somePrivateMethod]();
  }

  // Private
  [_somePrivateMethod]() {
    console.log('I am a private method');
  }
}

const c = new Circle(1);
// Now _somePrivateField is not accessible

// But, there is a HACK
const key = Object.getOwnPropertySymbols(c)[0]; // Accessing the first symbol
console.log(c[key]);

c.draw();
