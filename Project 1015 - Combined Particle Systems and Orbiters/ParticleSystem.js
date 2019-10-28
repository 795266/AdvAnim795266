var color;
var radius;
var location;
var velocity;
var acceleration;
var pList1;
var pList2;
var pList3;
var typeOneParticles;
var typeTwoParticles;
var typeThreeParticles;
var g;

function ParticleSystem(radius, color, locX, locY, velX, velY, spawn) {
  this.color = color;
  this.radius = radius;
  this.pList1 = [];
  this.pList2 = [];
  this.pList3 = [];
  var x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
  var y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
  this.location = new JSVector(x, y);
  x = Math.random() * (7) - 3.5;
  y = Math.random() * 7 - 3.5;
  this.velocity = new JSVector(x, y);
  x = 0;
  y = 0;
  this.acceleration = new JSVector(x, y);
  if(spawn) {
    var x = locX;
    var y = locY;
    this.location = new JSVector(x, y);
    x = velX;
    y = velY;
    this.velocity = new JSVector(x, y);
  }
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

  var x = (Math.random() * 100);
  if (x < 30) {
    g = new Particles(2, "green", 5, this.location.x, this.location.y, 150, false); //input parameters for particles
    this.pList1.push(g);
    //this.pList1.returnTypeOneParticles(g);
  }
  if (x > 30 && x < 40) {
    g = new Particles(5, "orange", 10, this.location.x, this.location.y, 50, false) //input parameters for particles
    this.pList2.push(g);
    //this.pList2.returnTypeTwoParticles(g);
  }
  if (x > 40 && x < 42) {
    g = new Particles(5, "blue", 15, this.location.x, this.location.y, 1000, true) //input parameters for particles
    this.pList3.push(g);
    //this.pList3.returnTypeThreeParticles(g);
  }

  var startingLength = this.pList1.length - 1
  for(var i = startingLength - 1; i > 0; i--) {
    if (this.pList1[i].stillAlive()) {
      this.pList1[i].run();
    } else {
      if (this.pList1[i].spawn) {
        //var x = new ParticleSystem(this.color, this.radius, this.pList[i].spawnLocationX, this.pList[i].spawnLocationY, this.pList[i].spawnVelocityX, this.pList[i].spawnVelocityY);
        //x.run();
      }
      this.pList1.splice(i, 1);
    }
  }

  var startingLength = this.pList2.length - 1
  for(var i = startingLength - 1; i > 0; i--) {
    if (this.pList2[i].stillAlive()) {
      this.pList2[i].run();
    } else {
      if (this.pList2[i].spawn) {
        //var x = new ParticleSystem(this.color, this.radius, this.pList[i].spawnLocationX, this.pList[i].spawnLocationY, this.pList[i].spawnVelocityX, this.pList[i].spawnVelocityY);
        //x.run();
      }
      this.pList2.splice(i, 1);
    }
  }

  var startingLength = this.pList3.length - 1
  for(var i = startingLength - 1; i > 0; i--) {
    if (this.pList3[i].stillAlive()) {
      this.pList3[i].run();
    } else {
      if (this.pList3[i].spawn) {
        //var x = new ParticleSystem(this.color, this.radius, this.pList[i].spawnLocationX, this.pList[i].spawnLocationY, this.pList[i].spawnVelocityX, this.pList[i].spawnVelocityY);
        //x.run();
      }
      this.pList3.splice(i, 1);
    }
  }
}

ParticleSystem.prototype.returnTypeOneParticles = function(particle) {
  return pList1;
}

ParticleSystem.prototype.returnTypeTwoParticles = function(particle) {
  return pList2;
}

ParticleSystem.prototype.returnTypeThreeParticles = function(particle) {
  return pList3;
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
}
ParticleSystem.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.draw();
}
