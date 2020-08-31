function Circle(radius) {
  this.radius = radius;

  // These are implementation details
  // private property
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };

  // To make a field read only
  Object.defineProperty(this, 'defaultLocation', {
    // When we call circle.defaultLocation, this function is invoked
    get: function () {
      return defaultLocation;
    },

    // When we assign circle.defaultLocation, this setter will be executed
    set: function (value) {
      // We can perform some validation before assigning it
      if (!value.x || !value.y) {
        throw new Error('Invalid Location');
      }
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.draw();

// One way to get the value of private property
circle.getDefaultLocation();
console.log(circle.defaultLocation); // Getter from Object.defineProperty will be invoked

circle.defaultLocation = { x: 1, y: 2 };

/**
 * So, use Object.defineProperty to define getters and setters
 */
