/*
Write a JavaScript program to remove false values from a given array.
Use Array.prototype.filter() to filter out falsy values (false, null, 0, "", undefined, and NaN).
*/

const truthyArray=arr=>arr.filter(Boolean);
console.log(truthyArray([false, NaN, 'e' * 23]));
console.log(truthyArray([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
