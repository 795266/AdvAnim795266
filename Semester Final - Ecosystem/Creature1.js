var segmentArray;

function Creature1(radius, color, maxSpeed, maxForce, numberofSegments) {
  this.color = color;
  this.radius = radius;
  this.segmentArray = [];
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (2 * maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);

  var a = 1;
  while(a < numberOfSegments) {
    this.segmentArray.push(new JSVector(0, 0));
    a++;
  }
}


Creature1.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.location.add(this.velocity);
  this.acceleration.multiply(0);

  this.updateSegments();
}

Creature1.prototype.checkEdges = function() {
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

Creature1.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}

Creature1.prototype.updateSegments = function() {
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.segmentRadius*2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature1.prototype.drawSegments = function() { //need to look at
  console.log("drawing segments");

  ctx.strokeStyle = "black";
  ctx.fillStyle = this.headColor;

  var a = 1;
  while(a < this.segmentArray.length) {
    ctx.beginPath();
    ctx.arc(this.segmentArray[a].x, this.segmentArray[a].y, this.segmentRadius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.stroke();
    a++;
  }
}
