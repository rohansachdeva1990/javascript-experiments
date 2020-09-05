const Circle = function () {
  this.draw = function () {
    console.log(this);
  };

  move(){
      console.log(this);
  }

};

const c = new Circle();

// This is a method call, we are calling a method on an object
c.draw();

// Getting reference of a method
const draw = c.draw;
console.log(draw);

// This is a function call, its an standalone function
draw(); //  here this will refer to window object, and we accidently modify global object (windows)

const move = c.move;
move(); // This will be undefined, as body of our classes are executed in strict mode



