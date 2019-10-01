function Arm(radius, color, angle, angularVelocity, planetX, planetY) {
  this.color = color;
  this.radius = radius;
  var x = planetX + radius * Math.sin(this.angle);
  var y = planetY + radius * Math.cos(this.angle);
  this.location = new JSVector(x, y);
}

Arm.prototype.update = function() {
  this.angle = this.angle + angularVelocity;
  this.location.x = planetX + radius * Math.cos(this.angle);
  this.location.y = planetY + radius * Math.sin(this.angle);
}

Planet.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
Arm.prototype.run = function() {
  this.update();
  this.draw();
}
