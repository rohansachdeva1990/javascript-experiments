// Async Example
const second = () => {
    let a  = 10;
    setTimeout(() => {
        // Runs after 2 seconds
        console.log(`Async Hey There: ${a}`);
    }, 2000);
}

const first = () => {
    console.log('Hey There');
    second();
    console.log('The end');
}

first();