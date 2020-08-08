// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// --- New Way
// Similar to final functions
const whereAmI =
    (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";
