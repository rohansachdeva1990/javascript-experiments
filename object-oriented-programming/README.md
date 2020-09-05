# OOP with Javascript

## Objects

1. Creating Objects
2. Factories and Constructor
3. Primitive and Reference Types
4. Working with Properties
5. Private Properties
6. Getters / Setters

## Prototypes

In JS, we don't have object inheritance. So, to emulate the object inheritance, we use prototypes.
Prototypes can be considered as a common parent object, that we can use to share certain properties
among similar objects. Foreg

- Shape(Prototype) - OR "Parent"
  - Circle
  - Square
  - Triangle

So, Whenever you hear prototype, just understand its a parent.

- Every object that we create in JS, directly or indirectly inherit from objectBase (Prototype).
- Only 'Object' JS does not have an Object Base
- ObjectBase is same for every object.
- kind of similar to Java Object class

```javascript
let x = {};
let y = {};
console.log(Object.getPrototypeOf(x) === Object.prototype(y)); // true
```

So, A prototype is just a regular object in memory, there is nothing special about it. Every object has a prototype except the root object

Multilevel Inheritance

- OBJECT CREATED BY A GIVEN CONSTRUCTOR WILL HAVE THE SAME PROTOTYPE

```javascript
let arr = [];

/**
 * Similar for custom cons
 *  arr => arrBase._proto_ => object._proto__ (root)
 */

// 'Array' refers to Arraybase constructor used while creating array
array.__proto__ === Array.prototype;

// 'Circle' refers to CircleBase constructor used while creating circle
circle.__proto === Circle.prototype;
```

- Every property has an attribute type which defines enumeration behavior
- Object.getPrototypeOf(...)

```javascript
obj.__proto === Object.prototype; // Both refers to object base
```

- Object.keys only returns instance members
- for-in returns all instance and prototype methods
- obj.hasOwnProperty('propertyName'), only checks instance members
- Avoid extending Built-in Object!!!!!

> Main idea of prototype is to avoid mutliple function objects creation for similars objects. This is an optimization at bare minimum.

## Prototype Inheritance

An inheritance example:-

```javascript
Circle // Child
  - radius: 1
  - __proto__: Shape  // Parent of Circle
    - draw: f()
    - __proto__:
      - duplicate: f()
      - constructor: f Shape()
      - __proto__: Object // Parent of Shape

```

Technically,

```javascript
Obj o = new Obj(1); // Is equivalent to :-
Obj o1 = new Obj.prototype.constructor(1);  // used when we want to dynamically create an object
```

> Whenever you reset the prototype, always reset the constructor.

Intermediate Inheritance Functions

```javascript
// These are call intermediate inheritance functions
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
```

- Polymorphism (Many - Forms)
- When to use inheritance?
  - Keep it simple, you don't need to over complicate things
  - If you see the object characterstics are being repeated, then go ahead encapsulate those features in a generic object
  - Avoid going more than one level of inheritance
- Favor composition over inheritance
  - We use mixins

```javascript
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}
```

## Classes

- ES6 Classes

  - All the functions we add up in a classs will end up in prototype
    - If you need to avoid define the method in the constructor
  - Classes in JS are just syntactic sugar. They are essentially function
    - typeof SomeClass => "function"
    - Check babeljs.io, for live compile
  - Classes enforce you to use "new" operator

  ```javascript
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
  ```

- Hoisting

  - Hoisting means to move the methods to top, so that they are available wherever used in the function
  - Function declaration is hoisted
  - Function expression is not hoisted
  - Class declaration and expression both are not hoisted,

  ```javascript
  const c = new Circle(); // This wont compile
  const s = new Square();

  class Circle {}

  const square = class {};
  ```

- Static Members

  - Mainly used for utilities
  - Eg. Math.round() etc

  ```javascript
  class Math2 {
    static abs(value) {}
  }
  Math2.abs(1213.2);
  ```

- This keyword
- Private Members

  - Idea is Abstraction
    - Ways to implement private members
      - Terrible one, add '\_' before your property
      - Using ES6 symbols
        - It is still kind off private
        - computedPropertyName for private methods
      - Using WeakMaps
        - Keys not referenced will be garbage collected

- Getters and Setters

  - use get and set by ES6

- Inheritance
- Method Overriding
- JS will look for move in Circle object, if it is not found it will look into prototype of Circle which is shape

## Modules

Things related should go together (Cohesion)

- Modules

  - Code becomes more maintainable
  - Easier to reuse
  - Abstract Code

- Common JS Modules

  - Used in NodeJs
  - module.exports
  - require(...); Relative path using './somejsfile' without extension

- ES6 Modules
  - default import without curly braces
  - named import with curly braces
  - A simple hack to get rid of webpack in html is to add script of type='module'
