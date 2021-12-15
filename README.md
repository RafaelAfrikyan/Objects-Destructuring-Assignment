## 1. Get name, country and jod using destructuring.
___

```
let person = { name: "Sarah", country: "Armenia", job: "Developer" };

console.log(name); // "Sarah"

console.log(country); // "Nigeria"

console.log(job); // "Developer" 
```
[getName.js](getName.js)

## 2. Concatenate the two arrays.

```
const arr1 = [1, 2, 3, 4];

const arr2 = [5, 6, 7, 8, 9];

const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 
```
[concateArr.js](concateArr.js)

## 3. Upvotes and Downvotes

Given an object containing counts of both upvotes and downvotes, return what vote count should be
displayed. This is calculated by subtracting the number of downvotes from upvotes.

```
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

[upvotes.js](upwotes.js)

## 4. 50 30 20

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

```
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

[fiftyThirtyTwenty.js](fiftyThirtyTwenty.js)

## 5. Create a one-liner function


[oneLiner.js](oneLiner.js)

## 6. Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +

```
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```

[sumOfElements.js](sumOfElements.js)

## 7. Swapping Values using the Destructuring Assignment

```
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```
[swapValues.js](swapValues.js)