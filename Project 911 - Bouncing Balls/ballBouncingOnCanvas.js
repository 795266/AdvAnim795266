addEventListener("load", init);

var canvas;
var windowWidth = 800;
var windowHeight = 600;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var ball8;
var ball9;
var ball10;
var bigBall;

function init() {
  canvas = document.getElementById('cnv');
  canvas.width = windowWidth;
  canvas.height = windowHeight;

  ctx = cnv.getContext('2d');
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = 'rgba(0,44,55,.5)';

  bigBall = new Ball(5);
  ball1 = new Ball(1);
  ball2 = new Ball(1);
  ball3 = new Ball(1);
  ball4 = new Ball(1);
  ball5 = new Ball(1);
  ball6 = new Ball(1);
  ball7 = new Ball(1);
  ball8 = new Ball(1);
  ball9 = new Ball(1);
  ball10 = new Ball(1);
  animate();
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //var balls = {ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9}
  //for(i = 0, i < 9, i++) {
  //  balls[i].run();
  //}
  ball1.runR();
  //ball2.runA();
  //ball3.runA();
//  ball4.runA();
  //ball5.runA();
/*
  ball6.runR();
  ball7.runR();
  ball8.runR();
  ball9.runR();
  ball10.runR();
  */
  bigBall.runBB();
  requestAnimationFrame(animate);
}
