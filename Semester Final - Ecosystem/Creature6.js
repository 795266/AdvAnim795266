var color;
var radius;
var arms;
var location;
var velocity;
var acceleration;
var maxSpeed;
var identity;

function Creature6(radius, color, maxSpeed, maxForce, ballNumber, armSegments, creatureArray) {
  this.color = color;
  this.radius = radius;
  this.maxSpeed = maxSpeed;
  this.maxForce = maxForce;
  this.ballNumber = ballNumber;
  this.creatureArray = creatureArray;
  this.identity = 6;
  this.armSegments = armSegments;
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

  this.loadArms(this.radius/3, this.color, this.ballNumber, .1, this.radius*4/3);
}

Creature6.prototype.loadArms = function(ballRadius, ballColor, ballNumber, ballSpeed, orbitRadius) {
  var k;
  for(var i = 0; i < 10; i++) {
    var k = new Creature4Arms(ballRadius, ballColor, i*2*Math.PI/ballNumber, ballSpeed, this.location.x, this.location.y, orbitRadius, this.armSegments);
    this.arms.push(k);
  }
}

Creature6.prototype.returnIdentity = function() {
  return this.identity;
}

Creature6.prototype.runArms = function() {
  for(var i = 0; i < 5; i++) {
    this.arms[i].run(this.location.x, this.location.y)
  }
}

Creature6.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(this.maxSpeed);
  this.acceleration.multiply(0);
  this.runArms(this.location.x, this.location.y);
}

Creature6.prototype.checkEdges = function() {
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

Creature6.prototype.eat = function() {
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 7) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < this.radius) {
        this.defecate();
        this.creatureArray.splice(i, 1)
      }
    }
  }
}

Creature6.prototype.defecate = function() {
  console.log("defecate")
  this.creatureArray.push(new Creature8(this.location, this.radius, this.color, this.maxSpeed, this.maxForce, this.numberOfSegments * 2, this.creatureArray)) //radius, color, maxSpeed, maxForce, numberOfSegments, creatureArray
}

Creature6.prototype.align = function() {
  var sum = new JSVector(0,0);
  var count = 0;
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 6) {
      var d = this.location.distance(this.creatureArray[i].location);
      if((d > 0) && (d < 30)) {
        sum.add(this.creatureArray[i].velocity);
        count++;
      }
    }
  }
  // if(this.creatureArray[i].returnIdentity() == 2) {
  //   var d = this.location.distance(this.creatureArray[i].location);
  //   if((d > 0) && (d < 30)) {
  //     count = -1;
  //   }
  // }
  if(count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    var align = JSVector.subGetNew(sum, this.velocity);
    align.normalize();
    align.multiply(.075);
    align.limit(this.maxForce);
    this.applyForce(align);
  }
  // if(count < 0) {
  //   this.seperate();
  // }
}

// Creature6.prototype.seperate = function() {
//   var sum = new JSVector(0,0);
//   var count = 0;
//   for(var i = 0; i < this.creatureArray.length; i++) {
//     var d = this.location.distance(this.creatureArray[i].location);
//     if(d > 0 && d < 30) {
//       var diff = JSVector.subGetNew(this.location, this.creatureArray[i].location);
//       sum.add(diff);
//       count++;
//     }
//   }
//
//   if(count > 0) {
//     sum.divide(count);
//     sum.normalize();
//     sum.multiply(this.maxSpeed);
//     var seperate = JSVector.subGetNew(sum, this.velocity);
//     seperate.normalize();
//     seperate.multiply(.1);
//     seperate.limit(this.maxForce);
//     this.applyForce(seperate);
//   }
// }
/*
var sum = new JSVector(0,0);
  var neighborhoodDistance = neighborhoodDistanceFactor;
  var count = 0;
  for(var i = 0; i < this.boidArray.length; i++) {
    var d = this.location.distance(this.boidArray[i].location);
    if((d > 0) && (d < neighborhoodDistance)) {
      sum.add(this.boidArray[i].velocity);
      count++;
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
*/
Creature6.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Creature6.prototype.update = function() {
  this.align();
  this.updateMovement();
  //this.eat();
  this.checkEdges();
}
