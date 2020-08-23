// Using Immutable.js (This wont work, as we need to install the library first)
// npm install immutable
import { Map } from 'immutable';
import { produce } from 'immer';

//let book = { title: 'Harry Potter' };
let book = Map({ title: 'Harry Potter' });

// set returns a new book
function publish(book) {
  return book.set('isPublished', true);
}

book = publish(book);

// we need getters, toJS to access
console.log(book.toJS());

// Using Immer
// npm install immer
// Better than spread operator
function newPublish(book) {
  // produce(initialState, callBackReturingProxyObject)
  // Will create copy of book and apply all changes made on draftBook
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let updated = newPublish(book);

console.log(updated);
