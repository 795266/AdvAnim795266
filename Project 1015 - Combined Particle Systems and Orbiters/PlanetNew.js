var color;
var radius;
var arms;
var location;
var velocity;
var acceleration;

function PlanetNew(radius, color, ballRadius, ballColor, ballNumber,  orbitRadius) {
  this.color = color;
  this.radius = radius;
  this.arms = [];
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);

  this.loadArms(ballRadius, ballColor, ballNumber, orbitRadius);
}

PlanetNew.prototype.loadArms = function(ballRadius, ballColor, ballNumber, orbitRadius) {
  var k;
  for(var i = 0; i < 10; i++) {
    var k = new ArmNew(ballRadius, ballColor, i*2*Math.PI/ballNumber, this.location.x, this.location.y, orbitRadius)
    this.arms.push(k);
  }
}

PlanetNew.prototype.runArms = function() {
  for(var i = 0; i < 5; i++) {
    this.arms[i].run(this.location.x, this.location.y);
  }
}

PlanetNew.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);
  this.runArms(this.location.x, this.location.y);
}

PlanetNew.prototype.checkEdges = function() {
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

PlanetNew.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

PlanetNew.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}
