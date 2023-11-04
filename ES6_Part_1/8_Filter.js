// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
/*
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
  };
  let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra1, 'a', 'c'));
  let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra2, 'b'));
  */

  let arr=[1,2,3,4,5,6,7,8,9,10];
  let filteredArray=arr.filter((item)=>item > 5);
  console.log(filteredArray);