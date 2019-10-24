var system;

function PlanetSystem(number) {
  this.system = [];
  var a = number;
  while(a > 0) {
    this.system.push(new Planet(10, 'green', 5, 'red', 5, .03, 20)); //radius, color, ballRadius, ballColor, ballNumber, ballSpeed, orbitRadius
    a = a - 1;
  }
}

PlanetSystem.prototype.update = function() {
  for(var i = 0; i < this.system.length; i++) {
    this.system[i].run();
  }
}
