var color;
var radius;
var soeed;
var psX;
var psY;
//var lifetime;

function Particles(radius, color, speed, psX, psY, lifetime) {
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
  //this.lifetime = lifetime;
}

Particles.prototype.update = function(x, y) {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);
}

Particles.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
  console.log("   arms draw");
}
Particles.prototype.run = function(x, y) {
  this.update(x, y);
  this.draw();
}
