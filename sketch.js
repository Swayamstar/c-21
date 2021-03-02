var fixedRect,movingRect,object1,object2,object3,object4,object5,object6;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 30, 30);
  movingRect= createSprite(400, 200, 30, 30);
  object1= createSprite(500,200,30,30);
  object2= createSprite(550,200,30,30);
  object3= createSprite(600,200,30,30);
  object4= createSprite(650,200,30,30);
  object5= createSprite(0,200,50,50);
  object5.velocityX=5;
  object6= createSprite(800,200,50,50);
  object6.velocityX=-5;
  object1.shapeColor="pink";
   object2.shapeColor="green";
   object3.shapeColor="blue";
   object4.shapeColor="cyan";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if ( istouching(movingRect,object1))
  {
    movingRect.shapeColor="red";
  object1.shapeColor="red";  
}
else{
  movingRect.shapeColor="green";
object1.shapeColor="green";

}
bounceoff(object5,object6)
  drawSprites();
}
