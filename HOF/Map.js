// Map will loop through every element of your array and will perform specific operations that you have provided. 
// It will always return you a new array with your result. 

let arr = [1,2,3,4,5];

let another=arr.map(e=>{
    return e**2;
})

console.log(another);