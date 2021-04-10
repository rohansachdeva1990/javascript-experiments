const _ = {};

_.map = function(list, callback) {
  let result;
  if (Array.isArray(list)) {
    result = [];
    for (let i = 0; i < list.length; i++) {
      result.push(callback(list[i], i, list));
    }
  } else {
    const result = {};
    for (let key in list) {
      result[key] = callback();
    }
  }
  return result;
};

// Only working with array for this scenario. More fancy approach
_.mapWithEach = function(list, callback) {
  const result = [];
  _.each(list, function(value, i, list) {
    result.push(callback(value, i, list));
  });
};

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (let index = 0; index < list.length; index++) {
      callback(list[index], index, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(['A', 'B', 'C'], function(value, index, list) {
  if (list[index + 1]) {
    console.log(value, ' is younger than ', index);
  } else {
    console.log(value, ' is the oldest');
  }
});
