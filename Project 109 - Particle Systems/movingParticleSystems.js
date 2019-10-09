addEventListener("load", init);

var canvas;
var windowWidth = 800;
var windowHeight = 600;

var system;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  //console.log("create planet");
  system = new System(20, 'blue');


  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  system.run();
  //console.log("run planet")
}
