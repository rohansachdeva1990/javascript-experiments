// DATA Module
var controller = (function () {
    var x = 23;

    // Private methods
    var add = function (a) {
        return x + a;
    }

    // Return an object containing all of the object containing methods
    return {

        // Public methods
        publicTest: function (b) {

            // This works because of closure
            // Will always have access to x and private add function
            //console.log(add(b));
            return add(b);
        }
    }
})();

// So this controller is just an object containing a publicTest method
//controller.publicTest(10);

// UI Module
var UIController = (function () {
    // Some code
})();


// App Module
// We pass the argument to make app control loosely coupled with other 2 modules
var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(10);
    return {
        anotherPublicMethod: function(){
            console.log(z);
        }
    }
})(budgetController, UIController);

controller.anotherPublicMethod();