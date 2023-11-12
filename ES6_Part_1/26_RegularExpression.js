/*
Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.

Use RegExp.prototype.test() to check if the string evaluates to y/yes or n/no.
Omit the second argument, def to set the default answer as no. */

const yes_No = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
console.log(yes_No('Y')); 
console.log(yes_No('yes'));  
console.log(yes_No('No')); 
console.log(yes_No('Foo', true));  
