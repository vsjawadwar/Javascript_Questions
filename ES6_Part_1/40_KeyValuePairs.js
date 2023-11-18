// Write a JavaScript program to create an array of key-value pair arrays from a given object.
const arrayConversion=(obj)=>Object.keys(obj).map(k=>[k,obj[k]]);
console.log(arrayConversion({a:'Vishal',b:'Sainath',c:'Prashant'}));