const canvas = document.getElementById('canvas');
const colorbut = document.getElementById('color');
const rgbbut = document.getElementById('rgb');
const eraserbut = document.getElementById('eraser');
const clearbut = document.getElementById('clear');

let defcolor = 'black';

let r = Math.random*100;
let g = Math.random*100;
let b = Math.random*100;



eraserbut.addEventListener('click',function(e){
    defcolor = 'grey';
    // console.log(e);
});


colorbut.addEventListener('click',function(e){
    defcolor = 'black';
    // console.log(e);
});


canvas.style.gridTemplateColumns = 'repeat(16,1fr)';
canvas.style.gridTemplateColumns = 'repeat(16,1fr)';
for(let i = 0;i<16*16;i++){
    let canvasele = document.createElement('div');
    canvasele.className = 'canvas-element';
    canvasele.style.background = 'grey';
    canvasele.addEventListener('mouseover',function(){
        canvasele.style.background = defcolor;
    });
    canvas.appendChild(canvasele);
}