// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function newString(a){
    let temp=null;
    if(a===null || a=== undefined){
        return false;
    }
    else{
        temp=a.substr(0,1);
        temp=temp + a + temp;
        return temp;
    }
}
console.log(newString("Vishal"));
console.log(newString("Sai"));
