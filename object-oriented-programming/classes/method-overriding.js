class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();

// JS will look for move in Circle object, if it is not found it will look into prototype of Circle which is shape
c.move();
