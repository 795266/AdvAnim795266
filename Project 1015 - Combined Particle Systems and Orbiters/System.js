var radius;
var color;
var system;
var p1;
var p2;
var p3;

function System(number, locX, locY, velX, velY) {
  this.system = []; //array of particle system objects
  this.radius = radius;
  this.color = color;
  this.p1 = [];
  this.p2 = [];
  this.p3 = [];

  var a = number;
  while (a > 0) {
    this.system.push(new ParticleSystem(20, 'blue'));
    a = a - 1;
  }
}

System.prototype.update = function() {
  for(var i = 0; i < this.system.length; i++) {
    this.system[i].run();
  }
}

System.prototype.collectParticles = function() {
  for(var i = 0; i < this.system.length; i++) {
    this.system[i].returnTypeOneParticles();
    this.system[i].returnTypeTwoParticles();
    this.system[i].returnTypeThreeParticles(); //fix this
  }
}

/*
System.prototype.printMousePosX = function() {
    var cursorX;
    var cursorY;
    document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
  }
}

System.prototype.printMousePosY = function() {
    var cursorX;
    var cursorY;
    document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
  }
}

document.addEventListener("click", makeNew()) {
  this.system.push(new ParticleSystem(this.color, this.radius, this.pList[i].spawnLocationX, this.pList[i].spawnLocationY, this.pList[i].spawnVelocityX, this.pList[i].spawnVelocityY));
}
*/
