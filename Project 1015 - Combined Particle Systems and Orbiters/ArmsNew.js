var planetX;
var planetY;
var color;
var radius;
var rotationalRadius;
var angle;
var location;

function ArmNew(radius, color, angle,  planetX, planetY, rotationalRadius) {
  this.color = color;
  this.radius = radius;
  this.rotationalRadius = rotationalRadius;
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

ArmNew.prototype.update = function(x, y) {
  this.planetX = x;
  this.planetY = y;
  this.angle = this.angle;
  this.location.x = this.planetX + this.rotationalRadius * Math.cos(this.angle);
  this.location.y = this.planetY + this.rotationalRadius * Math.sin(this.angle);
  console.log("   arms update");
}

ArmNew.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
  console.log("   arms draw");
}
ArmNew.prototype.run = function(x, y) {
  this.update(x, y);
  this.draw();
}
