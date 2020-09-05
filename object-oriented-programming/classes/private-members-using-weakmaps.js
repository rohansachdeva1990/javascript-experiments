const _radius = new WeakMap();
const _move = new WeakMap();
const _moveBack = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, function () {
      // Here this will be undefined because of 'use strict'
      // limitations in ES6 classes.
      console.log('move', this);
    });

    // For arrow functions, 'this' is passed by default,
    _moveBack.set(this, () => {
      console.log('moveBack', this);
    });
  }

  draw() {
    console.log(_radius.get(this));

    // Calling private method
    _move.get(this)();
  }
}

const c = new Circle(1);

/**
 * We can also, maintain a single map for the properties like
 *
 * This make it very convoluted
 */
const privateProps = new WeakMap();
class Square {
  constructor(size) {
    privateProps.set(this, {
      size: size,
      move: () => {},
    });
  }

  draw() {
    const props = privateProps.get(this);
    console.log(props.size);
    props.move();
  }
}
