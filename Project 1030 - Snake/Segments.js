var length;
var color;
var headLocation;
var tailLocation;

function Segment(leaderTailLocation, segmentLength, segmentColor) {
  this.length = segmentLength;
  this.color = segmentColor;
  this.headlocation = leaderTailLocation;
  this.tailLocation = //need to fix this
}

Segment.prototype.run = function() {
  this.update();
  this.draw();
}

Segment.prototype.updateMovement = function() {
  this.updateMovement();
}

Segment.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
