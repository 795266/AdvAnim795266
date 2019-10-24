var radius;
var color;
var system;

function System(number, locX, locY, velX, velY) {
  this.system = [];
  this.radius = radius;
  this.color = color;

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
