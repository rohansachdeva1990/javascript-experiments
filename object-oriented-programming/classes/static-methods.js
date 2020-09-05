class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method, present in prototype
  draw() {}

  // Static method
  static parse(str) {
    const rad = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(1);
console.log(circle);

const circle1 = Circle.parse('{"radius" : 2}');
console.log(circle1);
