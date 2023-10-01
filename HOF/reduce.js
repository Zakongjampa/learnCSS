// REduce --> 
// Reduce all the elements in an array into a single value according to the operation. 

let arr = [1,2,3,4,5,6];

let sum =0;
arr.forEach(e=>{
    sum = sum + e;
});

console.log("Sum : ",sum);

let sum1 = arr.reduce((acc,val)=>{
    let updated = acc+val;
    return updated;
}, 0);

console.log("Sum : ",sum1);


let multiple = arr.reduce((a,v)=>{
    return a*v;
},1);

console.log("Multiple : ",multiple);


// From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this

const transactions =[1000, 3000, 4000, 2000, -898, 3800, -4500];

let balance = transactions.filter(e=>{
    return e>0;
}).reduce((a,v)=>{
    return a+v;
},0);

console.log("Total : ", balance);