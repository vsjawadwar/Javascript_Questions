// Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.
function arrayFind(arr,...elements){
return arr.filter(function (e){
    return !elements.includes(e);
});
}
console.log(arrayFind([1,2,3,4,4,5,6,6,7],1,5,4));