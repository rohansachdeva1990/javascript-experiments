// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

// // --- New Way
// // Similar to final functions
// const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";

// whereAmI();

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => {
  return `Age element ${index + 1} : ${2020 - el}.`;
});
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `${age}`;
});
console.log(ages6);

// Why are arrow functions useful, arrow function does not have a this keyword, they simply use the 'this' keyword of the invoked function
// Also they don't have the argument function

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    // Here 'this' refers to box5

    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      // Here 'this' refers to document, so the position and color would be undefined
      // when accessed using 'this'

      // var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      var str =
        'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  },
};

//box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      // Arrow functions share lexical 'this' keyword of it surrounding. so this would refer to this of box6
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};

//box6.clickMe();

const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    // Here the arrow function shares lexical 'this' from the surrounding, which is window
    document.querySelector('.green').addEventListener('click', () => {
      // Here position and color would be undefined
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};
//box66.clickMe();

// ES5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  // Here we access to 'this'
  // We are creating copy of this function and passing this to it
  var arr = friends.map(
    function(el) {
      // Here we don't have access to 'this' of Person
      return this.name + ' is friends with ' + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

new Person('Mike').myFriends6(friends);

// Arrow function does not have a argument fields available
