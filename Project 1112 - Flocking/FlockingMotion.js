addEventListener("load", init);

var canvas;
var windowWidth = 600;
var windowHeight = 800;

var boidSystem;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  boidSystem = new BoidSystem(20, 20, 'orange', 10, 10);
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  boidSystem.run()
}
