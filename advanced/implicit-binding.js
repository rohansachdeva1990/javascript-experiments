var Person = function (name, age) {
  return {
    name,
    age,
    sayName: function () {
      console.log(this.name);
    },
    mother: {
      name: 'Kim',
      sayName: function () {
        console.log(this.name);
      },
    },
  };
};

var brock = new Person('Brock', 45);
brock.mother.sayName();
