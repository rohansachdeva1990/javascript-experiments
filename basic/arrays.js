/*****************************
 * Arrays
 */
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);



var listOfAnimals = ["Tiger", "Lion", "Gorilla"];

// To access it
console.log(listOfAnimals[1]);


// We can have a list of functions
var functions = [
    function apple() {
        console.log("apple");
    },
    function orange() {
        console.log("orange");
    }
]

// 2-d array

var zoo = [
    ["Tiger", "Lion", "Gorilla"], // 0
    ["Eagle", "Sparrow", "Hawk"] // 1  
];

// to access Sparrow
console.log(zoo[1][1]);