// Classes

// ES5 - function constructor
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'engineer');
console.log(john5);

// ES6
class Person6 {

    // Every class declaration needs to has this
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // Helper functions
    static greeting() {
        console.log("Hey there!")
    }
}

const john6 = new Person6('John', 1990, 'engineer');
console.log(john6);

Person6.greeting();