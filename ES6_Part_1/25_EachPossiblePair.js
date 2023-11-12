/*
Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

Use Array.prototype.reduce(), Array.prototype.map() and Array.prototype.concat() to produce every possible pair from the elements of the two arrays. */


const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
console.log(xProd([1, 2], ['a', 'b']));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));
