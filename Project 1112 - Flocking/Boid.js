function Boid(radius, color, maxSpeed, maxForce) {
  this.color = color;
  this.radius = radius;
  this.maxSpeed = maxSpeed
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}

Boid.align = function(boids) {
  var sum = new JSVector(0,0);
  var neighborhoodDistance = 50;

  var count = 0;
  for(var i = 0; i < boids.length; i++) {
    var d = JSVector.distance(this.location, boids[i].location);
    if((d > 0) && (d < neighborhoodDistance)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }

  if(count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(maxSpeed);
    var steer = JSVector.sub(sum, velocity);
    steer.limit(maxForce);
    return steer;
  } else {
    return new JSVector(0, 0);
  }
}

Boid.prototype.flock = function(boids) {
  this.add()
}

Boid.prototype.update = function() {
  this.location.add(this.velocity);
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

Boid.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Boid.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}
