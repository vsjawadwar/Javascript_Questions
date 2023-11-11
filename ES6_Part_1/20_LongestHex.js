// Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
let longestHex=(shortHex)=>{
    let hexTemp="#"+shortHex.slice(shortHex.startsWith("#")?1:0).split("").map((item)=>item+item).join("");
    return hexTemp;
};
console.log(longestHex('#013'));