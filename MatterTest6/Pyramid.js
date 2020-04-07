var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

var x;
var y;
var rows;
var columns;
var rectWidth = 25;
var rectHeight = 40;

//(500, 300, 9, 10, 0, 0
function Pyramid(x, y, rows, columns, rectWidth, rectHeight){
  this.x = x;
  this.y = y;
  this.rows = rows;
  this.columns = columns;
  this.pyramid = Composites.pyramid(this.x, this.y, this.rows, this.columns, 0, 0, function(x, y) {
        return Bodies.rectangle(x, y, rectWidth, rectHeight, { isStatic: true });
  })
}
