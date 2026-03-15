// Task 10: Fix the code below so that it returns the expected value

/**
 * 1. Fixed Solution (Manual Loop)
 */
const onlyNumbers = function (array) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }
  return arrayResult;
};

/**
 * 2. Alternative Version (Higher-Order Methods)
 * More functional & modern: .filter() is the industry standard for this task.
 */
const onlyNumbersModern = (array) => array.filter(item => typeof item === "number");

/**
 * 3. Robust Version (Edge Case Handling)
 * Validates that the input is an array and handles empty or non-array inputs.
 */
function onlyNumbersRobust(array) {
  if (!Array.isArray(array)) return [];
  return array.filter(item => typeof item === "number" && !isNaN(item));
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Filter only numbers and then sum them up using .reduce().
 */
const sumOnlyNumbers = (array) => 
  onlyNumbersRobust(array).reduce((sum, current) => sum + current, 0);

// Execution
console.log(onlyNumbers([1, 2, "a", "b", "c", 3])); // [1, 2, 3]

// Automated Unit Tests
console.assert(JSON.stringify(onlyNumbers([1, "a", 2])) === "[1,2]", "Test Failed: basic filtering");
console.assert(JSON.stringify(onlyNumbersModern(["x", 10, "y"])) === "[10]", "Test Failed: modern filtering");
console.assert(JSON.stringify(onlyNumbersRobust(null)) === "[]", "Test Failed: robust null input");
console.assert(sumOnlyNumbers([1, "a", 2, 3]) === 6, "Test Failed: sumOnlyNumbers result should be 6");
