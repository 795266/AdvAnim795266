var segmentArray;

function Creature8(location, radius, color, maxSpeed, maxForce, numberOfSegments, creatureArray) {
  this.color = 'brown';
  this.radius = radius;
  this.segmentArray = [];
  this.creatureArray = creatureArray;
  this.identity = 8;
  this.maxSpeed = maxSpeed;
  this.maxForce = maxForce;
  this.numberOfSegments = numberOfSegments
  this.poopLocation = location.copy();
  this.segmentArray.push(this.poopLocation);
  x = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);

  var a = 0;
  while(a < numberOfSegments) {
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

Creature8.prototype.returnIdentity = function() {
  return this.identity;
}

Creature8.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.poopLocation.add(this.velocity);
  this.acceleration.multiply(0);

  this.updateSegments();
}

Creature8.prototype.update = function() {
  this.updateMovement();
  this.draw();
  this.drawSegments()
}

Creature8.prototype.updateSegments = function() {
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.radius*2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature8.prototype.updateSegments = function() {
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.radius*2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature8.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.save();
  ctx.translate(this.poopLocation.x, this.poopLocation.y);
  ctx.rotate(this.velocity.getDirection());
  ctx.beginPath();
  ctx.moveTo(10, 0);
  ctx.lineTo(-10, 5);
  ctx.lineTo(-10, -5);
  ctx.lineTo(10, 0);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

Creature8.prototype.drawSegments = function() {
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
