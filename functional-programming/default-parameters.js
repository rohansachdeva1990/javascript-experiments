const addFn = function(a, b = 2) {
  console.log(arguments);
  return a + b;
};

const add = (a, b = 2) => a + b;

// How default value was added before ES6
const addOld = function(a, b) {
  // 2 will only be evaluated once value of b is undefined.
  b = b || 2;
  console.log('arguments', arguments);
  return a + b;
};
