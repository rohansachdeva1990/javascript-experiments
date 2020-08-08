/**
 * CODING CHALLENGE 1
 * ------------------
 *  Prerequisite:-
 *   - variable-data-types
 *   - variable-mutation-and-type-coercion
 *   - operators
 *   - operators-precedence
 * 
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the 
 * formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
 * 
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs
 * 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 * 4. Print a string to the console containing the variable from step 3. 
 * (Something like "Is Mark's BMI higher than John's? true").
 * 
 */

var massMark = 70;
var heightMark = 1.71;

var massJohn = 90;
var heightJohn = 1.80;

var bmiMark = (massMark / (heightMark * heightMark));
var bmiJohn = (massJohn / (heightJohn * heightJohn));

var result = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + result);