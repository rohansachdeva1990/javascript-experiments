class Circle {
  constructor(radius) {
    this.radius = radius;

    // Not available in prototype
    this.move = function () {
      console.log('move');
    };
  }

  /**
   * Available in prototype
   */
  draw() {
    console.log('draw');
  }
}

const c = new Circle(c);
