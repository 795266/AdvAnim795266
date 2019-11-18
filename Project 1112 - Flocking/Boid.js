function Boid(radius, color, maxSpeed, maxForce, boidArray, type) {
  this.color = color;
  this.radius = radius;
  this.maxSpeed = maxSpeed;
  this.maxForce = maxForce;
  this.boidArray = boidArray;
  this.type = type;
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  y = Math.random() * (2 * this.maxSpeed) - this.maxSpeed;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}

Boid.prototype.align = function() {
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
}

Boid.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}


Boid.prototype.update = function() {
  this.acceleration.limit(this.maxForce);
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed)
  this.acceleration.multiply(0);
  this.location.add(this.velocity);
}

Boid.prototype.checkEdges = function() {
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

Boid.prototype.drawC = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Boid.prototype.drawT = function() {
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

Boid.prototype.run = function() {
  this.align();
  this.update();
  this.checkEdges();
  if(this.type == 2) {
    this.drawT();
  } else {
    this.drawC();
  }
}
