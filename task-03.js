// Task 03: Complete the code below so that the right result is shown in the console

/**
 * 1. Fixed Solution (Standard For Loop)
 */
function getNumbersUntil(number) {
    const list = [];
    for (let i = 0; i < number; i++) {
        list.push(i);
    }
    return list;
}

/**
 * 2. Alternative Version (Higher-Order Methods)
 * More functional & modern: Array.from is concise and avoids manual loops.
 */
const getNumbersUntilModern = (number) => Array.from({ length: number }, (_, i) => i);

/**
 * 3. Robust Version (Edge Case Handling)
 * Handles negative numbers and non-integer inputs correctly.
 */
function getNumbersUntilRobust(number) {
    if (typeof number !== "number" || number < 0) {
        console.error("[Validation Error] Input must be a positive number.");
        return [];
    }
    return Array.from({ length: Math.floor(number) }, (_, i) => i);
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Adds the ability to specify start, stop, and step.
 */
const getRange = (start, stop, step = 1) => {
    return Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
};

// Execution
console.log(getNumbersUntil(10)); // [0, 1, 2, ..., 9]

// Automated Unit Tests
// Note: Some tests below will intentionally trigger console.error to verify validation logic.
const list3 = getNumbersUntil(3);
console.assert(JSON.stringify(list3) === "[0,1,2]", `Test Failed: expected [0,1,2], got ${JSON.stringify(list3)}`);
console.assert(JSON.stringify(getNumbersUntilModern(2)) === "[0,1]", "Test Failed: Modern version");
// The following test triggers a console error to confirm robustness:
console.assert(JSON.stringify(getNumbersUntilRobust(-5)) === "[]", "Test Failed: Negative numbers");
console.assert(JSON.stringify(getRange(5, 10, 2)) === "[5,7,9]", "Test Failed: Range with step 2");
