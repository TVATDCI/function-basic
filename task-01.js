// Task 01: Fix the code below to get the expected result in the console
// Expected output: 7

/**
 * 1. Fixed Solution (Standard Function Declaration)
 */
function add(a, b) {
  if (a === undefined || b === undefined) return 0;
  return a + b;
}

/**
 * 2. Refactored Version (ES6 Arrow Function)
 * Professional & Concise: Arrow functions provide a shorter syntax.
 */
const addArrow = (a, b) => a + b;

/**
 * 3. Robust Version (Edge Case Handling)
 * Validates that inputs are actually numbers to avoid NaN results.
 */
function addRobust(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.error("Invalid input: arguments must be numbers.");
    return null;
  }
  return a + b;
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Uses Rest Parameters (...) to sum an indefinite amount of numbers.
 */
function addAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Execution
console.log("Task 01 Result:", add(2, 5));

// Automated Unit Tests
console.assert(add(2, 5) === 7, "Test Failed: 2 + 5 should be 7");
console.assert(addArrow(10, 20) === 30, "Test Failed: Arrow function 10 + 20");
console.assert(addRobust("2", 5) === null, "Test Failed: Should handle non-number strings");
console.assert(addAll(1, 2, 3, 4) === 10, "Test Failed: addAll sum 1,2,3,4");
