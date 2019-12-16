//creates a blue planet creature that will reproduce with others of its kind to create a system of little blue circles
//houses the planet orbiting and particle system labs
//behaviors are reproducion and growth/shrinking because the central radius changes magnitude when it is hit by creature5 particles

var size;
var normalSize;
var color;
var maxSpeed;
var maxForce;
var creatureArray;
var location;
var velocity;
var ballRadius;
var orbitRadius;
var ballNumber;
var arms;
var identity;
var maxSpeed;
var normalOrbitRadius;
var reproducingOrbitRadius;
var normalBallRadius;
var reproducingBallRadius;

function Creature3(size, color, maxSpeed, ballNumber, creatureArray) {
  this.color = color;
  this.size = size;
  this.normalSize = size;
  this.normalOrbitRadius = this.size*4/3;
  this.reproducingOrbitRadius = this.size*7/3;
  this.normalBallRadius = this.size/3;
  this.reproducingBallRadius = this.size*4/5;
  this.ballRadius = this.normalBallRadius;
  this.orbitRadius = this.normalOrbitRadius;
  this.ballNumber = ballNumber;
  this.arms = [];
  this.creatureArray = creatureArray;
  this.identity = 3;
  this.maxSpeed = maxSpeed;
  var x = Math.random() * (canvas.width - 2 * this.size) + this.size;
  var y = Math.random() * (canvas.height - 2 * this.size) + this.size;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);

  this.loadArms();
}

Creature3.prototype.loadArms = function() {
  for(var i = 0; i < this.ballNumber; i++) {
    var k = new Creature3Arms(this.ballRadius, this.ballColor, i*2*Math.PI/this.ballNumber, this.location.x, this.location.y, this.orbitRadius, this.creatureArray) //(radius, color, angle,  planetX, planetY, rotationalRadius, creatureArray)
    this.arms.push(k);
  }
}

Creature3.prototype.returnIdentity = function() {
  return this.identity;
}

Creature3.prototype.eat = function() {
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 9) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < this.size) {
        this.shrink();
        this.creatureArray.splice(i, 1)
        i--;
      }
    }
    if(this.creatureArray[i].returnIdentity() == 7) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < this.size) {
        this.grow();
        this.creatureArray.splice(i, 1)
      }
    }
  }
}

Creature3.prototype.shrink = function() {
  if(this.size > 5) {
    this.size = this.size - 1;
  }
}

Creature3.prototype.grow = function() {
  if(this.size < this.normalSize * 2) {
    this.size = this.size + 1;
  }
}

Creature3.prototype.updateArms = function() {
  for(var i = 0; i < 5; i++) {
    this.arms[i].update(this.location.x, this.location.y);
  }
}

Creature3.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(this.maxSpeed);
  this.acceleration.multiply(0);
}

Creature3.prototype.checkEdges = function() {
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

Creature3.prototype.checkReproduce = function() {
  this.ballRadius = this.normalBallRadius;
  this.orbitRadius = this.normalOrbitRadius;
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 3) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < this.size*2) {
        this.reproduce();
        this.size = this.normalSize;
        var k = Math.random * 100;
        if(k < 4) {
          this.creatureArray.push(new Creature3(10, 'blue', this.maxSpeed, 5, this.creatureArray, this.location));
        }
      }
    }
  }
}

Creature3.prototype.reproduce = function() {
  this.ballRadius = this.reproducingBallRadius;
  this.orbitRadius = this.reproducingOrbitRadius;
  this.creatureArray.push(new Creature3Baby(5, this.size, this.color, this.maxSpeed, this.ballNumber, this.creatureArray, this.location))//size, color, maxSpeed, ballNumber, creatureArray
}

Creature3.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.size, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Creature3.prototype.update = function() {
  this.updateMovement();
  this.updateArms(this.location.x, this.location.y);
  this.eat();
  this.checkEdges();
  this.checkReproduce();
  this.draw();
}
