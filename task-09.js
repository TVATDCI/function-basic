// Task 09: Rewrite the function below as a function expression

/**
 * 1. Fixed Solution (Function Expression)
 */
const isDivisibleBy = function (number, divisor) {
  return number % divisor === 0;
};

/**
 * 2. Refactored Version (Arrow Function)
 * Professional & Concise: Implicit return.
 */
const isDivisibleByArrow = (number, divisor) => number % divisor === 0;

/**
 * 3. Robust Version (Edge Case Handling)
 * Validates division by zero and numerical inputs.
 */
function isDivisibleByRobust(number, divisor) {
  if (divisor === 0) return false;
  if (typeof number !== "number" || typeof divisor !== "number") return false;
  return number % divisor === 0;
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Finds all numbers between 1 and n that divide into n evenly.
 */
const getDivisors = (number) => {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisors.push(i);
    }
    return divisors;
};

// Execution
console.log(isDivisibleBy(4, 2)); // true
console.log(isDivisibleBy(9, 2)); // false

// Automated Unit Tests
console.assert(isDivisibleBy(12, 3) === true, "Test Failed: 12 is divisible by 3");
console.assert(isDivisibleByArrow(10, 3) === false, "Test Failed: 10 not divisible by 3");
console.assert(isDivisibleByRobust(10, 0) === false, "Test Failed: division by zero");
console.assert(JSON.stringify(getDivisors(6)) === "[1,2,3,6]", "Test Failed: divisors of 6");
