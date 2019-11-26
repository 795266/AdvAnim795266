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

var ecosystem;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(255, 255, 255, 1)';

  alignmentSlider = document.getElementById("align")
  cohesionSlider = document.getElementById("coh")
  seperationSlider = document.getElementById("sep")
  neighborhoodDistanceSlider = document.getElementById("nbd")

  ecosystem = new Ecosystem(10, 0, 0, 0, 0, 0);  //c1,c2,c3,c4,c5,c6
                                //in put number of each type of creature

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  alignmentFactor = alignmentSlider.value;
  cohesionFactor = cohesionSlider.value;
  seperationFactor = seperationSlider.value;
  neighborhoodDistanceFactor = neighborhoodDistanceSlider.value;

  ecosystem.update();
}
