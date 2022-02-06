
var canvas=/** @type {HTMLCanvasElement}*/  (document.getElementById('canvas'));
var ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.strokeStyle='green'
ctx.lineWidth=5;
ctx.shadowOffsetX=5;
ctx.shadowOffsetY=5;
ctx.shadowBlur=10;
ctx.shadowColor='blue'

var isPressed=false;
window,addEventListener('mousedown',()=>{
    isPressed=true;
})
window.addEventListener('mouseup',()=>{
    isPressed=false;
})


window.onresize=()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}


const draw=(x,y,radius,inset ,n)=>{
    ctx.beginPath();
    ctx.save();
    ctx.fillStyle='red'
    ctx.translate(x,y);
    ctx.moveTo(0,0-radius);
    for(let i=0;i<n;i++){
     ctx.rotate(Math.PI/n);
     ctx.lineTo(0,0-radius*inset);
     ctx.rotate(Math.PI/n);
     ctx.lineTo(0,0-radius);
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}
var radius=20;
var angle=0;
window.addEventListener('mousemove',(e)=>{
   if(isPressed){
       ctx.save();
       ctx.translate(e.x,e.y);
       ctx.rotate(angle);
       ctx.fillStyle='blue';
       ctx.strokeStyle='cyan';
       draw(0,0,radius,0.5,5);

       ctx.rotate(-angle*4);
       ctx.fillStyle='black'
       ctx.strokeStyle='magenta';
       draw(radius/2+15,radius/2+15,radius/2,0.5 , 6)

       ctx.rotate(-angle*4);
       ctx.fillStyle='red';
       ctx.strokeStyle='black';
       draw(radius,radius,radius*0.35,1,3);

       angle+=0.05;
       ctx.restore();
   }
})
