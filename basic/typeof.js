
let i = 10;
console.log(typeof(i));




const question = new Map();
question.set('question', 'What is the official name of the latest majot JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer : D');
question.set(false, 'Wrong, please try again!');

for (let [key, value] of question.entries()) {
    
    if (typeof (key) === 'number') {
        console.log(`this is ${key}, and its set to ${value}`)
    }
}