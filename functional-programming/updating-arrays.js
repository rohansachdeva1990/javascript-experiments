const numbers = [1, 2, 3];

// ---------------------------- Adding
// So, 1st we copy all the old elements in the array
// At last
let added = [...numbers, 4];

// At Beg
added = [4, ...numbers];

// At position
const index = numbers.indexOf(2);

// so, copy all the items before 4 (using spread)
// add your element -> 4
// add remaining elements
added = [numbers.slice(0, index), 4, ...numbers.slice(index)];

// ---------------------------- Removing

// Intention is to create an array with removed element

let removed = numbers.filter(n => n !== 2);

// ---------------------------- Updating

let updated = numbers.map(n => (n === 2 ? 20 : n));
