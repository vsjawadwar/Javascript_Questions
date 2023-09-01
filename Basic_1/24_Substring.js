// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
function checkString(a) {
    let temp = null;
    if (a.length < 4) {
        return false;
    }
    temp = a.substring(0, 4);
    if (temp === 'Java') {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkString("Java"));
console.log(checkString("Javascript"));
console.log(checkString("JavaCSS"));
console.log(checkString("CSSJava"));


