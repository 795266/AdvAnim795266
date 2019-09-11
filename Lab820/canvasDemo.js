addEventListener("load", init);

var cnv;
var ctx;
var ctx2;
var windowWidth = 800;
var windowHeight = 600;

function init() {
  //get the copy
  cnv = document.getElementById('cnv');
  cnv.width = windowWidth;
  cnv.height = windowHeight;

  ctx = cnv.getContext('2d'); //this is the context
  //ctx2 = cnv.getContext('2d'); //this is the context
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';
  //get the context

  //cnv.addEventListener("click", newBall);
  animate();
}
//init();

//function newBall(){ //finish this before class

//}

var x, y, dx, dy, radius;
x = Math.random()*windowWidth;
y = Math.random()*windowHeight;
dx = Math.random()*10 - 5;
dy = Math.random()*10 - 5;
radius = 30;

//var x2, y2, dx2, dy2, radius2;
//x2 = Math.random()*windowWidth;
//y2 = Math.random()*windowHeight;
//dx2 = Math.random()*10 - 5;
//dy2 = Math.random()*10 - 5;
//radius2 = 30;

function animate(){
  console.log("hi")
  ctx.clearRect(0,0,windowWidth,windowHeight);

  ctx.strokeStyle = "blue";
  ctx.fillStyle = 'blue';
  ctx.beginPath();

  //ctx2.strokeStyle = "red";
  //ctx2.fillStyle = 'orange';
  //ctx2.beginPath();

  ctx.arc(x,y, radius, Math.PI*2, 0, false);
  ctx.fill();
  ctx.stroke();

  //ctx2.arc(x2,y2, radius2, Math.PI*2, 0, false);
  //ctx2.fill();
  //ctx2.stroke();

  x += dx;
  y += dy;
  if(x > windowWidth || x < 0) {
    dx = -dx;
    console.log("beep");
  }
  if(y > windowHeight || y < 0) {
    dy = -dy;
    console.log("boop");
  }
  //x2 += dx2;
  //y2 += dy2;
    //if(x2 > windowWidth || x2 < 0) dx2 = -dx2;
    //if(y2 > windowHeight || y2 < 0) dy2 = -dy2;
  requestAnimationFrame(animate);
}
