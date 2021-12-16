## 1. Get name, country and jod using destructuring.
___

```js
let person = { name: "Sarah", country: "Armenia", job: "Developer" };

console.log(name); // "Sarah"

console.log(country); // "Nigeria"

console.log(job); // "Developer" 
```
[getName.js](getName.js)

## 2. Concatenate the two arrays.
___

```js
const arr1 = [1, 2, 3, 4];

const arr2 = [5, 6, 7, 8, 9];

const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 
```
[concateArr.js](concateArr.js)

## 3. Upvotes and Downvotes
___

Given an object containing counts of both upvotes and downvotes, return what vote count should be
displayed. This is calculated by subtracting the number of downvotes from upvotes.

```js
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

[upvotes.js](upwotes.js)

## 4. 50 30 20
___

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

```js
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

[fiftyThirtyTwenty.js](fiftyThirtyTwenty.js)

## 5. Create a one-liner function
---
Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties:

```js
cityFacts({
name: "Paris",
population: "2,140,526",
continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
cityFacts({
name: "Tokyo",
population: "13,929,286",
continent: "Asia",
}); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
```


[oneLiner.js](oneLiner.js)

## 6. Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +
___

```js
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```

[sumOfElements.js](sumOfElements.js)

## 7. Swapping Values using the Destructuring Assignment

```js
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```
[swapValues.js](swapValues.js)

## 8. Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

```js
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
```
[upperCase.js](upperCase.js)

## 9. Optional task - Frequency Distribution

Create a function that returns the frequency distribution of an array. This function should return an object,
where the keys are the unique elements and the values are the frequency in which those elements occur.

```js
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
getFrequencies([]) ➞ {}
```
[optional_1.js](optional_1.js)

## 10. removeNaNitems

You receive an object with nested objects with strings as values. Convert their values to
number and return an object without the entries that evaluate to NaN.

```js
findAndRemove({
bedroom: {
slippers: "10000",
piano: "550",
call: "vet",
travel: "world",
},
});
// => OUTPUT
// {
// bedroom: {
// slippers: 10000,
// piano: 5500,
// },
// }
```
[optional_2.js](optional_2.js)