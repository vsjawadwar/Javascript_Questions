// Write a JavaScript program to generate a random hexadecimal color code.
let hexCode=()=>{return (Math.random()*0xffff*100000).toString(16).slice(0,6);
}
console.log(hexCode());