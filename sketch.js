var options={
	isStatic:false,
	restitution:0.3,
	frictions:0.5,
	density:1.2
	}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxbottom,boxleft,boxright;
var paperObject

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxbottom=createSprite(650,700,200,20);

	boxleft=createSprite(560,700,20,150);
	
	boxright=createSprite(760,700,20,150);

	paperObject=createSprite(200,680,50,50);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

	}	
	
}
