
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var engine,world
var boy,boyimg,stone
var tree,tree1
function preload()
{
	boyimg=loadImage("boy.png")
	treeimg=loadImage("tree,png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,610,20,20)
	boy.addImage(boyimg)
	boy.scale=0.1
	tree=createSprite(700,610,20,20)
	tree.addImage(treeimg)
	stone = new Stone(147,552,35)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  fill("black")
  textSize(13)
 text(mouseX+", "+mouseY,mouseX,mouseY)
 stone.display()

}



