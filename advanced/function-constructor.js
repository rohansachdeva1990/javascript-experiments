//  Function constructor

// A normal way to construct an object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

// Name should be Upper camel
// This is a function constructor
// Here, 'this' refers to empty object created by new empty object
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // Alternative to use prototype
    // this.calculateAge = function () {
    //     console.log(2020 - this.yearOfBirth);
    // }
}

// ------------------------------------------------------------------ //

// Adding new properties to existing protoype object 
// It is not a part hasOwnProperty()
Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
}

// Adding new property to Person prototype
Person.prototype.lastName = 'Smith';

// ------------------------------------------------------------------ //

// This how we create new object using function const 
var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
