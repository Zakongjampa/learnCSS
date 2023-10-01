let arr=[
    { name:"A", age: 14, gender: "M" },
    {name:"B", age:34, gender: "M"},
    {name:"C", age:24, gender: "F"},
    { name:"D", age: 44, gender: "F" },
    { name:"E", age: 44, gender: "M" },
    { name: "F", age: 28, gender: "F" },
    { name: "G", age: 36, gender: "M" },
    { name: "H", age: 47, gender: "F" },
]

// let males = arr.filter(e=>{
//     return e.gender === "M";
// })

// let malesages =males.map(e=>{
//     return e.age;
// })

let maleages = arr.filter(e=>{
    return e.gender === "M";
}).map(e=>{
    return e.age;
})

console.log(maleages)