// Lecture: Rest parameters
// multiple values to array

//ES5
// Every function object has by default argument list
// arguments available to each execution context
// argument is not an array but its kind of array like
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18);
    })
}


isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
// with rest parameter we convert all the arguments to arrays
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


//ES5
function isFullAge5(limit) {
    // will copy the array from position 1
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}


//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

