// Task 04: Rewrite the arrow function below as a standard function declaration

/**
 * 1. Fixed Solution (Standard Function Declaration)
 */
function double(number) {
    return number * 2;
}

/**
 * 2. Refactored Version (Arrow Function)
 * Professional & Concise: One-liner for simple arithmetic operations.
 */
const doubleArrow = (number) => number * 2;

/**
 * 3. Robust Version (Edge Case Handling)
 * Validates that input is a number and handles strings that could be parsed.
 */
function doubleRobust(number) {
    const parsed = Number(number);
    if (isNaN(parsed)) {
        console.error("Input must be a numeric value.");
        return 0;
    }
    return parsed * 2;
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Higher-order logic: a multiplier function.
 */
const multiplyBy = (number, factor) => number * factor;

// Execution
console.log(double(9)); // 18

// Automated Unit Tests
console.assert(double(9) === 18, "Test Failed: double(9)");
console.assert(doubleArrow(10) === 20, "Test Failed: doubleArrow(10)");
console.assert(doubleRobust("5") === 10, "Test Failed: doubleRobust string parsing");
console.assert(multiplyBy(4, 5) === 20, "Test Failed: multiplyBy(4, 5)");
