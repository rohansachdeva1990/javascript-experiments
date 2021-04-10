/**
 * We use arguments keywords, when we don't know how much args we are expecting
 */
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

const createTuple = (a, b, c, d) => {
  console.log(arguments); // Should be undefined as it is not available in arrow functions
  return [[a, b], [c, d]];
};
