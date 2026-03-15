// Task 06: Fix the code below so that it prints the right values to the console

/**
 * 1. Fixed Solution (Arrow Function Declaration)
 */
const haveEqualLength = (string1, string2) => string1.length === string2.length;

/**
 * 2. Refactored Version (Standard Function)
 * For clarity in more complex logic cases.
 */
function haveEqualLengthStandard(s1, s2) {
  return s1.length === s2.length;
}

/**
 * 3. Robust Version (Edge Case Handling)
 * Validates that both arguments are strings.
 */
function haveEqualLengthRobust(s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string") {
    console.error("[Validation Error] Both arguments must be strings.");
    return false;
  }
  return s1.length === s2.length;
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Checks if multiple strings all have the same length.
 */
const allHaveEqualLength = (...strings) => {
  if (strings.length < 2) return true;
  const targetLength = strings[0].length;
  return strings.every(s => s.length === targetLength);
};

// Execution
console.log(haveEqualLength("cat", "dog")); // true

// Automated Unit Tests
// Note: Some tests below will intentionally trigger console.error to verify validation logic.
console.assert(haveEqualLength("cat", "dog") === true, "Test Failed: cat, dog");
console.assert(haveEqualLength("house", "bookshelf") === false, "Test Failed: house, bookshelf");
// The following test triggers a console error to confirm robustness:
console.assert(haveEqualLengthRobust(123, "123") === false, "Test Failed: number, string");
console.assert(allHaveEqualLength("cat", "dog", "pen") === true, "Test Failed: multi-string match");
console.assert(allHaveEqualLength("cat", "house", "pen") === false, "Test Failed: multi-string mismatch");
