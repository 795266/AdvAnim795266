addEventListener("load", init);

var canvas;
var windowWidth = 800;
var windowHeight = 600;

var x, y, dx, dy, radius;
x = Math.random()*windowWidth;
y = Math.random()*windowHeight;
dx = Math.random()*10 - 5;
dy = Math.random()*10 - 5;
radius = 30;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  animate();
}

function animate() {
  ctx.clearRect(0,0,windowWidth,windowHeight);

  ctx.strokeStyle = "blue";
  ctx.fillStyle = 'blue';
  ctx.beginPath();

  ctx.arc(x,y, radius, Math.PI*2, 0, false);
  ctx.fill();
  ctx.stroke();

  x += dx;
  y += dy;
  if(x > windowWidth - radius || x < radius) {
    dx = -dx;
    console.log("beep");
  }
  if(y > windowHeight - radius || y < radius) {
    dy = -dy;
    console.log("boop");
  }

  requestAnimationFrame(animate);
}
