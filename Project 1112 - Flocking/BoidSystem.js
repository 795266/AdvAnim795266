var boids;

function BoidSystem(number, radius, color, maxSpeed, maxForce) {
  this.boids = [];
  this.number = number;
  this.radius = radius;
  this.maxSpeed = maxSpeed;
  this.maxForce = maxForce;
  this.color = color;

  var n = number;
  while(n > 0) {
    this.boids.push(new Boid(radius, color, maxSpeed, maxForce))
    n--;
  }
}

BoidSystem.prototype.run = function() {
  this.update();
}

BoidSystem.prototype.update = function() {
  var n = 0;
  while(n < this.number) {
    this.boids[n].run();
    n++;
  }
}
