// Write a JavaScript program to get a sorted array of objects ordered by properties and orders.

let ordersData=[
    {
        product:"iPhone 13",
        price:90000
    },
    {
        product:"Nokia",
        price:40000
    },
    {
        product:"RealMe",
        price:25000
    },
    {
        product:"Samsung Galaxy",
        price:45000
    },
];
console.log(ordersData.sort((a,b)=>a.price-b.price));

/*
This will sort normal array

let a=[5,3,2,1,0];
console.log(a.sort((a,b)=>a-b));
*/