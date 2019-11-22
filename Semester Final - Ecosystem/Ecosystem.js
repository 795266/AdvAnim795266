var creatureArray;

function Ecosystem(c1, c2, c3, c4, c5, c6) {
  this.creatureArray = [];
  this.loadCreatureArray(c1, c2, c3, c4, c5, c6);
}

Ecosystem.prototype.loadCreatureArray = function(c1, c2, c3, c4, c5, c6) {
  var counter = 0;
  while(counter < c1) {
    this.creatureArray.push(new Creature1());
    counter++;
  }
  // var counter = 0;
  // while(counter < c2) {
  //   this.creatureArray.push(new Creature2());
  //   counter++;
  // }
  // var counter = 0;
  // while(counter < c3) {
  //   this.creatureArray.push(new Creature3());
  //   counter++;
  // }
  // var counter = 0;
  // while(counter < c4) {
  //   this.creatureArray.push(new Creature4());
  //   counter++;
  // }
  // var counter = 0;
  // while(counter < c5) {
  //   this.creatureArray.push(new Creature5());
  //   counter++;
  // }
  // var counter = 0;
  // while(counter < c6) {
  //   this.creatureArray.push(new Creature6());
  //   counter++;
  // }
}

Ecosystem.prototype.update = function() {
  for(var counter = 0; counter < this.creatureArray.length; counter++) {
    this.creatureArray[counter].update();
  }
}
