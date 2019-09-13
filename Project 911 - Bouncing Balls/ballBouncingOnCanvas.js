addEventListener("load", init);

var canvas;
var windowWidth = 800;
var windowHeight = 600;

var ball1;
var ball2;
var ball3;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  ball1 = new Ball();
  ball2 = new Ball();
  ball3 = new Ball();

  animate();
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ball1.run();
  ball2.run();
  ball3.run();
  requestAnimationFrame(animate);
}
