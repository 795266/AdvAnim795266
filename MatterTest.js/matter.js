addEventListener("load", init);

  // module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var squareSize = 10;

function init() {
  //create a canvas
  canvas = document.getElementById('cnv');
  canvas.width = 600;
  canvas.height = 600;

  ctx = cnv.getContext('2d');
  document.body.appendChild(canvas);

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create 3 boxes and 1 circle
var boxA = Bodies.rectangle(20, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var boxC = Bodies.rectangle(500, 250, 80, 80);
var circle = Bodies.circle(20, 20, 50);

//create ground
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

//create walls
var wallA = Bodies.rectangle(200, 150, 400, 20, { isStatic: true, angle: Math.PI * 0.06 });
var wallB = Bodies.rectangle(500, 350, 650, 20, { isStatic: true,  angle: -Math.PI * 0.06 });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, circle, ground, wallB, wallA]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
}
