// -------------------------- Constructor Properties

let x = {};
// JS will translate it to let x = new Object
// new String(); // '' "" ``
// new Boolean();// true or false
// new Number(); // 1 ,2 3,4....
/**
 *  In console:-
 * > x.constructor
 * < f Object() {native code}
 */

function Square(size) {
  this.size = size;
}
x = new Square(1);
/**
 * In console:-
 * > x.constructor
 * < f Square(size){
 *  ....
 * }
 */

// -------------------------- Functions are object

/*
Internally JS will use Function object to create this function
 */
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

// Internally, the above function is represented like this
const Circle1 = new Function(
  'radius',
  `
this.radius = radius;
this.draw = function () {
  console.log('draw');
}
`
);

// Some properties on functions
/**
 * > Circle.name
 * "Circle"
 * > Circle.constructor
 * < f Function() {native code}
 */

// So the first argument specifies, the target for 'this'
Circle.call({}, 1); // is exactly similar to, new Circle(1)

// Similar to above, but arguments are passes as an array
Circle.apply({}, [1, 2, 3]);

// ------------------------ Adding /removing Properties

// Adding: Usecase; Adding a token on fly
const circle2 = new Circle();

// Adding a new property
circle.location = { x: 1 };

// To access dynamic property, when property name our not as per JS standards
// const propertyName = 'location';
const propertyName = 'center-location';
//circle['location'] = { x: 1 };
circle[propertyName] = { x: 1 };

// Removing: Usecase; removing password before displaying it to the user
delete circle.location;
// or
delete cirle['location'];

// ------------------------ For enumerating properties

// HERE WE USE FOR - IN

const circle3 = new Circle(10);

for (let key in circle3) {
  console.log(key, circle3[key]);
}

// filtering out properties
for (let key in circle3) {
  if (typeof circle3[key] !== 'function') {
    console.log(key, circle3[key]);
  }
}

// With this property we cannot separate properties from method
const keys = Object.keys(circle3);

// Checking existence of a property in an object
if ('radius' in Circle3) {
  console.log('Circle has a radius');
}
