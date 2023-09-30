// Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
function rearrange(str1,str2){
let s1=str1.split("");
let s2=str2.split("");
s1.sort();
s2.sort();
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]){
            return false;
        }
    }
    return true;
}
console.log(rearrange('Vishal','shalVi'));
console.log(rearrange('Sai','Sainath'));