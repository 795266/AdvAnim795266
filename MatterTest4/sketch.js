window.addEventListener('load', init);

//set up aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

//start program
function init() {

	//Fetch our canvas
	var canvas = document.getElementById('cnv');

	//Setup Matter JS
	var engine = Matter.Engine.create();
	var world = engine.world;
	var render = Matter.Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: 1000,
			height: 1000,
			background: 'black',
			wireframes: false,
			showAngleIndicator: false
		}
	});

	//Create Bodies
	var ball = Bodies.circle(380, 100, 10, 10);
	var ground = Bodies.rectangle(400, 380, 810, 60 { isStatic: true });

	//Add bodies
	World.add(world, [ball, ground]);

	//Run and Render
	Engine.run(engine);
	Render.run(render);
}
