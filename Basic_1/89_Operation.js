// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
function operator(n1,n2,result){
    if(n1 + n2 == result){
        return `${n1} + ${n2} = ${result}`;
    }else if(n1 - n2 == result){
        return `${n1} - ${n2} = ${result}`;
    }else if(n1 * n2 ==result){
        return `${n1} * ${n2} = ${result}`;
    }else if(n1 / n2 == result){
        return `${n1} / ${n2} = ${result}`;
    }else{
        return "Invalid operands";
    }
}
console.log(operator(2,2,4));
console.log(operator(2,2,0));
console.log(operator(2,4,8));
console.log(operator(12,2,6));
console.log(operator(2,4,12));
