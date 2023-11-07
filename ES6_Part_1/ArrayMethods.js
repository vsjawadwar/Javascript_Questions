let array1=[2,4,6,8,10,12];
// let reduceDemo=array1.reduce((accumulator,currentIndex)=>{ return accumulator + currentIndex},0);

let reduceDemo=array1.reduce((accumulator,currentIndex)=>accumulator + currentIndex,0);

console.log(reduceDemo);

let itemCart=[
{
    course:"js",
    price:2000
},
{
    couse:"py",
    price:1000
},
{
    course:"java",
    price:1500
}];
let priceToPay=itemCart.reduce((acc,item)=>{return acc + item["price"]},0);
console.log(priceToPay);

let array3=[3,6,9,12,15,18,21];
let result=array3.map((item)=>{return item + 2}).filter((item)=> item >10);
//Chaining method will pass the results to the next method and so on 
console.log(result);