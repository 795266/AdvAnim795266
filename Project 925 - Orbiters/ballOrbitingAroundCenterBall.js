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
  planet = new Planet(20, 'blue', 20, 'green', 5, .05, 75);
  planet1 = new Planet(20, 'blue', 20, 'green', 5, .05, 75);


  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  planet.run();
  planet1.run();
  console.log("run planet")
}
