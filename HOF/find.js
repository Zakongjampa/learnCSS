let arr = [1,2,3,4,5,6,7];

console.log(arr.find(e=>{
    return e>5;
}));


//If more than one element satisfy the condition then it will return true;
console.log(arr.some(x=>{
    return x>2;
}))


console.log(arr.every(e=>{return e>0}));
console.log(arr.every(e=> e>2));