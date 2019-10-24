var system;

function PlanetNewSystem(number) {
  this.system = [];
  var a = number;
  while(a > 0) {
    this.system.push(new PlanetNew(10, 'purple', 5, 'pink', 3, 20)); //radius, color, ballRadius, ballColor, ballNumber, orbitRadius
    a = a - 1;
  }
}

PlanetNewSystem.prototype.update = function() {
  for(var i = 0; i < this.system.length; i++) {
    this.system[i].run();
  }
}
