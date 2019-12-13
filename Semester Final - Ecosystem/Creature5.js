var size;
var color;
var maxSpeed;
var maxForce;
var creatureArray;
var location;
var velocity;

function Creature5(size, color, maxSpeed, maxForce, creatureArray) {
    this.color = color;
    this.size = size;
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.numberOfSegments = this.size/2;
    this.segmentArray = [];
    this.creatureArray = creatureArray;
    this.identity = 5;

    var x = Math.random() * (canvas.width - 2 * this.size) + this.size;
    var y = Math.random() * (canvas.height - 2 * this.size) + this.size;
    this.location = new JSVector(x, y);
    x = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
    y = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
    this.velocity = new JSVector(x, y);
    x = 0;
    y = 0;
    this.acceleration = new JSVector(x, y);

    var a = 0;
    while(a < this.numberOfSegments) {
      this.segmentArray.push(new JSVector(0, 0));
      a++;
    }
}


Creature5.prototype.returnIdentity = function() {
  return this.identity;
}

Creature5.prototype.update = function() {
  this.updateMovement();
  this.updateSegments();
  this.updateParticles();
  this.checkEdges();
  this.draw1();
  this.drawSegments()
}

Creature5.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed);
  this.location.add(this.velocity);
  this.acceleration.multiply(0);
}

Creature5.prototype.updateSegments = function() {
  this.segmentArray[0] = this.location;
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.size/2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature5.prototype.updateParticles = function() {
  var x = Math.random() * 15;
  if(x < 1) {
    g = new Creature5Particles(this.size, this.maxSpeed, this.location, this.color); //input parameters for particles
    this.creatureArray.push(g);
  }

  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 9) {
      if (this.creatureArray[i].stillAlive()) {
        this.creatureArray[i].update();
      } else {
        this.creatureArray.splice(i, 1)
      }
    }
  }
}

Creature5.prototype.align = function() {
  var sum = new JSVector(0,0);
  var neighborhoodDistance = neighborhoodDistanceFactor;
  var count = 0;
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].getIdentity == 4) {
      var d = this.location.distance(this.creatureArray[i].location);
      if((d > 0) && (d < neighborhoodDistance)) {
        sum.add(this.creatureArray[i].velocity);
        count++;
      }
    }
  }

  if(count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    var align = JSVector.subGetNew(sum, this.velocity);
    align.normalize();
    align.multiply(alignmentFactor);
    align.limit(this.maxForce);
    this.applyForce(align);
  }
}

Creature5.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Creature5.prototype.checkEdges = function() {
  if(this.location.x > canvas.width - this.size) {
    this.velocity.x = -Math.abs(this.velocity.x);
  }
  if(this.location.x < this.size) {
    this.velocity.x = Math.abs(this.velocity.x)
  }
  if(this.location.y > canvas.height - this.size) {
    this.velocity.y = -Math.abs(this.velocity.y);
  }
  if(this.location.y < this.size) {
    this.velocity.y = Math.abs(this.velocity.y);
  }
}

Creature5.prototype.draw1 = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.save();
  ctx.translate(this.location.x, this.location.y);
  ctx.rotate(this.velocity.getDirection());
  ctx.beginPath();
  ctx.moveTo(1.5*this.size, 0);
  ctx.lineTo(1.5*this.size, this.size/4);
  ctx.lineTo(this.size, 5/4*this.size);
  ctx.lineTo(0, 5/4*this.size);
  ctx.lineTo(0, -5/4*this.size);
  ctx.lineTo(this.size, -5/4*this.size);
  ctx.lineTo(this.size, -5/4*this.size);
  ctx.lineTo(1.5*this.size, -this.size/4);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

Creature5.prototype.drawSegments = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;

  var a = 1;
  while(a < this.segmentArray.length) {
    ctx.save();
    ctx.translate(this.location.x, this.location.y);
    ctx.rotate(this.velocity.getDirection());
    ctx.beginPath();
    ctx.moveTo(this.size, 0);
    ctx.lineTo(-this.size, this.size/2);
    ctx.lineTo(-this.size, -this.size/2);
    ctx.lineTo(this.size, 0);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    a++;
  }
}
