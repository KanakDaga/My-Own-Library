var movingRect, fixedRect;
var box;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(300,200,50,50);
  fixedRect = createSprite(400,200,50,50);
  box = createSprite(500,300,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  if(isTouching(movingRect, box)===true){
    movingRect.shapeColor = "red";
    box.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    box.shapeColor = "green";
  }
  drawSprites();
}
