/*
Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

Use String.prototype.padStart() and String.prototype.padEnd() to pad both sides of the given string.
Omit the third argument, char, to use the whitespace character as the default padding character.
*/

const pad = (str, length, char = ' ') =>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);
console.log(pad('cat', 8));
console.log(pad(String(42), 6, '0'))
console.log(pad('foobar', 3))
