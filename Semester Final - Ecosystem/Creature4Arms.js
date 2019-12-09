var planetX;
var planetY;
var color;
var radius;
var rotationalRadius;
var angularVelocity;
var angle;
var location;
var segmentArray;

function Creature4Arms(radius, color, angle, angularVelocity, planetX, planetY, rotationalRadius, armSegmentNumber) {
  this.color = color;
  this.radius = radius;
  this.rotationalRadius = rotationalRadius;
  this.angularVelocity = angularVelocity;
  this.angle = angle;
  this.segmentArray = [];
  this.planetX = planetX;
  this.planetY = planetY;
  this.armSegmentNumber = armSegmentNumber;
  var x = planetX + this.rotationalRadius * Math.sin(this.angle);
  var y = planetY + this.rotationalRadius * Math.cos(this.angle);
  this.location = new JSVector(x, y);

  this.segmentArray.push(this.location);

  var a = 0;
  while(a < armSegmentNumber) {
    this.segmentArray.push(new JSVector(0, 0));
    a++;
  }

  x = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}

Creature4Arms.prototype.update = function(x, y) {
  this.planetX = x;
  this.planetY = y;
  this.angle = this.angle + this.angularVelocity;
  this.location.x = this.planetX + this.rotationalRadius * Math.cos(this.angle);
  this.location.y = this.planetY + this.rotationalRadius * Math.sin(this.angle);
  this.updateSegments();
}

Creature4Arms.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Creature4Arms.prototype.updateSegments = function() {
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.radius*2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature4Arms.prototype.drawSegments = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;

  var a = 1;
  while(a < this.segmentArray.length) {
    ctx.beginPath();
    ctx.arc(this.segmentArray[a].x, this.segmentArray[a].y, this.radius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.stroke();
    a++;
  }
}

Creature4Arms.prototype.run = function(x, y) {
  this.update(x, y);
  this.draw();
  this.drawSegments();
}
