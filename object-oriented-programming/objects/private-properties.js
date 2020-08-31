/**
 * Abstraction : Means hide the details and show the essentials
 *
 * scope - new on every call
 * closure - stays
 */
function Circle(radius) {
  this.radius = radius;

  // These are implementation details
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    //.... some magic
  };

  this.draw = function () {
    computeOptimumLocation();
    // defaultLocation (closure)
    // this.radius

    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
