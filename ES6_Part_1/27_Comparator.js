/*
Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.

Create a new Set() with all values of a and values in b for which the comparator finds no matches in a, using Array.prototype.findIndex().
*/
const union_With = (a, b, comp) =>
 Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
