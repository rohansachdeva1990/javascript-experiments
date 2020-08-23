function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = a => b => a + b;

const addOne = add(1); // 1 + b
add(1)(2);
addOne(3);

let input = '   JavaScript   ';

// This is functional style
const trim = str => str.trim();

// Here its kind of duplicate, because the only thing changed is wrapping element
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();
const transform = compose(trim, toLowerCase, wrap('div'));
transform(input);
