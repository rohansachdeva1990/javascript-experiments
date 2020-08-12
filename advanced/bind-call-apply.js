// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 29,
    job: 'teacher',

    // This is a part of john object
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// Method Borrowing; we borrowed method from John and used it on Emily
john.presentation.call(emily, 'friendly', 'afternoon');

// Apply is similar to call, but args are different
//john.presentation.apply(emily , ['friendly', 'afternoon']);

// Bind method, similar to call but bind doesn't immediately call the function
// It returns the copy of the function
// It allows us to preset some arguments, CURRYING!!
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
var isFullAgeJapan = isFullAge.bind(this, 20);
var fullJapan = arrayCalc(ages, isFullAgeJapan);
console.log(ages);
console.log(fullJapan);


// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);