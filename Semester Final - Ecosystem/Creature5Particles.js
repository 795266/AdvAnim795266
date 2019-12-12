var size;
var speed;
var location;
var velocity;
var color;
var lifetime;
var identity;

function Creature5Particles(size, speed, location, color) {
  this.color = color;
  this.size = size;
  this.location = location.copy();
  x = Math.random() * (speed) - speed * .5;
  y = Math.random() * (speed) - speed * .5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
  this.lifetime = 1000;
  this.identity = 9;
}

Creature5Particles.prototype.returnIdentity = function() {
  return this.identity;
}

Creature5Particles.prototype.update = function() {
  this.updateMovement();
  this.draw();
}

Creature5Particles.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);

  this.lifetime = this.lifetime - 1;
}

Creature5Particles.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.size/2, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Creature5Particles.prototype.stillAlive = function() {
  if (this.lifetime > 0) {
    return true;
  } else {
    return false;
  }
}

Creature5Particles.prototype.particleLocationX = function() {
  return this.location.x;
}

Creature5Particles.prototype.particleLocationY = function() {
  return this.location.y;
}

Creature5Particles.prototype.spawnVelocityX = function() {
  return this.velocity.x;
}

Creature5Particles.prototype.spawnVelocityY = function() {
  return this.velocity.y;
}
