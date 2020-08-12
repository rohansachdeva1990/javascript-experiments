// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b); // This will throw an Error as a and b would appear undefined.
console.log(c); // This would be fine... prints 3

// ES5
(function() {
    var d = 3; // This is private
})();

console.log(d);
