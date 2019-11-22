function Boid(radius, color, maxSpeed, maxForce) {
  this.color = color;
  this.radius = radius;
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (2 * maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}


Boid.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.location.add(this.velocity);
  this.acceleration.multiply(0);

}

Boid.prototype.checkEdges = function() {
  if(this.location.x > canvas.width - this.radius) {
    this.velocity.x = -Math.abs(this.velocity.x);
  }
  if(this.location.x < this.radius) {
    this.velocity.x = Math.abs(this.velocity.x)
  }
  if(this.location.y > canvas.height - this.radius) {
    this.velocity.y = -Math.abs(this.velocity.y);
  }
  if(this.location.y < this.radius) {
    this.velocity.y = Math.abs(this.velocity.y);
  }
}

Boid.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}
