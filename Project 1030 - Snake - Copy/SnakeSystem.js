var numberOfSnakes;
var snakeArray

function SnakeSystem(numberOfSnakes) {
  this.snakeArray = [];

  this.loadSnakeArray(numberOfSnakes);
}

SnakeSystem.prototype.run = function() {
  var a = this.snakeArray.length - 1;
  while (a > 0) {
    this.snakeArray[a].run();
    a--;
  }
}

SnakeSystem.prototype.loadSnakeArray = function(numberOfSnakes) {
  var a = numberOfSnakes;
  while (a > 0) {
    var newSnake = new Snake(30, 'blue', 7, 4, 30, 'orange');
      this.snakeArray.push(newSnake); //headRadius, headColor, maxVelocity, numberOfSegments, segmentLength, segmentColor
      a--;
  }
}
