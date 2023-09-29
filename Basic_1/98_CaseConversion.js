// Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.

// Fox example "Write" will be write and "PHp" will be "PHP"

function caseConversion(str){
let lower=0;
let upper=0;
    for(let i=0;i<str.length;i++){
        if(/[A-Z]/.test(str[i])){
            upper++;
        }else{
            lower++;
        }
    }
    if(upper > lower){
        return str.toUpperCase();
    }else{
        return str.toLowerCase();
    }
}
console.log(caseConversion('Vishal'));
console.log(caseConversion('VISHal'));