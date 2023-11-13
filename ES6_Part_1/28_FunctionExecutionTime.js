// Write a JavaScript program to measure the time a function to execute.

let executionTime=callback=>{
    const result=callback();
    return result;
}
console.log("Execution Time: "+ executionTime(()=>Math.pow(2,10))+ " ms");