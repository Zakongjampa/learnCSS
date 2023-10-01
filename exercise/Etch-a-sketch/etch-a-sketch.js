// Select the elements on the page - canvas, shake button

let canvas = document.querySelector("#etch-a-sketch");
let shakebtn = document.querySelector('.shake')

// set up our canvas for drawing
const ctx = canvas.getContext('2d');

ctx.lineJoin = 'round';
ctx.lineCap = 'round'
ctx.lineWidth = 10;

// const width = canvas.width;
// const height = canvas.height;

// const {width} = canvas;
// const {height} = canvas;


const {width, height } = canvas;
let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
console.log(width, height)
const MOVE_AMOUNT = 10;
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 37%, 50%)`;
// write a draw function
function draw({key}){
    ctx.beginPath();
    ctx.moveTo(x,y);
    hue = hue + 2;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 37%, 50%)`;
    switch(key){
        case 'ArrowUp' :  y -= MOVE_AMOUNT;
                        break;
        case 'ArrowDown' : y+=MOVE_AMOUNT;
        break;
        case 'ArrowLeft' : x-=MOVE_AMOUNT;
        break;
        case 'ArrowRight' : x+=MOVE_AMOUNT;
        break;
        default:
            console.log("Invalid Options");
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}
// write a handler for the keys
function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({key : e.key});
    }
}
// clear or shake function
function clearCanvas(){
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', ()=>{
        canvas.classList.remove('shake');
    }, {once : true});

    ctx.clearRect(0, 0, width, height)

}
// listen for arrow keys

window.addEventListener('keydown', handleKey);
shakebtn.addEventListener('click', clearCanvas);