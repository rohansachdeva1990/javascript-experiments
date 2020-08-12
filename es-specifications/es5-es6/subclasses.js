// Subclasses (Inheritance)

// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete5 = function (name, yearOfBirth, job, olympicGames, medals) {

    // Calling super class constructor
    // Person5.call(..), calls the function constructor I guess
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


// Two function constructor are connected
// To make sure person prototype functions are available in Athelete5
Athelete5.prototype = Object.create(Person5.prototype);

// Should be in this order
Athelete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athelete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


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
}

class Athelete6 extends Person6 {

    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athelete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();