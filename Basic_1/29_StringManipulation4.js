// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
function checkString(str){
    if(str.length < 4){
        return "Invalid String";
    }
    else{
        if(str.substring(0,4)==="Java"){
            return "String starts with Java";
        }
        else{
            return "String does not starts with Java";
        }
    }
}
console.log(checkString("Java"));
console.log(checkString("Javascript"));
console.log(checkString("Python"));
console.log(checkString("c"));