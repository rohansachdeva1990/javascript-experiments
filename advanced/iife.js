// Lecture: IIFE : Immediately Invoked Function Expression
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// Like annonymous functions; these parenthesis makes this function an expression
// not a declaration
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

(function () {
    console.log(10)
})();