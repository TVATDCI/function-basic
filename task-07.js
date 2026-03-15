// Task 07: Fix the code below so that it prints to the console the expected output

/**
 * 1. Fixed Solution (Arrow Function with Correct Parameters)
 */
const leadingZero = (number) => (number <= 9 && number >= 0 ? `0${number}` : `${number}`);

/**
 * 2. Alternative Version (Built-in String Methods)
 * More standard and concise: .padStart() is built for this.
 */
const leadingZeroModern = (number) => String(number).padStart(2, "0");

/**
 * 3. Robust Version (Edge Case Handling)
 * Handles negative numbers and validates numerical input.
 */
function leadingZeroRobust(number) {
    if (typeof number !== "number" || isNaN(number)) return "00";
    if (number < 0) return `-${Math.abs(number).toString().padStart(2, "0")}`;
    return number.toString().padStart(2, "0");
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Custom length padding for larger numbers.
 */
const formatWithPadding = (number, targetLength) => String(number).padStart(targetLength, "0");

// Execution
console.log(leadingZero(8));   // 08
console.log(leadingZero(0));   // 00
console.log(leadingZero(10));  // 10

// Automated Unit Tests
console.assert(leadingZero(8) === "08", "Test Failed: leadingZero(8)");
console.assert(leadingZeroModern(5) === "05", "Test Failed: padStart version");
console.assert(leadingZeroRobust(-5) === "-05", "Test Failed: negative numbers");
console.assert(formatWithPadding(1, 4) === "0001", "Test Failed: custom padding");
