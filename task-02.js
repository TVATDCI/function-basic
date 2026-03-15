// Task 02: Fix and complete the code below so that the right result is printed on the console

/**
 * 1. Fixed Solution (Standard Function Declaration)
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * 2. Refactored Version (ES6 Arrow Function)
 * Professional & Concise: One-liner with implicit return.
 */
const isEvenArrow = (number) => number % 2 === 0;

/**
 * 3. Robust Version (Edge Case Handling)
 * Validates that the input is a number and handles null/undefined.
 */
function isEvenRobust(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.error("Input must be a valid number.");
    return false;
  }
  return number % 2 === 0;
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Generalizes the logic to check divisibility by any divisor.
 */
const isDivisibleBy = (number, divisor) => {
  if (divisor === 0) return false;
  return number % divisor === 0;
};

// Execution
console.log(isEven(2)); // true
console.log(isEven(9)); // false
console.log(isEven(20)); // true

// Automated Unit Tests
console.assert(isEven(2) === true, "Test Failed: 2 is even");
console.assert(isEven(3) === false, "Test Failed: 3 is odd");
console.assert(isEvenRobust(null) === false, "Test Failed: Should handle null input");
console.assert(isDivisibleBy(12, 3) === true, "Test Failed: 12 is divisible by 3");
console.assert(isDivisibleBy(12, 5) === false, "Test Failed: 12 is not divisible by 5");
