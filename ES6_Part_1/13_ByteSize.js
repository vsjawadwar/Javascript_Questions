// Write a JavaScript program to convert a given string's length to bytes.

// Convert a given string to a Blob Object.
// Use Blob.size to get the length of the string in bytes.

function byteConversion(str){
return new Blob([str]).size;
}
console.log(byteConversion('Vishal'));