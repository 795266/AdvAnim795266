
function Ball(mass) {
  this.color = 'blue';
  this.mass = mass;
  this.radius = mass * 10;
  this.orbitRadius = Math.random()*200 - 100;
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
  //this.difference = this.location.sub(attraction);
}

Ball.prototype.update = function() {
  this.orbit();
}

Ball.prototype.orbit = function() {
  var angleBetween = center.location.angleBetween(this.location);
  angleBetween = angleBetween + Math.PI*1/16;
  this.location.x = center.location.x + this.orbitRadius*Math.cos(angleBetween);
  this.location.y = center.location.y + this.orbitRadius*Math.sin(angleBetween);

}

Ball.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Ball.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
Ball.prototype.runO = function() {
  this.update();
  this.draw();
}

Ball.prototype.runBB = function() {
  this.draw();
}
