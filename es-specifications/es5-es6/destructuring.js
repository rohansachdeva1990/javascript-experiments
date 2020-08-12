// Destructuring
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

// // --- New Way
// const { age, eyeColor, firstName, lastName } = person;


// Destructuring Array
// ES5
var john = ['John', 29];
//var name = john[0];
//var age = john[1];

// ES6
// We use square brackets to destruct the array. (Its analogous to creation)
const [name, age] = ['John', 29];
console.log(name);
console.log(age);

// Destructuring Object
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

// We use curly brackets to destruct the object. (Its analogous to creation)
const {
    firstName,
    lastName
} = obj;
console.log(firstName);
console.log(lastName);

const {
    firstName: a,
    lastName: b
} = obj;
console.log(a);
console.log(b);


// Practical use: returning multiple values from a function

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);