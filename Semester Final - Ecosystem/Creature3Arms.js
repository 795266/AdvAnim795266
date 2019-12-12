var planetX;
var planetY;
var color;
var orignalColor;
var radius;
var orignalRadius;
var reproducingRadius;
var rotationalRadius;
var orignalRotationalRadius;
var reproducingRotationalRadius;
var angle;
var location;
var orignalRadius;
var orignalRotationalRadius;
var reproducingColor = 'green';
var creatureArray;


function Creature3Arms(radius, color, angle,  planetX, planetY, rotationalRadius, creatureArray) {
  this.color = color;
  this.orignalColor = color;
  this.radius = radius;
  this.orignalRadius = radius;
  this.reproducingRadius = radius*2;
  this.rotationalRadius = rotationalRadius;
  this.orignalRotationalRadius = rotationalRadius;
  this.reproducingRotationalRadius = rotationalRadius*2;
  this.angle = angle;
  this.planetX = planetX;
  this.planetY = planetY;
  this.creatureArray = creatureArray;
  var x = planetX + this.rotationalRadius * Math.sin(this.angle);
  var y = planetY + this.rotationalRadius * Math.cos(this.angle);
  this.location = new JSVector(x, y);
}

Creature3Arms.prototype.updateMovement = function(x, y) {
  this.planetX = x;
  this.planetY = y;
  this.angle = this.angle;
  this.location.x = this.planetX + this.orignalRotationalRadius * Math.cos(this.angle);
  this.location.y = this.planetY + this.orignalRotationalRadius * Math.sin(this.angle);
}

Creature3Arms.prototype.draw = function() {
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.location.x,this.location.y, this.orignalRadius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.stroke();
}
Creature3Arms.prototype.update = function(x, y) {
  this.updateMovement(x, y);
  this.checkReproduce();
  this.draw();
}

Creature3Arms.prototype.checkReproduce = function() {
//   this.radius = this.orignalRadius;
//   this.rotationalRadius = this.orignalOrbitRadius;
//   this.color = this.orignalColor;
//   for(var i = 0; i < this.creatureArray.length; i++) {
//     if(this.creatureArray[i].returnIdentity() == 3) {
//       var d = this.location.distance(this.creatureArray[i].location);
//       if(d > 0 && d < this.size*2) {
//         this.radius = this.reproducingBallRadius;
//         this.rotationalRadius = this.reproducingOrbitRadius;
//         this.color = reproducingColor;
//       }
//     }
//   }
}
