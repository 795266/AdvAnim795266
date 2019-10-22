var radius;
var color;
var system;

function System(radius, color, locX, locY, velX, velY) {
  this.system = [];
  this.radius = radius;
  this.color = color;

  this.system.push(new ParticleSystem(this.radius, color));
  //this.system.push(new ParticleSystem(this.radius, color));
  //this.system.push(new ParticleSystem(this.radius, color));
}

System.prototype.update = function() {
  for(var i = 0; i < this.system.length; i++) {
    console.log("run particle system")
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
