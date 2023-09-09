// Write a JavaScript program to concatenate two strings except for their first character. 
function concatenate(str1,str2){
 return str1.substring(1,str1.length).concat(str2.substring(1,str2.length));
}
console.log(concatenate('Visha','VYoga'));