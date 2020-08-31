/**
 * {} -> is an object literal. Object in javascript is a collection of key/value pair
 */
const circle = {
  // These are properties
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },

  // 'draw' is methods
  draw: function () {
    console.log('draw');
  },
};

// Accessing the member using '.' operator
circle.draw();
