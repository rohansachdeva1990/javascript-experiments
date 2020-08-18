var sayName = function () {
  console.log('My name is ' + this.name);
};

var sayNameWithLang = function (lang1, lang2, lang3) {
  console.log(
    `My name is ${this.name} and I speak ${lang1}, ${lang2} and ${lang3} `
  );
};

var stacey = {
  name: 'Stacey',
  age: 20,
};

// We want to call this function in the context of stacey's
sayName.call(stacey);

var languages = ['Java', 'JS', 'C'];
sayNameWithLang.call(stacey, languages[0], languages[1], languages[2]);

// if we want to just pass an array and let the function destructure it, then we use apply() which takes an array
sayNameWithLang.apply(stacey, languages);

// Bind; returns us a new function w/o invoking the new function
var newFunction = sayNameWithLang.bind(
  stacey,
  languages[0],
  languages[1],
  languages[2]
);
console.log('HERE we use bind now');
newFunction();
