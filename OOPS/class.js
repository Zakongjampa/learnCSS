class Car{
    constructor(n,c,t){
        this.name =n;
        this.color= c;
        this.topSpeed = t;
    }


}


let car1 = new Car("Ferrari", "Red", 400);
let car2 = new Car("BMW", 'Blue', 400)

console.log(car1);
console.log(car2);




// Constructor Function 

function Car(){
    this.name = _name;
    this.color = _color;
    this.topSpeed = _topSpeed;
}