const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  slingshot = new SlingShot(polygon.body,{x:200, y:50});
  ground = new Ground(800,height,800,20);

  block1= new Block(330,235,30,40); 
  block2= new Block(360,235,30,40); 
  block3= new Block(390,235,30,40); 
  block4= new Block(420,235,30,40); 
  block5= new Block(450,235,30,40); 
   block6= new Block(360,195,30,40); 
   block7= new Block(390,195,30,40); 
   block8= new Block(4200,195,30,40); 
   block9= new Block(390,155,30,40); 
 
}


function draw() {
  background(255,255,255);  
  drawSprites();
polygon.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

if(keyCode==32){
slingshot.attach(polygon.body)