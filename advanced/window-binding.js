var sayAge = function () {
  console.log(this.age);
};

var me = {
  age: 25,
};

// Here this keyword will default to window object
sayAge();
window.age = 35;
sayAge();
