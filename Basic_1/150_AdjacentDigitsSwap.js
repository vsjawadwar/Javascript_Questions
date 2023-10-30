// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length. 
/*To Do:
Problem need to be solved by below method

function adjacentDigitSwap(num){
let str=num.toString();
let arr=str.split("");
    if(arr.length%2 == 0){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
            return arr;
        }
    }else{
        return `${num} is not even length`;
    }
}
console.log(adjacentDigitSwap(1234));
*/

function swap_adjacent_digits(n) {
    if (n.toString().length % 2 != 0) {
      return false;
    }
  
    var result = 0,
        x = 1;
  
    while (n != 0) {
      var dg1 = n % 10,
          dg2 = (n - dg1) / 10 % 10;
      result += x * (10 * dg1 + dg2);
      n = Math.floor(n / 100);
      x *= 100;
    }
  
    return result;
  }
  
  console.log(swap_adjacent_digits(15));
  console.log(swap_adjacent_digits(1234));
  console.log(swap_adjacent_digits(123456));
  console.log(swap_adjacent_digits(12345));
  