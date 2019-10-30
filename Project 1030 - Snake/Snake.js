var headRadius;
var location;
var velocity;
var acceleration;
var numberOfSegments
var segmentLength;
var segmentColor;
var segmentArray;


function Snake(headRadius, headColor, maxVelocity, numberOfSegments, segmentLength, segmentColor) {
  this.headRadius = headRadius;
  this.headColor = headColor;
  this.maxVelocity = maxVelocity;
  this.numberOfSegments = numberOfSegments;
  this.segmentLength = segmentLength;
  this.segmentColor = segmentColor;

  this.segmentArray = []

  var x = Math.random() * (canvas.width - 2 * this.headRadius) + this.headRadius;
  var y = Math.random() * (canvas.height - 2 * this.headRadius) + this.headRadius;
  this.location = new JSVector(x, y);
  x = Math.random() * (2 * this.maxVelocity) - this.maxVelocity;
  y = Math.random() * (2 * this.maxVelocity) - this.maxVelocity;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}

Snake.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}

Snake.prototype.update = function() {
  this.updateMovement();
  this.updateSegments();
}

Snake.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);
}

Snake.prototype.updateSegments = function() {
  var a = 0;
  while(a < this.segmentArray.length) {
    this.segmentArray[a].run()
  }
}

Snake.prototype.checkEdges = function() {
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

Snake.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Snake.prototype.loadSegments = function() {
  var a = this.numberOfSegments;
  while(a > 0) {
    this.segmentArray.add(new Segment(this.location, this.segmentLength, this.segmentColor));
    a--;
  }
}
