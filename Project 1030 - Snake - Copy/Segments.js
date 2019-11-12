/*
var length;
var color;
var headLocation;
var tailLocation;

function Segment(leaderTailLocation, segmentLength, segmentColor) {
  this.length = segmentLength;
  this.color = segmentColor;
  this.headlocation = leaderTailLocation;
  this.tailLocation = leaderTailLocation.subGetNew(this.tailLocation);
}

Segment.prototype.run = function() {
  this.update();
  this.draw();
}

Segment.prototype.update = function() {
  this.updateMovement()
}

Segment.prototype.updateMovement = function() {
  var x = JSVector.subGetNew(this.headLocation, this.leaderTailLocation);
  this.headLocation = this.leaderTailLocation;
  this.tailLocation =
}

Segment.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.line(this.headLocation.x, this.headLocation.y, this.)
  ctx.fill();
  ctx.stroke();
}
*/
