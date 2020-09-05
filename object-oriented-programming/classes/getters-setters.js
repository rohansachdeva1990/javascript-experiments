const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // Way-2: To access directly c.radius, but its too convoluted
    // Object.defineProperty(this, radius, {
    //     get: function(){

    //     }
    // });
  }

  // Recommeded way
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius');
    _radius.set(this, value);
  }

  // Way-1: When we use get.. based style
  //   getRadius() {
  //     return _radius.get(this);
  //   }
}

con;
