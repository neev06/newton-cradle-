
var support;
var bob1,bob2,bob3,bob4,bob5,chain,chain2,chain3,chain4,chain5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

support = new Support (400,300,250,30);
bob1= new Bob (400,500,40);
bob2= new Bob (350,500,40);
bob3= new Bob (450,500,40);
bob4= new Bob (300,500,40);
bob5= new Bob (500,500,40);
chain= new rope(bob1.body,{x:400,y:300})
chain2= new rope(bob2.body,{x:360,y:300})
chain3= new rope(bob3.body,{x:440,y:300})
chain4= new rope(bob4.body,{x:320,y:300})
chain5= new rope(bob5.body,{x:480,y:300})


	Engine.run(engine);
  
}


function draw() {
  
  background("brown");
bob4.x=mouseX;
bob4.y=mouseY;
  support.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  drawSprites();
 
}



