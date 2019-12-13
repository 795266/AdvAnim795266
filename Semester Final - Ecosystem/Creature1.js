var segmentArray;
var radius;
var color;
var maxSpeed;
var maxForce;
var numberOfSegments;
var creatureArray;
var location;
var velocity;
var acceleration;

function Creature1(radius, color, maxSpeed, maxForce, numberOfSegments, creatureArray) {
  this.color = color;
  this.radius = radius;
  this.segmentArray = [];
  this.creatureArray = creatureArray;
  this.identity = 1;
  this.maxSpeed = maxSpeed;
  this.maxForce = maxForce;
  this.numberOfSegments = numberOfSegments

  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  this.segmentArray.push(this.location);
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

  x = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}

Creature1.prototype.returnIdentity = function() {
  return this.identity;
}

Creature1.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.location.add(this.velocity);
  this.acceleration.multiply(0);

  this.updateSegments();
}

// Creature1.prototype.eat = function() {
//   for(var i = 0; i < this.creatureArray.length; i++) {
//     if(this.creatureArray[i].returnIdentity() == 3 || this.creatureArray[i].returnIdentity() == 7) {
//       var d = this.location.distance(this.creatureArray[i].location);
//       if(d > 0 && d < this.size) {
//         this.grow();
//         this.creatureArray.splice(i, 1)
//       }
//     }
//   }
// }
//
// Creature1.prototype.grow = function() {
//   if(this.segmentArray.length < 10) {
//     this.segmentArray.push(new JSVector(0, 0));
//   }
// }

Creature1.prototype.seperate = function() {
  var sum = new JSVector(0,0);
  var neighborhoodDistance = neighborhoodDistanceFactor;
  var count = 0;
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 1 || this.creatureArray[i].returnIdentity() == 2) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < neighborhoodDistanceFactor) {
        var diff = JSVector.subGetNew(this.location, this.creatureArray[i].location);
        sum.add(diff);
        count++;
      }
    }
  }

  if(count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    var seperate = JSVector.subGetNew(sum, this.velocity);
    seperate.normalize();
    seperate.multiply(seperationFactor);
    seperate.limit(this.maxForce);
    this.applyForce(seperate);
  }
}

Creature1.prototype.align = function() {
  var sum = new JSVector(0,0);
  var neighborhoodDistance = neighborhoodDistanceFactor;
  var count = 0;
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].getIdentity == 1) {
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

Creature1.prototype.applyForce = function(force) {
  this.acceleration.add(force);
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

Creature1.prototype.update = function() {
  this.updateMovement();
  this.seperate();
  this.checkEdges();
  // this.eat();
  this.draw();
  this.drawSegments()
}

Creature1.prototype.updateSegments = function() {
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.radius*2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature1.prototype.drawSegments = function() { //need to look at
  console.log("drawing segments");

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

Creature1.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.save();
  ctx.translate(this.location.x, this.location.y);
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
