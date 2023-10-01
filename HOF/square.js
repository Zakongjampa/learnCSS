let num = [1,2,3,4,5,6];


function square(arr){
    for(let i=0; i<arr.length; i++){
        num[i] = num[i]**2;
    }
}


square(num);
console.log(num);

// Higher order function are the function that operates on another function 
num.forEach(e => {
    console.log(e**2);
});

// ----------------------------------------------------------------------------
//                Different HOFs
// ----------------------------------------------------------------------------
//   1. Map
//   2. forEach
//   3. reduce