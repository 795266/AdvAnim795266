window.addEventListener('load', function() {

	//Fetch our canvas
	var canvas = document.getElementById('world');

	//Setup Matter JS
	var engine = Matter.Engine.create();
	var world = engine.world;
	var render = Matter.Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: 500,
			height: 500,
			background: 'transparent',
			wireframes: false,
			showAngleIndicator: false
		}
	});
