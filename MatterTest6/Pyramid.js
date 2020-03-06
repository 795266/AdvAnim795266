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

  this.pyramid = Composites(this.x, this.y, this.rows, this.columns, 0, 0, function(x, y) {
        var n = new Rectangle(x, y, rectWidth, rectHeight);
        return n.new;
}
