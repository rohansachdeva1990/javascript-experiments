/**
 * CODING CHALLENGE 4
 * 
 * Prerequisites:-
 *  - object-and-properties
 *  - objects-and-methods
 * 
 * Let's remember the first coding challenge where Mark and John compared their BMIs. 
 * Let's now implement the same * functionality with objects and methods.
 * 
 * 1. For each of them, create an object with properties for their full name, mass, and height
 * 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
 * 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
 * Don't forget  they might have the same BMI.
 * 
 * Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
 */

var john = {
    fullName: "John Snow",
    mass: 70,
    height: 1.70,
    calcBmi: function calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
console.log("John BMI: " + john.calcBmi());

var mark = {
    fullName: "Mark Of Zorro",
    mass: 70,
    height: 1.80,
    calcBmi: function calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
console.log("Mark BMI: " + mark.calcBmi())

if (mark.bmi > john.bmi) {
    console.log(mark.fullName + " has the highest BMI of " + mark.bmi);
} else if (mark.bmi < john.bmi) {
    console.log(john.fullName + " has the highest BMI of " + john.bmi);
} else {
    console.log(mark.fullName + " and " + john.fullName + " has the same BMI of " + mark.bmi);
}