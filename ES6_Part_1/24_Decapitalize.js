// Write a JavaScript program to dcapitalize the first letter of a string.
function decapitalize(str){
    return (/[A-Z]/.test(str[0])?str[0].toLowerCase()+str.slice(1,str.length):str[0].toUpperCase()+str.slice(1,str.length));
}
console.log(decapitalize('Vishal'));
console.log(decapitalize('vishal'));
