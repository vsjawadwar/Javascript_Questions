// Write a JavaScript program to count the number of vowels in a given string.
function vowelsCount(str){
let counter=null;
let s=str.split("");
    for(let i=0;i<s.length;i++){
        if(s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U'||s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            counter++;
        }
    }
    return counter;
}
console.log(vowelsCount('Vishal'));
console.log(vowelsCount('Jay Shree Ram'));

