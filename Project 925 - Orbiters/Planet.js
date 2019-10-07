var color;
var radius;
var arms;
var location;
var velocity;
var acceleration;

function Planet(radius, color, ballRadius, ballColor, ballNumber, ballSpeed, orbitRadius) {
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

  this.loadArms(ballRadius, ballColor, ballNumber, ballSpeed, orbitRadius);
}

Planet.prototype.loadArms = function(ballRadius, ballColor, ballNumber, ballSpeed, orbitRadius) {
  console.log(" load planet arms");
  var k;
  for(var i = 0; i < 10; i++) {
    var k = new Arm(ballRadius, ballColor, i*2*Math.PI/ballNumber, ballSpeed, this.location.x, this.location.y, orbitRadius)
    this.arms.push(k);
  }
}
//10, 'red', i*2*Math.PI/5, .01, 100
Planet.prototype.runArms = function() {
  for(var i = 0; i < 5; i++) {
    this.arms[i].run(this.location.x, this.location.y)
  }
  console.log("  planet run arms");
}

Planet.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);
  console.log("  update planet");
  this.runArms(this.location.x, this.location.y);
}

Planet.prototype.checkEdges = function() {
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
  console.log("  planet check edges")
}

Planet.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
  console.log("  planet draw");
}
Planet.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}
