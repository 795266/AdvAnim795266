
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
  this.location.add(this.velocity);
  this.velocity.add(this.acceleration);
  this.acceleration.multiply(0);
}

Ball.prototype.checkEdges = function() {
  if(this.location.x > canvas.width - this.radius || this.location.x < this.radius) {
    this.velocity.x = -this.velocity.x;
  }
  if(this.location.y > canvas.height - this.radius || this.location.y < this.radius) {
    this.velocity.y = -this.velocity.y;
    this.acceleration.y = this.acceleration.y;
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

Ball.prototype.run = function() {
  this.update();
  this.checkEdges();
  //this.checkOthers();
  //this.applyForce(gravity);
  //this.applyForce(attraction); fix this at start of class
  this.draw();
}

Ball.prototype.runBB = function() {
  this.update();
  this.checkEdges();
  //this.checkOthers();
  //this.applyForce(gravity);
  this.draw();
}
