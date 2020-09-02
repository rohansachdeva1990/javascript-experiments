/**
 * Imagine circle object has 10 methods and we want to replicate it. The issue is
 * mostly in the scenario's when we have behaviors tied to those object.
 *
 */

//  Factory Function
function createCircle(radius) {
  return {
    radius, //ES6 way to assign passed radius value
    // 'draw' is methods
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);
circle.draw();

/**
 * Constructor Function
 *
 * Naming Convention for constructor function is different, first letter uppercase
 *
 * When we call this way, an empty object(when 'new' is called ) is created and 'this' is used to assign
 * it properties and methods.
 *
 * By default, 'this' refers to 'windows' environment in global scope.
 * but, within the constructor function it refers to the empty object being created
 *
 */
function Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };

  // we don't need to explicitly add a return state, it is done for us by JS implictly
}

// If we omit the 'new', then 'this' would refer to windows
const anotherCircle = new Circle(1);
