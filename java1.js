function draw(){
  ctx.beginPath();
  ctx.arc(50,50,10,0,Math.PI);
  ctx.fillStyle="#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw,10);
