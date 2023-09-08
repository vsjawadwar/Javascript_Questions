// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function stringSearch(str){
    let s=str.split("");
    for(let i=0;i<s.length;i++){
        if(s[i]==='a'||s[i]==='A'){
            if(s[i+4]==='b' || s[i+3]==='B'){
                return true;
            }
        }
    }
    return false;
}
console.log(stringSearch("Chainsbreak"));
console.log(stringSearch("Vishal"));