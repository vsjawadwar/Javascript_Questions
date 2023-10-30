// Write a JavaScript program to change the capitalization of all letters in a given string.
function capitalizeLetters(str){
let txt="";
    for(let i=0;i<str.length;i++){
        if(/[A-Z]/.test(str[i])){
            txt+=str[i].toLowerCase();
        }else{
            txt+=str[i].toUpperCase();
        }
    }
    return txt;
}
console.log(capitalizeLetters('Vishal'));
console.log(capitalizeLetters('VishalJawadwar'));
