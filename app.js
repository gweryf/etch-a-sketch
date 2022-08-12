const canvas = document.getElementById('canvas');

for(let i = 0;i<16;i++){
    let canvasele = document.createElement('div');
    canvasele.className = 'canvas-element';
    canvas.appendChild(canvasele);
}