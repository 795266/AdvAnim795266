addEventListener("load", init);

var canvas;
var windowWidth = 800;
var windowHeight = 600;

var planet;
var planet1;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  console.log("create planet");
  planet = new Planet(10, 'purple', 5, 'pink', 5, .03, 20);
  planet1 = new Planet(10, 'pink', 5, 'purple', 5, .03, 20);
  system = new System(20, 'blue');


  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  planet.run();
  planet1.run();
  system.update();
  console.log("run planet")
}
