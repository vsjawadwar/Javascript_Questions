// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
function checkString(str,chr){
    for(let i = 0;i<str.length ; i++){
        if((i>=2 && i<=4) && (str.charAt(i)===chr))
        {
            result=true;
            return result;
        }  
    }
    result=false;
    return result;
}
console.log(checkString('Vishal','a'));
