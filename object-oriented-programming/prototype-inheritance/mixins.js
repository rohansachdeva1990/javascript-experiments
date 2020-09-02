function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('walking');
  },
};

const canSwim = {
  walk: function () {
    console.log('swimming');
  },
};

// We can add above behavior to an empty object
const newBorn = Object.assign({}, canEat, canWalk);

//  Adding to already existing...
function Person() {}
Object.assign(Person.prototype, canEat, canWalk);

const aPerson = new Person();

console.log(aPerson);

function Goldfish() {}
// Objec t.assign(Goldfish.prototype, canSwim, canEat);
mixin(Goldfish.prototype, canSwim, canEat);

const fishy = new Goldfish();
console.log(fishy);
