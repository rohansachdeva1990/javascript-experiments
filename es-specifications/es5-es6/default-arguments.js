// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// --- New Way
function isValidAgeNew(age = 10) {
    return age
}

// Or

const isValidAge = (age = 10) => age;