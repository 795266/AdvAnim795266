var color;
var radius;
var speed;
var psX;
var psY;
var lifespan;
var spawn;

function Particles(radius, color, speed, psX, psY, lifetime, spawn) {
  this.color = color;
  this.radius = radius;
  var x = psX;
  var y = psY;
  this.location = new JSVector(x, y);
  x = Math.random() * (speed) - speed * .5;
  y = Math.random() * (speed) - speed * .5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
  this.lifetime = lifetime;
  this.spawn = spawn;
}

Particles.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);

  this.lifetime = this.lifetime - 1;
}

Particles.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Particles.prototype.stillAlive = function() {
  if (this.lifetime > 0) {
    return true;
  } else {
    return false;
  }
}

Particles.prototype.spawnLocationX = function() {
  return this.location.x;
}

Particles.prototype.spawnLocationY = function() {
  return this.location.y;
}

Particles.prototype.spawnVelocityX = function() {
  return this.velocity.x;
}

Particles.prototype.spawnVelocityY = function() {
  return this.velocity.y;
}

Particles.prototype.run = function() {
  this.update();
  this.draw();
}
