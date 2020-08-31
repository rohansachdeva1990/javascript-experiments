function notAPureFunction(number) {
  return number * Math.random();
}

function pureFunction(number) {
  return number * 2;
}

function isEligibleNP(age) {
  return age > minAge;
}
