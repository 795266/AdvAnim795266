var radius;
var color;
var system;

function System(radius, color) {
  this.system = [];
  this.radius = radius;
  this.color = color;

  this.system.push(new ParticleSystem(this.radius, color));
  this.system.push(new ParticleSystem(this.radius, color));
  this.system.push(new ParticleSystem(this.radius, color));
}

System.prototype.update = function() {
  for(var i = 0; i < this.system.length; i++) {
    console.log("run particle system")
    this.system[i].run();
  }
}

System.makeNew = function(locX, locY, velX, velY) {
  this.system.push(new ParticleSystem(this.radius, color, locX, locY, velX, velY));
}
