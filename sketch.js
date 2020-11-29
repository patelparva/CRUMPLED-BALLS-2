var paper,ground,b1,b2,b3,dimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,200,40);
	ground = new Ground(width/2,680,width,20);
	b1=new Dustbin(900,610,10,120);
	b2=new Dustbin(950,660,120,10);
	b3=new Dustbin(1000,610,10,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();
  
  paper.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();

  image(dimage,890,550,120,120);

  keyPressed();
}

function keyPressed() {
	if (keyDown("up")) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:52,y:-52});
	}	
}
