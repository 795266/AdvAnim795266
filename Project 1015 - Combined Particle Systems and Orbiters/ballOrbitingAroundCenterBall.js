addEventListener("load", init);

var canvas;
var windowWidth = 1200;
var windowHeight = 800;

var planetSystem; //creates a planet with revolving balls
var system; //creates an emiter
var planetNewSystem; //creates a planet with stationary balls that reach out

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  planetSystem = new PlanetSystem(3);
  system = new System(2);
  planetNewSystem = new PlanetNewSystem(1);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  planetSystem.update();
  system.update();
  planetNewSystem.update();
}
