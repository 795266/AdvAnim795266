var x;
var y;
var width;
var height;
var isStatic;
var color;
var rectangle

function Rectangle(x, y, width, height, color, isStatic){
  console.log("into Rectangle")

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.isStatic = isStatic;
  this.color = color;

  this.rectangle = Bodies.rectangle(this.x, this.y, this.width, this.height, { isStatic: this.isStatic, color: this.color });
}
