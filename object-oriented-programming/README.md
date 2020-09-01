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
