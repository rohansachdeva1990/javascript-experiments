// This is a MAP data structure, Hashmap
// Till ES5 we used object, but from es6 hashmap is available.

const question = new Map();
question.set('question', 'What is the official name of the latest majot JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer : D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);

// // To remove
// if(question.has(4)){
//     question.delete(4);
// }

// console.log(question);

// question.clear();
// console.log(question);

// Maps are also iterable, which is not the case with objects

//question.forEach((value, key) => console.log(`this is ${key}, and its set to ${value}`));

// We can loop using for-of
// for(let key of question){

// }

for (let [key, value] of question.entries()) {

    if (typeof (key) === 'number') {
        console.log(`this is ${key}, and its set to ${value}`)
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
