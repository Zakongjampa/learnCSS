let person = {
    name : "Tenzin", 
    age : 32
}

console.log(person)

const person1 = {
    first: "wes",
    last: "bos"
};

const person2 = {
    first: "wes",
    last: "bos"
};

console.log(person1 === person2)

let person3 = person1;
person3.first = "Sonam";

console.log("First Name : \t",person3.first);
console.log("First Name : \t" , person1.first);