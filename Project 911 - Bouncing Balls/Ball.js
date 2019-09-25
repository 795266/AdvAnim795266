
attraction = new JSVector(400, 300);
gravity = new JSVector(0, .5); //creates the force of gravity

function Ball(mass) {
  this.color = 'blue';
  this.mass = mass;
  this.radius = mass * 10;
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
  //this.difference = this.location.sub(attraction);
}


Ball.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.location.add(this.velocity);
  this.acceleration.multiply(0);

}

Ball.prototype.checkEdges = function() {
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

Ball.prototype.attraction = function() {
  var attract = JSVector.subGetNew(bigBall.location, this.location);
  attract.normalize();
  attract.multiply(.3);
  if(this.location.distance(bigBall.location) < 200) {
    this.applyForce(attract);
  }
}

Ball.prototype.repulsion = function() {
  var repel = JSVector.subGetNew(this.location, bigBall.location);
  repel.normalize();
  //attract.multiply(5);
  if(this.location.distance(bigBall.location) < 200) {
    this.applyForce(repel);
  }
}
/*
Ball.prototype.check = function(other) {
  if((this.location.x + this.velocity.x) - (other.location.x + other.velocity.x) < this.radius * 2) {
    if((this.location.y + this.velocity.y) - (other.location.y + other.velocity.y) < this.radius * 2) {
      return true;
    }
  }
}

Ball.prototype.checkOthers = function(other) {
  if(this.check(other) == true) {
    this.velocity.x = -this.velocity.x;
    this.velocity.y = -this.velocity.y;
  }
}
*/

Ball.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Ball.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}

Ball.prototype.runA = function() {
  this.update();
  this.checkEdges();
  //this.checkOthers();
  //this.applyForce(gravity);
  this.attraction();
  //this.repulsion();
  this.draw();
}

Ball.prototype.runR = function() {
  this.update();
  this.checkEdges();
  //this.checkOthers();
  //this.applyForce(gravity);
  this.repulsion();
  this.draw();
}

Ball.prototype.runBB = function() {
  //this.update();
  //this.checkEdges();
  //this.checkOthers();
  //this.applyForce(gravity);
  this.draw();
}
