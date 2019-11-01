addEventListener("load", init);

var canvas;
var windowWidth = 1200;
var windowHeight = 800;

var snakeSystem;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  snakeSystem = new SnakeSystem(2);
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  snakeSystem.run()
}
