//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        // Refers to john object
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            // refers to Windows object
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Now this refers to Mike
mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
