var size;
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
var normalOrbitRadius = this.size*4/3;
var normalBallRadius = this.size/3;
var irrelevantSize;
var lifespan;

function Creature3Baby(size, irrelevantSize, color, maxSpeed, ballNumber, creatureArray, parentLocation) {
  this.color = color;
  this.size = size;
  this.irrelevantSize = irrelevantSize;
  this.ballRadius = normalBallRadius;
  this.orbitRadius = normalOrbitRadius;
  this.ballNumber = ballNumber;
  this.arms = [];
  this.creatureArray = creatureArray;
  this.identity = 7;
  this.maxSpeed = maxSpeed;
  this.lifespan = 900;
  var x = Math.random() * (30) - 15 + parentLocation.x;
  var y = Math.random() * (30) - 15 + parentLocation.y;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);

  this.loadArms();
}

Creature3Baby.prototype.loadArms = function() {
  var k;
  for(var i = 0; i < this.ballNumber; i++) {
    var k = new Creature3Arms(this.ballRadius,this.ballColor, i*2*Math.PI/this.ballNumber, this.location.x, this.location.y, this.orbitRadius)
    this.arms.push(k);
  }
}

Creature3Baby.prototype.returnIdentity = function() {
  return this.identity;
}

Creature3Baby.prototype.updateArms = function() {
  for(var i = 0; i < 5; i++) {
    this.arms[i].update(this.location.x, this.location.y);
  }
}

Creature3Baby.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(maxSpeed);
  this.acceleration.multiply(0);
}

Creature3Baby.prototype.checkEdges = function() {
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

Creature3Baby.prototype.lifespan = function() {
  this.lifespan = this.lifespan - 1;
  if(this.lifespan = 1) {
    this.creatureArray.add(new Creature3Location(this.size, this.color, this.maxSpeed, this.ballNumber, this.creatureArray, this.location)); //size, color, maxSpeed, ballNumber, creatureArray
    this.creatureArray.splice(this.creatureArray.indexOf(this), 1)
  }
}

Creature3Baby.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.size, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Creature3Baby.prototype.update = function() {
  this.updateMovement();
  this.updateArms(this.location.x, this.location.y);
  this.checkEdges();
  this.draw();
}
