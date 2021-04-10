const _ = {};

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
