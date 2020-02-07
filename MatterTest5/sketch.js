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
var canvas;
var canvasMap;
var context;
var context2;
var engine;

//start program
function init() {

	//Fetch our canvas
	canvas = document.getElementById('cnv');
	context = canvas.getContext("2d");

	canvasMap = document.getElementById('cnvMap');
	context2 = canvasMap.getContext("2d");

	//Setup Matter JS
	engine = Engine.create();
	var world = engine.world;
	world.bounds.min.x = -2000;
	world.bounds.min.y = -1500;
	world.bounds.max.x = 2000;
	world.bounds.max.y = 1500;

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

	})

	//	context.cameraMovement();

	//Create Bodies
	var obj1 = Bodies.rectangle(380, 100, 150, 50, { isStatic: true, width: 150, height: 50 });
	var obj2 = Bodies.rectangle(-380, 100, 150, 50, { isStatic: true , width: 150, height: 50 });
	var obj3 = Bodies.rectangle(-380, -100, 150, 50, { isStatic: true , width: 150, height: 50 });
	var obj4 = Bodies.rectangle(380, -100, 150, 50, { isStatic: true , width: 150, height: 50 });
	var obj5 = Bodies.rectangle(0, 500, 1000, 50, { isStatic: true , width: 1000, height: 50 });
	var obj6 = Bodies.rectangle(0, 300, 150, 50, { isStatic: true , width: 150, height: 50 });
	var obj7 = Bodies.rectangle(0, 400, 150, 50, { isStatic: true , width: 150, height: 50 });


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

	animate();
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

function cameraMovement() {
	this.save();
	this.translate(player.x - canvas.width / 2, player.y - canvas.height / 2);
	cameraMovement();
}

function animate() {
	context2.fillStyle = "black";
	context2.fillRect(0,0,canvasMap.width, canvasMap.height);

	var world = engine.world;
	var worldWidth = world.bounds.max.x - world.bounds.min.x;
	var worldHeight = world.bounds.max.y - world.bounds.min.y;
	var xScaleFactor = canvasMap.width/worldWidth;
	var yScaleFactor = canvasMap.height/worldHeight;

	context2.save();
	context2.scale(xScaleFactor, yScaleFactor);
	context2.translate(worldWidth/2, worldHeight/2);

	//go throguh all the bodies in World
	//for each body check to see what label it is--circle or rectangle
	context2.beginPath();
	context2.fillStyle = "gray";
//	context2.rect()

	for(var i = 0; i < world.bodies.length; i++) {
		var body = world.bodies[i];
		if(body.label == "Circle Body") {
			context2.beginPath();
			context2.fillStyle = "orange";
			context2.arc(body.position.x, body.position.y, body.circleRadius, 0, Math.PI*2);
			context2.fill();
		}
		else if(body.label == "Rectangle Body") {
			context2.beginPath();
			context2.fillStyle = "orange";
			context2.rect(body.position.x - body.width/2, body.position.y - body.height/2, body.width, body.height);
			context2.fill();
		}

	}

	context2.restore();



	requestAnimationFrame(animate);
}
