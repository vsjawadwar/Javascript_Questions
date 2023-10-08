// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
function trailingZero(n){
    let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}
console.log(trailingZero(8));