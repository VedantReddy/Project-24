const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 625);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,200);
	plane = new Plane(400,615,800,20);
	stone = new Stone(300,530);
	rubber = new Rubber();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();

}



