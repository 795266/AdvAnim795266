var Example = Example || {};

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

var engine;
var world;
var rockOptions;

Example.init = function() {

    // create engine
    engine = Engine.create();
    world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies

    this.rockOptions = { density: 0.004 },
        rock = Bodies.circle(170, 450, 20, rockOptions),
        anchor = { x: 170, y: 450 },
        elastic = Constraint.create({
            pointA: anchor,
            bodyB: rock,
            stiffness: 0.05
        });



    buildGrounds();
    buildBlocks();


    World.add(engine.world, [rock, elastic]);

    Events.on(engine, 'afterUpdate', function() {
        if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
            rock = Bodies.circle(170, 450, 20, rockOptions);
            World.add(engine.world, rock);
            elastic.bodyB = rock;
        }
    });

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

//build the grounds
var buildGrounds = function() {
  var ground = Bodies.rectangle(395, 600, 815, 50, { isStatic: true });
  var ground2 = Bodies.rectangle(610, 250, 200, 20, { isStatic: true });
  World.add(engine.world, [ground, ground2]);
}

//build the blocks
var buildBlocks = function() {
  var pyramid1 = Composites.pyramid(500, 300, 9, 10, 0, 0, function(x, y) {
      return Bodies.rectangle(x, y, 25, 40, {fillStyle: "red"});
  });
  var pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function(x, y) {
      return Bodies.rectangle(x, y, 25, 40, {fillStyle: "red"});
  });
  World.add(engine.world, [pyramid1, pyramid2]);
}

//build the slingshot/rock composite
var buildSlingshot = function() {

}