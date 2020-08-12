// 1. let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// --- New Way
let a1 = 'test';
const b1 = true;
const c1 = 789;
a1 = 'test2';


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
var name5 = 'Rohan'; // Var lets you re-declare a variable with same name (This is nasty!)
console.log(name5); // This will be 'Jane Miller'

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller'; // Error: Cannot be reassigned
console.log(name6);

// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName); // undefined
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    // 'var' seems to be scopeless , firstname and yearOfBirth will be resolved here
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
    // 'let' is strict; it will throw an error if variable is accessed without initialization
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);

var i = 23;

// Prints 0 1 2 3 4
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// Will print 5
console.log(i);
