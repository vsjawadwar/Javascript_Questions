// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

function equality(str){
    let a=null;
    let b=null;
    let s=str.split("");
    for(let i=0;i<s.length;i++){
        if(s[i]=='P'||s[i]=='p'){
            a++;
        }else if(s[i]=='T'||s[i]=='t'){
            b++;
        }
    }
    return (a==b)?true:false;
}
console.log(equality('pppttt'));
console.log(equality('ppptttt'));


