/*
Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

Use Object.keys() to get all the keys of the second object.
Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.
*/
const matches=(obj,source)=>Object.keys(source).every(key=>obj.hasOwnProperty(key) && obj[key]=== source[key]);

console.log(matches({age:25,hair:'long',beard:true},{hair:'long',beard:true}));

console.log(matches({name:'',age:25,hair:'long',beard:true},{hair:'long',beard:true}));
