
function Center(mass) {
  this.color = 'blue';
  this.mass = mass;
  this.radius = mass * 10;
  this.orbitRadius = Math.random()*200 - 100;
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
}

Center.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Center.prototype.runBB = function() {
  this.draw();
}
