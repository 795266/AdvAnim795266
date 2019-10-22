function PlanetSystem(number) {
  this.system = [];
  var a = 0;
  while(number > 0) {
    this.system.push(new Planet(10, 'purple', 5, 'pink', 5, .03, 20)); //planet parameters
  }
}

PlanetSystem.prototype.update = function() {
  for(var i = 0; i < this.system.length; i++) {
    this.system[i].run();
  }
}
