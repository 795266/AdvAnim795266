addEventListener("load", init);

var canvas;
var windowWidth = 800;
var windowHeight = 600;

var planetSystem; //creates a planet with revolving balls
var system; //creates an emiter
var planetNew; //creates a planet with stationary balls that reach out

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  console.log("create planet");
  planetSystem = new PlanetSystem(2);
  system = new System(20, 'blue');
  planetNew = new PlanetNew(10, 'purple', 5, 'pink', 5, 20);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  planetSystem.update();
  system.update();
  planetNew.run();
  console.log("run planet")
}
