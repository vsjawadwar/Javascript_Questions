// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.).
function correctSentence(str){
let firstChar=str[0];
let lastChar=str[str.length-1];
return (/[A-Z]/.test(firstChar) && lastChar==`.`);
}
console.log(correctSentence("My name is Vishal."));
console.log(correctSentence("My name is Vishal"));
