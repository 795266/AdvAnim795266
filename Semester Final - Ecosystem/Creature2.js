var size;
var color;
var maxSpeed;
var maxForce;
var creatureArray;
var location;
var velocity;

function Creature2(size, color, maxSpeed, maxForce, creatureArray) { //creates a purple stingray-looking monster that eats nearly every other creature
    this.color = color;                                            //houses the snake and direction labs
    this.size = size;;                                               //behaviors are eating prey and growing/shrinking
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.numberOfSegments = this.size/2;
    this.segmentArray = [];
    this.creatureArray = creatureArray;
    this.identity = 2;

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


Creature2.prototype.returnIdentity = function() {
  return this.identity;
}

Creature2.prototype.update = function() {
  this.updateMovement();
  this.checkEdges();
  this.eat();
  this.draw();
  this.drawSegments()
}

Creature2.prototype.updateMovement = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed);
  this.location.add(this.velocity);
  this.acceleration.multiply(0);

  this.updateSegments();
}

Creature2.prototype.updateSegments = function() {
  this.segmentArray[0] = this.location;
  var a = 1;
  while(a < this.segmentArray.length) {
    this.newVector = JSVector.subGetNew(this.segmentArray[a], this.segmentArray[a - 1]);
    this.newVector.setMagnitude(this.size/2);
    this.segmentArray[a] = JSVector.addGetNew(this.segmentArray[a -1], this.newVector);
    a++;
  }
}

Creature2.prototype.eat = function() {
  for(var i = 0; i < this.creatureArray.length; i++) {
    if(this.creatureArray[i].returnIdentity() == 1 || this.creatureArray[i].returnIdentity() == 3 || this.creatureArray[i].returnIdentity() == 4 || this.creatureArray[i].returnIdentity() == 6) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < this.size*3) {
        this.grow();
        this.creatureArray.splice(i, 1)
      }
    }
    if(this.creatureArray[i].returnIdentity() == 9 || this.creatureArray[i].returnIdentity() == 8 || this.creatureArray[i].returnIdentity() == 7) {
      var d = this.location.distance(this.creatureArray[i].location);
      if(d > 0 && d < this.size*3) {
        this.shrink();
        this.creatureArray.splice(i, 1);
      }
    }
    // if(this.creatureArray[i].returnIdentity() == 7) {
    //   var d = this.location.distance(this.creatureArray[i].location);
    //   if(d > 0 && d < this.size*3) {
    //     this.creatureArray.splice(i, 1);
    //   }
    // }
  }
}

Creature2.prototype.grow = function() {
  if(this.size < 25) {
    this.size = this.size + 2;
  }
}

Creature2.prototype.shrink = function() {
  if(this.size > 5) {
    this.size = this.size - 1;
  }
}

Creature2.prototype.checkEdges = function() {
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

Creature2.prototype.drawSegments = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;

  var a = 1;
  while(a < this.segmentArray.length) {
    ctx.beginPath();
    ctx.arc(this.segmentArray[a].x, this.segmentArray[a].y, this.size/2, 0, Math.PI*2, false);
    ctx.fill();
    ctx.stroke();
    a++;
  }
}

Creature2.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.save();
  ctx.translate(this.location.x, this.location.y);
  ctx.rotate(this.velocity.getDirection());
  ctx.beginPath();
  ctx.moveTo(3*this.size, 0);
  ctx.lineTo(3*this.size, this.size/2);
  ctx.lineTo(2*this.size, 5/2*this.size);
  ctx.lineTo(0, 5/2*this.size);
  ctx.lineTo(0, -5/2*this.size);
  ctx.lineTo(2*this.size, -5/2*this.size);
  ctx.lineTo(2*this.size, -5/2*this.size);
  ctx.lineTo(3*this.size, -this.size/2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
