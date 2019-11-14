addEventListener("load", init);

var canvas;
var windowWidth = 600;
var windowHeight = 800;
var alignmentFactor = 0;
var alignmentSlider = 0;
var cohesionFactor = 0;
var cohesionSlider = 0;
var seperationFactor = 0;
var seperationSlider = 0;
var neighborhoodDistanceFactor = 0;
var neighborhoodDistanceSlider = 0;


var boidSystem;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  alignmentSlider = document.getElementById("align")
  cohesionSlider = document.getElementById("coh")
  seperationSlider = document.getElementById("sep")
  neighborhoodDistanceSlider = document.getElementById("nbd")

  boidSystem = new BoidSystem(20, 20, 'orange', 10, 10);
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  alignmentFactor = alignmentSlider.value;
  cohesionFactor = cohesionSlider.value;
  seperationFactor = seperationSlider.value;
  neighborhoodDistanceFactor = neighborhoodDistanceSlider.value;

  boidSystem.run()
}
