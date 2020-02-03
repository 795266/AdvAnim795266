window.addEventListener('load', init);
window.addEventListener('keydown', move);


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

	//Add bodies
	World.add(world, [obj1, obj2, obj3, obj4]);

	//Run and Render
	Engine.run(engine);
	Render.run(render);
}

function move() {
	console.log("YYY");S
	if (move.code == 'KeyW') {
			context.translate(0, 100);
	}
	if (move.code == 'KeyA') {
			context.translate(100, 0);
	}
	if (move.code == 'KeyS') {
			context.translate(0, -100);
	}
	if (move.code == 'KeyD') {
			context.translate(-100, 0);
	}
}
