/*
Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

Use Object.keys(), Array.prototype.filter() and Array.prototype.includes() to remove the provided keys.
Use Array.prototype.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.
*/
/*


let object1={a:1,b:2,c:3};
let b=Object.keys(object1).filter((k)=>!['a','b'].includes(k));
console.log(b);

*/

const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));
