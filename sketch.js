
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	paper = new Paper(200,400,35)


	ground = new Ground(400,600,1000,10);
	ground.shapeColor=color(0,0,100);

    bin1 = new Bin(500,350,10,100);


	bin2 = new Bin(600,350,200,10);
	bin3 = new Bin(700,350,10,100);



	Engine.run(engine);
  
}

function draw() {


  rectMode(CENTER);
  keyPressed();
  keyPressed();
  background("indigo");
  Engine.update(engine);

  paper.display();
bin1.display();
bin2.display();
bin3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.0030,y:-0.0085})
		if(keyWentUp(UP_ARROW)){
			paper.body.velocityX=0;
			paper.body.velocityY=0;
		}
	}
}


