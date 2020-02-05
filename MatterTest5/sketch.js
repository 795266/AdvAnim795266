window.addEventListener('load', init);
window.addEventListener('keydown', move);


//set up aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

//set up instance variables
var player;
var locationX;
var locationY;
var radius;

//start program
function init() {

	//Fetch our canvas
	var canvas = document.getElementById('cnv');
	context = canvas.getContext("2d");

	//Setup Matter JS
	var engine = Engine.create();
	var world = engine.world;
	var render = Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: 800,
			height: 600,
			background: 'black',
			wireframes: false,
			showAngleIndicator: false
		}
	});

	//Create Bodies
	var obj1 = Bodies.rectangle(380, 100, 150, 50, { isStatic: true });
	var obj2 = Bodies.rectangle(-380, 100, 150, 50, { isStatic: true });
	var obj3 = Bodies.rectangle(-380, -100, 150, 50, { isStatic: true });
	var obj4 = Bodies.rectangle(380, -100, 150, 50, { isStatic: true });
	var obj5 = Bodies.rectangle(0, 500, 1000, 50, { isStatic: true });
	var obj6 = Bodies.rectangle(0, 300, 150, 50, { isStatic: true });
	var obj7 = Bodies.rectangle(0, 400, 150, 50, { isStatic: true });


	//create player
	this.locationX = 100;
	this.locationY = 100;
	this.radius = 30;
	this.player = Bodies.circle(this.locationX, this.locationY, this.radius, { isStatic: false });

	//Add bodies
	World.add(world, [obj1, obj2, obj3, obj4, obj5, obj6, player]);

	//Adjust canvas
	context.translate(400, 0);

	//Run and Render
	Engine.run(engine);
	Render.run(render);
}

//player and screen movement
function move(event) {
	console.log(event.code);
	if (event.key == "ArrowUp") {
			//context.translate(0, 100);
			Body.translate(this.player, {x: 0, y: -120})
	}
	if (event.key == "ArrowLeft") {
			context.translate(30, 0);
			Body.translate(this.player, {x: -30, y: 0})
	}
	if (event.key == "ArrowDown") {
			//context.translate(0, -100);
			Body.translate(this.player, {x: 0, y: 120})
	}
	if (event.key == "ArrowRight") {
			context.translate(-30, 0);
			Body.translate(this.player, {x: 30, y: 0})
	}
}
