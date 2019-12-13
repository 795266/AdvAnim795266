var creatureArray;
var speedVariable = 2;

function Ecosystem(c1, c2, c3, c4, c5, c6) {
  this.creatureArray = [];
  this.loadCreatureArray(c1, c2, c3, c4, c5, c6);
}

Ecosystem.prototype.loadCreatureArray = function(c1, c2, c3, c4, c5, c6) {
  var counter = 0;
  while(counter < c1) {
    this.creatureArray.push(new Creature1(5, 'orange', speedVariable + 5, .2, 8, this.creatureArray)); //radius, color, maxSpeed, maxForce, numberOfSegments, creatureArray
    counter++;
  }
  var counter = 0;
  while(counter < c3) {
    this.creatureArray.push(new Creature3(10, 'blue', speedVariable + 1, 5, this.creatureArray)); //size, color, maxSpeed, ballNumber, creatureArray
    counter++;
  }
  var counter = 0;
  while(counter < c4) {
    this.creatureArray.push(new Creature4(10, 'pink', speedVariable + 1, .4, 4, 4, this.creatureArray)); //radius, color, maxSpeed, maxForce, ballNumber, armSegments, creatureArray
    counter++;
  }
  var counter = 0;
  while(counter < c5) {
    this.creatureArray.push(new Creature5(8, 'green', speedVariable + 5, .2, this.creatureArray));
    counter++;
  }
  var counter = 0;
  while(counter < c6) {
    this.creatureArray.push(new Creature6(6, 'red', speedVariable + 1, .4, 4, 4, this.creatureArray));
    counter++;
  }
  counter = 0;
  while(counter < c2) {
    this.creatureArray.push(new Creature2(10, 'purple', speedVariable + 5, .2, this.creatureArray)); //size, color, maxSpeed, maxForce, creatureArray
    counter++;
  }
}

Ecosystem.prototype.update = function() {
  for(var counter = 0; counter < this.creatureArray.length; counter++) {
    this.creatureArray[counter].update();
  }
}
