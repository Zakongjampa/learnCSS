// Filter : Filter returns a new array. It will return all those elements that matches the specific condition 
// if the condition is true it will return the element for that condition and if it is false it will remove that element. 

let numbers = [2,5,7,5,8,10,4,43,56];

let evenArray = numbers.filter(e =>{
    return e%2 == 0;
})

console.log(evenArray);


let transaction = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let positiveTrans = transaction.filter(e=>{
    return e>0;
})

console.log(positiveTrans);