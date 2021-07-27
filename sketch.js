const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var world;



function setup() {
  createCanvas(windowWidth, windowHeight);

  ground = new Base(width/2, height-10, 200, 10);

  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);

  ground.reveal();

  Engine.update(engine);

}
