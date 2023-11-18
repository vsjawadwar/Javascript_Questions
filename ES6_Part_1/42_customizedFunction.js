/*
Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

Use Array.prototype.find() to return the first argument that returns true from the provided argument validation function, valid. 
*/

const coalesceFactory = valid => (...args) => args.find(valid);
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));
