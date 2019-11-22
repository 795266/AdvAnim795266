var planetX;
var planetY;
var color;
var radius;
var rotationalRadius;
var angularVelocity;
var angle;
var location;

function Arm(radius, color, angle, angularVelocity, planetX, planetY, rotationalRadius) {
  this.color = color;
  this.radius = radius;
  this.rotationalRadius = rotationalRadius;
  this.angularVelocity = angularVelocity;
  this.angle = angle;
  this.planetX = planetX;
  this.planetY = planetY;
  var x = planetX + this.rotationalRadius * Math.sin(this.angle);
  var y = planetY + this.rotationalRadius * Math.cos(this.angle);
  this.location = new JSVector(x, y);
}

Arm.prototype.update = function(x, y) {
  this.planetX = x;
  this.planetY = y;
  this.angle = this.angle + this.angularVelocity;
  this.location.x = this.planetX + this.rotationalRadius * Math.cos(this.angle);
  this.location.y = this.planetY + this.rotationalRadius * Math.sin(this.angle);
}

Arm.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
Arm.prototype.run = function(x, y) {
  this.update(x, y);
  this.draw();
}
