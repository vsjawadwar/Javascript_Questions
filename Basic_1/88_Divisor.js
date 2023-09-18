// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
// function checkNum(n1,n2,d){
//     if(n1 ==n2){
//       return `${n1} and ${n2} are similar`;
//     }
//     if((n1%d ===0 && n2%d === 0) || (n1%d !== 0 && n2%d !== 0)){
//         return true;
//     }else{

//         return false;
//     }
// }
// console.log(checkNum(4,4,2));
// console.log(checkNum(2,4,2));
// console.log(checkNum(10,5,4));
function checking_numbers(x, y, divisor) {
    if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
      0) {
      return true;
    }
    return false;
  }
  
  console.log(checking_numbers(2,4,2));
  console.log(checking_numbers(10, 5, 4));
//   console.log(checking_numbers(10, 20, 4))
  
  