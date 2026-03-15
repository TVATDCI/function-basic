# Function basics


## Task 01

Fix the code below to get the expected result in the console

Expected output: 7


```javascript
function add() {
    return a + b;
}

let result = add(2, 5);

console.log(result);
```


## Task 02

Fix and complete the code below so that the right result is printed on the console


```javascript
function isEven(number) {
  number % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(9)); // false
console.log(isEven(20)); // true
```
 
## Task 03

Complete the code below so that the right result is shown in the console

```javascript
function getNumbersUntil(number) {
    const list = [];
    for (let i = 0; i < number; i++) {
        list.push(i);
    }
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);

console.log(list1); // [0, 1, 2, 3, ..., 9]
console.log(list2); // [0, 1, 2, 3, ..., 7]
console.log(list3); // [0, 1, 2, 3, ..., 19]
```

## Task 04

Rewrite the arrow function below as a standard function declaration


```javascript
const double = number => number2;

console.log(double(9)); // 18
```

## Task 05

Fix the code below so that it prints the correct values


```javascript
const capitalize = function () {
  string[0].toUpperCase() + string.slice(1);
};

console.log(capitalize("table")); // Table
console.log(capitalize("cat")); // Cat
console.log(capitalize("hello")); // Hello
```


## Task 06

Fix the code below so that it prints the right values to the console 


```javascript
const haveEqualLength = () => string1.length === string2.length;

console.log(haveEqualLength("cat", "dog")); // true
console.log(haveEqualLength("house", "bookshelf")); // false
console.log(haveEqualLength("JavaScript", "Python")); // false
console.log(haveEqualLength("hello", "mouse")); // true 
```

## Task 07

Fix the code below so that it prints to the console the expected output

The function leadingZero takes in input a single a number and returns a string:

- if the number in input is less than or equal to 9, it will return it putting 
a 0 in front it
- otherwise it will return the same number

```javascript
const leadingZero = n => number <= 9 ? `0${number}` : `${number}`;

console.log(leadingZero()); // 08
console.log(leadingZero()); // 00
console.log(leadingZero()); // 10
console.log(leadingZero()); // 107
console.log(leadingZero()); // 02
```

## Task 08

Fix the code below so that it prints the correct output

The function letterReplacer() takes 3 strings in input, and returns a new string which will be the first string we pass where every occurrence of "target" is replaced by "replaceWith"

For example

```plaintext
letterReplace("ooo", "o", "i") => iii
letterReplace("road", "r", "t") => toad
letterReplace("house", "h", "m") => mouse
```


```javascript
function letterReplacer(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) {
      newString += replaceWith;
    } else {
      newString += string[i];
    }
  }
}

console.log(letterReplacer("cat", "c", "b")); // bat
console.log(letterReplacer("legend", "e", "3")); // l3g3nd
console.log(letterReplacer("mouse", "m", "h")); // house
```


## Task 09

Rewrite the function below as a function expression


```javascript
function isDivisibleBy(number, divisor) {
  return number % divisor === 0;
}

console.log(isDivisibleBy(4, 2)); // true
console.log(isDivisibleBy(9, 2)); // false
console.log(isDivisibleBy(12, 3)); // true
```


## Task 10

Fix the code below so that it returns the expected value

```javascript
const onlyNumbers = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }

  return arrayResult;
};

console.log(onlyNumbers([1, 2, "a", "b", "c", 3])); // [1, 2, 3]
```