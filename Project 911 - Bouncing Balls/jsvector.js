
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x,y){
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
   var a = this.getDirection();
   this.x = mag * Math.cos(a);
   this.y = mag * Math.sin(a);
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  var mag = this.getMagnitude();
  this.x = mag * Math.cos(angle);
  this.y = mag * Math.sin(angle);
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
return Math.atan2(this.y , this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
  this.x = this.x + v2.x;
  this.y = this.y + v2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  this.x = this.x - v2.x;
  this.y = this.y - v2.y;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  return new JSVector(v1.x + v2.x, v1.y + v2.y)
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  return new JSVector(v1.x - v2.x, v1.y - v2.y)
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x = this.x * scalar;
  this.y = this.y * scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x = this.x / scalar;
  this.y = this.y / scalar;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  this.setMagnitude(1);
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
  var m = this.getMagnitude();
  if(m > lim) {
    this.setMagnitude(lim);
  }
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
  var v = JSVector.subGetNew(this, v2);
  return v.getMagnitude();
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
  var v = JSVector.subGetNew(this, v2);
  return v.x * v.x + v.y * v.y;
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {
  var a = this.getDirection();
  this.setDirection(angle + a)
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
  return Math.abs(this.getDirection() - v2.getDirection());
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
  var newVector = new JSVector(this.x, this.y);
 }

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
  // console.log("(" + this.x + " , " + this.y + ")");
  // console.log("Magnitude: " + this.getMagnitude());
  // console.log("Direction: " + this.getDirection());

  return "x: " + (this.x).toFixed(2) + " , y: " + (this.y).toFixed(2) + "  Magnitude: " + (this.getMagnitude()).toFixed(2) + "  Direction: " + (this.getDirection()).toFixed(2);
}
