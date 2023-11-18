// Write a JavaScript program to create an object from the given key-value pairs.
const arrayToObject=(arr)=>arr.reduce((a,v)=>(a[v[0]=v[1]],v),{});
console.log([['a',1],['b',2],['c',3]]);