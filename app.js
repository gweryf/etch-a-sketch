const canvas = document.getElementById('canvas');
canvas.style.gridTemplateColumns = 'repeat(16,1fr)';
canvas.style.gridTemplateColumns = 'repeat(16,1fr)';
for(let i = 0;i<16*16;i++){
    let canvasele = document.createElement('div');
    canvasele.className = 'canvas-element';
    canvasele.style.background = 'grey';
    canvasele.addEventListener('mouseover',function(){
        canvasele.style.background = 'black';
    });
    canvas.appendChild(canvasele);
}