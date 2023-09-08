// Write a JavaScript program to convert a given number into hours and minutes.
function hoursCalculation(number){
    let hrs=Math.floor(number/60);
    let mins=number%60;
    return `${hrs}:${mins}`;
}
console.log(hoursCalculation(213));