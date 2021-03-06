var planetX;
var planetY;
var color;
var radius;
var rotationalRadius;
var angle;
var location;
var orignalRadius;
var orignalRotationalRadius;

function ArmNew(radius, color, angle,  planetX, planetY, rotationalRadius) {
  this.color = color;
  this.radius = radius;
  this.orignalRadius = radius;
  this.rotationalRadius = rotationalRadius;
  this.orignalRotationalRadius = rotationalRadius;
  this.angle = angle;
  this.planetX = planetX;
  this.planetY = planetY;
  var x = planetX + this.rotationalRadius * Math.sin(this.angle);
  var y = planetY + this.rotationalRadius * Math.cos(this.angle);
  this.location = new JSVector(x, y);
}

ArmNew.prototype.getLocation = function() {
  return this.location;
}

ArmNew.prototype.extend = function() {
  this.rotationalRadius = this.orignalRotationalRadius * 2;
  this.radius = orignalRadius * 2;
}

ArmNew.prototype.retract = function() {
  this.rotationalRadius = this.orignalRotationalRadius;
  this.radius = orignalRadius;
}

ArmNew.prototype.update = function(x, y) {
  this.planetX = x;
  this.planetY = y;
  this.angle = this.angle;
  this.location.x = this.planetX + this.rotationalRadius * Math.cos(this.angle);
  this.location.y = this.planetY + this.rotationalRadius * Math.sin(this.angle);
}

ArmNew.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
ArmNew.prototype.run = function(x, y) {
  this.update(x, y);
  this.draw();
}
