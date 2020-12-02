var paper,ground,b1,b2,b3,dimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,200,40);
	ground = new Ground(width/2,680,width,20);
	b1=new Dustbin(840,660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();
  
  paper.display();
  ground.display();
  b1.display();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
	}	
}
