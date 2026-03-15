// Task 05: Fix the code below so that it prints the correct values

/**
 * 1. Fixed Solution (Standard Function Expression)
 */
const capitalize = function (string) {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
};

/**
 * 2. Refactored Version (Arrow Function)
 * Professional & Concise: One-liner using string interpolation or simple concatenation.
 */
const capitalizeArrow = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

/**
 * 3. Robust Version (Edge Case Handling)
 * Handles empty strings, non-string inputs, and null/undefined.
 */
function capitalizeRobust(string) {
  if (typeof string !== "string" || string.length === 0) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Capitalizes every word in a sentence.
 */
const capitalizeWords = (sentence) => 
  sentence.split(" ").map(word => capitalizeRobust(word)).join(" ");

// Execution
console.log(capitalize("table")); // Table
console.log(capitalize("cat"));   // Cat
console.log(capitalize("hello")); // Hello

// Automated Unit Tests
console.assert(capitalize("cat") === "Cat", "Test Failed: basic capitalize");
console.assert(capitalizeArrow("hello") === "Hello", "Test Failed: arrow capitalize");
console.assert(capitalizeRobust("hELLO") === "Hello", "Test Failed: robust case correction");
console.assert(capitalizeWords("hello world") === "Hello World", "Test Failed: capitalize sentence");
