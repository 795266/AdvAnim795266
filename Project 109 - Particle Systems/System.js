var radius;
var color;
var system;

function System(radius, color) {
  this.system = [];
  this.radius = radius;
  this.color = color;
}

System.prototype.run = function() {
  for(var i; i < this.system.length; i++) {
    this.system[i].run();
  }
}
