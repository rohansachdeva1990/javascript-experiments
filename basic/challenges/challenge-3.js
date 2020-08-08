/**
 * CODING CHALLENGE 3
 * 
 * Prequisites:-
 *  - functions
 *  - functionn-expressions
 *  - arrays
 * 
 * John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268
 * 
 * To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes
 * to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
 * and 10% if the bill is more than$200.
 * 
 * In the end, John would like to have 2 arrays:
 *  1) Containing all three tips (one for each bill)
 *  2) Containing all three final paid amounts (bill + tip).
 * 
 * (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
 */

var bills = [124, 48, 268];
console.log(bills);

var tipCalculator = function (billAmount) {
    if (billAmount < 50) {
        return billAmount * 0.2;
    } else if (billAmount > 50 && billAmount < 200) {
        return billAmount * 0.15;
    } else {
        return billAmount * 0.1;
    }
}

var tips = new Array();

tips.push(tipCalculator(bills[0]));
tips.push(tipCalculator(bills[1]));
tips.push(tipCalculator(bills[2]));

console.log(tips);

var totalBills = new Array();
totalBills.push(bill[0] + tips[0]);
totalBills.push(bill[1] + tips[1]);
totalBills.push(bill[2] + tips[2]);

console.log(totalBills)