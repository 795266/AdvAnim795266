var headRadius;
var location;
var velocity;
var acceleration;
var numberOfSegments
var segmentMagnitude;
var segmentColor;
var segmentArray;


function Snake(headRadius, headColor, maxVelocity, numberOfSegments, segmentRadius, segmentColor) {
  this.headRadius = headRadius;
  this.headColor = headColor;
  this.maxVelocity = maxVelocity;
  this.numberOfSegments = numberOfSegments;
  this.segmentRadius = segmentRadius;
  this.segmentColor = segmentColor;
  this.segmentArray = [];

  var x = Math.random() * (canvas.width - 2 * this.headRadius) + this.headRadius; //gives snakehead its location
  var y = Math.random() * (canvas.height - 2 * this.headRadius) + this.headRadius;
  this.segmentArray.push(new JSVector(x, y));

  var a = 1;
  while(a < numberOfSegments) {
    this.segmentArray.push(new JSVector(0, 0));
    a++;
  }
  
  x = Math.random() * (2 * this.maxVelocity) - this.maxVelocity;
  y = Math.random() * (2 * this.maxVelocity) - this.maxVelocity;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
/*
  var a = numberOfSegments;
  var difference = this.segmentRadius * 2;
  while(a > 0) {
    x = Math.random() * (canvas.width - 2 * this.headRadius) + this.headRadius + difference; //gives segments their location
    y = Math.random() * (canvas.height - 2 * this.headRadius) + this.headRadius;
    this.segmentArray.push(new JSVector(x, y));
    difference= difference *2;
    a--;
  }
  */

}

Snake.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
  this.drawSegments();
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
  var a = 1;
  while(a < this.segmentArray.length) {
    if(this.segmentArray[a].distance(this.segmentArray[a - 1]) > 2*this.segmentLength) {
      this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
      this.newVector.setMagnitude(this.segmentRadius*2);
      this.segmentArray[a] = this.segmentArray[a -1].add(this.newVector);
      a++
    }
  }
}

Snake.prototype.checkEdges = function() {
  if(this.location.x > canvas.width - this.headRadius) {
    this.velocity.x = -Math.abs(this.velocity.x);
  }
  if(this.location.x < this.headRadius) {
    this.velocity.x = Math.abs(this.velocity.x)
  }
  if(this.location.y > canvas.height - this.headRadius) {
    this.velocity.y = -Math.abs(this.velocity.y);
  }
  if(this.location.y < this.headRadius) {
    this.velocity.y = Math.abs(this.velocity.y);
  }
}

Snake.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.headColor;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.headRadius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Snake.prototype.drawSegments = function() {
  console.log("drawing segments");

  ctx.strokeStyle = "black";
  ctx.fillStyle = this.headColor;

  var a = 0;
  while(a < this.segmentArray.length) {
    ctx.beginPath();
    ctx.arc(this.segmentArray[a].location.x,this.segmentArray[a].location.y, this.segmentRadius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.stroke();
  }
}
/*
Snake.prototype.loadSegments = function() {
  var a = this.numberOfSegments;
  while(a > 0) {
    this.segmentArray.add(new Segment(this.location, this.segmentLength, this.segmentColor));
    a--;
  }
}
*/
