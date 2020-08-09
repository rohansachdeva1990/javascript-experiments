// Object.create

/**
 * Difference between object create and function constructor.
 * 
 * Object.create -> Builds an Object that inherits directly from the 
 * one we passed into the first argument
 * 
 * function constructor -> Newly created object inherits from the function
 * prototype property
 * 
 */

var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
// Old way to populate new object
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1969
    },
    job: {
        value: 'designer'
    }
});