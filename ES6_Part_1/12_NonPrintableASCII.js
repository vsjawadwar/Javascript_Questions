// Write a JavaScript program to remove non-printable ASCII characters from a given string.

// Use String.prototype.replace() with a regular expression to remove non-printable ASCII characters.

const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(remove_non_ASCII('äÄçÇéÉêJayShreeRaömÖÐþúÚ'));