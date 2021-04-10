const _ = {};

_.filter = function(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

_.filterWithEach = function(arr, cb) {
  const result = [];
  _.each(arr, function(val, i, arr) {
    if (!!cb(val, i, arr)) {
      result.push(val);
    }
  });
  return result;
};

// Example

const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

// here function is called with one argument just for flexibility, other value can be used if required. like accessing data structure
const susupects = _.filter(videoData, function(suspectObject) {
  return suspectObject.present;
});

const suspectsNames = _.map(susupects, suspect => suspect.name);
