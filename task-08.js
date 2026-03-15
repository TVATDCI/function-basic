// Task 08: Fix the code below so that it prints the correct output

/**
 * 1. Fixed Solution (Manual Loop)
 */
function letterReplacer(string, target, replaceWith) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) {
      newString += replaceWith;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

/**
 * 2. Alternative Version (Built-in String Methods)
 * More concise and faster using modern split/join or replaceAll.
 */
const letterReplacerModern = (string, target, replaceWith) => string.split(target).join(replaceWith);

/**
 * 3. Robust Version (Edge Case Handling)
 * Handles non-string inputs and empty arguments.
 */
function letterReplacerRobust(string, target, replaceWith) {
  if (typeof string !== "string" || typeof target !== "string" || typeof replaceWith !== "string") {
    return string;
  }
  return string.replaceAll(target, replaceWith);
}

/**
 * 4. Level 2 Version (Project Expansion)
 * Replaces multiple character sets based on a mapping object.
 */
function multiReplacer(string, replacements) {
    let result = string;
    for (const [target, replaceWith] of Object.entries(replacements)) {
        result = result.replaceAll(target, replaceWith);
    }
    return result;
}

// Execution
console.log(letterReplacer("cat", "c", "b")); // bat

// Automated Unit Tests
console.assert(letterReplacer("ooo", "o", "i") === "iii", "Test Failed: ooo replacement");
console.assert(letterReplacerModern("house", "h", "m") === "mouse", "Test Failed: house replacement");
console.assert(letterReplacerRobust("abc", 1, "x") === "abc", "Test Failed: invalid types");
console.assert(multiReplacer("hello world", { "h": "j", "o": "0" }) === "jell0 w0rld", "Test Failed: multi-replacer");
