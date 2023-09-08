// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function stringAlter(str){
    let s=str.split("");
    for(let i=0; i<str.length; i++){
        switch(s[i]){
            case " ":
                break;
                case "z":
                    s[i]='a';
                    break;
                case 'Z':
                    s[i]='A';
                    break;
                default:
                    s[i]=String.fromCharCode(1 + s[i].charCodeAt(0));
        }
    }
    return s.join('');
}
console.log(stringAlter("Vishal"));
