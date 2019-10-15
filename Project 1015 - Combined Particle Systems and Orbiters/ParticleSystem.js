var color;
var radius;
var location;
var velocity;
var acceleration;
var pList;

function ParticleSystem(radius, color) {
  this.color = color;
  this.radius = radius;
  this.pList = [];
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}
/*
function ParticleSystem(radius, color, locX, locY, velX, velY) {
  this.color = color;
  this.radius = radius;
  this.pList = [];
  this.location = new JSVector(locX, locY);
  this.velocity = new JSVector(velX, velY);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
}
*/

ParticleSystem.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.velocity.limit(2);
  this.acceleration.multiply(0);

  console.log("create new particles")
  var x = (Math.random() * 100);
  if (x < 30) {
    this.pList.push(new Particles(2, "green", 5, this.location.x, this.location.y, 150, false));//input parameters for particles
  }
  if (x > 30 && x < 40) {
    this.pList.push(new Particles(5, "orange", 10, this.location.x, this.location.y, 50, false));//input parameters for particles
  }
  if (x > 40 && x < 42) {
    this.pList.push(new Particles(5, "blue", 15, this.location.x, this.location.y, 255, true));//input parameters for particles
  }

  var startingLength = this.pList.length - 1
  for(var i = startingLength - 1; i > 0; i--) {
    if (this.pList[i].stillAlive()) {
      this.pList[i].run();
    } else {
      if (this.pList[i].spawn) {
        //var x = new ParticleSystem(this.color, this.radius, this.pList[i].spawnLocationX, this.pList[i].spawnLocationY, this.pList[i].spawnVelocityX, this.pList[i].spawnVelocityY);
        //x.run();
      }
      this.pList.splice(i, 1);
    }
  }
}


ParticleSystem.prototype.checkEdges = function() {
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

ParticleSystem.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
  console.log("particle system draw");
}
ParticleSystem.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}
