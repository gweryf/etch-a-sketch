
let color = 'black';

function createCanva(size) {
    const canva = document.querySelector('#canvas');

    let canvasesss = canva.querySelectorAll('div');
    canvasesss.forEach((div)=>div.remove());

    canva.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canva.style.gridTemplateRows = `repeat(${size},1fr)`;
    let amount = size*size;
    for(let i = 0;i<amount;i++) {
        let canvases = document.createElement('div');
        canvases.style.backgroundColor = 'white';

        canvases.addEventListener('mouseover',colorChange);

        canva.appendChild(canvases);
    }
}

createCanva(16);

function changeCanva(input) {
    createCanva(input);
}

function colorChange() {

    if (color == 'rgb') {
        this.style.backgroundColor = `hsl(${Math.random()*360},100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
    
}

function colormod(choice) {
    color = choice;
}

const colorbtn = document.getElementById("color");
const rgbbtn = document.getElementById("rgb");
const eraserbtn = document.getElementById("eraser");
const clearbtn = document.getElementById("clear");

colorbtn.addEventListener('click',function(){
    colormod('black');
    colorbtn.style.borderStyle = "solid";
    eraserbtn.style.borderStyle = "none";
    rgbbtn.style.borderStyle = "none";
});


eraserbtn.addEventListener('click',function(){
    colormod('white');
    eraserbtn.style.borderStyle = "solid";
    colorbtn.style.borderStyle = "none";
    rgbbtn.style.borderStyle = "none";
});

rgbbtn.addEventListener('click',function(){
    colormod('rgb');
    rgbbtn.style.borderStyle = "solid";
    colorbtn.style.borderStyle = "none";
    eraserbtn.style.borderStyle = "none";
});

clearbtn.addEventListener('click',function(){
    let canva = document.getElementById('canvas');
    let temporary = canva.querySelectorAll('div');
    temporary.forEach((div)=>div.style.backgroundColor = 'white');
})